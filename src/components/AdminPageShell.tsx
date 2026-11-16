'use client'

// إطار صفحات المشرف (/admin/students و /admin/search): يتأكد إنه مشرف، ويحط العنوان ورابط الرجوع.
// الحماية الفعلية للبيانات من RLS في Supabase، وهذا الفحص بس يخفي الصفحة عن الباقين.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { supabase } from '@/lib/supabase'
import { checkIsAdmin } from '@/lib/admin'

const PRIMARY = '#7a1f2b'

export default function AdminPageShell({ title, children }: { title: string; children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // null = لسا نفحص
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

    useEffect(() => {
        const apply = (email: string | null, loggedIn: boolean) => {
            setIsLoggedIn(loggedIn)
            checkIsAdmin(email).then(setIsAdmin)
        }
        supabase.auth.getSession().then(({ data: { session } }) => apply(session?.user?.email || null, !!session))
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => apply(session?.user?.email || null, !!session))
        return () => subscription.unsubscribe()
    }, [])

    return (
        <div style={{ minHeight: '100dvh', color: '#2A1A1D' }}>
            <div className="top-nav-only">
                <Navbar isLoggedIn={isLoggedIn} />
            </div>
            <main style={{ maxWidth: '760px', margin: '0 auto', padding: '28px 20px 60px' }}>
                <Link href="/" style={{ color: PRIMARY, fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>← الرئيسية</Link>
                {isAdmin === null ? (
                    <p style={{ color: '#9b8a8d', marginTop: '20px' }}>جاري التحميل…</p>
                ) : !isAdmin ? (
                    <p style={{ color: '#B42318', fontWeight: 'bold', marginTop: '20px' }}>هذي الصفحة للمشرف بس.</p>
                ) : (
                    <>
                        <h1 style={{ fontSize: '1.4rem', color: PRIMARY, margin: '14px 0 14px', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }}>{title}</h1>
                        {children}
                    </>
                )}
            </main>
        </div>
    )
}
