// من يقدر يستخدم الذكاء الاصطناعي في EsprEngl:
// الحسابات مشتركة مع EsprMath (نفس قاعدة البيانات)، والـ AI يتفعل بس للي حسابه معتمد هناك.
// "معتمد" = عنده صف في user_courses (جدول EsprMath) فيه is_approved = true،
// وما أوقف المشرف عنه الـ AI (is_ai_allowed = false). والمفتاح العام ai_global_switch يوقفه عن الكل.
//
// هذي الدالة تشتغل في المتصفح وفي الخادم، لأنها تاخذ عميل Supabase اللي معه جلسة الطالب.
// الحماية الحقيقية في مسار الخادم /api/engl-ai، والواجهة تستخدمها بس عشان تخفي الزر.
import type { SupabaseClient } from '@supabase/supabase-js'

export async function hasAiAccess(supabase: SupabaseClient, userId: string): Promise<boolean> {
    const [{ data: approved, error }, { data: globalSwitch }] = await Promise.all([
        supabase
            .from('user_courses')
            .select('course_id, is_ai_allowed')
            .eq('user_id', userId)
            .eq('is_approved', true),
        supabase.from('system_settings').select('value').eq('key', 'ai_global_switch').maybeSingle(),
    ])
    if (error || globalSwitch?.value === false) return false
    // يكفي كورس واحد معتمد ما انوقف فيه الـ AI
    return (approved ?? []).some((row) => row.is_ai_allowed !== false)
}
