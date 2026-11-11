import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LessonShell from '@/components/LessonShell'
import LessonVideos from '@/components/LessonVideos'
import ShareLesson from '@/components/ShareLesson'
import LessonBlock, { NamedExercises, NamedWarmup } from '@/components/LessonBlock'
import { NameProvider } from '@/components/NameChoice'
import { TOPICS, courseSlug, findLesson, lessonPath, relatedLessons, blockViews } from '@/content/lessons'

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
            <NameProvider>
            {lesson.warmup && <NamedWarmup warmup={lesson.warmup} lessonKey={`${topic.slug}/${courseSlug(lesson.course)}`} />}
            {lesson.videos?.length ? (
                <div className="v-explain">
                    <LessonVideos videos={lesson.videos} />
                </div>
            ) : null}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {lesson.blocks.map((block, i) =>
                    block.type === 'exercise' ? null : (
                        <div key={i} className={viewClass(i)}>
                            <LessonBlock block={block} />
                        </div>
                    ),
                )}
            </div>
            <div className="v-practice">
                <NamedExercises exercises={lesson.blocks.filter((b) => b.type === 'exercise')} />
            </div>
            </NameProvider>
        </LessonShell>
    )
}
