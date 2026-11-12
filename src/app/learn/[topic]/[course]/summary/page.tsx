import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import QRCode from 'qrcode'
import BrandName from '@/components/BrandName'
import PrintButtons from '@/components/PrintButtons'
import SheetFit from '@/components/SheetFit'
import { KINDS } from '@/components/SentenceParts'
import { SITE_URL } from '@/lib/site'
import { TOPICS, courseSlug, findLesson, lessonPath, type Part, type PartKind } from '@/content/lessons'

const PRIMARY = '#7a1f2b'
const INK = '#1a1214'
const MUTED = '#4a3b3e'
const LINE = '#b9a5a8'

type Params = { topic: string; course: string }

export function generateStaticParams(): Params[] {
    return TOPICS.flatMap((t) => t.lessons.filter((l) => l.summary).map((l) => ({ topic: t.slug, course: courseSlug(l.course) })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { topic, course } = await params
    const found = findLesson(topic, course)
    if (!found) return { title: 'EsprEngl' }
    return { title: `ملخص ${found.lesson.title} | EsprEngl`, alternates: { canonical: `${lessonPath(found.topic, found.lesson)}/summary` } }
}

/**
 * الورقة تنفع بالألوان وبالأبيض والأسود. اللون يساعد، لكن المعنى ما يعتمد عليه:
 * كل جزء مهم له اسم مكتوب فوقه (noun, verb, clue)، وله شكل حد يختلف عن الباقي:
 * clue خط متقطع، noun إطار كامل وخط عريض، verb خط عريض تحته، adj خط منقط.
 */
const STYLE: Partial<Record<PartKind, { border: string; weight: number }>> = {
    x: { border: 'dashed', weight: 600 },
    n: { border: 'solid', weight: 700 },
    v: { border: 'underline', weight: 700 },
    adj: { border: 'dotted', weight: 600 },
}

function markStyle(kind?: PartKind): React.CSSProperties {
    if (!kind) return {}
    const k = KINDS[kind]
    const s = STYLE[kind]
    const base: React.CSSProperties = { background: k.bg, color: k.color, fontWeight: s?.weight ?? 600, borderRadius: '5px', padding: '0 6px' }
    if (s?.border === 'underline') return { ...base, borderRadius: '5px 5px 0 0', borderBottom: `3.5px solid ${k.color}` }
    if (s?.border === 'dashed') return { ...base, border: `1.5px dashed ${k.color}` }
    if (s?.border === 'dotted') return { ...base, borderBottom: `3px dotted ${k.color}`, borderRadius: '5px 5px 0 0' }
    if (s?.border === 'solid') return { ...base, border: `1.5px solid ${k.color}` }
    return { ...base, borderBottom: `2.5px solid ${k.color}`, borderRadius: '5px 5px 0 0' }
}

/** قطعة من جملة: الاسم المكتوب فوقها يطلع بالأبيض والأسود كما هو */
function Piece({ part, size }: { part: Part; size: string }) {
    const [text, kind, label] = part
    const isPunct = kind === 'p'
    const tag = isPunct ? '' : label ?? ''
    return (
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginInlineStart: isPunct ? '-4px' : 0 }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, lineHeight: 1.1, minHeight: '0.7rem', letterSpacing: '0.03em', textTransform: 'uppercase', color: kind ? KINDS[kind].color : INK }}>{tag}</span>
            <span style={{ fontSize: size, lineHeight: 1.45, color: INK, ...markStyle(kind) }}>{text}</span>
        </span>
    )
}

function Sentence({ parts, size = '1.02rem' }: { parts: Part[]; size?: string }) {
    return (
        <span dir="ltr" style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '0 6px' }}>
            {parts.map((p, i) => <Piece key={i} part={p} size={size} />)}
        </span>
    )
}

