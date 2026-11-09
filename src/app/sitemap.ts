import type { MetadataRoute } from 'next'
import { TOPICS, lessonPath } from '@/content/lessons'
import { SITE_URL } from '@/lib/site'

// خريطة الموقع لقوقل (/sitemap.xml). كل درس جديد في lessons.ts ينضاف لها تلقائيًا.
export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    const lessons = TOPICS.flatMap((t) =>
        t.lessons.map((l) => ({ url: `${SITE_URL}${lessonPath(t, l)}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    )
    return [
        { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}/words`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE_URL}/plan`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
        ...lessons,
    ]
}
