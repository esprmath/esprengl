import type { Part, PartKind } from '@/content/lessons'

// ألوان أجزاء الجملة، متناسقة مع العنابي
const KINDS: Record<PartKind, { label: string; color: string; bg: string }> = {
    s: { label: 'Subject', color: '#1F4E79', bg: '#E4EDF7' },
    v: { label: 'Verb', color: '#0F6B5C', bg: '#DDF1EB' },
    hv: { label: 'Helping verb', color: '#0F6B5C', bg: '#DDF1EB' },
    ind: { label: 'Independent clause', color: '#1F4E79', bg: '#E4EDF7' },
    dep: { label: 'Dependent clause', color: '#6B3FA0', bg: '#EEE6F7' },
    co: { label: 'Coordinator', color: '#7a1f2b', bg: '#F7E1E4' },
    adv: { label: 'Conjunctive adverb', color: '#7a1f2b', bg: '#F7E1E4' },
    sub: { label: 'Subordinator', color: '#7a1f2b', bg: '#F7E1E4' },
    p: { label: '', color: '#B45309', bg: '#FDEBC8' },
    x: { label: 'Missing', color: '#B42318', bg: '#FDE4E1' },
    n: { label: 'Noun', color: '#6B3FA0', bg: '#EEE6F7' },
    adj: { label: 'Adjective', color: '#9D174D', bg: '#FCE7F3' },
}

const PUNCT_NAMES: Record<string, string> = { ',': 'comma', ';': 'semicolon', '.': 'full stop', '?': 'question mark', '!': 'exclamation' }

function labelOf([text, kind, label]: Part) {
    if (label) return label
    if (!kind) return ''
    return kind === 'p' ? PUNCT_NAMES[text] ?? '' : KINDS[kind].label
}

function Piece({ part, chip }: { part: Part; chip?: boolean }) {
    const [text, kind] = part
    const style = kind ? KINDS[kind] : null
    const label = labelOf(part)
    const isPunct = kind === 'p'
    return (
        // اسم علامة الترقيم يطلع تحتها ولا ياخذ عرض، عشان ما يتداخل مع أسماء الأجزاء اللي فوق
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '3px', position: 'relative' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 'bold', letterSpacing: '0.02em', color: isPunct ? 'transparent' : style?.color ?? (label ? '#9b8a8d' : 'transparent'), whiteSpace: 'nowrap', minHeight: '1em', lineHeight: 1.2, textTransform: 'uppercase' }}>
                {isPunct ? '·' : label || '·'}
            </span>
            {isPunct && label && (
                <span style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '2px', fontSize: '0.62rem', fontWeight: 'bold', color: style?.color, whiteSpace: 'nowrap', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    {label}
                </span>
            )}
            <span
                style={{
                    background: style?.bg ?? 'transparent',
                    color: style ? style.color : '#2A1A1D',
                    borderBottom: style ? `3px solid ${style.color}` : '3px solid transparent',
                    borderRadius: chip ? '8px' : '6px 6px 0 0',
                    padding: isPunct ? '2px 7px' : chip ? '6px 12px' : '2px 6px',
                    fontWeight: style ? 600 : 400,
                    fontSize: isPunct ? '1.25rem' : '1.05rem',
                    lineHeight: 1.4,
                }}
            >
                {text}
            </span>
        </span>
    )
}

/**
 * جملة مقطعة. في الشاشات الكبيرة: فوق كل جزء اسمه.
 * في الجوال الأسماء فوق الأجزاء تتلخبط لما تنزل الجملة سطرين، فنعرض الجملة ملوّنة كنص عادي،
 * وتحتها قائمة: اسم كل جزء ← الجزء نفسه بنفس اللون.
 */
