'use client'

import { useEffect, useState } from 'react'
import { lookup, type Lookup } from '@/content/glossary'

const PRIMARY = '#7a1f2b'
const WORD = /[A-Za-z’']/

type Picked = { result: Lookup; rect: DOMRect }

/** يرجع الكلمة الإنجليزية اللي تحت نقطة الضغط ومكانها، بدون ما نغيّر شي في الصفحة */
function wordAt(x: number, y: number): { word: string; rect: DOMRect } | null {
    let node: Node | null = null
    let offset = 0
    const doc = document as Document & {
        caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null
    }
    if (doc.caretPositionFromPoint) {
        const pos = doc.caretPositionFromPoint(x, y)
        if (pos) ({ offsetNode: node, offset } = pos)
    } else if (document.caretRangeFromPoint) {
        const range = document.caretRangeFromPoint(x, y)
        if (range) {
            node = range.startContainer
            offset = range.startOffset
        }
    }
    if (!node || node.nodeType !== Node.TEXT_NODE) return null

    const text = node.textContent ?? ''
    let start = offset
    let end = offset
    while (start > 0 && WORD.test(text[start - 1])) start--
    while (end < text.length && WORD.test(text[end])) end++
    // الضغطة على آخر حرف من الكلمة ترجع المؤشر بعدها
    if (start === end && offset > 0 && WORD.test(text[offset - 1])) {
        start = offset - 1
        while (start > 0 && WORD.test(text[start - 1])) start--
    }
    const word = text.slice(start, end).replace(/^['’]+|['’]+$/g, '')
    if (!/[A-Za-z]/.test(word)) return null

    const range = document.createRange()
    range.setStart(node, start)
    range.setEnd(node, end)
    const rect = range.getBoundingClientRect()
    // نتأكد إن الضغطة فعلًا على الكلمة مو على فراغ جنبها
    if (x < rect.left - 2 || x > rect.right + 2 || y < rect.top - 2 || y > rect.bottom + 2) return null
    return { word, rect }
}

/**
 * وضع الترجمة: لما يكون شغّال، الضغط على أي كلمة إنجليزية داخل container يطلع معناها من القاموس.
 * الضغط على الأزرار والروابط يشتغل عادي.
 */
export default function WordTranslator({ active, containerId }: { active: boolean; containerId: string }) {
    const [picked, setPicked] = useState<Picked | null>(null)

    useEffect(() => {
        if (!active) {
            setPicked(null)
            return
        }
        const container = document.getElementById(containerId)
        if (!container) return

        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('button, a, input, summary, [data-no-translate]')) return
            const hit = wordAt(e.clientX, e.clientY)
            if (!hit) {
                setPicked(null)
                return
            }
            e.preventDefault()
            setPicked({ result: lookup(hit.word), rect: hit.rect })
        }
        // السكرول يحرك الكلمة، فنقفل النافذة بدل ما تطلع في مكان غلط
        const close = () => setPicked(null)
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()

        container.addEventListener('click', onClick)
        window.addEventListener('scroll', close, { passive: true })
        window.addEventListener('resize', close)
        window.addEventListener('keydown', onKey)
        return () => {
            container.removeEventListener('click', onClick)
            window.removeEventListener('scroll', close)
            window.removeEventListener('resize', close)
            window.removeEventListener('keydown', onKey)
        }
    }, [active, containerId])

    if (!picked) return null
    const { result, rect } = picked

    // النافذة تحت الكلمة، وإذا ما فيه مكان تحت تطلع فوقها
    const width = 240
    const left = Math.min(Math.max(8, rect.left + rect.width / 2 - width / 2), window.innerWidth - width - 8)
    const below = rect.bottom + 150 < window.innerHeight
    const pos: React.CSSProperties = below ? { top: rect.bottom + 8 } : { bottom: window.innerHeight - rect.top + 8 }

    return (
        <>
            {/* تظليل الكلمة اللي انضغطت */}
            <div
                aria-hidden
                style={{ position: 'fixed', left: rect.left - 3, top: rect.top - 2, width: rect.width + 6, height: rect.height + 4, background: 'rgba(228,163,171,0.35)', borderRadius: '5px', pointerEvents: 'none', zIndex: 150 }}
            />
            <div
                role="dialog"
                aria-label={`ترجمة ${result.word}`}
                data-no-translate
                style={{ position: 'fixed', left, width, ...pos, zIndex: 151, background: '#ffffff', border: `2px solid ${PRIMARY}`, borderRadius: '14px', boxShadow: '0 12px 28px rgba(42,26,29,0.2)', padding: '12px 14px' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span dir="ltr" style={{ fontWeight: 'bold', fontSize: '1.1rem', color: PRIMARY }}>
                        {result.word}
                        {'base' in result && result.base !== result.word.toLowerCase() && (
                            <span style={{ fontSize: '0.8rem', color: '#9b8a8d', fontWeight: 'normal' }}> ← {result.base}</span>
                        )}
                    </span>
                    <button onClick={() => setPicked(null)} aria-label="إغلاق" style={{ background: 'none', border: 'none', color: '#9b8a8d', fontSize: '1.1rem', cursor: 'pointer', lineHeight: 1 }}>×</button>
                </div>

                {'entry' in result && (
                    <>
                        <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#2A1A1D' }}>{result.entry.ar}</div>
                        {result.entry.note && <div style={{ fontSize: '0.85rem', color: '#6B5357', marginTop: '4px', lineHeight: 1.6 }}>{result.entry.note}</div>}
                    </>
                )}
                {'name' in result && <div style={{ fontSize: '0.95rem', color: '#2A1A1D' }}>اسم علم (شخص أو مكان)</div>}
                {'missing' in result && (
                    <div style={{ fontSize: '0.9rem', color: '#6B5357', lineHeight: 1.6 }}>
                        هذي الكلمة للحين مو في قاموسنا.{' '}
                        <a
                            href={`https://translate.google.com/?sl=en&tl=ar&text=${encodeURIComponent(result.word)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: PRIMARY, fontWeight: 'bold' }}
                        >
                            ترجمها في قوقل ←
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}
