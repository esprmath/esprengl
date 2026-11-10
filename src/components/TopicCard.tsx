import Link from 'next/link'
import { lessonPath, type Topic } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

/** بطاقة عنوان وتحته دروسه في كل مادة، نفس اللي تطلع في نتائج البحث. مع course تطلع دروس هالمادة بس */
export default function TopicCard({ topic, course }: { topic: Topic; course?: string }) {
    return (
        <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '14px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', gap: '10px' }}>
                <h3 dir="ltr" style={{ margin: 0, fontSize: '1.15rem', color: '#2A1A1D' }}>{topic.title}</h3>
                <span style={{ fontSize: '0.9rem', color: '#6B5357' }}>{topic.titleAr}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {topic.lessons.filter((l) => !course || l.course === course).map((lesson) => (
                    <Link
                        key={lesson.course}
                        href={lessonPath(topic, lesson)}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: '#F7E6E8', borderRadius: '10px', padding: '10px 12px', textDecoration: 'none' }}
                    >
                        <span dir="ltr" style={{ color: '#5A1520', fontSize: '0.92rem' }}>
                            {lesson.unit ? `${lesson.unit} · ` : ''}{lesson.title}
                        </span>
                        <span style={{ flexShrink: 0, background: PRIMARY, color: '#ffffff', fontSize: '0.78rem', fontWeight: 'bold', padding: '3px 9px', borderRadius: '6px' }}>
                            {lesson.course}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
