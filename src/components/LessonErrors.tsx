'use client'

import { useRef, useState } from 'react'
import { KINDS } from '@/components/SentenceParts'
import type { Block, ErrorItem } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

/** الجملة وفيها الجزء الغلط ملون وتحته خط متعرج */
export function MarkedLine({ line, mark, kind }: { line: string; mark?: string; kind: keyof typeof KINDS }) {
    const k = KINDS[kind]
    const at = mark ? line.indexOf(mark) : -1
    if (!mark || at === -1) return <>{line}</>
    return (
        <>
            {line.slice(0, at)}
            <span style={{ background: k.bg, color: k.color, borderRadius: '4px', padding: '0 4px', textDecoration: 'underline wavy', textUnderlineOffset: '4px', fontWeight: 600 }}>{mark}</span>
            {line.slice(at + mark.length)}
        </>
    )
}

/**
 * ورقة طالب فيها أخطاء. فوق الورقة: كل جملة وتحتها قوس ملون باسم الخطأ.
 * تحتها أزرار الأخطاء جنب بعض: يختار خطأ فيفتح شرحه تحت، ويرجع يختار الثاني والورقة قريبة منه.
 * لما يجاوب سؤال كل خطأ تنفتح الورقة المصححة.
 */
export default function LessonErrors({
    title,
    items,
    fixed,
    renderBlocks,
}: {
    title: string
    items: ErrorItem[]
    fixed: string
    renderBlocks: (blocks: Block[], idPrefix: string, onCheck: () => void) => React.ReactNode
}) {
    const [open, setOpen] = useState(0)
    const [done, setDone] = useState<Set<number>>(() => new Set())
    const all = done.size === items.length
    const cur = items[open]
    const next = items[open + 1]
    const startRef = useRef<HTMLDivElement>(null)
    const fixedRef = useRef<HTMLDivElement>(null)
    const color = KINDS[cur.kind]

    // يفتح جزء، ويطلعه فوق عند بداية الأجزاء (لما ينتقل من زر نهاية الجزء أو من الورقة)
    const choose = (i: number) => {
        setOpen(i)
        setTimeout(() => startRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }

    const markDone = (i: number) => setDone((d) => (d.has(i) ? d : new Set(d).add(i)))

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* الورقة: كل جملة وتحتها قوس باسم خطئها */}
            <div style={{ background: '#FFFDF8', border: '1px solid #ecdcdd', borderInlineStart: '4px solid #E4A3AB', borderRadius: '12px', padding: '12px 12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <strong style={{ color: PRIMARY, fontSize: '1.05rem' }}>📄 {title}</strong>
                    <span style={{ fontSize: '0.82rem', color: '#9b8a8d' }}>اضغط على أي جملة</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {items.map((it, i) => {
                        const k = KINDS[it.kind]
                        const on = i === open
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => choose(i)}
                                aria-pressed={on}
                                style={{ display: 'block', width: '100%', textAlign: 'start', background: on ? '#ffffff' : 'transparent', border: `1px solid ${on ? k.color + '66' : 'transparent'}`, borderRadius: '10px', padding: '6px 8px', cursor: 'pointer', opacity: on ? 1 : 0.62, transition: 'opacity 0.15s' }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: k.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>{done.has(i) ? '✓' : i + 1}</span>
                                    <span dir="ltr" style={{ flex: 1, textAlign: 'left', fontSize: '1.12rem', lineHeight: 1.5, color: '#2A1A1D' }}>
                                        <MarkedLine line={it.line} mark={it.mark} kind={it.kind} />
                                    </span>
                                </span>
                                {/* القوس: خط يجمع الجملة، وتحته اسم الخطأ */}
                                <span style={{ display: 'block', marginInlineStart: '38px', marginTop: '5px', height: '8px', borderInline: `2px solid ${k.color}`, borderBottom: `2px solid ${k.color}`, borderRadius: '0 0 8px 8px' }} />
                                <span style={{ display: 'block', marginInlineStart: '38px', marginTop: '3px', fontSize: '0.82rem', fontWeight: 'bold', color: k.color }}>
                                    الخطأ {i + 1} · {it.label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* الأجزاء: أزرار صغيرة مدورة (نفس خريطة الدروس)، والشرح تحتها نص عادي بدون مربع */}
            <div ref={startRef} style={{ scrollMarginTop: '84px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6B5357', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
                        خلص كل جزء بالترتيب ({done.size} من {items.length})
                    </div>
                    <div role="tablist" aria-label="الأجزاء" style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`, gap: '6px' }}>
                        {items.map((it, i) => {
                            const k = KINDS[it.kind]
                            const on = i === open
                            return (
                                <button
                                    key={i}
                                    role="tab"
                                    aria-selected={on}
                                    type="button"
                                    onClick={() => setOpen(i)}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 3px 7px', borderRadius: '18px', border: `1.5px solid ${k.color}`, background: on ? k.color : '#ffffff', color: on ? '#ffffff' : k.color, fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.15s' }}
                                >
                                    <span style={{ fontSize: '1rem', lineHeight: 1.2 }}>{done.has(i) ? '✓' : i + 1}</span>
                                    <span style={{ fontSize: '0.72rem', fontWeight: 'normal', lineHeight: 1.25, textAlign: 'center' }}>{it.short}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* شرح الجزء المفتوح: نص عادي بدون مربع، وعنوانه بلون الجزء */}
                <div key={open} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h2 style={{ fontSize: '1.3rem', color: color.color, margin: '4px 0 0', paddingBottom: '6px', borderBottom: `2px solid ${color.color}33` }}>
                        الجزء {open + 1} من {items.length}: {cur.label}
                    </h2>
                    {renderBlocks(cur.blocks, `e${open}`, () => markDone(open))}

                    {/* نهاية الجزء: ينتقل للي بعده ويطلع فوق عند بداية الأجزاء */}
                    {next ? (
                        <button
                            type="button"
                            onClick={() => choose(open + 1)}
                            style={{ marginTop: '6px', background: KINDS[next.kind].color, color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 16px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                        >
                            انتقل للجزء {open + 2}: {next.label} ←
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => fixedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                            style={{ marginTop: '6px', background: '#1E7A4A', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 16px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                        >
                            خلصت الأجزاء: شوف الورقة بعد التصحيح ↓
                        </button>
                    )}
                </div>
            </div>

            {/* الورقة المصححة تنفتح لما يخلص الأخطاء كلها */}
            <div ref={fixedRef} style={{ borderRadius: '12px', padding: '12px 14px', background: all ? '#ECF8F1' : '#ffffff', border: all ? '1px solid #9AD3B2' : '1.5px dashed #E4D3D6' }}>
                {all ? (
                    <>
                        <div style={{ fontWeight: 'bold', color: '#1E7A4A', marginBottom: '6px' }}>✅ الورقة بعد التصحيح</div>
                        <div dir="ltr" style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#1F5132' }}>{fixed}</div>
                    </>
                ) : (
                    <div style={{ color: '#6B5357', fontSize: '0.92rem' }}>
                        🔒 راجعت {done.size} من {items.length}. جاوب سؤال كل خطأ وتنفتح الورقة المصححة.
                    </div>
                )}
            </div>
        </div>
    )
}
