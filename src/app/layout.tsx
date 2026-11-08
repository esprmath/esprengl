import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GlobalSideNav from '@/components/GlobalSideNav'
import BackgroundLetters from '@/components/BackgroundLetters'
import './globals.css'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
    title: 'EsprEngl | شرح وتدريب مواد الإنجليزي الجامعية',
    description: 'شرح مبسط لمقررات اللغة الإنجليزية الجامعية، مع تدريبات تفاعلية واختبارات ومعلم ذكي يساعدك خطوة بخطوة.',
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'EsprEngl',
    },
}

export const viewport: Viewport = {
    // لون شريط حالة الجوال بلون الصفحة، حتى يبان الشريط البني بنفس المسافة فوق الأزرار وتحتها
    themeColor: '#FBF6F6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir="rtl">
            <body>
                {/* النافبار الجانبي الثابت على اليسار للشاشات الكبيرة */}
                <BackgroundLetters />
                <GlobalSideNav />
                {children}
                <SpeedInsights />
            </body>
        </html>
    )
}
