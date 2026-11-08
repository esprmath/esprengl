'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { SECTIONS, SESSIONS, SESSION_MINUTES, type Choice, type Session } from '@/content/sessions'
import { fetchCompletedPlans, setPlanCompleted } from '@/lib/planProgress'

const PRIMARY = '#7a1f2b'
const card: React.CSSProperties = { background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '14px', padding: '16px' }
const muted = '#6B5357'

/** يقرأ النص بصوت إنجليزي من المتصفح نفسه */
function speak(text: string, rate = 0.9) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'en-US'
    u.rate = rate
    window.speechSynthesis.speak(u)
}

function SpeakButton({ text, label = '🔊', rate }: { text: string; label?: string; rate?: number }) {
    return (
        <button type="button" onClick={() => speak(text, rate)} aria-label={`اسمع: ${text}`}
            style={{ border: `1px solid #ecdcdd`, background: '#F7E6E8', color: PRIMARY, borderRadius: '8px', padding: '4px 10px', cursor: 'pointer', fontWeight: 'bold', flexShrink: 0 }}>
            {label}
        </button>
    )
}

/** سؤال اختيارات: يتلوّن بعد الاختيار ويبلّغ إذا انحل صح */
function ChoiceQuestion({ choice, onAnswered }: { choice: Choice; onAnswered?: (correct: boolean) => void }) {
    const [picked, setPicked] = useState<number | null>(null)
    return (
        <div style={{ ...card, padding: '14px' }}>
            <p dir="auto" style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{choice.q}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {choice.options.map((opt, i) => {
                    const show = picked !== null
                    const isRight = i === choice.answer
                    const bg = !show ? '#ffffff' : isRight ? '#dde3d0' : i === picked ? '#fee2e2' : '#ffffff'
                    return (
                        <button key={opt} type="button" dir="ltr" disabled={show}
                            onClick={() => { setPicked(i); onAnswered?.(i === choice.answer) }}
                            style={{ textAlign: 'left', padding: '9px 12px', borderRadius: '9px', border: '1px solid #ecdcdd', background: bg, cursor: show ? 'default' : 'pointer', fontSize: '0.98rem', color: '#2A1A1D' }}>
                            {opt}
                        </button>
                    )
                })}
            </div>
            {picked !== null && (
                <p style={{ margin: '10px 0 0', fontWeight: 'bold', color: picked === choice.answer ? '#3d5a3a' : '#b91c1c' }}>
                    {picked === choice.answer ? '✓ صح' : '✗ الجواب الصحيح بالأخضر'}
                </p>
            )}
        </div>
    )
}

function WordsSection({ s }: { s: Session }) {
    const [shown, setShown] = useState<Set<number>>(new Set())
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ margin: 0, color: muted }}>اسمع كل كلمة وقلها بصوتك، وحاول تتذكر معناها قبل ما تكشفه.</p>
            {s.words.map((w, i) => (
                <div key={w.en} style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                        <strong dir="ltr" style={{ fontSize: '1.2rem' }}>{w.en}</strong>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <SpeakButton text={w.en} rate={0.8} />
                            <button type="button" onClick={() => setShown((p) => new Set(p).add(i))}
                                style={{ border: '1px solid #ecdcdd', background: '#ffffff', borderRadius: '8px', padding: '4px 10px', cursor: 'pointer', color: PRIMARY }}>
                                {shown.has(i) ? w.ar : 'المعنى؟'}
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                        <SpeakButton text={w.example} />
                        <span dir="ltr" style={{ color: '#5A4A4D' }}>{w.example}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

function GrammarSection({ s }: { s: Session }) {
    const g = s.grammar
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ margin: 0 }}>{g.title}</h3>
            <p style={{ margin: 0, lineHeight: 1.9 }}>{g.explain}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {g.examples.map((e) => (
                    <div key={e} dir="ltr" style={{ background: '#F7E6E8', borderLeft: `4px solid ${PRIMARY}`, padding: '8px 12px', color: '#5A1520' }}>{e}</div>
                ))}
            </div>
            <ChoiceQuestion choice={g.check} />
        </div>
    )
}

function ReadingSection({ s }: { s: Session }) {
    const words = new Set(s.words.map((w) => w.en.toLowerCase()))
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0, color: muted }}>اقرأ مرة وحدة بدون ترجمة. الكلمات الجديدة معلّمة.</p>
            <div dir="ltr" style={{ ...card, lineHeight: 2, fontSize: '1.05rem' }}>
                {s.reading.text.split(/(\s+)/).map((tok, i) => {
                    const bare = tok.toLowerCase().replace(/[^a-z']/g, '')
                    const hit = [...words].some((w) => bare === w || bare.startsWith(w))
                    return hit ? <mark key={i} style={{ background: '#F2D4D8', color: '#5A1520', borderRadius: '4px', padding: '0 2px' }}>{tok}</mark> : tok
                })}
            </div>
            {s.reading.questions.map((q) => <ChoiceQuestion key={q.q} choice={q} />)}
        </div>
    )
}

function ListeningSection({ s }: { s: Session }) {
    const [answered, setAnswered] = useState(false)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0, color: muted }}>اسمع المقطع بدون ما تشوف النص. تقدر تعيده، وجرّب البطيء إذا احتجت.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
                <SpeakButton text={s.listening.text} label="▶️ تشغيل" rate={0.95} />
                <SpeakButton text={s.listening.text} label="🐢 بطيء" rate={0.7} />
            </div>
            <ChoiceQuestion choice={s.listening.question} onAnswered={() => setAnswered(true)} />
            {answered && <div dir="ltr" style={{ ...card, color: '#5A4A4D', lineHeight: 1.9 }}>{s.listening.text}</div>}
        </div>
    )
}

function SpeakingSection({ s }: { s: Session }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0, color: muted }}>اسمع كل جملة، وعيدها بصوت عالي بنفس السرعة والنغمة. كررها ثلاث مرات.</p>
            {s.speaking.sentences.map((t) => (
                <div key={t} style={{ ...card, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SpeakButton text={t} />
                    <span dir="ltr" style={{ fontSize: '1.05rem' }}>{t}</span>
                </div>
            ))}
            <div style={{ ...card, background: '#F7E6E8', borderColor: '#F2D4D8' }}>
                <strong>🎙 تكلم بنفسك</strong>
                <p style={{ margin: '6px 0 0', lineHeight: 1.8 }}>{s.speaking.prompt}</p>
            </div>
        </div>
    )
}

