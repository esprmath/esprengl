'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { LEVELS, PICK_COUNT, POS_AR, type Level, type Word } from '@/content/words'
import { candidates, dueReviews, finishNewWords, gradeCard, learnedCount, loadWords, markKnown, remainingCount, saveWords, speak, today, type ReviewItem, type WordState } from '@/lib/wordProgress'

const PRIMARY = '#7a1f2b'

/**
 * تعلم كلمات (5 دقايق تقريبًا):
 * 1. مراجعة الكلمات القديمة اللي حان وقتها (يشوف المعنى ويكتب الكلمة)
 * 2. يختار 3 كلمات ما يعرفها من 15 كلمة على مستواه (وإذا يعرفها كلها يجدد)
 * 3. يتعلمها: يسمعها، يشوف معناها ومثال عليها
 * 4. نشاطين عليها: يحطها في جملتها، ويوصّل كل كلمة بمعناها
 * 5. وآخر شي يكتبها من معناها (أصعب خطوة، فتجي بعد ما يتعود عليها)
 */
type Step = 'loading' | 'level' | 'review' | 'pick' | 'learn' | 'fill' | 'match' | 'write' | 'done'

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5)
const same = (a: string, b: string) => a.trim().toLowerCase().replace(/[.!?]$/, '') === b.trim().toLowerCase()

/** الجملة مع فراغ مكان الكلمة (أو تصريفها مثل invited) */
function blanked(example: string, en: string) {
    const re = new RegExp(`\\b${en}\\w*`, 'i')
    return re.test(example) ? example.replace(re, '_____') : null
}

