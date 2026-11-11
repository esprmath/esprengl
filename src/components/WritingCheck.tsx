'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAiAccess } from '@/lib/useAiAccess'
import { ESPRMATH_URL } from '@/lib/links'
import { AI_COMING_SOON, AI_ENABLED, SHOW_ESPRMATH } from '@/lib/features'

const PRIMARY = '#7a1f2b'

type Issue = { wrong: string; fix: string; why: string; lesson?: { title: string; href: string } }
type Result = { ok: boolean; corrected: string; issues: Issue[]; tip: string }

/**
 * "اكتب وبصححها لك" بالذكاء: الطالب يكتب، والذكاء يصحح على قواعد المادة ويربط كل خطأ بدرسه.
 * مقفل للي حسابه مو معتمد. وإذا AI_ENABLED = false (src/lib/features.ts) يطلع المطلوب و"قريبًا" بس، بدون خانة.
 *
 * variant:
 * - inline: داخل الدرس بعد الأمثلة. سطر واحد يكبر لما يكتب.
 * - exercise: تحت سؤال تمرين. بدون عنوان، ويختفي تمامًا للي ما عنده صلاحية (التمرين يوضح هذا مرة وحدة).
 * - page: صفحة التصحيح الكاملة (فقرات).
 * task: المطلوب من الطالب، وreference جواب نموذجي اختياري يساعد الذكاء.
 */
