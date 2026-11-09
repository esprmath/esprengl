import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

// معلومات الموقع لما أحد يضيفه للشاشة الرئيسية في الجوال
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: SITE_NAME,
        description: SITE_DESCRIPTION,
        start_url: '/',
        display: 'standalone',
        background_color: '#FBF6F6',
        theme_color: '#7a1f2b',
        lang: 'ar',
        dir: 'rtl',
        icons: [
            { src: '/icon', sizes: '64x64', type: 'image/png' },
            { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
        ],
    }
}