export default function WordsTrainer() {
    const [state, setState] = useState<WordState | null>(null)
    const [step, setStep] = useState<Step>('loading')
    const [level, setLevel] = useState<Level>('A1')
    const [reviews, setReviews] = useState<ReviewItem[]>([])
    const [words, setWords] = useState<Word[]>([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const s = loadWords()
        setState(s)
        if (!s.level) return setStep('level')
        setLevel(s.level)
        if (s.lastDone === today() && dueReviews(s).length === 0) return setStep('done')
        start(s)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const update = (s: WordState) => {
        setState(s)
        saveWords(s)
    }

    /** يبدأ جلسة: المراجعة أول إذا فيه، بعدين يختار كلمات جديدة */
    function start(s: WordState) {
        const due = dueReviews(s)
        setReviews(due)
        setIndex(0)
        setStep(due.length ? 'review' : 'pick')
    }

    const pickLevel = (lvl: Level) => {
        const s = { ...(state ?? loadWords()), level: lvl }
        update(s)
        setLevel(lvl)
        start(s)
    }

    const finishSession = () => {
        if (!state) return
        update(finishNewWords(state, level, words))
        setStep('done')
    }

    const goNext = (current: Step) => {
        setIndex(0)
        if (current === 'learn') setStep(words.some((w) => blanked(w.example, w.en)) ? 'fill' : 'match')
        else if (current === 'fill') setStep(words.length > 1 ? 'match' : 'write')
        else if (current === 'match') setStep('write')
        else finishSession()
    }

    if (step === 'loading' || !state) return <Shell><p style={{ color: '#9b8a8d' }}>لحظة…</p></Shell>

    // ───── اختيار المستوى ─────
    if (step === 'level') {
        return (
            <Shell>
                <h2 style={h2}>اختر مستواك</h2>
                <p style={muted}>تقدر تغيره بعدين.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginTop: '16px' }} dir="ltr">
                    {LEVELS.map((l) => (
                        <button
                            key={l}
                            onClick={() => pickLevel(l)}
                            style={{ padding: '18px 0', borderRadius: '14px', fontSize: '1.3rem', fontWeight: 'bold', cursor: 'pointer', border: `2px solid ${state.level === l ? PRIMARY : '#ecdcdd'}`, background: state.level === l ? PRIMARY : '#ffffff', color: state.level === l ? '#ffffff' : PRIMARY }}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </Shell>
        )
    }

    // ───── مراجعة القديم ─────
    if (step === 'review') {
        const item = reviews[index]
        return (
            <Shell>
                <Progress label="مراجعة كلماتك القديمة" current={index + 1} total={reviews.length} />
                <WriteCard
                    key={`r-${item.level}-${item.word.en}`}
                    word={item.word}
                    onDone={(correct) => {
                        update(gradeCard(state, item.level, item.word.en, correct))
                        if (index + 1 < reviews.length) setIndex(index + 1)
                        else {
                            setIndex(0)
                            setStep('pick')
                        }
                    }}
                />
            </Shell>
        )
    }

    // ───── يختار 3 كلمات ما يعرفها ─────
    if (step === 'pick') {
        return (
            <PickWords
                state={state}
                level={level}
                onRefresh={(shown) => update(markKnown(state, level, shown))}
                onStart={(chosen) => {
                    setWords(chosen)
                    setIndex(0)
                    setStep('learn')
                }}
                onChangeLevel={() => setStep('level')}
            />
        )
    }

    // ───── يتعلمها ─────
    if (step === 'learn') {
        const w = words[index]
        return (
            <Shell>
                <Progress label="تعرّف على الكلمة" current={index + 1} total={words.length} />
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <div dir="ltr" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '2.4rem', fontWeight: 'bold', color: PRIMARY, fontFamily: "'Playfair Display', Georgia, serif" }}>{w.en}</span>
                        <SpeakBtn text={w.en} />
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#9b8a8d', margin: '2px 0 12px' }}>{POS_AR[w.pos]}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>{w.ar}</div>
                    <div style={{ background: '#FBF6F6', border: '1px dashed #E4A3AB', borderRadius: '12px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span dir="ltr" style={{ fontSize: '1.05rem' }}><Highlight sentence={w.example} word={w.en} /></span>
                        <SpeakBtn text={w.example} small />
                    </div>
                </div>
                <PrimaryBtn onClick={() => (index + 1 < words.length ? setIndex(index + 1) : goNext('learn'))}>
                    {index + 1 < words.length ? 'الكلمة الجاية ←' : 'يلا نتدرب ←'}
                </PrimaryBtn>
            </Shell>
        )
    }

    // ───── نشاط 1: يحطها في جملتها ─────
    if (step === 'fill') {
        const fillable = words.filter((x) => blanked(x.example, x.en))
        const w = fillable[index]
        return (
            <Shell>
                <Progress label="حط الكلمة في مكانها" current={index + 1} total={fillable.length} />
                <FillCard key={`f-${w.en}`} word={w} options={words.map((x) => x.en)} onDone={() => (index + 1 < fillable.length ? setIndex(index + 1) : goNext('fill'))} />
            </Shell>
        )
    }

    // ───── نشاط 2: يوصّل كل كلمة بمعناها ─────
    if (step === 'match') {
        return (
            <Shell>
                <Progress label="وصّل كل كلمة بمعناها" current={1} total={1} />
                <MatchCard words={words} onDone={() => goNext('match')} />
            </Shell>
        )
    }

    // ───── آخر شي: يكتبها من معناها ─────
    if (step === 'write') {
        const w = words[index]
        return (
            <Shell>
                <Progress label="كمّل الحروف الناقصة" current={index + 1} total={words.length} />
                <MissingLettersCard key={`m-${w.en}`} word={w} onDone={() => (index + 1 < words.length ? setIndex(index + 1) : goNext('write'))} />
            </Shell>
        )
    }

    // ───── خلصت ─────
    const learned = learnedCount(state, level)
    const doneToday = state.lastDone === today()
    const left = remainingCount(state, level)
    return (
        <Shell>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>{doneToday ? '🎉' : '📚'}</div>
                <h2 style={{ ...h2, marginTop: '4px' }}>{doneToday ? 'خلصت كلماتك اليوم!' : 'جاهز تتعلم كلمات جديدة؟'}</h2>
                {state.streak > 0 && <p style={{ margin: '6px 0', fontWeight: 'bold', color: '#B45309' }}>🔥 {state.streak} {state.streak === 1 ? 'يوم' : 'أيام'} ورا بعض</p>}
                <p style={muted}>
                    تعلمت {learned} {learned >= 3 && learned <= 10 ? 'كلمات' : 'كلمة'} في مستوى <span dir="ltr">{level}</span>.{doneToday && ' ارجع بكرة لكلمات جديدة ومراجعة اللي تعلمتها.'}
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                {left > 0 ? (
                    <PrimaryBtn onClick={() => start(state)}>{doneToday ? 'زيدني 3 كلمات ←' : 'ابدأ ←'}</PrimaryBtn>
                ) : (
                    <p style={{ ...muted, textAlign: 'center' }}>خلصت كل كلمات هذا المستوى 👏 جرّب المستوى اللي بعده.</p>
                )}
                <button onClick={() => setStep('level')} style={{ background: 'none', border: 'none', color: PRIMARY, fontWeight: 'bold', cursor: 'pointer', padding: '8px' }}>
                    غيّر المستوى
                </button>
            </div>
        </Shell>
    )
}

/* ───────── اختيار الكلمات ───────── */

function PickWords({ state, level, onRefresh, onStart, onChangeLevel }: { state: WordState; level: Level; onRefresh: (shown: Word[]) => void; onStart: (chosen: Word[]) => void; onChangeLevel: () => void }) {
    const [chosen, setChosen] = useState<string[]>([])
    const shown = candidates(state, level)
    const need = Math.min(PICK_COUNT, shown.length)

    if (shown.length === 0) {
        return (
            <Shell>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.6rem' }}>👏</div>
                    <h2 style={h2}>خلصت كلمات مستوى <span dir="ltr">{level}</span></h2>
                    <p style={muted}>تعلمتها أو تعرفها كلها. جرّب المستوى اللي بعده.</p>
                    <PrimaryBtn onClick={onChangeLevel}>غيّر المستوى</PrimaryBtn>
                </div>
            </Shell>
        )
    }

    const toggle = (en: string) =>
        setChosen((c) => (c.includes(en) ? c.filter((x) => x !== en) : c.length < need ? [...c, en] : c))

    return (
        <Shell>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
                <h2 style={h2}>اختر {need} كلمات ما تعرفها</h2>
                <button onClick={onChangeLevel} dir="ltr" style={{ background: '#F7E6E8', color: PRIMARY, border: 'none', borderRadius: '999px', padding: '3px 10px', fontWeight: 'bold', cursor: 'pointer' }}>
                    {level}
                </button>
            </div>
            <p style={muted}>اخترت {chosen.length} من {need}</p>
            <div dir="ltr" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', margin: '16px 0 4px' }}>
                {shown.map((w) => {
                    const on = chosen.includes(w.en)
                    const full = !on && chosen.length >= need
                    return (
                        <button
                            key={w.en}
                            onClick={() => toggle(w.en)}
                            disabled={full}
                            style={{ padding: '9px 16px', borderRadius: '999px', fontSize: '1.02rem', fontWeight: 'bold', cursor: full ? 'default' : 'pointer', border: `2px solid ${on ? PRIMARY : '#ecdcdd'}`, background: on ? PRIMARY : '#ffffff', color: on ? '#ffffff' : '#2A1A1D', opacity: full ? 0.45 : 1 }}
                        >
                            {on ? '✓ ' : ''}
                            {w.en}
                        </button>
                    )
                })}
            </div>
            <PrimaryBtn onClick={() => onStart(shown.filter((w) => chosen.includes(w.en)))} disabled={chosen.length < need}>
                ابدأ ←
            </PrimaryBtn>
            <button
                onClick={() => {
                    // الكلمات اللي ما اختارها تنحسب إنه يعرفها وما ترجع له
                    onRefresh(shown.filter((w) => !chosen.includes(w.en)))
                }}
                style={{ width: '100%', marginTop: '8px', background: 'none', border: '1.5px dashed #E4A3AB', color: PRIMARY, borderRadius: '12px', padding: '11px', fontWeight: 'bold', cursor: 'pointer' }}
            >
                ↻ أعرفها، جدد الكلمات
            </button>
        </Shell>
    )
}

/* ───────── أجزاء صغيرة ───────── */

function Shell({ children }: { children: React.ReactNode }) {
    return <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '18px', padding: '22px 20px', boxShadow: '0 8px 24px rgba(122,31,43,0.08)' }}>{children}</div>
}

function Progress({ label, current, total }: { label: string; current: number; total: number }) {
    return (
        <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#6B5357', marginBottom: '6px' }}>
                <strong>{label}</strong>
                {total > 1 && <span>{current} / {total}</span>}
            </div>
            <div style={{ height: '6px', background: '#F7E6E8', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: `${(current / total) * 100}%`, height: '100%', background: PRIMARY, transition: 'width 0.3s' }} />
            </div>
        </div>
    )
}

function SpeakBtn({ text, small }: { text: string; small?: boolean }) {
    return (
        <button
            onClick={() => speak(text)}
            aria-label={`اسمع ${text}`}
            style={{ width: small ? '30px' : '40px', height: small ? '30px' : '40px', borderRadius: '50%', border: 'none', background: '#F7E6E8', cursor: 'pointer', fontSize: small ? '0.9rem' : '1.15rem', flexShrink: 0 }}
        >
            🔊
        </button>
    )
}

function Highlight({ sentence, word }: { sentence: string; word: string }) {
    const re = new RegExp(`(\\b${word}\\w*)`, 'i')
    return (
        <>
            {sentence.split(re).map((part, i) =>
                part.toLowerCase().startsWith(word.toLowerCase()) && re.test(part) ? (
                    <strong key={i} style={{ color: PRIMARY, borderBottom: `2px solid ${PRIMARY}` }}>{part}</strong>
                ) : (
                    <span key={i}>{part}</span>
                ),
            )}
        </>
    )
}

function PrimaryBtn({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{ width: '100%', marginTop: '12px', background: PRIMARY, color: '#ffffff', border: 'none', borderRadius: '12px', padding: '13px', fontWeight: 'bold', fontSize: '1rem', cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.5 : 1 }}
        >
            {children}
        </button>
    )
}