export default function WritingCheck({
    variant = 'inline',
    task,
    reference,
    placeholder,
    title,
}: {
    variant?: 'inline' | 'exercise' | 'page'
    task?: string
    reference?: string
    placeholder?: string
    title?: string
}) {
    const access = useAiAccess()
    const locked = access !== 'allowed'
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<Result | null>(null)
    const [error, setError] = useState<string | null>(null)
    const boxRef = useRef<HTMLTextAreaElement>(null)
    const [showRef, setShowRef] = useState(false)
    const isPage = variant === 'page'

    // تحت أسئلة التمرين ما يطلع شي (التمرين يوضح مرة وحدة فوق)
    if (variant === 'exercise' && (locked || !AI_ENABLED)) return null

    if (!AI_ENABLED) {
        return (
            <section data-no-translate style={{ background: '#ffffff', border: '1.5px dashed #E4D3D6', borderRadius: '12px', padding: isPage ? '16px' : '10px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap', fontSize: isPage ? '1rem' : '0.88rem' }}>
                    <span>✍️</span>
                    <strong style={{ color: PRIMARY }}>{title ?? 'جرب بنفسك:'}</strong>
                    {task && <span style={{ color: '#2A1A1D' }}>{task}</span>}
                </div>
                {/* الطالب يكتب حتى لو الذكاء موقف، ويقارن بالجواب النموذجي إذا موجود */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    dir="ltr"
                    rows={isPage ? 6 : 2}
                    maxLength={1500}
                    placeholder={placeholder ?? 'Write your sentence here...'}
                    aria-label={task ?? 'اكتب هنا'}
                    style={{ marginTop: '8px', width: '100%', boxSizing: 'border-box', resize: 'vertical', border: `1px solid ${text ? '#E4A3AB' : '#ecdcdd'}`, borderRadius: '10px', padding: '8px 12px', fontSize: '0.98rem', fontFamily: 'inherit', lineHeight: 1.5, background: '#ffffff', outline: 'none' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#6B5357' }}>🤖 التصحيح بالذكاء {AI_COMING_SOON}</span>
                    {reference && (
                        <button type="button" onClick={() => setShowRef((v) => !v)} style={{ background: 'none', border: `1px solid ${PRIMARY}`, color: PRIMARY, borderRadius: '999px', padding: '4px 12px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}>
                            {showRef ? 'أخف الجواب' : 'شوف جواب نموذجي'}
                        </button>
                    )}
                </div>
                {reference && showRef && (
                    <div dir="ltr" style={{ marginTop: '8px', background: '#EAF6EE', border: '1px solid #b9dfc6', borderRadius: '10px', padding: '8px 12px', color: '#1F5132', fontSize: '0.95rem' }}>
                        {reference}
                    </div>
                )}
            </section>
        )
    }

    const check = async () => {
        if (locked || loading || text.trim().length < 3) return
        setLoading(true)
        setError(null)
        setResult(null)
        try {
            const { data: { session } } = await supabase.auth.getSession()
            const res = await fetch('/api/engl-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.access_token ?? ''}` },
                body: JSON.stringify({ mode: 'check', text, task, reference, brief: variant === 'exercise' }),
            })
            const data = await res.json().catch(() => ({}))
            if (data.check) setResult(data.check)
            else setError(data.reply || 'ما قدرنا نصحح، حاول مرة ثانية.')
        } catch {
            setError('صار خطأ في الاتصال، حاول مرة ثانية.')
        } finally {
            setLoading(false)
        }
    }

    // الخانة تبدأ سطر واحد، وتكبر مع الكتابة لين حد معيّن
    const grow = (el: HTMLTextAreaElement) => {
        el.style.height = 'auto'
        el.style.height = `${Math.min(el.scrollHeight, isPage ? 360 : 140)}px`
    }

    const canSend = !loading && text.trim().length >= 3

    const input = (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
            <textarea
                ref={boxRef}
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                    setResult(null)
                    grow(e.target)
                }}
                onKeyDown={(e) => {
                    // Enter يرسل، و Shift+Enter سطر جديد (في الصفحة الكاملة Enter سطر جديد عادي)
                    if (!isPage && e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        check()
                    }
                }}
                disabled={locked}
                dir="ltr"
                rows={isPage ? 6 : 1}
                maxLength={1500}
                placeholder={locked ? (SHOW_ESPRMATH ? 'متاح للحسابات المعتمدة في EsprMath' : 'متاح للحسابات المعتمدة') : placeholder ?? 'Write your sentence here...'}
                style={{ flex: 1, minWidth: 0, boxSizing: 'border-box', resize: 'none', overflow: 'auto', border: `1px solid ${text ? '#E4A3AB' : '#ecdcdd'}`, borderRadius: '10px', padding: '8px 12px', fontSize: '0.98rem', fontFamily: 'inherit', lineHeight: 1.5, background: locked ? '#FBF6F6' : '#ffffff', outline: 'none', transition: 'border-color 0.15s' }}
            />
            {!locked && (
                <button
                    onClick={check}
                    disabled={!canSend}
                    style={{ flexShrink: 0, background: PRIMARY, color: '#ffffff', border: 'none', borderRadius: '10px', padding: '9px 14px', fontWeight: 'bold', fontSize: '0.88rem', cursor: canSend ? 'pointer' : 'default', opacity: canSend ? 1 : 0.45 }}
                >
                    {loading ? '…' : variant === 'exercise' ? 'تحقق' : 'صحح'}
                </button>
            )}
        </div>
    )

    const lockNote = locked && access !== 'loading' && (
        <div style={{ marginTop: '6px', fontSize: '0.8rem', color: '#6B5357', lineHeight: 1.7 }}>
            🔒 التصحيح بالذكاء للحسابات المعتمدة
            {SHOW_ESPRMATH && (
                <>
                    {' '}في{' '}
                    <a href={ESPRMATH_URL} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ color: PRIMARY, fontWeight: 'bold' }}>
                        EsprMath
                    </a>
                </>
            )}
            {access === 'guest' && (
                <>
                    {' · '}
                    <Link href="/login" style={{ color: PRIMARY, fontWeight: 'bold' }}>سجّل دخول</Link>
                </>
            )}
        </div>
    )

    const results = (
        <>
            {error && <p style={{ margin: '8px 0 0', color: '#B42318', fontSize: '0.85rem' }}>{error}</p>}
            {result && (
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {result.ok ? (
                        <div style={{ background: '#ECF8F1', border: '1px solid #9AD3B2', borderRadius: '10px', padding: '7px 12px', color: '#1E7A4A', fontWeight: 'bold', fontSize: '0.9rem' }}>
                            ✓ صح{result.tip ? <span style={{ fontWeight: 'normal' }}> · {result.tip}</span> : '!'}
                        </div>
                    ) : (
                        <>
                            <div style={{ color: '#B42318', fontWeight: 'bold', fontSize: '0.88rem' }}>✗ فيها {result.issues.length > 1 ? `${result.issues.length} أخطاء` : 'خطأ'}</div>
                            {result.issues.map((issue, i) => (
                                <div key={i} style={{ background: '#FDF6F6', border: '1px solid #F2D6D9', borderRadius: '10px', padding: '7px 11px' }}>
                                    {(issue.wrong || issue.fix) && (
                                        <div dir="ltr" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', fontSize: '0.92rem' }}>
                                            {issue.wrong && <span style={{ color: '#B42318', textDecoration: 'line-through' }}>{issue.wrong}</span>}
                                            {issue.wrong && issue.fix && <span style={{ color: '#9b8a8d' }}>→</span>}
                                            {issue.fix && <span style={{ color: '#1E7A4A', fontWeight: 'bold' }}>{issue.fix}</span>}
                                        </div>
                                    )}
                                    <div style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#2A1A1D' }}>
                                        {issue.why}
                                        {issue.lesson && (
                                            <>
                                                {' '}
                                                <Link href={issue.lesson.href} style={{ color: PRIMARY, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                                    راجع <bdi>{issue.lesson.title}</bdi> ←
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {result.corrected && (
                                <div style={{ background: '#ECF8F1', border: '1px solid #9AD3B2', borderRadius: '10px', padding: '7px 11px' }}>
                                    <span style={{ fontSize: '0.72rem', fontWeight: 'bold', color: '#1E7A4A' }}>الصح: </span>
                                    <span dir="ltr" style={{ whiteSpace: 'pre-wrap' }}>{result.corrected}</span>
                                </div>
                            )}
                            {result.tip && <p style={{ margin: 0, fontSize: '0.82rem', color: '#6B5357' }}>💡 {result.tip}</p>}
                        </>
                    )}
                </div>
            )}
        </>
    )

    // تحت سؤال التمرين: الخانة والنتيجة بس
    if (variant === 'exercise') {
        return (
            <div data-no-translate dir="rtl" style={{ marginTop: '6px' }}>
                {input}
                {results}
            </div>
        )
    }

    return (
        <section
            data-no-translate
            style={{ background: '#ffffff', border: `1.5px dashed ${locked ? '#E4D3D6' : '#E4A3AB'}`, borderRadius: '12px', padding: isPage ? '16px' : '10px 12px' }}
        >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px', flexWrap: 'wrap', fontSize: isPage ? '1rem' : '0.88rem' }}>
                <span>✍️</span>
                <strong style={{ color: PRIMARY }}>{title ?? 'جرب بنفسك:'}</strong>
                {task && <span style={{ color: '#2A1A1D' }}>{task}</span>}
                <span style={{ fontSize: '0.7rem', color: '#9b8a8d' }}>· يصححها الذكاء 🤖</span>
            </div>
            {input}
            {lockNote}
            {results}
        </section>
    )
}
