import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GlobalSideNav from '@/components/GlobalSideNav'
import EnglMarker from '@/components/EnglMarker'
import BackgroundLetters from '@/components/BackgroundLetters'
import { SITE_ALT_NAMES, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'
import './globals.css'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
    // كل الروابط (الصور والـ canonical) تنبني على الدومين الأساسي
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: SITE_NAME,
    },
    // شكل الرابط لما ينرسل في الواتساب وتويتر وغيرها
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        locale: 'ar_SA',
        url: SITE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
    },
}

export const viewport: Viewport = {
    // لون شريط حالة الجوال بلون الصفحة، حتى يبان الشريط البني بنفس المسافة فوق الأزرار وتحتها
    themeColor: '#FBF6F6',
}

// بيانات منظمة لقوقل: اسم الموقع وطرق كتابته الثانية (مثل "اسبر انجل")، عشان لو أحد بحث بأي وحدة منها يطلع الموقع.
// قوقل يعتمد WebSite.name و alternateName في اسم الموقع اللي يطلع فوق النتيجة.
const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: SITE_NAME,
            alternateName: SITE_ALT_NAMES,
            url: `${SITE_URL}/`,
            inLanguage: 'ar',
            description: SITE_DESCRIPTION,
            publisher: { '@id': `${SITE_URL}/#organization` },
        },
        {
            '@type': 'EducationalOrganization',
            '@id': `${SITE_URL}/#organization`,
            name: SITE_NAME,
            alternateName: SITE_ALT_NAMES,
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/icon`,
            // لما يصير للموقع حسابات (تيليقرام، X، انستقرام) تنضاف روابطها هنا في sameAs: ['https://t.me/…']
        },
    ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir="rtl">
            <body>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                {/* النافبار الجانبي الثابت على اليسار للشاشات الكبيرة */}
                <BackgroundLetters />
                <GlobalSideNav />
                <EnglMarker />
                {children}
                <SpeedInsights />
            </body>
        </html>
    )
}