/** يشوف المعنى ويكتب الكلمة. hint يطلع أول حرف وعدد الحروف */
/**
 * آخر خطوة في تعلم الكلمة: الكلمة ناقصة حروف ويكمّلها.
 * 5 حروف أو أكثر: ينقص حرفين، وأقل: ينقص حرف واحد (ما نشيل أول حرف عشان يتذكرها).
 * زر التلميح: إذا ناقص حرفين يعبي واحد، وإذا ناقص حرف يحل السؤال.
 */
function MissingLettersCard({ word, onDone }: { word: Word; onDone: () => void }) {
    const letters = word.en.split('')
    // أماكن الحروف الناقصة: عشوائية من غير أول حرف، ومن الحروف بس (مو المسافات أو الشرطات)
    const missing = useMemo(() => {
        const candidates = letters.map((ch, i) => i).filter((i) => i > 0 && /[a-z]/i.test(letters[i]))
        const count = Math.min(letters.length >= 5 ? 2 : 1, candidates.length)
        return shuffle(candidates).slice(0, count).sort((a, b) => a - b)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [word.en])
    const [values, setValues] = useState<Record<number, string>>({})
    const [hinted, setHinted] = useState<number[]>([])
    const [result, setResult] = useState<null | boolean>(null)
    const inputs = useRef<Record<number, HTMLInputElement | null>>({})

    const empty = missing.filter((i) => !values[i])
    const solved = result !== null

    const check = (vals = values) => {
        const ok = missing.every((i) => (vals[i] ?? '').toLowerCase() === letters[i].toLowerCase())
        setResult(ok)
        speak(word.en)
    }

    const hint = () => {
        if (solved) return
        const left = missing.filter((i) => (values[i] ?? '').toLowerCase() !== letters[i].toLowerCase())
        if (left.length === 0) return check()
        // ناقص أكثر من حرف: نعبي واحد. ناقص حرف: نحل السؤال
        const fill = left.length > 1 ? [left[0]] : left
        const next = { ...values }
        for (const i of fill) next[i] = letters[i]
        setValues(next)
        setHinted((h) => [...h, ...fill])
        if (left.length === 1) {
            setResult(false)
            speak(word.en)
        } else inputs.current[left[1]]?.focus()
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: '#9b8a8d' }}>{POS_AR[word.pos]}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '4px 0 14px' }}>{word.ar}</div>

            <div dir="ltr" style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {letters.map((ch, i) => {
                    if (!missing.includes(i)) {
                        return (
                            <span key={i} style={{ width: '38px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#2A1A1D', borderBottom: '3px solid #ecdcdd' }}>
                                {ch}
                            </span>
                        )
                    }
                    const v = values[i] ?? ''
                    const right = solved && v.toLowerCase() === ch.toLowerCase()
                    const wasHint = hinted.includes(i)
                    return (
                        <input
                            key={i}
                            ref={(el) => {
                                inputs.current[i] = el
                            }}
                            value={v}
                            disabled={solved || wasHint}
                            autoFocus={i === missing[0]}
                            maxLength={1}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck={false}
                            aria-label={`الحرف رقم ${i + 1}`}
                            onChange={(e) => {
                                const val = e.target.value.slice(-1)
                                const next = { ...values, [i]: val }
                                setValues(next)
                                // ينتقل للخانة الناقصة اللي بعدها
                                const after = missing.find((j) => j > i && !next[j])
                                if (val && after !== undefined) inputs.current[after]?.focus()
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !solved && empty.length === 0) check()
                            }}
                            style={{
                                width: '38px',
                                height: '48px',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                borderRadius: '10px',
                                outline: 'none',
                                color: wasHint ? '#B45309' : '#2A1A1D',
                                border: `2px solid ${!solved ? (wasHint ? '#F2C98B' : PRIMARY) : right && !wasHint ? '#2E9E62' : '#B42318'}`,
                                background: !solved ? (wasHint ? '#FEF3C7' : '#FBEFF1') : right && !wasHint ? '#ECF8F1' : '#FDEEEC',
                            }}
                        />
                    )
                })}
            </div>

            {solved && (
                <p style={{ margin: '12px 0 0', fontWeight: 'bold', color: result ? '#1E7A4A' : '#B42318' }}>
                    {result ? '✓ صح!' : (
                        <>
                            الكلمة: <span dir="ltr">{word.en}</span>
                        </>
                    )}
                </p>
            )}

            {!solved ? (
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <button
                        onClick={hint}
                        style={{ flexShrink: 0, background: '#FEF3C7', color: '#B45309', border: '1.5px solid #F2C98B', borderRadius: '12px', padding: '0 16px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        💡 تلميح
                    </button>
                    <div style={{ flex: 1 }}>
                        <PrimaryBtn onClick={() => check()} disabled={empty.length > 0}>تحقق</PrimaryBtn>
                    </div>
                </div>
            ) : (
                <PrimaryBtn onClick={onDone}>التالي ←</PrimaryBtn>
            )}
        </div>
    )
}

