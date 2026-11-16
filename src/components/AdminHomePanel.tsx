'use client'

// يطلع للمشرف بس في الصفحة الرئيسية: الدروس، تختار المادة ثم الوحدة وتطلع لك دروسها بس (بدون سكرول طويل).
// الطلاب وعمليات البحث لهم صفحتين: /admin/students و /admin/search، وأزرارهم في النافبار الجانبي (SideNav).

import { useState } from 'react'
import Link from 'next/link'
import TopicCard from '@/components/TopicCard'
import { TOPICS, type Topic } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

const heading: React.CSSProperties = { fontSize: '1.2rem', color: PRIMARY, margin: '0 0 12px', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }

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

const chip = (on: boolean, small = false): React.CSSProperties => ({
    flexShrink: 0,
    border: `1px solid ${on ? PRIMARY : '#ecdcdd'}`,
    background: on ? PRIMARY : '#ffffff',
    color: on ? '#ffffff' : PRIMARY,
    borderRadius: '999px',
    padding: small ? '5px 12px' : '7px 16px',
    fontWeight: 'bold',
    fontSize: small ? '0.82rem' : '0.9rem',
    cursor: 'pointer',
})

export default function AdminHomePanel() {
    const courses = byCourse()
    // تفتح على مادة التحضيري (ENG 001) لأنها اللي نشتغل عليها، وإلا أول مادة
    const [course, setCourse] = useState(courses.find(([c]) => c === 'ENG 001')?.[0] ?? courses[0]?.[0] ?? '')
    const [unit, setUnit] = useState<string | null>(null)

    const units = courses.find(([c]) => c === course)?.[1] ?? []
    // إذا ما اختار وحدة، أول وحدة في المادة
    const activeUnit = units.some(([u]) => u === unit) ? unit : units[0]?.[0]
    const topics = units.find(([u]) => u === activeUnit)?.[1] ?? []

    return (
        <section style={{ maxWidth: '760px', margin: '0 auto 40px', padding: '0 20px', width: '100%' }}>
            <h2 style={heading}>📚 الدروس</h2>

            {/* على الجوال النافبار الجانبي مخفي، فالزرين هنا */}
            <div className="mobile-only" style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <Link href="/admin/students" style={{ ...chip(false), textDecoration: 'none' }}>🎓 الطلاب</Link>
                <Link href="/admin/search" style={{ ...chip(false), textDecoration: 'none' }}>🔍 وش بحثوا عنه</Link>
            </div>

            {/* المادة */}
            <div role="tablist" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '10px' }}>
                {courses.map(([c]) => (
                    <button key={c} type="button" role="tab" aria-selected={course === c} onClick={() => { setCourse(c); setUnit(null) }} style={chip(course === c)}>
                        {c}
                    </button>
                ))}
            </div>

            {/* الوحدة: كلها تبان مرة وحدة وتلف على أكثر من سطر، بدون سكرول */}
            <div role="tablist" dir="ltr" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                {units.map(([u, t]) => (
                    <button key={u} type="button" role="tab" aria-selected={activeUnit === u} onClick={() => setUnit(u)} style={chip(activeUnit === u, true)}>
                        {u} <span style={{ opacity: 0.7, fontWeight: 'normal' }}>({t.length})</span>
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {topics.map((topic) => <TopicCard key={topic.slug} topic={topic} course={course} />)}
            </div>
        </section>
    )
}
