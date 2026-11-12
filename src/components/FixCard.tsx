'use client'

import { useState } from 'react'
import { Breakdown, KINDS } from '@/components/SentenceParts'
import { MarkedLine } from '@/components/LessonErrors'
import { useLessonKey } from '@/components/LessonKey'
import { recordPoints } from '@/lib/points'
import type { Part, PartKind } from '@/content/lessons'

/**
 * بطاقة تصحيح (قسم الأمثلة): جملة غلط واسم خطئها، والطالب يختار الصح.
 * الغلط يطلع له "جرب غيرها" وما ينكشف الجواب، والصح تنفتح له الجملة ملونة مع سبب الخطأ.
 * نقطة لمن يصيب من أول مرة.
 */
export default function FixCard({ id, label, kind, wrong, mark, options, answer, why, parts, onSolved }: { onSolved?: () => void; id: string; label: string; kind: PartKind; wrong: string; mark?: string; options: string[]; answer: string; why: string; parts?: Part[] }) {
    const lessonKey = useLessonKey()
    const [tries, setTries] = useState<string[]>([])
    const solved = tries.includes(answer)
    const k = KINDS[kind]
    const PRIMARY = '#7a1f2b'

    const pick = (o: string) => {
        if (solved || tries.includes(o)) return
        setTries((t) => [...t, o])
        if (o === answer) {
            if (lessonKey) recordPoints([{ key: `c:${lessonKey}#${id}.0`, points: tries.length === 0 ? 1 : 0 }])
            onSolved?.()
        }
    }

    return (
        <div style={{ background: '#ffffff', border: `1px solid ${k.color}44`, borderInlineStart: `5px solid ${k.color}`, borderRadius: '12px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: k.bg, color: k.color, fontWeight: 'bold', fontSize: '0.8rem', padding: '3px 10px', borderRadius: '999px' }}>فيها خطأ: {label}</span>
            </div>
            <div dir="ltr" style={{ fontSize: '1.15rem', lineHeight: 1.6, color: solved ? '#9b8a8d' : '#2A1A1D', textDecoration: solved ? 'line-through' : 'none' }}>
                <MarkedLine line={wrong} mark={mark} kind={kind} />
            </div>

            {!solved && (
                <>
                    <div style={{ fontSize: '0.88rem', color: '#6B5357' }}>اختر الجملة الصحيحة:</div>
                    <div dir="ltr" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {options.map((o) => {
                            const bad = tries.includes(o)
                            return (
                                <button
                                    key={o}
                                    type="button"
                                    onClick={() => pick(o)}
                                    disabled={bad}
                                    style={{ textAlign: 'left', padding: '12px 12px', borderRadius: '9px', border: `1.5px solid ${bad ? '#F2B8B0' : '#ecdcdd'}`, background: bad ? '#FDEEEC' : '#ffffff', color: bad ? '#B42318' : '#2A1A1D', textDecoration: bad ? 'line-through' : 'none', fontSize: '0.98rem', cursor: bad ? 'default' : 'pointer' }}
                                >
                                    {o}
                                </button>
                            )
                        })}
                    </div>
                    {tries.length > 0 && <div style={{ fontSize: '0.86rem', color: '#B42318' }}>مو هذي. جرب غيرها.</div>}
                </>
            )}

            {solved && (
                <>
                    <div style={{ fontWeight: 'bold', color: '#1E7A4A', fontSize: '0.92rem' }}>✓ صح{tries.length === 1 ? ' · +1 نقطة ⭐' : ''}</div>
                    {parts ? <Breakdown parts={parts} /> : <div dir="ltr" style={{ fontSize: '1.1rem', color: '#1F5132', fontWeight: 600 }}>{answer}</div>}
                    <div style={{ fontSize: '0.92rem', color: '#2A1A1D', lineHeight: 1.8 }}>💡 {why}</div>
                    {tries.length > 1 && (
                        <button type="button" onClick={() => setTries([])} style={{ alignSelf: 'flex-start', background: '#ffffff', color: PRIMARY, border: `1px solid ${PRIMARY}`, borderRadius: '10px', padding: '6px 14px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer' }}>
                            حاول مرة ثانية عشان النقطة
                        </button>
                    )}
                </>
            )}
        </div>
    )
}