function WriteCard({ word, hint, onDone }: { word: Word; hint?: boolean; onDone: (correct: boolean) => void }) {
    const [value, setValue] = useState('')
    const [result, setResult] = useState<null | boolean>(null)
    const check = () => {
        if (!value.trim()) return
        setResult(same(value, word.en))
        speak(word.en)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: '#9b8a8d' }}>{POS_AR[word.pos]}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 'bold', margin: '4px 0 6px' }}>{word.ar}</div>
            {hint && (
                <div dir="ltr" style={{ letterSpacing: '6px', color: '#9b8a8d', fontSize: '1.2rem', marginBottom: '10px' }}>
                    {word.en[0]}
                    {'_'.repeat(word.en.length - 1)}
                </div>
            )}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (result === null ? check() : onDone(!!result))}
                disabled={result !== null}
                autoFocus
                dir="ltr"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                placeholder="Type the word"
                style={{ width: '100%', boxSizing: 'border-box', textAlign: 'center', fontSize: '1.3rem', padding: '12px', borderRadius: '12px', border: `2px solid ${result === null ? '#ecdcdd' : result ? '#2E9E62' : '#B42318'}`, background: result === null ? '#ffffff' : result ? '#ECF8F1' : '#FDEEEC', outline: 'none' }}
            />
            {result !== null && (
                <p style={{ margin: '10px 0 0', fontWeight: 'bold', color: result ? '#1E7A4A' : '#B42318' }}>
                    {result ? '✓ صح!' : (
                        <>
                            ✗ الصح: <span dir="ltr">{word.en}</span>
                        </>
                    )}
                </p>
            )}
            {result === null ? <PrimaryBtn onClick={check} disabled={!value.trim()}>تحقق</PrimaryBtn> : <PrimaryBtn onClick={() => onDone(result)}>التالي ←</PrimaryBtn>}
        </div>
    )
}

