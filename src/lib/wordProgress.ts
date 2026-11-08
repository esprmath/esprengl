// تقدم الطالب في "تعلم كلمات"، محفوظ في المتصفح (ما يحتاج تسجيل دخول).
//
// طريقة المراجعة (Leitner): كل كلمة في "صندوق". إذا جاوبها صح تنتقل للصندوق اللي بعده
// وتطول المدة قبل ما ترجع له، وإذا غلط ترجع للصندوق الأول وتطلع بكرة.
// كذا الكلمات الصعبة تتكرر أكثر، والسهلة تتباعد، وهذي من أقوى الطرق لتثبيت الكلمات.
import { SHOW_COUNT, WORDS, type Level, type Word } from '@/content/words'

const KEY = 'engl-words-v2'
/** بعد كم يوم ترجع الكلمة حسب صندوقها (1..5) */
const INTERVALS = [1, 3, 7, 14, 30]

export interface Card {
    box: number
    due: string // YYYY-MM-DD
}

export interface WordState {
    level?: Level
    /** الكلمات اللي تعلمها، ومتى ترجع للمراجعة */
    cards: Record<string, Card>
    /** كلمات قال إنه يعرفها (ضغط تجديد وهي قدامه)، ما تطلع له مرة ثانية */
    known: string[]
    lastDone?: string
    streak: number
}

const empty = (): WordState => ({ cards: {}, known: [], streak: 0 })

export const today = (offset = 0) => {
    const d = new Date()
    d.setDate(d.getDate() + offset)
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function loadWords(): WordState {
    try {
        const raw = localStorage.getItem(KEY)
        return raw ? { ...empty(), ...JSON.parse(raw) } : empty()
    } catch {
        return empty()
    }
}

export function saveWords(state: WordState) {
    try {
        localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
        /* التخزين مقفل، التقدم ما ينحفظ بس الجلسة تشتغل */
    }
}

export const wordKey = (level: Level, en: string) => `${level}:${en}`

export interface ReviewItem {
    level: Level
    word: Word
}

/** الكلمات اللي حان وقت مراجعتها (أقصى شي 6) */
export function dueReviews(state: WordState, max = 6): ReviewItem[] {
    const now = today()
    const items: ReviewItem[] = []
    for (const [key, card] of Object.entries(state.cards)) {
        if (card.due > now) continue
        const [level, en] = key.split(':') as [Level, string]
        const word = WORDS[level]?.find((w) => w.en === en)
        if (word) items.push({ level, word })
    }
    return items.slice(0, max)
}

/** 15 كلمة من المخزون ما تعلمها ولا قال إنه يعرفها، يختار منها */
export function candidates(state: WordState, level: Level): Word[] {
    const skip = new Set([...Object.keys(state.cards), ...state.known])
    return WORDS[level].filter((w) => !skip.has(wordKey(level, w.en))).slice(0, SHOW_COUNT)
}

/** كم كلمة باقية في المستوى ما شافها */
export function remainingCount(state: WordState, level: Level) {
    const skip = new Set([...Object.keys(state.cards), ...state.known])
    return WORDS[level].filter((w) => !skip.has(wordKey(level, w.en))).length
}

/** يعرف هذي الكلمات: ما تطلع له مرة ثانية */
export function markKnown(state: WordState, level: Level, words: Word[]): WordState {
    return { ...state, known: [...new Set([...state.known, ...words.map((w) => wordKey(level, w.en))])] }
}

/** بعد مراجعة كلمة: صح يرفعها صندوق، غلط يرجعها للأول */
export function gradeCard(state: WordState, level: Level, en: string, correct: boolean): WordState {
    const key = wordKey(level, en)
    const box = correct ? Math.min((state.cards[key]?.box ?? 0) + 1, INTERVALS.length) : 1
    return { ...state, cards: { ...state.cards, [key]: { box, due: today(INTERVALS[box - 1]) } } }
}

/** بعد ما يخلص الكلمات الجديدة: تنضاف للمراجعة بكرة (أول صندوق)، ويتحدث عدد الأيام المتتالية */
export function finishNewWords(state: WordState, level: Level, words: Word[]): WordState {
    const cards = { ...state.cards }
    for (const w of words) cards[wordKey(level, w.en)] = { box: 1, due: today(1) }
    const firstToday = state.lastDone !== today()
    const streak = !firstToday ? state.streak : state.lastDone === today(-1) ? state.streak + 1 : 1
    return { ...state, cards, lastDone: today(), streak }
}

/** عدد الكلمات اللي تعلمها في مستوى */
export const learnedCount = (state: WordState, level: Level) => Object.keys(state.cards).filter((k) => k.startsWith(`${level}:`)).length

/** نطق الكلمة أو الجملة بصوت إنجليزي من المتصفح */
export function speak(text: string) {
    try {
        const synth = window.speechSynthesis
        synth.cancel()
        const u = new SpeechSynthesisUtterance(text)
        u.lang = 'en-US'
        u.rate = 0.9
        synth.speak(u)
    } catch {
        /* المتصفح ما يدعم النطق */
    }
}
