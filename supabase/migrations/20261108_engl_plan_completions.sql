-- EsprEngl: الخطط اللي خلصها كل طالب
--
-- EsprEngl يستخدم نفس مشروع Supabase حق EsprMath، فالحساب واحد في الموقعين.
-- جداول EsprEngl تبدأ بـ engl_ عشان ما تختلط مع جداول EsprMath.
--
-- طريقة التشغيل: Supabase > SQL Editor > الصق الملف كاملًا > Run
-- يمكن إعادة تشغيله بأمان.

begin;

create table if not exists public.engl_plan_completions (
    user_id uuid not null references auth.users (id) on delete cascade,
    plan_slug text not null,
    completed_at timestamptz not null default now(),
    primary key (user_id, plan_slug)
);

alter table public.engl_plan_completions enable row level security;

-- كل طالب يشوف ويضيف ويحذف خططه هو بس
drop policy if exists "engl_plan_completions_select_own" on public.engl_plan_completions;
create policy "engl_plan_completions_select_own" on public.engl_plan_completions
    for select using (auth.uid() = user_id);

drop policy if exists "engl_plan_completions_insert_own" on public.engl_plan_completions;
create policy "engl_plan_completions_insert_own" on public.engl_plan_completions
    for insert with check (auth.uid() = user_id);

drop policy if exists "engl_plan_completions_delete_own" on public.engl_plan_completions;
create policy "engl_plan_completions_delete_own" on public.engl_plan_completions
    for delete using (auth.uid() = user_id);

commit;