/** جملة فيها فراغ، ويختار الكلمة الصح من كلماته */
function FillCard({ word, options, onDone }: { word: Word; options: string[]; onDone: () => void }) {
    const [picked, setPicked] = useState<string | null>(null)
    const choices = useMemo(() => shuffle(options), [options])
    const sentence = blanked(word.example, word.en) ?? word.example
    return (
        <div>
            <div dir="ltr" style={{ background: '#FBF6F6', border: '1px dashed #E4A3AB', borderRadius: '12px', padding: '14px', fontSize: '1.15rem', textAlign: 'center', lineHeight: 1.7 }}>
                {picked ? <Highlight sentence={word.example} word={word.en} /> : sentence}
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }} dir="ltr">
                {choices.map((c) => {
                    const isRight = picked !== null && c === word.en
                    const isWrong = picked === c && c !== word.en
                    return (
                        <button
                            key={c}
                            disabled={picked !== null}
                            onClick={() => {
                                setPicked(c)
                                speak(word.example)
                            }}
                            style={{ padding: '10px 18px', borderRadius: '999px', fontWeight: 'bold', fontSize: '1rem', cursor: picked ? 'default' : 'pointer', border: `2px solid ${isRight ? '#2E9E62' : isWrong ? '#B42318' : '#ecdcdd'}`, background: isRight ? '#ECF8F1' : isWrong ? '#FDEEEC' : '#ffffff', color: '#2A1A1D' }}
                        >
                            {c}
                        </button>
                    )
                })}
            </div>
            {picked && <PrimaryBtn onClick={onDone}>التالي ←</PrimaryBtn>}
        </div>
    )
}

