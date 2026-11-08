'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { supabase } from '@/lib/supabase'

/** النافبار مع قراءة حالة الدخول بنفسه، للصفحات اللي تُبنى على السيرفر */
export default function SiteNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => setIsLoggedIn(!!session))
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setIsLoggedIn(!!session))
        return () => subscription.unsubscribe()
    }, [])

    return <Navbar isLoggedIn={isLoggedIn} />
}
