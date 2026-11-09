import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// تعليمات لمحركات البحث (/robots.txt): تفهرس الدروس والصفحات العامة،
// وتتجاهل لوحة التحكم والـ API وصفحات الحساب والصفحات القديمة الموقفة.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api/', '/login', '/signup', '/forgot-password', '/update-password', '/workspace', '/sessions', '/absence'],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
