'use client'

import { useState } from 'react'
import ChoiceExercise from '@/components/ChoiceExercise'
import WritingCheck from '@/components/WritingCheck'
import { useAiAccess } from '@/lib/useAiAccess'
import { ESPRMATH_URL } from '@/lib/links'
import type { Block } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

type Exercise = Extract<Block, { type: 'exercise' }>

/** اسم التبويب: الجزء بعد النقطتين في العنوان، مثل "Our basketball team" */
const tabName = (title: string) => title.split(':').slice(1).join(':').trim() || title

function RevealExercise({ ex }: { ex: Exercise }) {
    const access = useAiAccess()
    return (
        <section style={{ background: '#ffffff', border: `1px solid ${PRIMARY}33`, borderRadius: '12px', padding: '16px' }}>
            <h3 dir="ltr" style={{ margin: '0 0 4px', fontSize: '1.05rem', textAlign: 'right' }}>{ex.title}</h3>
            <p style={{ margin: '0 0 6px', color: '#6B5357', fontSize: '0.92rem' }}>{ex.instructions}</p>
            {/* الكتابة تحت كل سؤال للمعتمدين، وغيرهم يشوف تنبيه واحد بس */}
            <p style={{ margin: '0 0 12px', fontSize: '0.8rem', color: '#9b8a8d' }}>
                {access === 'allowed' ? (
                    '✍️ اكتب جوابك تحت كل سؤال واضغط تحقق، والذكاء يقول لك صح أو غلط.'
                ) : access === 'loading' ? null : (
                    <>
                        🔒 كتابة الجواب وتصحيحه بالذكاء للحسابات المعتمدة في{' '}
                        <a href={ESPRMATH_URL} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ color: PRIMARY, fontWeight: 'bold' }}>EsprMath</a>.
                    </>
                )}
            </p>
            <ol dir="ltr" style={{ margin: 0, paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {ex.items.map((item, i) => (
                    <RevealItem key={i} item={item} />
                ))}
            </ol>
        </section>
    )
}

/** سؤال: تحته خانة يكتب فيها جوابه ويتحقق منه بالذكاء (للمعتمدين)، وجواب نموذجي مخفي */
function RevealItem({ item }: { item: Exercise['items'][number] }) {
    return (
        <li style={{ lineHeight: 1.7 }}>
            <div>{item.q}</div>
            <WritingCheck variant="exercise" task={item.q} reference={item.a} placeholder="Write your answer..." />
            <details style={{ marginTop: '4px' }}>
                <summary style={{ cursor: 'pointer', color: PRIMARY, fontSize: '0.82rem', fontWeight: 'bold', width: 'fit-content' }}>Show answer</summary>
                <div style={{ background: '#F7E6E8', borderRadius: '8px', padding: '6px 10px', marginTop: '4px' }}>
                    <strong style={{ color: '#5A1520' }}>{item.a}</strong>
                    {item.why && <div dir="rtl" style={{ fontSize: '0.88rem', color: '#6B5357', textAlign: 'right' }}>{item.why}</div>}
                </div>
            </details>
        </li>
    )
}

/** قسم التمارين آخر الدرس: تبويبات فوق، والطالب يبدل بين التمارين بدل ما ينزل */
export default function Exercises({ exercises }: { exercises: Exercise[] }) {
    const [active, setActive] = useState(0)
    if (exercises.length === 0) return null

    return (
        <section style={{ marginTop: '36px' }}>
            <h2 style={{ fontSize: '1.3rem', color: PRIMARY, margin: '0 0 12px', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }}>
                التمارين <span style={{ fontSize: '0.9rem', color: '#9b8a8d', fontWeight: 'normal' }}>({exercises.length})</span>
            </h2>

            {exercises.length > 1 && (
                <div role="tablist" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {exercises.map((ex, i) => {
                        const on = i === active
                        return (
                            <button
                                key={i}
                                role="tab"
                                aria-selected={on}
                                onClick={() => setActive(i)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '8px 14px',
                                    borderRadius: '10px',
                                    border: `1px solid ${on ? PRIMARY : '#ecdcdd'}`,
                                    background: on ? PRIMARY : '#ffffff',
                                    color: on ? '#ffffff' : '#2A1A1D',
                                    fontWeight: 'bold',
                                    fontSize: '0.88rem',
                                    cursor: 'pointer',
                                }}
                            >
                                <span style={{ background: on ? '#ffffff33' : '#F7E6E8', color: on ? '#ffffff' : PRIMARY, borderRadius: '6px', padding: '1px 7px', fontSize: '0.8rem' }}>{i + 1}</span>
                                <span dir="ltr">{tabName(ex.title)}</span>
                            </button>
                        )
                    })}
                </div>
            )}

            {/* كل التمارين تبقى موجودة عشان ما تضيع اختيارات الطالب لما يبدل */}
            {exercises.map((ex, i) => (
                <div key={i} style={{ display: i === active ? 'block' : 'none' }}>
                    {ex.choices ? (
                        <ChoiceExercise title={ex.title} instructions={ex.instructions} choices={ex.choices} items={ex.items} />
                    ) : (
                        <RevealExercise ex={ex} />
                    )}
                </div>
            ))}
        </section>
    )
}
