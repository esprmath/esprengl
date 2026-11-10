'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAiAccess } from '@/lib/useAiAccess'
import { ESPRMATH_URL } from '@/lib/links'
import { NODES, START, TOTAL_STAGES, VOCAB_CHECK, VOCAB_NODE, questionOptions, questionText, vocabEstimate, type Answers, type PlanNode } from '@/content/planQuestions'
import type { Plan } from '@/app/api/engl-ai/route'

const PRIMARY = '#7a1f2b'
const SAVE_KEY = 'engl-plan-v3'

const BUILD_STEPS = ['نقرأ أجوبتك…', 'نحدد مستواك ووش تحتاج…', 'نختار أنسب طريقة لك من البحث…', 'نرتّب المراحل والروتين اليومي…']

/**
 * خطة التحسين بالذكاء (للحسابات المعتمدة في EsprMath):
 * أسئلة شجرة، كل سؤال يعتمد على جواب اللي قبله (src/content/planQuestions.ts)،
 * واللي ما يعرف مستواه يطلع له اختبار كلمات سريع. وفي الآخر الذكاء ياخذ الأجوبة ويبني الخطة بطلب واحد.
 * الخطة تنحفظ في المتصفح، ويقدر ياخذها صورة أو PDF.
 */
export default function PlanBuilder() {
    const access = useAiAccess()
    const [plan, setPlan] = useState<Plan | null>(null)
    const [started, setStarted] = useState(false)
    // الأسئلة اللي مر عليها بالترتيب، وآخر وحدة هي الحالية
    const [path, setPath] = useState<string[]>([START])
    const [answers, setAnswers] = useState<Answers>({})
    const [known, setKnown] = useState<Set<string>>(new Set())
    const [building, setBuilding] = useState(false)
    const [buildStep, setBuildStep] = useState(0)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            const saved = localStorage.getItem(SAVE_KEY)
            if (saved) setPlan(JSON.parse(saved))
        } catch {
            /* ما فيه خطة محفوظة */
        }
    }, [])

    // رسائل تتغير وهو ينتظر الخطة
    useEffect(() => {
        if (!building) return
        setBuildStep(0)
        const t = setInterval(() => setBuildStep((s) => Math.min(s + 1, BUILD_STEPS.length - 1)), 2500)
        return () => clearInterval(t)
    }, [building])

    const build = async (finalAnswers: Answers, finalPath: string[]) => {
        setBuilding(true)
        setError(null)
        try {
            const payload = finalPath
                .filter((id) => id !== VOCAB_NODE && finalAnswers[id]?.length)
                .map((id) => ({ q: questionText(NODES[id], finalAnswers), a: finalAnswers[id].join('، ') }))
            const { data: { session } } = await supabase.auth.getSession()
            const res = await fetch('/api/engl-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.access_token ?? ''}` },
                body: JSON.stringify({ mode: 'plan', answers: payload, vocab: finalPath.includes(VOCAB_NODE) ? vocabEstimate(known) : '' }),
            })
            const data = await res.json().catch(() => ({}))
            if (data.plan) {
                setPlan(data.plan)
                try {
                    localStorage.setItem(SAVE_KEY, JSON.stringify(data.plan))
                } catch {
                    /* ما قدرنا نحفظ */
                }
            } else setError(data.reply || 'ما قدرنا نبني الخطة، حاول مرة ثانية.')
        } catch {
            setError('صار خطأ في الاتصال، حاول مرة ثانية.')
        } finally {
            setBuilding(false)
        }
    }

    const restart = () => {
        try {
            localStorage.removeItem(SAVE_KEY)
        } catch {
            /* لا شي */
        }
        setPlan(null)
        setAnswers({})
        setKnown(new Set())
        setPath([START])
        setStarted(true)
    }

    if (access === 'loading') return <p style={{ color: '#9b8a8d' }}>لحظة…</p>

    // ───── مقفل ─────
    if (access !== 'allowed') {
        return (
            <div style={card}>
                <div style={{ fontSize: '2.4rem' }}>🔒</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: '1.3rem' }}>بناء خطتك متاح للحسابات المعتمدة</h2>
                <p style={muted}>
                    تجاوب كم سؤال سريع عن مستواك وهدفك ووش يضايقك في الإنجليزي، والذكاء يبني لك خطة بمراحل واضحة مبنية على أبحاث تعلم اللغات، وتقدر تحفظها صورة أو PDF.
                    الميزة متاحة للي حسابه معتمد في{' '}
                    <a href={ESPRMATH_URL} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ color: PRIMARY, fontWeight: 'bold' }}>EsprMath</a>.
                </p>
                {access === 'guest' && (
                    <p style={{ ...muted, marginTop: '10px' }}>
                        الحساب نفسه يشتغل في الموقعين. إذا حسابك معتمد هناك <Link href="/login" style={{ color: PRIMARY, fontWeight: 'bold' }}>سجّل دخول</Link> هنا.
                    </p>
                )}
            </div>
        )
    }

    // ───── الخطة جاهزة ─────
    if (plan) return <PlanView plan={plan} onRestart={restart} />

    // ───── البداية ─────
    if (!started) {
        return (
            <div style={card}>
                <div style={{ fontSize: '2.4rem' }}>🎯</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: '1.3rem' }}>نبني لك خطة تحسين في الإنجليزي</h2>
                <p style={muted}>
                    كم سؤال سريع بالضغط عن مستواك وهدفك ووش يضايقك، وكل سؤال يعتمد على جوابك اللي قبله. وبعدها تطلع لك خطة بمراحل وروتين يومي، مبنية على أبحاث تعلم اللغات.
                </p>
                <button onClick={() => setStarted(true)} style={primaryBtn}>يلا نبدأ ←</button>
            </div>
        )
    }

    // ───── نبني الخطة ─────
    if (building) {
        return (
            <div style={card}>
                <div style={{ fontSize: '2.4rem', animation: 'plan-spin 2s linear infinite', display: 'inline-block' }}>⚙️</div>
                <h2 style={{ margin: '8px 0 6px', fontSize: '1.2rem' }}>نبني خطتك</h2>
                <p style={muted}>{BUILD_STEPS[buildStep]}</p>
                <style>{'@keyframes plan-spin { to { transform: rotate(360deg) } }'}</style>
            </div>
        )
    }

    // ───── الأسئلة ─────
    const current = path[path.length - 1]
    const stage = current === VOCAB_NODE ? 1.5 : NODES[current].stage

    /** يحفظ الجواب ويروح للسؤال اللي يحدده الجواب، أو يبني الخطة إذا خلصت */
    const advance = (newAnswers: Answers) => {
        const nextId = current === VOCAB_NODE ? 'goal' : NODES[current].next(newAnswers)
        if (nextId) setPath([...path, nextId])
        else build(newAnswers, path)
    }
    const back = path.length > 1 ? () => setPath(path.slice(0, -1)) : undefined

    return (
        <div style={{ ...card, textAlign: 'right' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#9b8a8d', marginBottom: '6px' }}>
                <span>سؤال {path.length}</span>
                {back && (
                    <button onClick={back} style={{ background: 'none', border: 'none', color: PRIMARY, fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>
                        → السابق
                    </button>
                )}
            </div>
            <div style={{ height: '6px', background: '#F7E6E8', borderRadius: '999px', overflow: 'hidden', marginBottom: '18px' }}>
                <div style={{ width: `${(stage / TOTAL_STAGES) * 100}%`, height: '100%', background: PRIMARY, transition: 'width 0.3s' }} />
            </div>

            {current === VOCAB_NODE ? (
                <>
                    <h2 style={qTitle}>خلنا نقدّر مستواك: أي هذي الكلمات تعرف معناها؟</h2>
                    <p style={{ ...muted, fontSize: '0.85rem', marginBottom: '14px' }}>اضغط على اللي تعرفها بس. بعضها كلمات مو موجودة أصلًا، فلا تخمّن 😉</p>
                    <div dir="ltr" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                        {VOCAB_CHECK.map(({ word }) => {
                            const on = known.has(word)
                            return (
                                <button
                                    key={word}
                                    onClick={() =>
                                        setKnown((k) => {
                                            const n = new Set(k)
                                            if (n.has(word)) n.delete(word)
                                            else n.add(word)
                                            return n
                                        })
                                    }
                                    style={{ padding: '9px 16px', borderRadius: '999px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', border: `2px solid ${on ? PRIMARY : '#ecdcdd'}`, background: on ? PRIMARY : '#ffffff', color: on ? '#ffffff' : '#2A1A1D' }}
                                >
                                    {on ? '✓ ' : ''}
                                    {word}
                                </button>
                            )
                        })}
                    </div>
                    <button onClick={() => advance(answers)} style={{ ...primaryBtn, width: '100%' }}>
                        {known.size === 0 ? 'ما أعرف ولا وحدة ←' : `أعرف ${known.size} ←`}
                    </button>
                </>
            ) : (
                <QuestionScreen
                    key={current}
                    node={NODES[current]}
                    answers={answers}
                    onAnswer={(value, done) => {
                        const updated = { ...answers, [current]: value }
                        setAnswers(updated)
                        if (done) advance(updated)
                    }}
                />
            )}
            {error && <p style={{ color: '#B42318', marginTop: '10px', fontWeight: 'bold' }}>{error}</p>}
        </div>
    )
}

/** سؤال واحد: خيار واحد ينقلك للي بعده مباشرة، أو أكثر من خيار ثم "التالي" */
function QuestionScreen({ node, answers, onAnswer }: { node: PlanNode; answers: Answers; onAnswer: (value: string[], done: boolean) => void }) {
    const value = answers[node.id] ?? []
    const max = node.max ?? 1
    const options = questionOptions(node, answers)
    const isLast = node.next({ ...answers, [node.id]: value }) === null
    const toggle = (o: string) => {
        if (!node.multi) {
            onAnswer([o], false)
            // ننتقل بعد لحظة عشان يشوف اختياره
            setTimeout(() => onAnswer([o], true), 180)
            return
        }
        if (value.includes(o)) onAnswer(value.filter((x) => x !== o), false)
        else if (value.length < max) onAnswer([...value, o], false)
    }
    // المستويات تطلع أزرار صغيرة جنب بعض
    const compact = options.every((o) => o.length <= 3) || node.id === 'level'
    return (
        <>
            <h2 style={qTitle}>{questionText(node, answers)}</h2>
            {node.hint && <p style={{ ...muted, fontSize: '0.85rem', marginBottom: '14px' }}>{node.hint}</p>}
            <div style={compact ? { display: 'flex', flexWrap: 'wrap', gap: '8px', direction: 'ltr' } : { display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {options.map((o) => {
                    const on = value.includes(o)
                    const full = node.multi && !on && value.length >= max
                    const short = compact && o.length <= 3
                    return (
                        <button
                            key={o}
                            onClick={() => toggle(o)}
                            disabled={full}
                            style={{
                                textAlign: short ? 'center' : 'right',
                                flex: short ? '1 1 60px' : compact ? '1 1 100%' : undefined,
                                direction: 'rtl',
                                padding: short ? '14px 0' : '12px 14px',
                                borderRadius: '12px',
                                fontSize: short ? '1.15rem' : '0.98rem',
                                fontWeight: 'bold',
                                cursor: full ? 'default' : 'pointer',
                                border: `2px solid ${on ? PRIMARY : '#ecdcdd'}`,
                                background: on ? (short ? PRIMARY : '#FBEFF1') : '#ffffff',
                                color: on && short ? '#ffffff' : short ? PRIMARY : '#2A1A1D',
                                opacity: full ? 0.45 : 1,
                            }}
                        >
                            {node.multi && <span style={{ color: on ? PRIMARY : '#c9a9ae', marginLeft: '8px' }}>{on ? '☑' : '☐'}</span>}
                            {o}
                        </button>
                    )
                })}
            </div>
            {node.multi && (
                <button onClick={() => onAnswer(value, true)} disabled={value.length === 0} style={{ ...primaryBtn, width: '100%', opacity: value.length === 0 ? 0.5 : 1 }}>
                    {isLast ? 'ابنِ خطتي 🎯' : 'التالي ←'}
                </button>
            )}
        </>
    )
}

/** عرض الخطة، مع حفظها صورة أو PDF */
function PlanView({ plan, onRestart }: { plan: Plan; onRestart: () => void }) {
    const ref = useRef<HTMLDivElement>(null)
    const [saving, setSaving] = useState(false)

    const saveImage = async () => {
        if (!ref.current) return
        setSaving(true)
        try {
            // المكتبة تنحمّل بس لما يضغط، عشان الصفحة تبقى خفيفة
            const { toPng } = await import('html-to-image')
            const url = await toPng(ref.current, { pixelRatio: 2, backgroundColor: '#FBF6F6' })
            const a = document.createElement('a')
            a.href = url
            a.download = 'خطتي-EsprEngl.png'
            a.click()
        } catch {
            alert('ما قدرنا نحفظ الصورة، جرب PDF.')
        } finally {
            setSaving(false)
        }
    }

    const btn: React.CSSProperties = { border: `1.5px solid ${PRIMARY}`, background: '#ffffff', color: PRIMARY, borderRadius: '999px', padding: '8px 16px', fontWeight: 'bold', fontSize: '0.88rem', cursor: 'pointer' }

    return (
        <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }} className="no-print">
                <button onClick={saveImage} disabled={saving} style={{ ...btn, background: PRIMARY, color: '#ffffff' }}>
                    {saving ? 'يحفظ…' : '🖼️ احفظها صورة'}
                </button>
                <button onClick={() => window.print()} style={btn}>📄 احفظها PDF</button>
                <button onClick={() => confirm('تبي تسوي خطة جديدة؟ الخطة الحالية بتنمسح.') && onRestart()} style={{ ...btn, borderColor: '#ecdcdd', color: '#6B5357' }}>
                    ↻ خطة جديدة
                </button>
            </div>

            <div ref={ref} className="plan-print" style={{ background: '#FBF6F6', padding: '18px', borderRadius: '18px', direction: 'rtl', color: '#2A1A1D' }}>
                <div style={{ background: 'linear-gradient(120deg, #2A1A1D 0%, #5A1520 55%, #7a1f2b 100%)', color: '#ffffff', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#E4A3AB', fontWeight: 'bold' }}>خطتك في الإنجليزي · EsprEngl</div>
                    <h2 style={{ margin: '4px 0 8px', fontSize: '1.45rem' }}>{plan.title}</h2>
                    <p style={{ margin: 0, lineHeight: 1.8, color: '#F3DADD', fontSize: '0.95rem' }}>{plan.summary}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                        {[plan.level && `📊 ${plan.level}`, plan.focus && `🎯 ${plan.focus}`, plan.minutesPerDay ? `⏱ ${plan.minutesPerDay} دقيقة يوميًا` : ''].filter(Boolean).map((t) => (
                            <span key={t} style={{ background: 'rgba(255,255,255,0.14)', borderRadius: '999px', padding: '4px 12px', fontSize: '0.82rem', fontWeight: 'bold' }}>{t}</span>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                    {plan.phases.map((ph, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: PRIMARY, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>{i + 1}</span>
                                {i < plan.phases.length - 1 && <span style={{ flex: 1, width: '2px', borderRight: '2px dashed #E4A3AB', marginTop: '4px' }} />}
                            </div>
                            <div style={{ flex: 1, background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '14px', padding: '12px 14px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                                    <strong style={{ fontSize: '1.05rem' }}>{ph.title}</strong>
                                    {ph.duration && <span style={{ fontSize: '0.8rem', background: '#F7E6E8', color: PRIMARY, borderRadius: '999px', padding: '2px 10px', fontWeight: 'bold' }}>{ph.duration}</span>}
                                </div>
                                {ph.goal && <p style={{ margin: '6px 0', fontSize: '0.92rem', color: '#5A1520', fontWeight: 'bold' }}>🎯 {ph.goal}</p>}
                                <ul style={{ margin: '6px 0 0', paddingInlineStart: '18px', lineHeight: 1.8, fontSize: '0.92rem' }}>
                                    {ph.steps.map((st, j) => <li key={j}>{st}</li>)}
                                </ul>
                                {ph.why && <p style={{ margin: '8px 0 0', fontSize: '0.82rem', color: '#6B5357', background: '#FBF6F6', borderRadius: '8px', padding: '6px 10px' }}>🔬 ليش: {ph.why}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                {plan.daily.length > 0 && (
                    <div style={{ marginTop: '16px', background: '#ffffff', border: '1px dashed #E4A3AB', borderRadius: '14px', padding: '12px 14px' }}>
                        <strong style={{ color: PRIMARY }}>☀️ روتينك اليومي</strong>
                        <ol style={{ margin: '6px 0 0', paddingInlineStart: '18px', lineHeight: 1.8, fontSize: '0.92rem' }}>
                            {plan.daily.map((d, i) => <li key={i}>{d}</li>)}
                        </ol>
                    </div>
                )}
                {plan.ifThen && (
                    <div style={{ marginTop: '12px', background: PRIMARY, color: '#ffffff', borderRadius: '14px', padding: '12px 14px', fontWeight: 'bold', lineHeight: 1.8 }}>
                        🔁 {plan.ifThen}
                    </div>
                )}
                {plan.tip && <p style={{ margin: '14px 0 0', fontSize: '0.92rem', lineHeight: 1.8 }}>💡 {plan.tip}</p>}
            </div>
        </div>
    )
}

const card: React.CSSProperties = { background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '18px', padding: '24px 20px', textAlign: 'center', boxShadow: '0 8px 24px rgba(122,31,43,0.08)' }
const muted: React.CSSProperties = { color: '#6B5357', lineHeight: 1.8, margin: 0, fontSize: '0.95rem' }
const qTitle: React.CSSProperties = { fontSize: '1.25rem', margin: '0 0 6px' }
const primaryBtn: React.CSSProperties = { marginTop: '16px', background: PRIMARY, color: '#ffffff', border: 'none', borderRadius: '12px', padding: '13px 28px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }
