'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAiAccess } from '@/lib/useAiAccess'
import { ESPRMATH_URL } from '@/lib/links'
import { AI_COMING_SOON, AI_ENABLED, SHOW_ESPRMATH } from '@/lib/features'
import { pillStyle } from '@/components/pillStyle'

const PRIMARY = '#7a1f2b'

type Msg = { role: 'user' | 'assistant'; content: string }

/**
 * الذكاء داخل الدروس: محادثة عادية يسأل فيها الطالب عن الدرس اللي فاتحه.
 * (برا الدروس زر الذكاء يفتح "خطتي" بدالها.)
 * يطلع للكل، وللي حسابه مو معتمد عليه علامة × ويطلع له إن الميزة للمعتمدين.
 * إذا AI_ENABLED = false (src/lib/features.ts): الزر يطلع، والنافذة تقول "قريبًا" بس.
 *
 * variant: sidebar زر أبيض تحت في النافبار الجانبي، bar دائرة في شريط أقسام الدرس على الجوال.
 */
export default function LessonChat({ variant, course, topic, lesson }: { variant: 'sidebar' | 'bar'; course?: string; topic?: string; lesson?: string }) {
    const access = useAiAccess()
    const locked = !AI_ENABLED || access !== 'allowed'
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState<Msg[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
    }, [messages, loading])

    const send = async () => {
        const text = input.trim()
        if (!text || loading || locked) return
        const next: Msg[] = [...messages, { role: 'user', content: text }]
        setMessages(next)
        setInput('')
        setLoading(true)
        try {
            const { data: { session } } = await supabase.auth.getSession()
            const res = await fetch('/api/engl-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.access_token ?? ''}` },
                body: JSON.stringify({ messages: next, course, topic, lesson }),
            })
            const data = await res.json().catch(() => ({}))
            setMessages([...next, { role: 'assistant', content: data.reply || 'ما وصلني رد، حاول مرة ثانية.' }])
        } catch {
            setMessages([...next, { role: 'assistant', content: 'صار خطأ في الاتصال، حاول مرة ثانية.' }])
        } finally {
            setLoading(false)
        }
    }

    const label = !AI_ENABLED ? `اسأل الذكاء (${AI_COMING_SOON})` : locked ? 'اسأل الذكاء (للمعتمدين)' : 'اسأل الذكاء عن الدرس'
    const badge = AI_ENABLED && locked && access !== 'loading' && <LockBadge />

    const trigger =
        variant === 'sidebar' ? (
            <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={label} title={label} style={{ ...pillStyle(open), opacity: locked && !open ? 0.85 : 1 }}>
                <span style={{ fontSize: '0.95rem', position: 'relative' }}>
                    🤖
                    {badge}
                </span>
                اسأل
            </button>
        ) : (
            <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label={label}
                style={{ position: 'relative', flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: open ? '#ffffff' : PRIMARY, color: open ? PRIMARY : '#ffffff', border: `2px solid ${PRIMARY}`, boxShadow: '0 6px 16px rgba(122,31,43,0.3)', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
            >
                {open ? '×' : '🤖'}
                {!open && badge}
            </button>
        )

    // مكان النافذة: جنب البار الجانبي، أو تحت شريط الأقسام على الجوال
    const panelPos: React.CSSProperties = variant === 'sidebar' ? { left: '120px', bottom: '16px' } : { left: '12px', top: '62px' }

    return (
        <>
            {trigger}
            {open && (
                <div
                    role="dialog"
                    aria-label="اسأل الذكاء"
                    data-no-translate
                    style={{ position: 'fixed', ...panelPos, zIndex: 130, width: 'min(370px, calc(100vw - 24px))', background: '#ffffff', border: `2px solid ${PRIMARY}`, borderRadius: '18px', boxShadow: '0 16px 40px rgba(42,26,29,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden', color: '#2A1A1D', textAlign: 'right', ...(locked ? {} : { height: 'min(500px, calc(100dvh - 110px))' }) }}
                >
                    <div style={{ background: PRIMARY, color: '#ffffff', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>🤖 اسأل عن الدرس</div>
                            {lesson && <div dir="ltr" style={{ fontSize: '0.75rem', opacity: 0.8, textAlign: 'right' }}>{lesson}</div>}
                        </div>
                        <button onClick={() => setOpen(false)} aria-label="إغلاق" style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1 }}>×</button>
                    </div>

                    {locked ? (
                        <div style={{ padding: '18px 16px', fontSize: '0.95rem', lineHeight: 1.8 }}>
                            {!AI_ENABLED ? (
                                <p style={{ margin: 0 }}>
                                    <strong style={{ color: PRIMARY }}>{AI_COMING_SOON}</strong> · المساعد اللي يجاوبك عن الدرس بيرجع قريب.
                                </p>
                            ) : access === 'loading' ? (
                                <span style={{ color: '#9b8a8d' }}>لحظة…</span>
                            ) : (
                                <>
                                    <p style={{ margin: '0 0 10px' }}>
                                        الذكاء متاح بس للي حسابه معتمد
                                        {SHOW_ESPRMATH && (
                                            <>
                                                {' '}في{' '}
                                                <a href={ESPRMATH_URL} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ color: PRIMARY, fontWeight: 'bold' }}>EsprMath</a>
                                            </>
                                        )}
                                        .
                                    </p>
                                    <p style={{ margin: 0, color: '#6B5357', fontSize: '0.88rem' }}>
                                        {access === 'guest' ? (
                                            <>
                                                {SHOW_ESPRMATH ? 'الحساب نفسه يشتغل في الموقعين. إذا حسابك معتمد هناك ' : 'إذا حسابك معتمد '}<Link href="/login" style={{ color: PRIMARY, fontWeight: 'bold' }}>سجّل دخول</Link> هنا.
                                            </>
                                        ) : (
                                            SHOW_ESPRMATH ? 'حسابك مسجل بس للحين مو معتمد في EsprMath. أول ما يتعتمد هناك يتفعّل لك هنا تلقائيًا.' : 'حسابك مسجل بس للحين مو معتمد.'
                                        )}
                                    </p>
                                </>
                            )}
                        </div>
                    ) : (
                        <>
                            <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#FBF6F6' }}>
                                {messages.length === 0 && (
                                    <p style={{ color: '#9b8a8d', fontSize: '0.9rem', textAlign: 'center', margin: 'auto 10px' }}>
                                        اسألني أي شي عن هذا الدرس: قاعدة ما فهمتها، مثال، أو ليش الجواب كذا.
                                    </p>
                                )}
                                {messages.map((m, i) => (
                                    <div
                                        key={i}
                                        dir="auto"
                                        style={{
                                            alignSelf: m.role === 'user' ? 'flex-start' : 'flex-end',
                                            maxWidth: '85%',
                                            background: m.role === 'user' ? PRIMARY : '#ffffff',
                                            color: m.role === 'user' ? '#ffffff' : '#2A1A1D',
                                            border: m.role === 'user' ? 'none' : '1px solid #ecdcdd',
                                            borderRadius: '12px',
                                            padding: '8px 12px',
                                            fontSize: '0.93rem',
                                            lineHeight: 1.7,
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {m.content}
                                    </div>
                                ))}
                                {loading && <div style={{ alignSelf: 'flex-end', color: '#9b8a8d', fontSize: '0.85rem' }}>يكتب…</div>}
                            </div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    send()
                                }}
                                style={{ display: 'flex', gap: '8px', padding: '10px', borderTop: '1px solid #ecdcdd' }}
                            >
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="اكتب سؤالك…"
                                    dir="auto"
                                    style={{ flex: 1, minWidth: 0, border: '1px solid #ecdcdd', borderRadius: '10px', padding: '9px 12px', fontSize: '0.95rem', outline: 'none' }}
                                />
                                <button type="submit" disabled={loading || !input.trim()} style={{ background: PRIMARY, color: '#ffffff', border: 'none', borderRadius: '10px', padding: '0 16px', fontWeight: 'bold', cursor: 'pointer', opacity: loading || !input.trim() ? 0.5 : 1 }}>
                                    إرسال
                                </button>
                            </form>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

/** علامة × صغيرة على الزر للي ما عنده صلاحية */
function LockBadge() {
    return (
        <span
            aria-hidden
            style={{ position: 'absolute', top: '-6px', right: '-8px', width: '16px', height: '16px', borderRadius: '50%', background: '#ffffff', color: '#B42318', border: '1.5px solid #B42318', fontSize: '0.7rem', fontWeight: 'bold', lineHeight: '13px', textAlign: 'center' }}
        >
            ×
        </span>
    )
}
