'use client'

import Link from 'next/link'
import { useAiAccess } from '@/lib/useAiAccess'
import { circleLabel, circleStyle, pillStyle } from '@/components/pillStyle'

const PRIMARY = '#7a1f2b'

/**
 * زر الذكاء: يفتح "ضايع بالانقلش؟ ابني خطتك" (/plan). يطلع للكل، وللزائر اللي ما سجل دخول
 * عليه علامة × والصفحة توضح له إنه يحتاج يسجل.
 *
 * variant: circle دائرة في نص النافبار الجانبي برا الدروس (تحت تعلم كلمات)، sidebar زر صغير تحت في البار داخل الدروس، floating زر عائم على الجوال، bar دائرة داخل شريط أقسام الدرس على الجوال.
 * course/topic/lesson: ما نستخدمها حاليًا (كانت للمحادثة القديمة)، نخليها عشان ما نكسر الأماكن اللي تمررها.
 */
export default function EnglAssistant({ variant }: { variant: 'sidebar' | 'floating' | 'bar' | 'circle'; course?: string; topic?: string; lesson?: string }) {
    const access = useAiAccess()
    // الخطة لأي حساب مسجل، فالقفل للزائر بس
    const locked = access === 'guest'
    const label = locked ? 'ابني خطتك بالذكاء (سجّل دخول)' : 'ابني خطتك بالذكاء'

    if (variant === 'circle') {
        return (
            <Link href="/plan" aria-label={label} title={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#ffffff', textDecoration: 'none' }}>
                <span className="side-nav-circle" style={circleStyle}>
                    🤖
                    {locked && <LockBadge />}
                </span>
                <span style={circleLabel}>خطتي</span>
            </Link>
        )
    }

    if (variant === 'sidebar') {
        return (
            <Link href="/plan" aria-label={label} title={label} style={{ ...pillStyle(false), opacity: locked ? 0.85 : 1 }}>
                <span style={{ fontSize: '0.95rem', position: 'relative' }}>
                    🤖
                    {locked && <LockBadge />}
                </span>
                خطتي
            </Link>
        )
    }

    const size = variant === 'bar' ? '40px' : '44px'
    return (
        <Link
            href="/plan"
            aria-label={label}
            style={{ position: 'relative', flexShrink: 0, width: size, height: size, borderRadius: '50%', background: PRIMARY, color: '#ffffff', border: `2px solid ${PRIMARY}`, boxShadow: '0 6px 16px rgba(122,31,43,0.3)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
        >
            🤖
            {locked && <LockBadge />}
        </Link>
    )
}

/** علامة × صغيرة على الزر للي ما عنده صلاحية */
function LockBadge() {
    return (
        <span
            aria-hidden
            style={{ position: 'absolute', top: '-6px', right: '-8px', width: '16px', height: '16px', borderRadius: '50%', background: '#ffffff', color: '#B42318', border: '1.5px solid #B42318', fontSize: '0.7rem', fontWeight: 'bold', lineHeight: '13px', textAlign: 'center' }}
        >
            ×
        </span>
    )
}
