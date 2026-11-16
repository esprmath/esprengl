'use client'

// للمشرف بس (صفحة /admin/students): الطلاب اللي دخلوا موقع الإنجليزي، وجنب كل واحد إذا مسجل في كورس ماث.

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { SHOW_ESPRMATH } from '@/lib/features'

const cell: React.CSSProperties = { padding: '8px', textAlign: 'right' }

interface EnglStudent {
    id: string
    email: string | null
    full_name: string | null
    /** كورسات EsprMath اللي مسجل فيها، فاضية إذا مو مسجل هناك */
    math_courses: string[] | null
}

export default function EnglStudents() {
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
