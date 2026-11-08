import { supabase } from '@/lib/supabase'

const TABLE = 'engl_plan_completions'

/** الخطط اللي خلصها الطالب، فاضية إذا ما سجل دخول */
export async function fetchCompletedPlans(): Promise<Set<string>> {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return new Set()
    const { data, error } = await supabase.from(TABLE).select('plan_slug').eq('user_id', session.user.id)
    if (error) return new Set()
    return new Set(data.map((row) => row.plan_slug as string))
}

export async function setPlanCompleted(planSlug: string, done: boolean): Promise<string | null> {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return 'سجل دخول عشان نحفظ الخطط اللي خلصتها.'
    const { error } = done
        ? await supabase.from(TABLE).upsert({ user_id: session.user.id, plan_slug: planSlug })
        : await supabase.from(TABLE).delete().eq('user_id', session.user.id).eq('plan_slug', planSlug)
    return error ? 'ما قدرنا نحفظ، حاول مرة ثانية.' : null
}
