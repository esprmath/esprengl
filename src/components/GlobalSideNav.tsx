'use client'

import { usePathname } from 'next/navigation'
import SideNav from '@/components/SideNav'

/**
 * النافبار الجانبي لكل الصفحات في الشاشات الكبيرة (من layout).
 * صفحات الدروس لها نافبار جانبي خاص فيه دوائر الأقسام وزر الترجمة، فهنا نتركها.
 * وعلى الجوال ما فيه زر عائم: بناء الخطة من زر "ضايع بالانقلش؟ ابني خطتك" فوق في الرئيسية.
 */
export default function GlobalSideNav() {
    const pathname = usePathname()
    if (pathname.startsWith('/learn/')) return null

    return <SideNav />
}
