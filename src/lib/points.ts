// نقاط الطالب. تتسجل في المتصفح أول (بدون تسجيل دخول)، ولما يسجل دخول تنتقل لحسابه وتنحفظ في Supabase.
// المواصفات في docs/points-system.md.
//
// البنود (كل بند له درجة، ونحفظ الأعلى بس، فإعادة التمرين ما تضاعف النقاط):
//   c:<درس>#<رقم البلوك>.<سؤال>   سؤال سريع وسط الشرح: نقطة، وتنحسب مباشرة
//   e:<درس>#<تمرين>.<سؤال>        سؤال في تمرين: نقطة، وتنحسب بعد ما يخلص التمارين المطلوبة
//   b:<درس>#<تمرين>               مكافأة تمرين كامل كله صح: 3 نقاط
//   d:<درس>                       علامة "خلص التمارين المطلوبة": 0 نقاط، بس تفتح حساب نقاط التمارين
import { useSyncExternalStore } from 'react'
import { supabase } from '@/lib/supabase'

const KEY = 'engl-points-v1'
const TABLE = 'engl_points'

export const BONUS_POINTS = 3

export type PointItems = Record<string, number>

interface PointsState {
    /** الحساب اللي هذي النقاط له، فاضي = نقاط زائر ما سجل دخول */
    owner: string | null
    items: PointItems
}

const EMPTY: PointsState = { owner: null, items: {} }

let state: PointsState = EMPTY
let userId: string | null = null
let started = false
const listeners = new Set<() => void>()

function emit() {
    listeners.forEach((l) => l())
}

function save() {
    try {
        localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
        /* التخزين مقفل: النقاط تمشي في الجلسة بس */
    }
}

function load(): PointsState {
    try {
        const raw = localStorage.getItem(KEY)
        if (!raw) return { owner: null, items: {} }
        const parsed = JSON.parse(raw)
        return { owner: typeof parsed.owner === 'string' ? parsed.owner : null, items: parsed.items && typeof parsed.items === 'object' ? parsed.items : {} }
    } catch {
        return { owner: null, items: {} }
    }
}

function setState(next: PointsState) {
    state = next
    save()
    emit()
}

/** يدمج نقاط الجهاز مع نقاط الحساب (الأعلى لكل بند)، ويرفع للقاعدة اللي ما فيها */
async function syncAccount(uid: string) {
    const { data, error } = await supabase.from(TABLE).select('item_key, points').eq('user_id', uid).limit(5000)
    if (error) return // الجدول ما انضاف بعد، أو مشكلة اتصال: النقاط تبقى في المتصفح
    const remote = new Map<string, number>((data ?? []).map((r) => [r.item_key as string, r.points as number]))
    // نقاط جهاز مسجلة لحساب ثاني ما ندمجها في هذا الحساب
    const base: PointItems = state.owner && state.owner !== uid ? {} : { ...state.items }
    for (const [k, p] of remote) if ((base[k] ?? -1) < p) base[k] = p
    const toPush = Object.entries(base)
        .filter(([k, p]) => (remote.get(k) ?? -1) < p)
        .map(([item_key, points]) => ({ user_id: uid, item_key, points }))
    setState({ owner: uid, items: base })
    for (let i = 0; i < toPush.length; i += 200) await supabase.from(TABLE).upsert(toPush.slice(i, i + 200))
}

function start() {
    if (started || typeof window === 'undefined') return
    started = true
    state = load()
    emit()
    supabase.auth.getSession().then(({ data: { session } }) => {
        userId = session?.user.id ?? null
        if (userId) void syncAccount(userId)
    })
    supabase.auth.onAuthStateChange((event, session) => {
        userId = session?.user.id ?? null
        if (event === 'SIGNED_OUT') setState({ owner: null, items: {} })
        else if (userId && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION')) void syncAccount(userId)
    })
}

function subscribe(listener: () => void) {
    start()
    listeners.add(listener)
    return () => {
        listeners.delete(listener)
    }
}

/** يسجل نقاط بنود. ما ينزّل بند عن درجته الأعلى */
export function recordPoints(entries: { key: string; points: number }[]) {
    start()
    const items = { ...state.items }
    const changed: { key: string; points: number }[] = []
    for (const { key, points } of entries) {
        if ((items[key] ?? -1) < points) {
            items[key] = points
            changed.push({ key, points })
        }
    }
    if (changed.length === 0) return
    setState({ owner: state.owner ?? userId, items })
    if (userId) {
        void supabase.from(TABLE).upsert(changed.map(({ key, points }) => ({ user_id: userId, item_key: key, points })))
    }
}

/** اسم الدرس من مفتاح بند: e:topic/course#2.3 ← topic/course */
function lessonOf(key: string) {
    const rest = key.slice(2)
    const hash = rest.indexOf('#')
    return hash === -1 ? rest : rest.slice(0, hash)
}

/** كل نقاط الطالب: الأسئلة السريعة دائمًا، ونقاط التمارين للدروس اللي خلص تمارينها المطلوبة */
export function totalPoints(items: PointItems) {
    const done = new Set(Object.keys(items).filter((k) => k.startsWith('d:')).map((k) => k.slice(2)))
    let total = 0
    for (const [k, p] of Object.entries(items)) {
        if (k.startsWith('c:')) total += p
        else if ((k.startsWith('e:') || k.startsWith('b:')) && done.has(lessonOf(k))) total += p
    }
    return total
}

/** نقاط تمارين درس واحد: كم حصل، وكم بند مسجل */
export function exercisePoints(items: PointItems, lessonKey: string) {
    let points = 0
    for (const [k, p] of Object.entries(items)) {
        if ((k.startsWith('e:') || k.startsWith('b:')) && lessonOf(k) === lessonKey) points += p
    }
    return points
}

export function usePoints() {
    const snap = useSyncExternalStore(subscribe, () => state, () => EMPTY)
    return { items: snap.items, total: totalPoints(snap.items) }
}
