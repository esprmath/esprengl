'use client'

import { useEffect, useRef, useState } from 'react'
import { KINDS } from '@/components/SentenceParts'
import type { Block, HubBranch } from '@/content/lessons'

/**
 * افتتاحية الدرس كخريطة صغيرة: كلمة (مثل Words) تتفرع منها أقسام الدرس.
 * الفرع الأول مفتوح، وتحته شرحه كنص عادي (بدون مربع). الطالب يتنقل بين الفروع من فوق،
 * أو بزر في آخر كل فرع يوديه للي بعده. بعد آخر فرع الزر ينزّله لباقي الدرس، أو يفتح التدريب إذا ما بعد الخريطة شرح.
 */
export default function LessonHub({
    word,
    ar,
    branches,
    renderBlocks,
}: {
    word: string
    ar?: string
    branches: HubBranch[]
    renderBlocks: (blocks: Block[], idPrefix: string, onCheck: () => void) => React.ReactNode
}) {
    const [open, setOpen] = useState(0)
    const [done, setDone] = useState<Set<number>>(() => new Set())
    const topRef = useRef<HTMLDivElement>(null)
    const endRef = useRef<HTMLDivElement>(null)
    const cur = branches[open]
    const next = branches[open + 1]
    const color = KINDS[cur.kind]
    const n = branches.length

    const choose = (i: number, scrollTop = false) => {
        setOpen(i)
        if (scrollTop) setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }
    const markDone = (i: number) => setDone((d) => (d.has(i) ? d : new Set(d).add(i)))

    // فيه شرح بعد الخريطة؟ (بلوك من قسم الشرح بعدها في الصفحة). إذا لا، آخر زر يودي للتدريب مباشرة بدل ما ينزل على فراغ
    const [moreAfter, setMoreAfter] = useState(true)
    useEffect(() => {
        let el = endRef.current?.closest('[data-lesson-block]')?.nextElementSibling
        while (el) {
            if (el.classList.contains('v-explain')) return
            el = el.nextElementSibling
        }
        setMoreAfter(false)
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* الخريطة: صغيرة وفي النص */}
            <div ref={topRef} style={{ scrollMarginTop: '84px', maxWidth: '440px', width: '100%', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', background: '#7a1f2b', color: '#ffffff', borderRadius: '14px', padding: '6px 22px 7px' }}>
                        <span dir="ltr" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.2 }}>{word}</span>
                        {ar && <span style={{ fontSize: '0.82rem', opacity: 0.85, marginInlineStart: '8px' }}>{ar}</span>}
                    </div>
                </div>

                {/* الخطوط المتفرعة من الكلمة لكل فرع */}
                <svg viewBox={`0 0 ${n * 100} 20`} preserveAspectRatio="none" width="100%" height="20" aria-hidden style={{ display: 'block', overflow: 'visible' }}>
                    {branches.map((b, i) => {
                        // الصفحة من اليمين لليسار: الفرع الأول على اليمين، فنعكس مكانه في الرسم
                        const x = (n - 1 - i) * 100 + 50
                        const on = i === open
                        return <path key={i} d={`M ${n * 50} 0 C ${n * 50} 11, ${x} 8, ${x} 20`} fill="none" stroke={KINDS[b.kind].color} strokeOpacity={on ? 1 : 0.35} strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    })}
                </svg>

                <div role="tablist" aria-label={word} style={{ display: 'grid', gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`, gap: n >= 4 ? '6px' : '8px' }}>
                    {branches.map((b, i) => {
                        const k = KINDS[b.kind]
                        const on = i === open
                        return (
                            <button
                                key={i}
                                role="tab"
                                aria-selected={on}
                                type="button"
                                onClick={() => choose(i)}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0', padding: n >= 4 ? '6px 3px 7px' : '6px 6px 7px', borderRadius: '18px', border: `1.5px solid ${k.color}`, background: on ? k.color : '#ffffff', color: on ? '#ffffff' : k.color, cursor: 'pointer', fontWeight: 'bold', transition: 'background 0.15s' }}
                            >
                                {/* 4 فروع أو أكثر: الاسم يصغر على الجوال عشان الكلمة الوحدة (Numbers) ما تطلع من الزر */}
                                <span dir="ltr" style={{ fontSize: n >= 4 ? 'clamp(0.74rem, 3.3vw, 1.05rem)' : '1.05rem', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>{b.label}</span>
                                <span style={{ fontSize: '0.72rem', fontWeight: 'normal', lineHeight: 1.3 }}>{done.has(i) ? '✓' : b.ar}</span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* محتوى الفرع المفتوح: نص عادي بدون مربع، وعنوانه بلون الفرع */}
            <div key={open} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h2 style={{ fontSize: '1.3rem', color: color.color, margin: '4px 0 0', paddingBottom: '6px', borderBottom: `2px solid ${color.color}33` }}>
                    {cur.ar} <span dir="ltr" style={{ fontSize: '1rem', opacity: 0.8 }}>({cur.label.toLowerCase()})</span>
                </h2>
                {renderBlocks(cur.blocks, `h${open}`, () => markDone(open))}

                {/* نهاية الفرع: ينتقل للي بعده، أو ينزل لباقي الدرس */}
                {next ? (
                    <button
                        type="button"
                        onClick={() => choose(open + 1, true)}
                        style={{ marginTop: '6px', background: KINDS[next.kind].color, color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 16px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        انتقل إلى {next.ar} ←
                    </button>
                ) : moreAfter ? (
                    <button
                        type="button"
                        onClick={() => endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        style={{ marginTop: '6px', background: '#1E7A4A', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 16px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        كمّل الدرس ↓
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent('lesson-view', { detail: 'practice' }))}
                        style={{ marginTop: '6px', background: '#1E7A4A', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 16px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        انتقل للتدريب ←
                    </button>
                )}
            </div>
            <div ref={endRef} style={{ scrollMarginTop: '84px' }} />
        </div>
    )
}
