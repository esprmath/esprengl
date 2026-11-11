'use client'

// يطلع للمشرف بس في الصفحة الرئيسية: كل الدروس، وطلاب الإنجليزي، وعمليات البحث اللي ما لقت درس.

import { useEffect, useState } from 'react'
import TopicCard from '@/components/TopicCard'
import { SearchMisses } from '@/components/SearchMisses'
import { supabase } from '@/lib/supabase'
import { SHOW_ESPRMATH } from '@/lib/features'
import { TOPICS, type Topic } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

const heading: React.CSSProperties = { fontSize: '1.2rem', color: PRIMARY, margin: '0 0 12px', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }
const cell: React.CSSProperties = { padding: '8px', textAlign: 'right' }

/** الدروس مصنفة بالمادة ثم الوحدة. العنوان اللي جا في أكثر من مادة يطلع تحت كل مادة */
function byCourse(): [string, [string, Topic[]][]][] {
    const courses = new Map<string, Map<string, Topic[]>>()
    TOPICS.forEach((topic) =>
        topic.lessons.forEach((lesson) => {
            const units = courses.get(lesson.course) ?? new Map<string, Topic[]>()
            const unit = lesson.unit ?? 'Other'
            units.set(unit, [...(units.get(unit) ?? []), topic])
            courses.set(lesson.course, units)
        }),
    )
    return [...courses.entries()].map(([course, units]) => [course, [...units.entries()]])
}

interface EnglStudent {
    id: string
    email: string | null
    full_name: string | null
    /** كورسات EsprMath اللي مسجل فيها، فاضية إذا مو مسجل هناك */
    math_courses: string[] | null
}

/** الطلاب اللي دخلوا موقع الإنجليزي بس، وجنب كل واحد إذا مسجل في كورس ماث */
function EnglStudents() {
    const [rows, setRows] = useState<EnglStudent[] | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        supabase.rpc('admin_engl_students').then(({ data, error }) => {
            if (error) setError(true)
            else setRows((data ?? []) as EnglStudent[])
        })
    }, [])

    if (error) return <p style={{ color: '#B42318', fontWeight: 'bold' }}>ما قدرنا نجيب الطلاب. تأكد إن ملف 20261110_engl_students.sql منشغل في Supabase.</p>
    if (!rows) return <p style={{ color: '#9b8a8d' }}>جاري التحميل…</p>
    if (rows.length === 0) return <p style={{ color: '#9b8a8d' }}>ما فيه أحد للحين.</p>

    return (
        <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '14px', padding: '8px 10px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                    <tr style={{ color: '#6B5357' }}>
                        <th style={cell}>الطالب</th>
                        {SHOW_ESPRMATH && <th style={cell}>كورس ماث</th>}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                        <tr key={r.id} style={{ borderTop: '1px solid #ecdcdd' }}>
                            <td style={cell}>
                                <div style={{ fontWeight: 'bold' }}>{r.full_name || 'بدون اسم'}</div>
                                <div dir="ltr" style={{ color: '#9b8a8d', fontSize: '0.82rem', textAlign: 'right' }}>{r.email}</div>
                            </td>
                            {SHOW_ESPRMATH && (
                                <td style={cell}>
                                    {r.math_courses?.length
                                        ? <span style={{ color: '#1E7A4A', fontWeight: 'bold' }}>✓ Math {r.math_courses.join('، ')}</span>
                                        : <span style={{ color: '#9b8a8d' }}>لا</span>}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const chip = (on: boolean): React.CSSProperties => ({
    flexShrink: 0,
    border: `1px solid ${on ? PRIMARY : '#ecdcdd'}`,
    background: on ? PRIMARY : '#ffffff',
    color: on ? '#ffffff' : PRIMARY,
    borderRadius: '999px',
    padding: '7px 16px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
})

export default function AdminHomePanel() {
    const courses = byCourse()
    // 'all' كل الدروس، أو رمز مادة وحدة
    const [picked, setPicked] = useState('all')
    const shown = picked === 'all' ? courses : courses.filter(([course]) => course === picked)
    const countOf = (units: [string, Topic[]][]) => units.reduce((n, [, topics]) => n + topics.length, 0)

    return (
        <section style={{ maxWidth: '760px', margin: '0 auto 40px', padding: '0 20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
                <h2 style={heading}>📚 الدروس</h2>
                {/* التصنيفات بالعرض: كل الدروس، ومادة مادة */}
                <div role="tablist" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '14px' }}>
                    <button type="button" role="tab" aria-selected={picked === 'all'} onClick={() => setPicked('all')} style={chip(picked === 'all')}>
                        كل الدروس ({courses.reduce((n, [, units]) => n + countOf(units), 0)})
                    </button>
                    {courses.map(([course, units]) => (
                        <button key={course} type="button" role="tab" aria-selected={picked === course} onClick={() => setPicked(course)} style={chip(picked === course)}>
                            {course} ({countOf(units)})
                        </button>
                    ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    {shown.map(([course, units]) => (
                        <div key={course}>
                            {picked === 'all' && <h3 style={{ display: 'inline-block', margin: '0 0 10px', background: PRIMARY, color: '#ffffff', fontSize: '0.95rem', padding: '4px 12px', borderRadius: '8px' }}>{course}</h3>}
                            {units.map(([unit, topics]) => (
                                <div key={unit} style={{ marginBottom: '14px' }}>
                                    <h4 dir="ltr" style={{ margin: '0 0 8px', fontSize: '0.95rem', color: '#6B5357', textAlign: 'right' }}>{unit}</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {topics.map((topic) => <TopicCard key={topic.slug} topic={topic} course={course} />)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 style={heading}>🎓 طلاب الإنجليزي</h2>
                <EnglStudents />
            </div>

            <div>
                <h2 style={heading}>🔍 وش بحثوا عنه</h2>
                <SearchMisses />
            </div>
        </section>
    )
}
