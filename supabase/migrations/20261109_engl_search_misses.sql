-- EsprEngl: الكلمات اللي بحث عنها الطلاب وما لقوا لها درس.
-- تساعد المشرف يعرف وش الدرس الجاي اللي يستاهل ينكتب.
-- شغّل هذا الملف مرة وحدة في Supabase (SQL Editor).

create table if not exists public.engl_search_misses (
    id bigint generated always as identity primary key,
    query text not null check (char_length(query) between 2 and 100),
    -- فاضي للزائر اللي ما سجل دخول
    user_id uuid references auth.users (id) on delete set null default auth.uid(),
    created_at timestamptz not null default now()
);

create index if not exists engl_search_misses_created_idx on public.engl_search_misses (created_at desc);

alter table public.engl_search_misses enable row level security;

-- أي أحد (زائر أو مسجل) يقدر يضيف، بس ما يقدر يقرا ولا يعدّل
drop policy if exists "engl_search_misses_insert" on public.engl_search_misses;
create policy "engl_search_misses_insert" on public.engl_search_misses
    for insert to anon, authenticated
    with check (char_length(query) between 2 and 100 and (user_id is null or user_id = auth.uid()));

-- المشرف بس يقرا ويحذف
drop policy if exists "engl_search_misses_admin_read" on public.engl_search_misses;
create policy "engl_search_misses_admin_read" on public.engl_search_misses
    for select to authenticated using (public.is_admin());

drop policy if exists "engl_search_misses_admin_delete" on public.engl_search_misses;
create policy "engl_search_misses_admin_delete" on public.engl_search_misses
    for delete to authenticated using (public.is_admin());
