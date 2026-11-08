'use client'

import { useState } from 'react'

/** مشاركة رابط الدرس في الواتساب، أو نسخه */
export default function ShareLesson({ title, course }: { title: string; course: string }) {
    const [copied, setCopied] = useState(false)

    const text = () => `شرح درس ${title} (${course}) بنفس طريقة المادة، مع أمثلة وتمارين:\n${window.location.href}`

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            /* المتصفح ما سمح بالنسخ، ما نسوي شي */
        }
    }

    const btn: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '6px', borderRadius: '999px', padding: '6px 12px', fontSize: '0.82rem', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none' }

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <a
                href="https://wa.me/"
                onClick={(e) => {
                    e.preventDefault()
                    window.open(`https://wa.me/?text=${encodeURIComponent(text())}`, '_blank', 'noopener')
                }}
                style={{ ...btn, background: '#25D366', color: '#ffffff', border: 'none' }}
            >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
                </svg>
                شارك الدرس
            </a>
            <button onClick={copy} style={{ ...btn, background: '#ffffff', color: '#7a1f2b', border: '1px solid #ecdcdd' }}>
                {copied ? '✓ تم النسخ' : '🔗 نسخ الرابط'}
            </button>
        </div>
    )
}