const css = `
@page { size: A4; margin: 0; }
body { padding-left: 0 !important; background: #e9e3e4 !important; }
.bg-letters { display: none !important; }
.sheet { width: 794px; max-width: none; margin: 0 auto; background: #ffffff; color: ${INK}; padding: 26px 38px 20px; box-shadow: 0 8px 30px rgba(42,26,29,0.12); display: flex; flex-direction: column; gap: 9px; font-size: 14px; }
.sheet h2 { margin: 0 0 5px; font-size: 0.92rem; font-weight: 900; color: ${PRIMARY}; display: flex; align-items: center; gap: 8px; }
.sheet h2::after { content: ''; flex: 1; height: 1.5px; background: ${LINE}; }
.sheet table { width: 100%; border-collapse: collapse; }
.sheet th { background: #F3DDE0; color: ${INK}; font-weight: 800; padding: 3px 9px; font-size: 0.78rem; border: 1px solid ${LINE}; text-align: left; }
.sheet td { padding: 2px 9px; border: 1px solid ${LINE}; font-size: 0.85rem; }
@media print {
  body { background: #ffffff !important; min-height: 0 !important; }
  .no-print { display: none !important; }
  .fit-outer { width: auto !important; height: auto !important; overflow: visible !important; }
  .fit-inner { width: auto !important; transform: none !important; }
  .sheet { width: 210mm; height: 296mm; max-width: none; margin: 0; box-shadow: none; padding: 9mm 12mm 7mm; overflow: hidden; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
`

