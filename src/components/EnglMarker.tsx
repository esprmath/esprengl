'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

/**
 * الحسابات مشتركة مع EsprMath، فنعلّم الحساب اللي يدخل EsprEngl بـ engl: true في بياناته،
 * عشان تطلع للمشرف قائمة طلاب الإنجليزي بس. يتعلّم مرة وحدة لكل حساب.
 */
export default function EnglMarker() {
    useEffect(() => {
        const mark = (meta: Record<string, unknown> | undefined) => {
            if (meta && meta.engl !== true) supabase.auth.updateUser({ data: { engl: true } })
        }
        supabase.auth.getSession().then(({ data: { session } }) => mark(session?.user.user_metadata))
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') mark(session?.user.user_metadata)
        })
        return () => subscription.unsubscribe()
    }, [])
    return null
}
