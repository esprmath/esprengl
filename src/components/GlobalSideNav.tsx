'use client'

import { usePathname } from 'next/navigation'
import SideNav from '@/components/SideNav'
import EnglAssistant from '@/components/EnglAssistant'

/**
 * النافبار الجانبي لكل الصفحات في الشاشات الكبيرة (من layout).
 * صفحات الدروس لها نافبار جانبي خاص فيه دوائر الأقسام وزر الترجمة، فهنا نتركها.
 * وعلى الجوال يطلع زر المساعد الصغير في الصفحة الرئيسية.
 */
export default function GlobalSideNav() {
    const pathname = usePathname()
    if (pathname.startsWith('/learn/')) return null

    return (
        <>
            <SideNav />
            {pathname === '/' && (
                <div className="mobile-only" style={{ position: 'fixed', bottom: '16px', left: '16px', zIndex: 120 }}>
                    <EnglAssistant variant="floating" />
                </div>
            )}
        </>
    )
}
