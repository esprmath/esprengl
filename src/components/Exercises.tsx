'use client'

import { useEffect, useState } from 'react'
import ChoiceExercise from '@/components/ChoiceExercise'
import WritingCheck from '@/components/WritingCheck'
import { useLessonKey } from '@/components/LessonKey'
import { BONUS_POINTS, recordPoints, usePoints, type PointItems } from '@/lib/points'
import { useAiAccess } from '@/lib/useAiAccess'
import { ESPRMATH_URL } from '@/lib/links'
import { AI_COMING_SOON, AI_ENABLED, SHOW_ESPRMATH } from '@/lib/features'
import type { Block } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

type Exercise = Extract<Block, { type: 'exercise' }>

/** أقصى عدد تمارين اختيار لازم يخلصها الطالب عشان تنحسب نقاطه ويفتح له الرجوع */
const MAX_REQUIRED = 3

/** اسم التبويب: الجزء بعد النقطتين في العنوان، مثل "Our basketball team" */
const tabName = (title: string) => title.split(':').slice(1).join(':').trim() || title

const isChoice = (ex: Exercise) => !!(ex.choices || ex.items.some((it) => it.choices))

function RevealExercise({ ex }: { ex: Exercise }) {
    const access = useAiAccess()
    return (
        <section style={{ background: '#ffffff', border: `1px solid ${PRIMARY}33`, borderRadius: '12px', padding: '16px' }}>
            <h3 dir="ltr" style={{ margin: '0 0 4px', fontSize: '1.05rem', textAlign: 'right' }}>{ex.title}</h3>
            <p style={{ margin: '0 0 6px', color: '#6B5357', fontSize: '0.92rem' }}>{ex.instructions}</p>
            {/* الكتابة تحت كل سؤال للمعتمدين، وغيرهم يشوف تنبيه واحد بس */}
            <p style={{ margin: '0 0 12px', fontSize: '0.8rem', color: '#9b8a8d' }}>
                {!AI_ENABLED ? (
                    `🤖 كتابة الجواب وتصحيحه بالذكاء ${AI_COMING_SOON}.`
                ) : access === 'allowed' ? (
                    '✍️ اكتب جوابك تحت كل سؤال واضغط تحقق، والذكاء يقول لك صح أو غلط.'
                ) : access === 'loading' ? null : (
                    <>
                        🔒 كتابة الجواب وتصحيحه بالذكاء للحسابات المعتمدة
                        {SHOW_ESPRMATH && (
                            <>
                                {' '}في{' '}
                                <a href={ESPRMATH_URL} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ color: PRIMARY, fontWeight: 'bold' }}>EsprMath</a>
                            </>
                        )}
                        .
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

/** كم نقطة جابها الطالب في تمرين (أسئلته + مكافأته) */
function scoreOf(items: PointItems, lessonKey: string, index: number, count: number) {
    let n = 0
    for (let q = 0; q < count; q++) n += items[`e:${lessonKey}#${index}.${q}`] ?? 0
    return { right: n, bonus: items[`b:${lessonKey}#${index}`] ?? 0 }
}

/**
 * قسم التمارين آخر الدرس.
 * أول مرة: تمارين الاختيار بالترتيب، تمرين تمرين، وما يرجع لتمرين سابق قبل ما يخلص المطلوب (أقصى شي 3 تمارين).
 * بعدها: كل التمارين مفتوحة في تبويبات، ويعيد أي تمرين ويحسّن درجته (نحسب الأعلى لكل سؤال).
 * تمارين الكتابة اختيارية وما تنحسب، لأن ما فيه تصحيح لها الحين.
 */
export default function Exercises({ exercises }: { exercises: Exercise[] }) {
    const lessonKey = useLessonKey()
    const { items: pts } = usePoints()
    const [active, setActive] = useState(0)
    const [cursor, setCursor] = useState<number | null>(null)
    const [ready, setReady] = useState(false)

    const choiceIdx = exercises.flatMap((ex, i) => (isChoice(ex) ? [i] : []))
    const writingIdx = exercises.flatMap((ex, i) => (isChoice(ex) ? [] : [i]))
    const requiredIdx = choiceIdx.slice(0, MAX_REQUIRED)
    const tracked = !!lessonKey && requiredIdx.length > 0

    const recorded = (i: number) => pts[`e:${lessonKey}#${i}.0`] !== undefined
    const allRequiredDone = requiredIdx.every(recorded)
    const locked = tracked && !allRequiredDone

    // أول تمرين مطلوب ما انسجل له شي، ومنه نكمل لو رجع الطالب للدرس
    const firstPending = requiredIdx.findIndex((i) => !recorded(i))
    const cur = cursor ?? 0

    // نحدد التمرين الحالي مرة وحدة بعد ما تنقرا نقاط المتصفح، وبعدها ما يتحرك إلا بزر "التمرين التالي"
    useEffect(() => setReady(true), [])
    useEffect(() => {
        if (ready && cursor === null) setCursor(firstPending === -1 ? Math.max(requiredIdx.length - 1, 0) : firstPending)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready])

    // خلص التمارين المطلوبة: نسجل العلامة اللي تفتح حساب نقاط التمارين
    useEffect(() => {
        if (tracked && allRequiredDone && pts[`d:${lessonKey}`] === undefined) recordPoints([{ key: `d:${lessonKey}`, points: 0 }])
    }, [tracked, allRequiredDone, pts, lessonKey])

    // في وضع القفل يتبع التبويب النشط التمرين الحالي، عشان لما ينفتح الباقي يبقى على آخر تمرين خلصه
    useEffect(() => {
        if (locked) setActive(requiredIdx[cur])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locked, cur])

    if (exercises.length === 0) return null

    const onChecked = (i: number) => (results: boolean[]) => {
        if (!lessonKey) return
        const entries = results.map((ok, q) => ({ key: `e:${lessonKey}#${i}.${q}`, points: ok ? 1 : 0 }))
        if (results.every(Boolean)) entries.push({ key: `b:${lessonKey}#${i}`, points: BONUS_POINTS })
        recordPoints(entries)
    }

    // مجموع نقاط التمارين الممكنة: نقطة لكل سؤال + مكافأة كل تمرين اختيار
    const maxPoints = choiceIdx.reduce((sum, i) => sum + exercises[i].items.length + BONUS_POINTS, 0)
    const earned = choiceIdx.reduce((sum, i) => {
        const s = scoreOf(pts, lessonKey, i, exercises[i].items.length)
        return sum + s.right + s.bonus
    }, 0)

    const wrap = (children: React.ReactNode) => (
        <section style={{ marginTop: '36px' }}>
            <h2 style={{ fontSize: '1.3rem', color: PRIMARY, margin: '0 0 12px', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }}>
                التمارين <span style={{ fontSize: '0.9rem', color: '#9b8a8d', fontWeight: 'normal' }}>({exercises.length})</span>
            </h2>
            {children}
        </section>
    )

    const choiceView = (i: number) => {
        const ex = exercises[i]
        const isLast = locked && cur === requiredIdx.length - 1
        return (
            <ChoiceExercise
                title={ex.title}
                instructions={ex.instructions}
                choices={ex.choices}
                items={ex.items}
                onChecked={onChecked(i)}
                allowRetry={!locked}
                after={(score, total) => {
                    const perfect = score === total
                    return (
                        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                            {lessonKey && (
                                <span style={{ background: '#FDEBC8', color: '#8a4b0a', borderRadius: '999px', padding: '4px 12px', fontWeight: 'bold', fontSize: '0.88rem' }}>
                                    ⭐ +{score + (perfect ? BONUS_POINTS : 0)} نقطة{perfect ? ` (منها ${BONUS_POINTS} مكافأة التمرين الكامل)` : ''}
                                </span>
                            )}
                            {locked && !isLast && (
                                <button onClick={() => { setCursor(cur + 1) }} style={{ background: PRIMARY, color: '#ffffff', border: 'none', borderRadius: '10px', padding: '10px 20px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer' }}>
                                    التمرين التالي ←
                                </button>
                            )}
                        </div>
                    )
                }}
            />
        )
    }

    // بنية وحدة للوضعين (أول مرة / بعد ما يخلص المطلوب)، عشان تمارينه ما تنعاد من الصفر لما ينفتح الباقي
    const visible = (i: number) => (locked ? i === requiredIdx[cur] : i === active)

    return wrap(
        <>
            {locked ? (
                <div style={{ background: '#FFF8E6', border: '1px solid #F2DCA8', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        {requiredIdx.map((_, s) => (
                            <span key={s} style={{ flex: 1, height: '8px', borderRadius: '999px', background: s < cur || recorded(requiredIdx[s]) ? '#2E9E62' : s === cur ? PRIMARY : '#ecdcdd' }} />
                        ))}
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#5A1520' }}>التمرين {cur + 1} من {requiredIdx.length}</div>
                    <div style={{ fontSize: '0.88rem', color: '#6B5357', lineHeight: 1.8 }}>
                        خلصهم بالترتيب عشان تنحسب نقاطك: كل سؤال نقطة، والتمرين الكامل كله صح +{BONUS_POINTS}. وبعدها تقدر تعيد أي تمرين وتحسّن درجتك.
                    </div>
                </div>
            ) : (
                <>
                    {tracked && (
                        <div style={{ background: '#ECF8F1', border: '1px solid #9AD3B2', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px' }}>
                            <div style={{ fontWeight: 'bold', color: '#1E7A4A' }}>🎉 خلصت التمارين المطلوبة · نقاط التمارين: {earned} من {maxPoints}</div>
                            <div style={{ fontSize: '0.88rem', color: '#2f6b47', lineHeight: 1.8 }}>
                                اختر أي تمرين وأعده. تنحسب أعلى درجة لكل سؤال، فالنقاط ما تتضاعف.
                            </div>
                        </div>
                    )}
                    {exercises.length > 1 && (
                        <div role="tablist" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                            {exercises.map((ex, i) => {
                                const on = i === active
                                const s = tracked && isChoice(ex) ? scoreOf(pts, lessonKey, i, ex.items.length) : null
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
                                        {s && <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>{s.right}/{ex.items.length}{s.bonus ? ' ⭐' : ''}</span>}
                                    </button>
                                )
                            })}
                        </div>
                    )}
                </>
            )}

            {/* كل تمارين الاختيار تبقى موجودة عشان ما تضيع اختيارات الطالب ونتيجته لما يبدل أو ينفتح الباقي */}
            {exercises.map((ex, i) =>
                isChoice(ex) ? (
                    <div key={i} style={{ display: visible(i) ? 'block' : 'none' }}>{choiceView(i)}</div>
                ) : locked ? null : (
                    <div key={i} style={{ display: visible(i) ? 'block' : 'none' }}><RevealExercise ex={ex} /></div>
                ),
            )}

            {locked && writingIdx.length > 0 && (
                <div style={{ marginTop: '18px' }}>
                    <div style={{ fontSize: '0.88rem', color: '#6B5357', marginBottom: '6px' }}>✍️ تمارين كتابة اختيارية، وما تنحسب نقاطها:</div>
                    {writingIdx.map((i) => (
                        <details key={i} style={{ marginBottom: '8px' }}>
                            <summary dir="ltr" style={{ cursor: 'pointer', color: PRIMARY, fontWeight: 'bold', fontSize: '0.92rem', textAlign: 'right' }}>{exercises[i].title}</summary>
                            <div style={{ marginTop: '8px' }}><RevealExercise ex={exercises[i]} /></div>
                        </details>
                    ))}
                </div>
            )}
        </>,
    )
}