function WritingSection({ s, text, setText }: { s: Session; text: string; setText: (v: string) => void }) {
    const count = text.trim() ? text.trim().split(/\s+/).length : 0
    const used = s.words.filter((w) => text.toLowerCase().includes(w.en.toLowerCase()))
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>{s.writing.prompt}</p>
            <textarea dir="ltr" value={text} onChange={(e) => setText(e.target.value)} rows={7}
                style={{ width: '100%', border: '1px solid #ecdcdd', borderRadius: '12px', padding: '12px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '0.9rem' }}>
                <span style={{ color: count >= s.writing.minWords ? '#3d5a3a' : muted }}>{count} / {s.writing.minWords} كلمة</span>
                <span style={{ color: muted }}>
                    كلمات اليوم: {s.words.map((w) => (
                        <span key={w.en} dir="ltr" style={{ marginInlineStart: '6px', color: used.includes(w) ? '#3d5a3a' : '#b8a6a8', fontWeight: used.includes(w) ? 'bold' : 'normal' }}>
                            {used.includes(w) ? '✓' : ''}{w.en}
                        </span>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default function SessionRunner({ session }: { session: Session }) {
    const [step, setStep] = useState(0)
    const [writing, setWriting] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [done, setDone] = useState(false)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')

    // الجلسة توصل من السيرفر كنسخة، فنقارن بالـ slug مو بالمرجع
    const number = SESSIONS.findIndex((s) => s.slug === session.slug) + 1
    const section = SECTIONS[step]
    const isLast = step === SECTIONS.length - 1

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session: s } }) => setIsLoggedIn(!!s))
        fetchCompletedPlans().then((set) => setDone(set.has(session.slug)))
        return () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel() }
    }, [session.slug])

    const body = useMemo(() => {
        switch (section.key) {
            case 'words': return <WordsSection s={session} />
            case 'grammar': return <GrammarSection s={session} />
            case 'reading': return <ReadingSection s={session} />
            case 'listening': return <ListeningSection s={session} />
            case 'speaking': return <SpeakingSection s={session} />
            case 'writing': return <WritingSection s={session} text={writing} setText={setWriting} />
        }
    }, [section.key, session, writing])

    const finish = async () => {
        setSaving(true)
        setError('')
        const err = await setPlanCompleted(session.slug, true)
        setSaving(false)
        if (err) setError(err)
        else setDone(true)
    }

    const go = (i: number) => {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel()
        setStep(i)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <main style={{ maxWidth: '720px', margin: '0 auto', padding: '24px 20px 60px' }}>
            <Link href="/?tab=plans" style={{ color: PRIMARY, fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>
                → الرجوع للجلسات
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0 14px' }}>
                <span style={{ fontSize: '38px' }}>{session.icon}</span>
                <div>
                    <h1 style={{ fontSize: '1.5rem', margin: 0 }}>الجلسة {number}: {session.theme}</h1>
                    <span style={{ fontSize: '0.88rem', color: muted }}>
                        ⏱ {SESSION_MINUTES} دقيقة تقريبًا{done ? ' · ✓ خلصتها من قبل' : ''}
                    </span>
                </div>
            </div>

            {/* أقسام القالب الثابت، وتقدر تتنقل بينها */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${SECTIONS.length}, 1fr)`, gap: '4px', marginBottom: '18px' }}>
                {SECTIONS.map((sec, i) => (
                    <button key={sec.key} type="button" onClick={() => go(i)} title={sec.label}
                        style={{ border: 'none', cursor: 'pointer', borderRadius: '8px', padding: '6px 0', fontSize: '1.1rem', background: i === step ? PRIMARY : i < step ? '#F2D4D8' : '#F7E6E8' }}>
                        {sec.icon}
                    </button>
                ))}
            </div>

            <h2 style={{ fontSize: '1.2rem', margin: '0 0 12px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{section.icon} {section.label}</span>
                <span style={{ fontSize: '0.85rem', color: muted, fontWeight: 'normal' }}>{step + 1} / {SECTIONS.length} · {section.minutes} د</span>
            </h2>

            {body}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '22px' }}>
                <button type="button" onClick={() => go(step - 1)} disabled={step === 0}
                    style={{ border: `1px solid #ecdcdd`, background: '#ffffff', color: PRIMARY, borderRadius: '10px', padding: '10px 18px', fontWeight: 'bold', cursor: step === 0 ? 'default' : 'pointer', opacity: step === 0 ? 0.4 : 1 }}>
                    → السابق
                </button>
                {!isLast && (
                    <button type="button" onClick={() => go(step + 1)}
                        style={{ border: 'none', background: PRIMARY, color: '#ffffff', borderRadius: '10px', padding: '10px 22px', fontWeight: 'bold', cursor: 'pointer' }}>
                        التالي ←
                    </button>
                )}
            </div>

            {isLast && (
                <div style={{ ...card, marginTop: '22px', textAlign: 'center' }}>
                    {done ? (
                        <p style={{ margin: 0, color: '#3d5a3a', fontWeight: 'bold' }}>✓ خلصت هذي الجلسة. الجلسة الجاية بتكون بمحتوى جديد.</p>
                    ) : isLoggedIn ? (
                        <button type="button" disabled={saving} onClick={finish}
                            style={{ border: 'none', background: PRIMARY, color: '#ffffff', borderRadius: '12px', padding: '12px 28px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                            {saving ? 'جاري الحفظ...' : 'خلصت الجلسة ✓'}
                        </button>
                    ) : (
                        <p style={{ margin: 0 }}>
                            <Link href="/login" style={{ color: PRIMARY, fontWeight: 'bold' }}>سجل دخول</Link> عشان نحفظ إنك خلصت الجلسة وتطلع لك الجاية
                        </p>
                    )}
                    {error && <p style={{ color: '#b91c1c', fontSize: '0.9rem', margin: '10px 0 0' }}>{error}</p>}
                </div>
            )}
        </main>
    )
}
