-- EsprEngl: قائمة طلاب الإنجليزي للمشرف
--
-- الحسابات مشتركة مع EsprMath. الموقع يعلّم كل حساب يسجل أو يدخل EsprEngl بـ engl: true
-- في بياناته (user_metadata)، وهذي الدالة ترجع هالحسابات بس، وللمشرف فقط.
-- math_courses: كورسات EsprMath اللي الطالب مسجل فيها (فاضية إذا مو مسجل هناك).
--
-- طريقة التشغيل: Supabase > SQL Editor > الصق الملف كاملًا > Run
-- يمكن إعادة تشغيله بأمان.

drop function if exists public.admin_engl_students();

create function public.admin_engl_students()
returns table (id uuid, email text, full_name text, created_at timestamptz, last_sign_in_at timestamptz, math_courses text[])
language plpgsql
stable
security definer
set search_path = public
as $$
begin
    if not public.is_admin() then
        raise exception 'للمشرفين فقط';
    end if;
    return query
        select
            u.id,
            u.email::text,
            (u.raw_user_meta_data ->> 'full_name')::text,
            u.created_at,
            u.last_sign_in_at,
            coalesce(
                (select array_agg(uc.course_id::text order by uc.course_id::text) from public.user_courses uc where uc.user_id = u.id),
                '{}'::text[]
            )
        from auth.users u
        where (u.raw_user_meta_data ->> 'engl') = 'true'
        order by u.created_at desc;
end;
$$;

revoke all on function public.admin_engl_students() from public, anon;
grant execute on function public.admin_engl_students() to authenticated;
