// حروف إنجليزية مبعثرة على خلفية الصفحة كلها في الشاشات الكبيرة.
// لونها أغمق من الخلفية بشوي بس، وورا كل شي (z-index: -1) فما تغطي على المحتوى ولا تنضغط.
//
// المواقع عشوائية بس "ثابتة": نولّدها من رقم بذرة، فتطلع نفسها كل مرة وعلى السيرفر والمتصفح،
// وبدون ما تصير صفوف أو نمط واضح.

const COUNT = 90
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

/** مولد أرقام شبه عشوائية من بذرة (mulberry32) */
function seeded(seed: number) {
    return () => {
        seed |= 0
        seed = (seed + 0x6d2b79f5) | 0
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

const rand = seeded(2026)
const LETTERS = Array.from({ length: COUNT }, (_, i) => ({
    ch: CHARS[Math.floor(rand() * CHARS.length)],
    // نزيد شوي على الحواف (-3% لين 100%) عشان بعض الحروف تطلع مقصوصة على طرف الشاشة
    top: -3 + rand() * 103,
    left: -3 + rand() * 103,
    size: 1 + rand() * rand() * 4.5, // أغلبها صغير ومتوسط، وقليل منها كبير
    rot: -35 + rand() * 70,
    italic: rand() < 0.4,
    weight: rand() < 0.5 ? 700 : 400,
    // بعض الحروف أخف من بعض عشان ما تطلع كلها بنفس الوضوح
    opacity: 0.45 + rand() * 0.55,
    key: i,
}))

export default function BackgroundLetters() {
    return (
        <div aria-hidden className="bg-letters">
            {LETTERS.map((l) => (
                <span
                    key={l.key}
                    style={{
                        position: 'absolute',
                        top: `${l.top.toFixed(2)}%`,
                        left: `${l.left.toFixed(2)}%`,
                        fontSize: `${l.size.toFixed(2)}rem`,
                        transform: `rotate(${l.rot.toFixed(1)}deg)`,
                        fontStyle: l.italic ? 'italic' : 'normal',
                        fontWeight: l.weight,
                        opacity: Number(l.opacity.toFixed(2)),
                    }}
                >
                    {l.ch}
                </span>
            ))}
        </div>
    )
}
