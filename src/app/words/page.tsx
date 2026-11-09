import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNavbar from '@/components/SiteNavbar'
import WordsTrainer from '@/components/WordsTrainer'

export const metadata: Metadata = {
    title: 'تعلم كلمات | EsprEngl',
    alternates: { canonical: '/words' },
    description: 'اختر مستواك (A1 لين C1) و3 كلمات ما تعرفها كل يوم: تتعلمها، تحطها في جملتها، توصلها بمعناها، وتكتبها. مع مراجعة ذكية للي تعلمته.',
}

export default function WordsPage() {
    return (
        <div style={{ minHeight: '100dvh', color: '#2A1A1D' }}>
            <div className="top-nav-only">
                <SiteNavbar />
            </div>
            <main style={{ maxWidth: '560px', margin: '0 auto', padding: '24px 20px 60px' }}>
                <Link href="/" style={{ color: '#7a1f2b', fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>
                    → الرئيسية
                </Link>
                <h1 style={{ fontSize: '1.7rem', margin: '16px 0 4px' }}>تعلم كلمات 📚</h1>
                <p style={{ color: '#6B5357', margin: '0 0 18px', lineHeight: 1.8 }}>كل يوم تختار 3 كلمات ما تعرفها على مستواك، تتعلمها وتتدرب عليها، وآخر شي تكتبها. 5 دقايق بس.</p>
                <WordsTrainer />
            </main>
        </div>
    )
}