export function Breakdown({ parts, ar }: { parts: Part[]; ar?: string }) {
    const named = parts.filter((p) => labelOf(p))
    return (
        <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '12px', padding: '12px 14px' }}>
            <div className="desk-only" dir="ltr" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '22px 3px', paddingBottom: '16px' }}>
                {parts.map((p, i) => <Piece key={i} part={p} />)}
            </div>

            <div className="mobile-only" dir="ltr">
                <p style={{ margin: 0, fontSize: '1rem', lineHeight: 2.1 }}>
                    {parts.map(([text, kind], i) => {
                        const s = kind ? KINDS[kind] : null
                        const isPunct = kind === 'p'
                        const glued = isPunct || text === '.' || i === 0
                        return (
                            <span key={i}>
                                {!glued && ' '}
                                <span style={s ? { background: s.bg, color: s.color, borderBottom: `2px solid ${s.color}`, borderRadius: '4px', padding: isPunct ? '1px 5px' : '1px 4px', fontWeight: 600 } : undefined}>{text}</span>
                            </span>
                        )
                    })}
                </p>
                {named.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #ecdcdd' }}>
                        {named.map((p, i) => {
                            const s = p[1] ? KINDS[p[1]] : null
                            return (
                                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '0.85rem' }}>
                                    <span style={{ flexShrink: 0, minWidth: '104px', fontSize: '0.68rem', fontWeight: 'bold', textTransform: 'uppercase', color: s?.color ?? '#9b8a8d' }}>{labelOf(p)}</span>
                                    <span style={{ color: s?.color ?? '#2A1A1D', fontWeight: 600 }}>{p[1] === 'p' ? `${p[0]}` : p[0]}</span>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {ar && <div style={{ fontSize: '0.9rem', color: '#6B5357', marginTop: '8px' }}>{ar}</div>}
        </div>
    )
}

/**
 * القاعدة: قطع ملونة بينها أسهم.
 * في الجوال: قطع أصغر بدون أسماء فوقها (اسم القطعة مكتوب فيها أصلًا)، وعلامة الترقيم معها اسمها.
 */
export function Formula({ parts }: { parts: Part[] }) {
    const box: React.CSSProperties = { background: '#F7E6E8', borderInlineStart: '4px solid #7a1f2b', borderRadius: '0 10px 10px 0' }
    return (
        <>
            <div className="desk-only" dir="ltr" style={{ ...box, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '22px 6px', padding: '12px 14px 26px' }}>
                {parts.map((p, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '6px' }}>
                        {i > 0 && p[1] !== 'p' && <span style={{ color: '#9b6b72', fontSize: '1.1rem', paddingBottom: '8px' }}>→</span>}
                        <Piece part={p} chip />
                    </span>
                ))}
            </div>

            <div className="mobile-only" dir="ltr" style={{ ...box, padding: '10px 12px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 4px' }}>
                    {parts.map((p, i) => {
                        const [text, kind] = p
                        const s = kind ? KINDS[kind] : null
                        const isPunct = kind === 'p'
                        return (
                            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                {i > 0 && !isPunct && <span style={{ color: '#9b6b72', fontSize: '0.85rem' }}>→</span>}
                                <span style={{ background: s?.bg ?? '#ffffff', color: s?.color ?? '#2A1A1D', borderBottom: `2px solid ${s?.color ?? '#ecdcdd'}`, borderRadius: '6px', padding: '3px 7px', fontSize: '0.82rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                    {isPunct ? (
                                        <>
                                            <span style={{ fontSize: '1rem' }}>{text}</span> <span style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>{labelOf(p)}</span>
                                        </>
                                    ) : labelOf(p) && labelOf(p).toLowerCase() !== text.toLowerCase() ? (
                                        // مثل Idea 1 وتحتها INDEPENDENT، عشان ما يضيع الفرق بين المستقلة والتابعة
                                        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.15 }}>
                                            {text}
                                            <span style={{ fontSize: '0.58rem', textTransform: 'uppercase', opacity: 0.8 }}>{labelOf(p)}</span>
                                        </span>
                                    ) : (
                                        text
                                    )}
                                </span>
                            </span>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
