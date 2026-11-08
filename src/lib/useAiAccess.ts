'use client'

// هل الحساب الحالي يقدر يستخدم الذكاء؟ (معتمد في EsprMath)
// الواجهة تستخدمه عشان تقفل أو تفتح أدوات الذكاء، والخادم يتحقق مرة ثانية قبل كل رد.
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { hasAiAccess } from '@/lib/aiAccess'

export type AiAccess = 'loading' | 'allowed' | 'guest' | 'unapproved'

export function useAiAccess(): AiAccess {
    const [access, setAccess] = useState<AiAccess>('loading')
    useEffect(() => {
        let alive = true
        const check = async (userId?: string) => {
            const next: AiAccess = !userId ? 'guest' : (await hasAiAccess(supabase, userId)) ? 'allowed' : 'unapproved'
            if (alive) setAccess(next)
        }
        supabase.auth.getSession().then(({ data: { session } }) => check(session?.user.id))
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => check(session?.user.id))
        return () => {
            alive = false
            subscription.unsubscribe()
        }
    }, [])
    return access
}
