'use client'

import { useEffect, useState } from 'react'
import type { Warmup } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

/**
 * سؤال قبل الشرح، يطلع نافذة على الشاشة أول ما يفتح الدرس، ولازم يختار جواب قبل ما يكمل.
 * الطالب يجاوب قبل ما يقرا، فيقرا الشرح وهو يدوّر على الجواب.
 * يطلع مرة وحدة لكل درس في نفس الجهاز (نحفظ إنه جاوبه في المتصفح).
 */
export default function WarmupQuestion({ warmup, lessonKey }: { warmup: Warmup; lessonKey: string }) {
    const storageKey = `engl-warmup:${lessonKey}`
    const [show, setShow] = useState(false)
    const [picked, setPicked] = useState<number | null>(null)
    const answered = picked !== null
    const right = picked === warmup.answer

    useEffect(() => {
        let seen = false
        try {
            seen = localStorage.getItem(storageKey) === '1'
        } catch {
            /* التخزين مقفل، نعرض السؤال عادي */
        }
        if (!seen) setShow(true)
    }, [storageKey])

    // ما يتحرك الدرس وراه وهو مفتوح
    useEffect(() => {
        if (!show) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [show])

    if (!show) return null

    const start = () => {
        try {
            localStorage.setItem(storageKey, '1')
        } catch {
            /* ما قدرنا نحفظ، بيطلع مرة ثانية بس */
        }
        setShow(false)
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="سؤال قبل الدرس"
            data-no-translate
            style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(42,26,29,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
        >
            <div style={{ width: 'min(480px, 100%)', background: '#ffffff', borderRadius: '20px', padding: '22px 20px', boxShadow: '0 20px 50px rgba(42,26,29,0.35)', color: '#2A1A1D' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ background: PRIMARY, color: '#ffffff', fontSize: '0.75rem', fontWeight: 'bold', padding: '3px 10px', borderRadius: '6px' }}>قبل ما تبدأ</span>
                    <span style={{ fontSize: '0.8rem', color: '#9b8a8d' }}>خمّن حتى لو مو متأكد</span>
                </div>
                <h2 style={{ fontSize: '1.25rem', margin: '10px 0 12px' }}>{warmup.q}</h2>
                {warmup.sentence && (
                    <div dir="ltr" style={{ background: '#FBF6F6', border: '1px dashed #E4A3AB', borderRadius: '12px', padding: '12px 14px', fontSize: '1.1rem', marginBottom: '14px', lineHeight: 1.6 }}>
                        {warmup.sentence}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {warmup.choices.map((c, i) => {
                        const isAnswer = answered && i === warmup.answer
                        const isWrongPick = answered && i === picked && !right
                        return (
                            <button
                                key={i}
                                onClick={() => !answered && setPicked(i)}
                                disabled={answered}
                                style={{
                                    textAlign: 'right',
                                    border: `2px solid ${isAnswer ? '#2E9E62' : isWrongPick ? '#B42318' : '#ecdcdd'}`,
                                    background: isAnswer ? '#ECF8F1' : isWrongPick ? '#FDEEEC' : '#ffffff',
                                    color: '#2A1A1D',
                                    borderRadius: '12px',
                                    padding: '12px 14px',
                                    fontWeight: 'bold',
                                    fontSize: '0.98rem',
                                    cursor: answered ? 'default' : 'pointer',
                                    opacity: answered && !isAnswer && !isWrongPick ? 0.5 : 1,
                                }}
                            >
                                {isAnswer ? '✓ ' : isWrongPick ? '✗ ' : ''}
                                {c}
                            </button>
                        )
                    })}
                </div>

                {answered && (
                    <>
                        <p style={{ margin: '14px 0 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
                            <strong style={{ color: right ? '#1E7A4A' : PRIMARY }}>{right ? 'صح! ' : 'قريب، '}</strong>
                            {warmup.why}
                        </p>
                        <button
                            onClick={start}
                            autoFocus
                            style={{ width: '100%', marginTop: '16px', background: PRIMARY, color: '#ffffff', border: 'none', borderRadius: '12px', padding: '13px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                        >
                            ابدأ الدرس ←
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}
