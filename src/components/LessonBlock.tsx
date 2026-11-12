'use client'

import { Breakdown, Formula, KINDS } from '@/components/SentenceParts'
import LessonErrors from '@/components/LessonErrors'
import FixCard from '@/components/FixCard'
import { useLessonKey } from '@/components/LessonKey'
import { recordPoints } from '@/lib/points'
import WritingCheck from '@/components/WritingCheck'
import ChoiceExercise from '@/components/ChoiceExercise'
import FamilyTree from '@/components/FamilyTree'
import Exercises from '@/components/Exercises'
import WarmupQuestion from '@/components/WarmupQuestion'
import { NamePicker, useNameChoice } from '@/components/NameChoice'
import { fillDeep } from '@/lib/names'
import type { Block, Warmup } from '@/content/lessons'

// عرض بلوكات الدرس. هنا (مو في الصفحة) عشان النصوص تتعبى باسم الشخصية اللي اختاره الطالب وهو يقرأ.

const PRIMARY = '#7a1f2b'

/** خريطة صغيرة بمربعات: أماكن، وشوارع بلون رمادي، وفراغات. نفس الشكل على الجوال */
function LessonMap({ rows, caption }: { rows: string[][]; caption?: string }) {
    const cols = Math.max(...rows.map((r) => r.length))
    return (
        <figure style={{ margin: 0 }}>
            <div dir="ltr" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: '6px', background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '12px', padding: '10px' }}>
                {rows.flatMap((row, i) =>
                    row[0]?.startsWith('~')
                        ? [<div key={i} style={{ gridColumn: `1 / span ${cols}`, background: '#E7E2E3', borderRadius: '6px', padding: '6px', textAlign: 'center', color: '#6B5357', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>{row[0].slice(1)}</div>]
                        : row.map((cell, j) => (
                              <div key={`${i}-${j}`} style={{ minHeight: '58px', borderRadius: '8px', background: cell ? '#F7E6E8' : 'transparent', border: cell ? '1px solid #E4A3AB' : '1px dashed #ecdcdd', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4px', fontSize: '0.82rem', fontWeight: 'bold', color: '#5A1520', lineHeight: 1.3 }}>
                                  {cell}
                              </div>
                          )),
                )}
            </div>
            {caption && <figcaption style={{ fontSize: '0.88rem', color: '#6B5357', marginTop: '6px' }}>{caption}</figcaption>}
        </figure>
    )
}

/** سؤال سريع وسط الشرح: كل سؤال نقطة، وتنحسب مباشرة */
function QuickCheck({ block, id, onDone }: { block: Extract<Block, { type: 'check' }>; id: string; onDone?: () => void }) {
    const lessonKey = useLessonKey()
    return (
        <ChoiceExercise
            badge="سؤال سريع"
            title="تأكد إنك فهمت"
            instructions="جاوب واضغط تحقق، وبعدها كمّل."
            choices={block.choices}
            items={block.items}
            onChecked={(results) => {
                if (lessonKey) recordPoints(results.map((ok, q) => ({ key: `c:${lessonKey}#${id}.${q}`, points: ok ? 1 : 0 })))
                onDone?.()
            }}
            after={(score) => (lessonKey ? <div style={{ marginTop: '10px' }}><span style={{ background: '#FDEBC8', color: '#8a4b0a', borderRadius: '999px', padding: '4px 12px', fontWeight: 'bold', fontSize: '0.85rem' }}>⭐ +{score} نقطة</span></div> : null)}
        />
    )
}

/** id: رقم البلوك في الدرس (ومعه مسار الخطأ لو داخل ورقة أخطاء)، يتركب منه مفتاح نقاط كل سؤال */
function BlockView({ block, id, onCheck }: { block: Block; id: string; onCheck?: () => void }) {
    switch (block.type) {
        case 'names':
            return <NamePicker />
        case 'text':
            return <p style={{ fontSize: '1.05rem', lineHeight: 1.9, margin: 0 }}>{block.text}</p>
        case 'rule':
            return (
                <div dir="ltr" style={{ background: '#F7E6E8', borderInlineStart: `4px solid ${PRIMARY}`, padding: '12px 16px', fontWeight: 'bold', color: '#5A1520', fontSize: '1.02rem' }}>
                    {block.text}
                </div>
            )
        case 'example':
            return (
                <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '10px', padding: '10px 14px' }}>
                    <div dir="ltr" style={{ fontSize: '1.05rem', color: '#2A1A1D', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{block.en}</div>
                    {block.ar && <div style={{ fontSize: '0.92rem', color: '#6B5357', marginTop: '4px' }}>{block.ar}</div>}
                </div>
            )
        case 'note':
            return (
                <div style={{ background: '#FEF3C7', border: '1px solid #f6d8b5', borderRadius: '10px', padding: '10px 14px', color: '#7a4a1d', fontSize: '0.95rem' }}>
                    ⚠️ {block.text}
                </div>
            )
        case 'try':
            return <WritingCheck task={block.task} reference={block.reference} placeholder={block.placeholder} />
        case 'check':
            return <QuickCheck block={block} id={id} onDone={onCheck} />
        case 'label':
            return (
                <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F7E6E8', color: '#5A1520', fontWeight: 'bold', fontSize: '0.85rem', padding: '3px 12px', borderRadius: '999px' }}>
                        {block.icon && <span>{block.icon}</span>}
                        {block.text}
                    </span>
                </div>
            )
        case 'steps':
            return (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px' }}>
                    {block.items.map((it, i) => {
                        const k = KINDS[it.kind]
                        return (
                            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: '#ffffff', border: `1px solid ${k.color}44`, borderTop: `4px solid ${k.color}`, borderRadius: '12px', padding: '12px 14px' }}>
                                <span style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%', background: k.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.05rem' }}>{i + 1}</span>
                                <div style={{ minWidth: 0 }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.05rem', color: k.color }}>{it.title}</div>
                                    {it.ar && <div style={{ fontSize: '0.88rem', color: '#6B5357', lineHeight: 1.7, marginTop: '2px' }}>{it.ar}</div>}
                                    {it.en && <div dir="ltr" style={{ display: 'inline-block', marginTop: '6px', background: k.bg, color: k.color, borderRadius: '6px', padding: '2px 8px', fontWeight: 600, fontSize: '0.95rem' }}>{it.en}</div>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        case 'errors':
            return <LessonErrors title={block.title} items={block.items} fixed={block.fixed} renderBlocks={(blocks, prefix, done) => blocks.map((b, j) => <BlockView key={j} block={b} id={`${id}.${prefix}.${j}`} onCheck={done} />)} />
        case 'fix':
            return <FixCard id={id} label={block.label} kind={block.kind} wrong={block.wrong} mark={block.mark} options={block.options} answer={block.answer} why={block.why} parts={block.parts} onSolved={onCheck} />
        case 'map':
            return <LessonMap rows={block.rows} caption={block.caption} />
        case 'tree':
            return <FamilyTree root={block.root} caption={block.caption} />
        case 'formula':
            return <Formula parts={block.parts} />
        case 'breakdown':
            return <Breakdown parts={block.parts} ar={block.ar} />
        case 'heading':
            return <h2 style={{ fontSize: '1.3rem', color: PRIMARY, margin: '18px 0 0', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }}>{block.text}</h2>
        case 'list': {
            const isEn = block.lang !== 'ar'
            const Tag = block.ordered ? 'ol' : 'ul'
            return (
                <Tag dir={isEn ? 'ltr' : 'rtl'} style={{ margin: 0, fontSize: '1.03rem', lineHeight: 1.9, background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '10px', padding: '12px 14px', paddingInlineStart: '38px' }}>
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </Tag>
            )
        }
        case 'table': {
            // على الجوال: بطاقات تحت بعض بدل جدول يحتاج سكرول للجنب
            const cards =
                block.stackBy === 'column'
                    ? block.head.map((h, c) => ({ title: h, lines: block.rows.map((row) => ({ label: '', text: row[c] })) }))
                    : block.rows.map((row) => ({ title: row[0], lines: row.slice(1).map((text, c) => ({ label: block.head[c + 1], text })) }))
            return (
                <>
                    <div className="desk-only" dir="ltr" style={{ overflowX: 'auto', border: '1px solid #ecdcdd', borderRadius: '10px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', background: '#ffffff' }}>
                            <thead>
                                <tr>
                                    {block.head.map((h, i) => (
                                        <th key={i} style={{ background: PRIMARY, color: '#ffffff', padding: '10px 12px', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {block.rows.map((row, r) => (
                                    <tr key={r}>
                                        {row.map((cell, c) => (
                                            <td key={c} style={{ padding: '10px 12px', borderTop: '1px solid #ecdcdd', verticalAlign: 'top', lineHeight: 1.7, minWidth: '140px' }}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mobile-only" dir="ltr" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {cards.map((card, i) => (
                            <div key={i} style={{ border: '1px solid #ecdcdd', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <div style={{ background: PRIMARY, color: '#ffffff', padding: '9px 12px', fontWeight: 'bold' }}>{card.title}</div>
                                {card.lines.map((line, j) => (
                                    <div key={j} style={{ padding: '9px 12px', borderTop: j ? '1px solid #ecdcdd' : 'none', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                        {line.label && <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9b6b72', textTransform: 'uppercase' }}>{line.label}</div>}
                                        {line.text}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )
        }
        case 'exercise':
            return null // تنعرض كلها في قسم التمارين آخر الدرس
    }
}

/** بلوك بعد ما تتبدل رموز الأسماء فيه */
export default function LessonBlock({ block, index }: { block: Block; index: number }) {
    const choice = useNameChoice()
    return <BlockView block={fillDeep(block, choice)} id={String(index)} />
}

/** التمارين بنفس الاسم */
export function NamedExercises({ exercises }: { exercises: Parameters<typeof Exercises>[0]['exercises'] }) {
    const choice = useNameChoice()
    return <Exercises exercises={fillDeep(exercises, choice)} />
}

/** سؤال البداية بنفس الاسم */
export function NamedWarmup({ warmup, lessonKey }: { warmup: Warmup; lessonKey: string }) {
    const choice = useNameChoice()
    return <WarmupQuestion warmup={fillDeep(warmup, choice)} lessonKey={lessonKey} />
}

