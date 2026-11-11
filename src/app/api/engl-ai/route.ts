import { NextResponse, after } from 'next/server'
import OpenAI from 'openai'
import { getRequestUser } from '@/lib/serverAuth'
import { hasAiAccess } from '@/lib/aiAccess'
import { AI_COMING_SOON, AI_ENABLED } from '@/lib/features'
import { CHECK_PROMPT, PLAN_PROMPT, SYSTEM_PROMPT, lessonContext, lessonsList } from '@/lib/englAiPrompt'
import { TOPICS, lessonPath } from '@/content/lessons'
import { cleanMessages, clip } from '@/lib/tutorPrompt'

// مساعد EsprEngl. بناء الخطة (mode: 'plan') لأي حساب مسجل.
// المحادثة والتصحيح: موقفة إذا AI_ENABLED = false، ولما تشتغل تكون للحسابات المعتمدة بس (hasAiAccess).

export const dynamic = 'force-dynamic'

const MODEL = 'gpt-4o-mini'
// اسم مختلف في ai_logs عشان تكلفة EsprEngl وحدها تنفصل عن الموقع الثاني، وحد الرسائل ما يتشارك بينهم
const LOG_NAME = 'engl:gpt-4o-mini'
const INPUT_COST = 0.00000015
const OUTPUT_COST = 0.0000006
const MAX_REPLY_TOKENS = 700
const MAX_MESSAGES_PER_HOUR = 30
const MAX_CHECK_CHARS = 1500

// الدروس اللي يقدر الذكاء يربط فيها الأخطاء، ورابط كل درس
const LESSON_LINKS = TOPICS.flatMap((t) => t.lessons.map((l) => ({ slug: t.slug, title: t.title, href: lessonPath(t, l) })))

export interface CheckIssue { wrong: string; fix: string; why: string; lesson?: { title: string; href: string } }
export interface CheckResult { ok: boolean; corrected: string; issues: CheckIssue[]; tip: string }

export interface PlanPhase { title: string; duration: string; goal: string; steps: string[]; why: string }
export interface Plan { title: string; summary: string; level: string; focus: string; minutesPerDay: number; phases: PlanPhase[]; daily: string[]; ifThen: string; tip: string }

/** نتأكد إن الخطة بالشكل المطلوب قبل ما نرجعها */
function parsePlan(raw: string | null | undefined): Plan | null {
    let p: Record<string, unknown> = {}
    try {
        p = JSON.parse(raw || '{}')
    } catch {
        return null
    }
    // أحيانًا الذكاء يحطها داخل plan
    if (p.plan && typeof p.plan === 'object') p = p.plan as Record<string, unknown>
    if (!Array.isArray(p.phases) || p.phases.length === 0) return null
    const str = (v: unknown, max = 400) => (typeof v === 'string' ? v.slice(0, max) : '')
    const list = (v: unknown, max: number) => (Array.isArray(v) ? v.map((x) => str(x, 300)).filter(Boolean).slice(0, max) : [])
    return {
        title: str(p.title, 120),
        summary: str(p.summary, 500),
        level: str(p.level, 60),
        focus: str(p.focus, 120),
        minutesPerDay: Number(p.minutesPerDay) || 0,
        phases: (p.phases as Record<string, unknown>[]).slice(0, 6).map((ph) => ({
            title: str(ph?.title, 120),
            duration: str(ph?.duration, 60),
            goal: str(ph?.goal, 300),
            steps: list(ph?.steps, 8),
            why: str(ph?.why, 300),
        })),
        daily: list(p.daily, 8),
        ifThen: str(p.ifThen, 300),
        tip: str(p.tip, 400),
    }
}

/** نتأكد إن رد الذكاء بالشكل المطلوب، وما نثق بالروابط إلا إذا الدرس موجود فعلًا */
function parseCheck(raw: string | null | undefined): CheckResult {
    let data: Record<string, unknown> = {}
    try {
        data = JSON.parse(raw || '{}')
    } catch {
        /* رد مو JSON، نرجع نتيجة فاضية */
    }
    const str = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '')
    const issues = (Array.isArray(data.issues) ? data.issues : []).slice(0, 6).map((i: Record<string, unknown>) => {
        const link = LESSON_LINKS.find((l) => l.slug === i?.lesson)
        return { wrong: str(i?.wrong, 300), fix: str(i?.fix, 300), why: str(i?.why, 300), lesson: link ? { title: link.title, href: link.href } : undefined }
    }).filter((i) => i.why || i.fix)
    return { ok: data.ok === true && issues.length === 0, corrected: str(data.corrected, 2000), issues, tip: str(data.tip, 400) }
}

const reply = (text: string, status: number) => NextResponse.json({ reply: text }, { status })

