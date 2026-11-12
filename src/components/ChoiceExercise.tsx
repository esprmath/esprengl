'use client'

import { useState } from 'react'

const PRIMARY = '#7a1f2b'
// لون لكل خيار حسب ترتيبه
const COLORS = [
    { color: '#1F4E79', bg: '#E4EDF7' },
    { color: '#7a1f2b', bg: '#F7E1E4' },
    { color: '#6B3FA0', bg: '#EEE6F7' },
    { color: '#0F6B5C', bg: '#DDF1EB' },
]

type Item = { q: string; a: string; why?: string; choices?: string[] }

/** الكلمة بين ** ** تطلع عريضة وتحتها خط، مثل الكلمة المحددة في أسئلة الاختبار */
function Marked({ text }: { text: string }) {
    return (
        <>
            {text.split('**').map((piece, i) =>
                i % 2 ? (
                    <strong key={i} style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: '#2A1A1D' }}>
                        {piece}
                    </strong>
                ) : (
                    piece
                ),
            )}
        </>
    )
}

/**
 * تمرين اختيار: الطالب يختار لكل سؤال، وفي الأخير يضغط تحقق.
 * الخيارات المشتركة تطلع جنب السؤال، والسؤال اللي له خيارات خاصة تطلع خياراته تحته.
 *
 * onChecked: يُستدعى لما يضغط تحقق، ومعه صح/غلط لكل سؤال (للنقاط).
 * allowRetry: false في المرة الأولى لتمارين الدرس (ما يعيد قبل ما يخلص كل التمارين).
 * after: شي يطلع تحت النتيجة (مثل زر "التمرين التالي" أو سطر النقاط).
 */
export default function ChoiceExercise({
    title,
    instructions,
    choices = [],
    items,
    badge = 'تمرين',
    onChecked,
    allowRetry = true,
    after,
}: {
    title: string
    instructions: string
    choices?: string[]
    items: Item[]
    badge?: string
    onChecked?: (results: boolean[]) => void
    allowRetry?: boolean
    after?: (score: number, total: number) => React.ReactNode
}) {
    const [picked, setPicked] = useState<(string | null)[]>(() => items.map(() => null))
    const [checked, setChecked] = useState(false)

    const answered = picked.filter(Boolean).length
    const score = items.filter((it, i) => picked[i] === it.a).length

    const pick = (i: number, c: string) => {
        if (checked) return
        setPicked((p) => p.map((v, j) => (j === i ? c : v)))
    }
    const check = () => {
        setChecked(true)
        onChecked?.(items.map((it, i) => picked[i] === it.a))
    }
    const reset = () => {
        setPicked(items.map(() => null))
        setChecked(false)
    }

    return (
        <section style={{ background: '#ffffff', border: `1px solid ${PRIMARY}33`, borderRadius: '12px', padding: '16px', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ background: PRIMARY, color: '#ffffff', fontSize: '0.75rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '6px' }}>{badge}</span>
                <h3 dir="ltr" style={{ margin: 0, fontSize: '1.05rem' }}>{title}</h3>
            </div>
            <p style={{ margin: '0 0 14px', color: '#6B5357', fontSize: '0.92rem' }}>{instructions}</p>

            <ol dir="ltr" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {items.map((item, i) => {
                    const mine = picked[i]
                    const right = mine === item.a
                    const rowBg = !checked ? '#ffffff' : right ? '#ECF8F1' : '#FDEEEC'
                    const rowBorder = !checked ? '#ecdcdd' : right ? '#9AD3B2' : '#F2B8B0'
                    const own = !!item.choices
                    const options = item.choices ?? choices
                    return (
                        <li key={i} className={own ? 'choice-row' : 'choice-row choice-row-side'} style={{ display: 'flex', flexDirection: own ? 'column-reverse' : 'row-reverse', gap: own ? '8px' : '12px', alignItems: own ? 'stretch' : 'flex-start', background: rowBg, border: `1px solid ${rowBorder}`, borderRadius: '10px', padding: '10px 12px' }}>
                            <div className="choice-opts" style={{ display: 'flex', gap: '6px', flexShrink: 0, flexWrap: own ? 'wrap' : 'nowrap' }}>
                                {options.map((c, ci) => {
                                    const col = COLORS[ci % COLORS.length]
                                    const isMine = mine === c
                                    const isAnswer = checked && c === item.a
                                    const active = isMine || isAnswer
                                    return (
                                        <button
                                            key={c}
                                            onClick={() => pick(i, c)}
                                            disabled={checked}
                                            style={{
                                                minWidth: '42px',
                                                padding: '5px 8px',
                                                borderRadius: '8px',
                                                border: `2px solid ${active ? col.color : col.color + '55'}`,
                                                background: active ? col.color : col.bg,
                                                color: active ? '#ffffff' : col.color,
                                                fontWeight: 'bold',
                                                fontSize: '0.85rem',
                                                cursor: checked ? 'default' : 'pointer',
                                                opacity: checked && !active ? 0.4 : 1,
                                                outline: isAnswer && !isMine ? '2px dashed #2E9E62' : 'none',
                                                outlineOffset: '2px',
                                            }}
                                        >
                                            {c}
                                        </button>
                                    )
                                })}
                            </div>
                            <div style={{ flex: 1, lineHeight: 1.6, paddingTop: '3px' }}>
                                <span style={{ color: '#9b8a8d', marginRight: '6px' }}>{i + 1}.</span>
                                <Marked text={item.q} />
                                {checked && (
                                    <div dir="rtl" style={{ fontSize: '0.86rem', marginTop: '4px', textAlign: 'right', color: right ? '#1E7A4A' : '#B42318' }}>
                                        {right ? '✓ صح' : mine ? `✗ الجواب الصحيح ${item.a}` : `لم تجاوب، الجواب ${item.a}`}
                                        {item.why && <span style={{ color: '#6B5357' }}> · {item.why}</span>}
                                    </div>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ol>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px', flexWrap: 'wrap' }}>
                {!checked ? (
                    <>
                        <button
                            onClick={check}
                            disabled={answered === 0}
                            style={{ background: answered ? PRIMARY : '#d9c5c8', color: '#ffffff', border: 'none', borderRadius: '10px', padding: '10px 22px', fontWeight: 'bold', fontSize: '0.95rem', cursor: answered ? 'pointer' : 'default' }}
                        >
                            تحقق من إجاباتك
                        </button>
                        <span style={{ color: '#6B5357', fontSize: '0.88rem' }}>جاوبت {answered} من {items.length}</span>
                    </>
                ) : (
                    <>
                        <span style={{ fontWeight: 'bold', fontSize: '1.05rem', color: score === items.length ? '#1E7A4A' : PRIMARY }}>
                            {score === items.length ? '🎉 ' : ''}نتيجتك {score} من {items.length}
                        </span>
                        {allowRetry && (
                            <button onClick={reset} style={{ background: '#ffffff', color: PRIMARY, border: `1px solid ${PRIMARY}`, borderRadius: '10px', padding: '8px 18px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer' }}>
                                حاول مرة ثانية
                            </button>
                        )}
                    </>
                )}
            </div>
            {checked && after?.(score, items.length)}
        </section>
    )
}
