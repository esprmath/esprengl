-- EsprEngl: نقاط الطلاب في الأسئلة والتمارين.
-- كل صف = بند واحد حصل عليه الطالب: سؤال صح (1)، مكافأة تمرين كامل (3)، أو علامة "خلص التمارين المطلوبة" (0).
-- نحفظ أعلى درجة لكل بند، فإعادة التمرين ما تضاعف النقاط.
-- شغّل هذا الملف مرة وحدة في Supabase (SQL Editor). يمكن إعادة تشغيله بأمان.

begin;

create table if not exists public.engl_points (
    user_id uuid not null references auth.users (id) on delete cascade,
    -- c:<درس>#<سؤال سريع> أو e:<درس>#<تمرين>.<سؤال> أو b:<درس>#<تمرين> أو d:<درس>
    item_key text not null check (char_length(item_key) between 3 and 200),
    points int not null check (points between 0 and 3),
    updated_at timestamptz not null default now(),
    primary key (user_id, item_key)
);

create index if not exists engl_points_user_idx on public.engl_points (user_id);

-- ما ننزّل نقاط بند أبدًا: لو انرسلت درجة أقل نحتفظ بالأعلى
create or replace function public.engl_points_keep_best()
returns trigger language plpgsql as $$
begin
    new.points := greatest(old.points, new.points);
    new.updated_at := now();
    return new;
end;
$$;

drop trigger if exists engl_points_keep_best on public.engl_points;
create trigger engl_points_keep_best before update on public.engl_points
    for each row execute function public.engl_points_keep_best();

alter table public.engl_points enable row level security;

-- كل طالب يشوف ويضيف ويعدّل نقاطه هو بس
drop policy if exists "engl_points_select_own" on public.engl_points;
create policy "engl_points_select_own" on public.engl_points
    for select to authenticated using (auth.uid() = user_id);

drop policy if exists "engl_points_insert_own" on public.engl_points;
create policy "engl_points_insert_own" on public.engl_points
    for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "engl_points_update_own" on public.engl_points;
create policy "engl_points_update_own" on public.engl_points
    for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- المشرف يقرا الكل
drop policy if exists "engl_points_admin_read" on public.engl_points;
create policy "engl_points_admin_read" on public.engl_points
    for select to authenticated using (public.is_admin());

commit;