export default async function SummaryPage({ params }: { params: Promise<Params> }) {
    const { topic: topicSlug, course } = await params
    const found = findLesson(topicSlug, course)
    if (!found || !found.lesson.summary) notFound()
    const { topic, lesson } = found
    const s = lesson.summary!
    const path = lessonPath(topic, lesson)
    // الرمز يودي مباشرة لتمارين الدرس
    const practiceUrl = `${SITE_URL}${path}?tab=practice`
    const qr = await QRCode.toString(practiceUrl, { type: 'svg', margin: 0, color: { dark: INK, light: '#ffffff' } })

    return (
        <div style={{ padding: '16px 12px 40px' }}>
            <style>{css}</style>
            <PrintButtons lessonHref={path} />

            <SheetFit>
            <article className="sheet" dir="rtl">
                <header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px', borderBottom: `3px solid ${PRIMARY}`, paddingBottom: '8px' }}>
                    <div>
                        <div style={{ fontSize: '1.35rem' }}><BrandName /></div>
                        <div style={{ fontSize: '0.72rem', color: MUTED, marginTop: '1px' }}>ملخص الدرس · صفحة وحدة</div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div dir="ltr" style={{ fontSize: '1.45rem', fontWeight: 900, lineHeight: 1.15 }}>{lesson.title}</div>
                        <div style={{ fontSize: '0.78rem', color: MUTED, marginTop: '1px' }}>
                            {topic.titleAr} · <span dir="ltr">{lesson.course}{lesson.unit ? ` · ${lesson.unit}` : ''}</span>
                        </div>
                    </div>
                </header>

                <section>
                    <h2>القاعدة</h2>
                    <p style={{ margin: 0, background: '#FBEFF1', border: `1px solid ${LINE}`, borderInlineStart: `5px solid ${PRIMARY}`, borderRadius: '8px', padding: '6px 12px', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 600 }}>{s.rule}</p>
                </section>

                {s.formulas && (
                    <section>
                        <h2>الصيغة</h2>
                        <div dir="ltr" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px' }}>
                            {s.formulas.map((f, i) => (
                                <div key={i} dir="ltr" style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap', gap: '8px', border: `1px solid ${LINE}`, borderRadius: '8px', padding: '2px 12px 4px' }}>
                                    {f.map((p, j) => (
                                        <span key={j} style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '8px' }}>
                                            {j > 0 && <span style={{ color: MUTED, fontSize: '1.1rem', paddingBottom: '2px' }}>→</span>}
                                            <Piece part={p} size="0.98rem" />
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <h2>أمثلة</h2>
                    <div dir="ltr" className="examples" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0 14px' }}>
                        {s.examples.map((ex, i) => (
                            <div key={i} style={{ borderBottom: i < s.examples.length - 2 ? `1px dashed ${LINE}` : 'none', padding: '2px 0 4px' }}>
                                <div dir="ltr" style={{ display: 'flex', gap: '7px', alignItems: 'flex-end' }}>
                                    <span style={{ flexShrink: 0, width: '18px', height: '18px', marginBottom: '3px', borderRadius: '50%', border: `1.5px solid ${INK}`, color: INK, fontSize: '0.68rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                                    <Sentence parts={ex.parts} />
                                </div>
                                <div dir="rtl" style={{ fontSize: '0.76rem', color: MUTED, lineHeight: 1.5, paddingInlineEnd: '4px' }}>{ex.ar}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '17px', height: '17px', borderRadius: '50%', background: PRIMARY, color: '#fff', fontSize: '0.75rem' }}>!</span>
                        انتبه: أخطاء يسويها الطلاب العرب
                    </h2>
                    <div dir="ltr" className="mistakes" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '5px 7px' }}>
                        {s.mistakes.map((m, i) => (
                            <div key={i} style={{ border: `1px solid ${LINE}`, borderRadius: '8px', padding: '3px 9px 4px' }}>
                                <div dir="ltr" style={{ display: 'flex', gap: '6px', alignItems: 'baseline', fontSize: '0.86rem' }}>
                                    <b style={{ color: '#B42318', width: '1em' }}>✗</b>
                                    <span style={{ color: '#7a1a12', textDecoration: 'line-through', textDecorationThickness: '1.5px' }}>{m.wrong}</span>
                                </div>
                                <div dir="ltr" style={{ display: 'flex', gap: '6px', alignItems: 'baseline', fontSize: '0.86rem' }}>
                                    <b style={{ color: '#1E7A4A', width: '1em' }}>✓</b>
                                    <span style={{ color: INK, fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: '#1E7A4A' }}>{m.right}</span>
                                </div>
                                <div dir="rtl" style={{ fontSize: '0.75rem', color: MUTED, lineHeight: 1.45 }}>{m.why}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {s.tables && (
                    <div className="tables" style={{ display: 'grid', gridTemplateColumns: s.tables.length > 1 ? 'repeat(2, minmax(0, 1fr))' : '1fr', gap: '0 12px' }}>
                        {s.tables.map((t, ti) => (
                            <section key={ti}>
                                <h2>{t.title}</h2>
                                <table dir="ltr">
                                    <thead>
                                        <tr>{t.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                        {t.rows.map((row, r) => (
                                            <tr key={r}>
                                                {row.map((cell, c) => (
                                                    <td key={c} style={{ fontWeight: c === 0 ? 800 : 400, background: r % 2 ? '#FBF6F6' : '#fff' }}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </section>
                        ))}
                    </div>
                )}

                <footer style={{ marginTop: 'auto', borderTop: `3px solid ${PRIMARY}`, paddingTop: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flexShrink: 0, width: '66px', height: '66px', padding: '3px', border: `1px solid ${LINE}`, borderRadius: '6px', background: '#fff' }} dangerouslySetInnerHTML={{ __html: qr.replace('<svg', '<svg style="width:100%;height:100%;display:block"') }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 900, fontSize: '0.95rem', color: PRIMARY }}>تبي تتدرب على هالدرس؟</div>
                        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>التمارين على الموقع. امسح الرمز بجوالك وتفتح لك التمارين على طول.</div>
                        <div dir="ltr" style={{ textAlign: 'right', fontSize: '0.72rem', color: MUTED }}>{SITE_URL.replace('https://', '')}{path}</div>
                    </div>
                    <div dir="ltr" style={{ flexShrink: 0, fontSize: '0.68rem', color: MUTED, textAlign: 'right' }}>
                        <div style={{ fontSize: '0.95rem' }}><BrandName /></div>
                        © {new Date().getFullYear()} EsprEngl
                    </div>
                </footer>
            </article>
            </SheetFit>
        </div>
    )
}