/** يوصّل كل كلمة إنجليزية بمعناها: يضغط الكلمة وبعدين معناها */
function MatchCard({ words, onDone }: { words: Word[]; onDone: () => void }) {
    const en = useMemo(() => shuffle(words), [words])
    const ar = useMemo(() => shuffle(words), [words])
    const [selected, setSelected] = useState<string | null>(null)
    const [matched, setMatched] = useState<string[]>([])
    const [wrong, setWrong] = useState<string | null>(null)
    const allDone = matched.length === words.length

    const pickAr = (w: Word) => {
        if (!selected || matched.includes(w.en)) return
        if (selected === w.en) {
            setMatched((m) => [...m, w.en])
            speak(w.en)
        } else {
            setWrong(w.en)
            setTimeout(() => setWrong(null), 500)
        }
        setSelected(null)
    }

    const cell = (on: boolean, done: boolean, bad: boolean): React.CSSProperties => ({
        padding: '12px 10px',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: done ? 'default' : 'pointer',
        border: `2px solid ${done ? '#2E9E62' : bad ? '#B42318' : on ? PRIMARY : '#ecdcdd'}`,
        background: done ? '#ECF8F1' : bad ? '#FDEEEC' : on ? '#FBEFF1' : '#ffffff',
        color: '#2A1A1D',
        transition: 'background 0.15s',
    })

    return (
        <div>
            <p style={{ ...muted, marginBottom: '12px', textAlign: 'center' }}>اضغط الكلمة، وبعدين اضغط معناها.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} dir="ltr">
                    {en.map((w) => (
                        <button key={w.en} disabled={matched.includes(w.en)} onClick={() => setSelected(w.en)} style={cell(selected === w.en, matched.includes(w.en), false)}>
                            {w.en}
                        </button>
                    ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {ar.map((w) => (
                        <button key={w.en} disabled={matched.includes(w.en)} onClick={() => pickAr(w)} style={cell(false, matched.includes(w.en), wrong === w.en)}>
                            {w.ar}
                        </button>
                    ))}
                </div>
            </div>
            {allDone && <PrimaryBtn onClick={onDone}>ممتاز! آخر خطوة ←</PrimaryBtn>}
        </div>
    )
}

const h2: React.CSSProperties = { fontSize: '1.3rem', margin: '0 0 6px' }
const muted: React.CSSProperties = { color: '#6B5357', fontSize: '0.92rem', lineHeight: 1.8, margin: 0 }

