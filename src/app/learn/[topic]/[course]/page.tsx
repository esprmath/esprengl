import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LessonShell from '@/components/LessonShell'
import { Breakdown, Formula } from '@/components/SentenceParts'
import Exercises from '@/components/Exercises'
import LessonVideos from '@/components/LessonVideos'
import WarmupQuestion from '@/components/WarmupQuestion'
import ShareLesson from '@/components/ShareLesson'
import WritingCheck from '@/components/WritingCheck'
import { TOPICS, courseSlug, findLesson, lessonPath, relatedLessons, blockViews, type Block } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

type Params = { topic: string; course: string }

export function generateStaticParams(): Params[] {
    return TOPICS.flatMap((t) => t.lessons.map((l) => ({ topic: t.slug, course: courseSlug(l.course) })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { topic, course } = await params
    const found = findLesson(topic, course)
    if (!found) return { title: 'EsprEngl' }
    const { topic: t, lesson: l } = found
    const title = `${t.title} · ${l.course} | EsprEngl`
    const description = `شرح ${t.titleAr} (${t.title}) في مادة ${l.course} على EsprEngl، بنفس طريقة المادة مع أمثلة ملونة وتمارين.`
    const url = lessonPath(t, l)
    return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } }
}

function BlockView({ block }: { block: Block }) {
    switch (block.type) {
        case 'text':
            return <p style={{ fontSize: '1.05rem', lineHeight: 1.9, margin: 0 }}>{block.text}</p>
        case 'rule':
            return (
                <div dir="ltr" style={{ background: '#F7E6E8', borderInlineStart: `4px solid ${PRIMARY}`, padding: '12px 16px', fontWeight: 'bold', color: '#5A1520', fontSize: '1.02rem' }}>
                    {block.text}
                </div>
            )
        case 'example':
            return (
                <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '10px', padding: '10px 14px' }}>
                    <div dir="ltr" style={{ fontSize: '1.05rem', color: '#2A1A1D', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{block.en}</div>
                    {block.ar && <div style={{ fontSize: '0.92rem', color: '#6B5357', marginTop: '4px' }}>{block.ar}</div>}
                </div>
            )
        case 'note':
            return (
                <div style={{ background: '#FEF3C7', border: '1px solid #f6d8b5', borderRadius: '10px', padding: '10px 14px', color: '#7a4a1d', fontSize: '0.95rem' }}>
                    ⚠️ {block.text}
                </div>
            )
        case 'try':
            return <WritingCheck task={block.task} reference={block.reference} placeholder={block.placeholder} />
        case 'formula':
            return <Formula parts={block.parts} />
        case 'breakdown':
            return <Breakdown parts={block.parts} ar={block.ar} />
        case 'heading':
            return <h2 style={{ fontSize: '1.3rem', color: PRIMARY, margin: '18px 0 0', paddingBottom: '6px', borderBottom: '2px solid #ecdcdd' }}>{block.text}</h2>
        case 'list': {
            const isEn = block.lang !== 'ar'
            const Tag = block.ordered ? 'ol' : 'ul'
            return (
                <Tag dir={isEn ? 'ltr' : 'rtl'} style={{ margin: 0, paddingInlineStart: '26px', fontSize: '1.03rem', lineHeight: 1.9, background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '10px', padding: '12px 14px 12px 34px' }}>
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </Tag>
            )
        }
        case 'table': {
            // على الجوال: بطاقات تحت بعض بدل جدول يحتاج سكرول للجنب
            const cards =
                block.stackBy === 'column'
                    ? block.head.map((h, c) => ({ title: h, lines: block.rows.map((row) => ({ label: '', text: row[c] })) }))
                    : block.rows.map((row) => ({ title: row[0], lines: row.slice(1).map((text, c) => ({ label: block.head[c + 1], text })) }))
            return (
                <>
                    <div className="desk-only" dir="ltr" style={{ overflowX: 'auto', border: '1px solid #ecdcdd', borderRadius: '10px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', background: '#ffffff' }}>
                            <thead>
                                <tr>
                                    {block.head.map((h, i) => (
                                        <th key={i} style={{ background: PRIMARY, color: '#ffffff', padding: '10px 12px', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {block.rows.map((row, r) => (
                                    <tr key={r}>
                                        {row.map((cell, c) => (
                                            <td key={c} style={{ padding: '10px 12px', borderTop: '1px solid #ecdcdd', verticalAlign: 'top', lineHeight: 1.7, minWidth: '140px' }}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mobile-only" dir="ltr" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {cards.map((card, i) => (
                            <div key={i} style={{ border: '1px solid #ecdcdd', borderRadius: '10px', overflow: 'hidden', background: '#ffffff' }}>
                                <div style={{ background: PRIMARY, color: '#ffffff', padding: '9px 12px', fontWeight: 'bold' }}>{card.title}</div>
                                {card.lines.map((line, j) => (
                                    <div key={j} style={{ padding: '9px 12px', borderTop: j ? '1px solid #ecdcdd' : 'none', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                        {line.label && <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9b6b72', textTransform: 'uppercase' }}>{line.label}</div>}
                                        {line.text}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )
        }
        case 'exercise':
            return null // تنعرض كلها في قسم التمارين آخر الدرس
    }
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
    const { topic: topicSlug, course } = await params
    const found = findLesson(topicSlug, course)
    if (!found) notFound()
    const { topic, lesson } = found
    const otherCourses = topic.lessons.filter((l) => l !== lesson)
    const related = relatedLessons(topic, lesson)

    // كل بلوك ياخذ كلاس القسم اللي يطلع فيه (v-explain / v-examples / v-practice)،
    // والعنوان ياخذ أقسام البلوكات اللي تحته، عشان يطلع مع أمثلته وشرحه
    const viewClass = (i: number) => {
        const block = lesson.blocks[i]
        if (block.type !== 'heading') return blockViews(block).map((v) => `v-${v}`).join(' ')
        const views = new Set<string>()
        for (let j = i + 1; j < lesson.blocks.length && lesson.blocks[j].type !== 'heading'; j++) {
            if (lesson.blocks[j].type !== 'exercise' && lesson.blocks[j].type !== 'try') blockViews(lesson.blocks[j]).forEach((v) => views.add(v))
        }
        return [...(views.size ? views : new Set(['explain']))].map((v) => `v-${v}`).join(' ')
    }

    const header = (
        <>
            <Link href="/" style={{ color: PRIMARY, fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>
                → الرجوع للبحث
            </Link>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', margin: '18px 0 6px' }}>
                <span style={{ background: PRIMARY, color: '#ffffff', fontSize: '0.8rem', fontWeight: 'bold', padding: '3px 10px', borderRadius: '6px' }}>{lesson.course}</span>
                {lesson.unit && <span dir="ltr" style={{ color: '#6B5357', fontSize: '0.9rem' }}>{lesson.unit}</span>}
                <span style={{ color: '#6B5357', fontSize: '0.9rem' }}>· {topic.titleAr}</span>
            </div>
            <h1 dir="ltr" style={{ fontSize: '1.8rem', margin: '0 0 22px', textAlign: 'right' }}>{lesson.title}</h1>
        </>
    )

    const footer = (
        <>
            {/* الدروس المشابهة يمين، وأزرار المشاركة جنبها يسار */}
            <section style={{ marginTop: '40px', borderTop: '1px solid #ecdcdd', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '18px', flexWrap: 'wrap' }}>
                {related.length > 0 && (
                    <div>
                        <h2 style={{ fontSize: '1rem', color: '#6B5357', margin: '0 0 10px' }}>كمّل من نفس الدرس في {lesson.course}</h2>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {related.map(({ topic: t, lesson: l }) => (
                                <Link key={t.slug} href={lessonPath(t, l)} style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '8px', padding: '6px 12px', color: PRIMARY, fontWeight: 'bold', fontSize: '0.88rem', textDecoration: 'none' }}>
                                    {t.titleAr} · <span dir="ltr">{l.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                <div>
                    <h2 style={{ fontSize: '0.85rem', color: '#9b8a8d', margin: '0 0 8px', fontWeight: 'normal' }}>شاركه مع زملائك</h2>
                    <ShareLesson title={lesson.title} course={lesson.course} />
                </div>
            </section>
            {otherCourses.length > 0 && (
                <section style={{ marginTop: '40px', borderTop: '1px solid #ecdcdd', paddingTop: '18px' }}>
                    <h2 style={{ fontSize: '1rem', color: '#6B5357', margin: '0 0 10px' }}>نفس الدرس في مواد ثانية</h2>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {otherCourses.map((l) => (
                            <Link key={l.course} href={lessonPath(topic, l)} style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '8px', padding: '6px 12px', color: PRIMARY, fontWeight: 'bold', fontSize: '0.88rem', textDecoration: 'none' }}>
                                {l.course}
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </>
    )

    return (
        <LessonShell header={header} footer={footer} ai={{ course: lesson.course, topic: topic.title, lesson: lesson.title }}>
            {lesson.warmup && <WarmupQuestion warmup={lesson.warmup} lessonKey={`${topic.slug}/${courseSlug(lesson.course)}`} />}
            {lesson.videos?.length ? (
                <div className="v-explain">
                    <LessonVideos videos={lesson.videos} />
                </div>
            ) : null}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {lesson.blocks.map((block, i) =>
                    block.type === 'exercise' ? null : (
                        <div key={i} className={viewClass(i)}>
                            <BlockView block={block} />
                        </div>
                    ),
                )}
            </div>
            <div className="v-practice">
                <Exercises exercises={lesson.blocks.filter((b) => b.type === 'exercise')} />
            </div>
        </LessonShell>
    )
}