export async function POST(req: Request) {
    try {
        const apiKey = process.env.OPENAI_API_KEY
        if (!apiKey) return reply('المساعد غير متاح حاليًا.', 500)

        const auth = await getRequestUser(req)
        if (!auth) return reply('سجّل دخولك أولًا.', 401)
        const { supabase, user } = auth

        const body = await req.json().catch(() => ({}))
        const isPlan = body?.mode === 'plan'
        // كل شي غير الخطة موقف حاليًا، والطلب ما يوصل للذكاء أبدًا
        if (!isPlan && !AI_ENABLED) return reply(AI_COMING_SOON, 503)

        // نسوي الفحوصات مع بعض (بالتوازي) عشان الرد يكون أسرع
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
        const [allowed, { count }] = await Promise.all([
            // الخطة لأي حساب مسجل بدون اعتماد، والباقي للمعتمدين
            isPlan ? true : hasAiAccess(supabase, user.id),
            supabase
                .from('ai_logs')
                .select('id', { count: 'exact', head: true })
                .eq('user_id', user.id)
                .eq('model_name', LOG_NAME)
                .gte('created_at', oneHourAgo),
        ])
        if (!allowed) return reply('المساعد متاح للحسابات المعتمدة بس.', 403)
        if ((count ?? 0) >= MAX_MESSAGES_PER_HOUR) return reply('وصلت للحد المسموح هذي الساعة، جرّب بعد شوي.', 429)

        const openai = new OpenAI({ apiKey })

        // تسجيل التكلفة باسم الطالب. ما ننتظره (الرد يطلع للطالب على طول)، وفشله ما يوقف شي
        const logCost = async (usage?: { prompt_tokens?: number; completion_tokens?: number }) => {
            const cost = (usage?.prompt_tokens ?? 0) * INPUT_COST + (usage?.completion_tokens ?? 0) * OUTPUT_COST
            const { error: logError } = await supabase.from('ai_logs').insert([{
                user_id: user.id,
                student_name: user.user_metadata?.full_name || user.user_metadata?.name || 'طالب',
                model_name: LOG_NAME,
                cost,
            }])
            if (logError) console.error('[engl-ai] فشل تسجيل التكلفة:', logError.message)
        }

        // ───── تصحيح الكتابة ─────
        if (body?.mode === 'check') {
            const text = clip(body?.text, MAX_CHECK_CHARS).trim()
            if (text.length < 3) return reply('اكتب جملتك أولًا.', 400)
            const brief = body?.brief === true
            const input = JSON.stringify({ task: clip(body?.task, 300), reference: clip(body?.reference, 400), text, ...(brief ? { brief: 'رد مختصر: خطأين بالكثير، وtip فاضي' } : {}) })

            const completion = await openai.chat.completions.create({
                model: MODEL,
                temperature: 0.1,
                max_tokens: brief ? 260 : 450,
                response_format: { type: 'json_object' },
                messages: [
                    { role: 'system', content: CHECK_PROMPT + lessonsList(LESSON_LINKS.map(({ slug, title }) => ({ slug, title }))) },
                    { role: 'user', content: input },
                ],
            })
            after(() => logCost(completion.usage))
            return NextResponse.json({ check: parseCheck(completion.choices[0]?.message?.content) })
        }

        // ───── خطة التحسين: الطالب جاوب أسئلة ثابتة، والذكاء يبني الخطة ─────
        if (body?.mode === 'plan') {
            const answers = (Array.isArray(body?.answers) ? body.answers : [])
                .slice(0, 20)
                .map((x: { q?: unknown; a?: unknown }) => `- ${clip(x?.q, 120)}\n  ${clip(x?.a, 400)}`)
                .join('\n')
            if (!answers) return reply('جاوب الأسئلة أولًا.', 400)
            const vocab = clip(body?.vocab, 600)
            const completion = await openai.chat.completions.create({
                model: MODEL,
                temperature: 0.4,
                max_tokens: 1300,
                response_format: { type: 'json_object' },
                messages: [
                    { role: 'system', content: PLAN_PROMPT },
                    { role: 'user', content: `أجوبة الطالب:\n${answers}\n\n${vocab}` },
                ],
            })
            after(() => logCost(completion.usage))
            const plan = parsePlan(completion.choices[0]?.message?.content)
            return plan ? NextResponse.json({ plan }) : reply('ما قدرنا نبني الخطة، حاول مرة ثانية.', 500)
        }

        // ───── المحادثة ─────
        const messages = cleanMessages(body?.messages)
        if (messages[messages.length - 1]?.role !== 'user') return reply('اكتب سؤالك أولًا.', 400)

        const system = SYSTEM_PROMPT + lessonContext({
            course: clip(body?.course, 30),
            topic: clip(body?.topic, 100),
            lesson: clip(body?.lesson, 150),
        })

        const completion = await openai.chat.completions.create({
            model: MODEL,
            temperature: 0.3,
            max_tokens: MAX_REPLY_TOKENS,
            messages: [{ role: 'system', content: system }, ...messages],
        })
        after(() => logCost(completion.usage))
        const answer = completion.choices[0]?.message?.content || 'ما وصلني رد، حاول مرة ثانية.'
        return NextResponse.json({ reply: answer })
    } catch (error) {
        console.error('[engl-ai] خطأ:', error instanceof Error ? error.message : error)
        return reply('صار خطأ في الاتصال، حاول مرة ثانية.', 500)
    }
}
