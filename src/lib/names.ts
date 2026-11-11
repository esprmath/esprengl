// اسم الشخصية في الأمثلة: الطالب يختار اسم (أو يكتب اسم) فوق الأمثلة، والدرس كله يمشي عليه.
// في نص الدرس نكتب رموز بين {} وتتبدل حسب الاختيار. وإذا ما اختار شي، تطلع القيم الافتراضية (Fahad، ولد).
//
// الرموز:
//   {name}  الاسم         {NAME} الاسم بحروف كبيرة     {nameAr} الاسم بالعربي (فهد / لورا / نفس المكتوب)
//   {He} {he}  She / she      {His} {his}  Her / her      {him}  her
//   {brother} sister     {son} daughter     {grandson} granddaughter     {emoji} 🙋‍♂️ / 🙋‍♀️

export interface NameChoice {
    name: string // فاضي = الافتراضي
    girl: boolean
}

export const READY_NAMES: { name: string; ar: string; girl: boolean }[] = [
    { name: 'Fahad', ar: 'فهد', girl: false },
    { name: 'Laura', ar: 'لورا', girl: true },
]

export const DEFAULT_CHOICE: NameChoice = { name: '', girl: false }

function resolved(c: NameChoice) {
    const name = c.name.trim() || (c.girl ? 'Laura' : 'Fahad')
    const ready = READY_NAMES.find((r) => r.name.toLowerCase() === name.toLowerCase())
    return { name, ar: ready ? ready.ar : name, girl: c.girl }
}

export function fillNames(text: string, c: NameChoice): string {
    if (!text.includes('{')) return text
    const r = resolved(c)
    const g = r.girl
    const map: Record<string, string> = {
        name: r.name,
        NAME: r.name.toUpperCase(),
        nameAr: r.ar,
        He: g ? 'She' : 'He',
        he: g ? 'she' : 'he',
        His: g ? 'Her' : 'His',
        his: g ? 'her' : 'his',
        him: g ? 'her' : 'him',
        brother: g ? 'sister' : 'brother',
        son: g ? 'daughter' : 'son',
        grandson: g ? 'granddaughter' : 'grandson',
        emoji: g ? '🙋‍♀️' : '🙋‍♂️',
    }
    return text.replace(/\{(\w+)\}/g, (m, k: string) => map[k] ?? m)
}

/** يبدل الرموز في كل نص داخل الكائن (بلوك، تمرين، سؤال بداية) */
export function fillDeep<T>(value: T, c: NameChoice): T {
    if (typeof value === 'string') return fillNames(value, c) as T
    if (Array.isArray(value)) return value.map((v) => fillDeep(v, c)) as T
    if (value && typeof value === 'object') {
        const out: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(value)) out[k] = fillDeep(v, c)
        return out as T
    }
    return value
}

/** هل في الدرس رموز أسماء؟ (عشان نعرف وين نحط اختيار الاسم) */
export function usesNames(value: unknown): boolean {
    return /\{(name|NAME|nameAr|He|he|His|his|him)\}/.test(JSON.stringify(value))
}
