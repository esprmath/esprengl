// تسجيل عمليات البحث اللي ما لقت نتيجة، في جدول engl_search_misses.
// نسجل الكلمة بس بعد ما يوقف الطالب عن الكتابة، ومرة وحدة لكل كلمة في الزيارة،
// عشان ما ينحفظ كل حرف وهو يكتب.
import { supabase } from '@/lib/supabase'

const TABLE = 'engl_search_misses'
const logged = new Set<string>()

export async function logSearchMiss(query: string) {
    const q = query.trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 100)
    if (q.length < 2 || logged.has(q)) return
    logged.add(q)
    // فشل التسجيل (مثلًا الجدول ما انضاف بعد) ما يأثر على الطالب
    await supabase.from(TABLE).insert({ query: q }).then(({ error }) => {
        if (error) logged.delete(q)
    })
}

export interface SearchMissRow {
    query: string
    count: number
    users: number
    last: string
}

/** للمشرف: الكلمات مجمّعة، الأكثر بحثًا أول */
export async function fetchSearchMisses(days = 60): Promise<{ rows: SearchMissRow[]; error: string | null }> {
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
    const { data, error } = await supabase
        .from(TABLE)
        .select('query, user_id, created_at')
        .gte('created_at', since)
        .order('created_at', { ascending: false })
        .limit(5000)
    if (error) {
        return { rows: [], error: error.message.includes(TABLE) ? 'شغّل ملف SQL حق engl_search_misses في Supabase أولًا.' : 'تعذر جلب البيانات.' }
    }
    const map = new Map<string, { count: number; users: Set<string>; last: string }>()
    for (const r of data ?? []) {
        const e = map.get(r.query) ?? { count: 0, users: new Set<string>(), last: r.created_at }
        e.count++
        e.users.add(r.user_id ?? `guest-${e.count}`)
        if (r.created_at > e.last) e.last = r.created_at
        map.set(r.query, e)
    }
    const rows = [...map.entries()]
        .map(([query, e]) => ({ query, count: e.count, users: e.users.size, last: e.last }))
        .sort((a, b) => b.count - a.count)
    return { rows, error: null }
}

export async function deleteSearchMiss(query: string) {
    const { error } = await supabase.from(TABLE).delete().eq('query', query)
    return error ? 'تعذر الحذف.' : null
}
