'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import EnglAssistant from '@/components/EnglAssistant'
import LessonChat from '@/components/LessonChat'
import Navbar from '@/components/Navbar'
import { circleLabel, circleStyle } from '@/components/pillStyle'

// النافبار الجانبي للشاشات الكبيرة (من 700px وفوق، يعني الآيباد والكمبيوتر). على الجوال يختفي ويطلع النافبار العلوي.
// ثابت على اليسار من تحت لفوق، واسم الموقع في الزاوية فوق.

export interface SideNavItem {
    key: string
    label: string
    icon: string
}

const logoFont: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 700 }

/**
 * bottomAction: زر إضافي فوق زر الذكاء، مثل زر الترجمة داخل الدرس.
 * ai: معلومات الدرس اللي تنرسل للمساعد الذكي (زره موجود في البار بكل الصفحات).
 */
export default function SideNav({ items, active, onSelect, bottomAction, ai }: { items?: SideNavItem[]; active?: string; onSelect?: (key: string) => void; bottomAction?: React.ReactNode; ai?: { course?: string; topic?: string; lesson?: string } }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => setIsLoggedIn(!!session))
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setIsLoggedIn(!!session))
        return () => subscription.unsubscribe()
    }, [])

    return (
        <>
        {/* الشعار برا البار، في زاوية الصفحة فوق يسار */}
        <Link
            href="/"
            dir="ltr"
            aria-label="EsprEngl"
            className="side-nav"
            style={{ position: 'fixed', left: '22px', top: '16px', zIndex: 101, textDecoration: 'none', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}
        >
            <span style={{ ...logoFont, fontSize: '1.05rem', color: '#7A1F2B', alignSelf: 'flex-start', marginLeft: '-4px' }}>Espr</span>
            <span style={{ ...logoFont, fontSize: '1.6rem', color: '#2A1A1D' }}>Engl</span>
            <span style={{ fontWeight: 700, fontSize: '0.58rem', letterSpacing: '2.5px', color: '#7A1F2B', marginTop: '6px', transform: 'translateX(-7px)' }}>YIC</span>
        </Link>

        {/* البار نفسه: عائم بأطراف دائرية، يبدأ تحت الشعار وينتهي قبل آخر الشاشة */}
        <aside
            className="side-nav"
            style={{ position: 'fixed', left: '16px', top: '100px', bottom: '16px', width: '88px', borderRadius: '28px', background: '#7a1f2b', color: '#ffffff', flexDirection: 'column', alignItems: 'center', padding: '22px 0 18px', zIndex: 100, boxShadow: '0 8px 24px rgba(122,31,43,0.25)' }}
        >
            {/* الحساب الشخصي فوق: الاسم وتعديل الملف وكلمة المرور والخروج (نفس قائمة النافبار العلوي) */}
            <Navbar isLoggedIn={isLoggedIn} variant="account" />

            <nav style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {items && items.length > 0 ? (
                    <StepsRoad items={items} active={active} onSelect={onSelect} />
                ) : (
                    // برا الدروس: "تعلم كلمات" وتحتها "خطتي" بنفس شكل دوائر المراحل
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px' }}>
                        <Link href="/words" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#ffffff', textDecoration: 'none' }}>
                            <span className="side-nav-circle" style={circleStyle}>📚</span>
                            <span style={circleLabel}>تعلم<br />كلمات</span>
                        </Link>
                        <EnglAssistant variant="circle" />
                    </div>
                )}
            </nav>

            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontSize: '0.78rem', fontWeight: 'bold' }}>
                {bottomAction}
                {/* داخل الدروس: الذكاء محادثة عادية للأسئلة (برا الدروس خطتي صارت دائرة فوق) */}
                {items && items.length > 0 && <LessonChat variant="sidebar" {...ai} />}
            </div>
        </aside>
        </>
    )
}


// أبعاد طريق الخطوات داخل البار (عرضه 88px)
const STEP = 104 // المسافة بين خطوة والثانية
const CIRCLE = 46
const LEFT_X = 28 // منتصف الدائرة اللي على اليسار
const RIGHT_X = 60 // منتصف الدائرة اللي على اليمين

/**
 * الخطوات (شرح، أمثلة، تدريب) متعرّجة: الأولى يسار، وخط متقطع ينزل ويلف يمين للثانية،
 * وبعدين يرجع يسار للثالثة. الخط يوقف عند حافة الدائرة وما يدخل فيها.
 */
function StepsRoad({ items, active, onSelect }: { items: SideNavItem[]; active?: string; onSelect?: (key: string) => void }) {
    const activeIndex = Math.max(0, items.findIndex((i) => i.key === active))
    const points = items.map((_, i) => ({ x: i % 2 === 0 ? LEFT_X : RIGHT_X, y: CIRCLE / 2 + i * STEP }))
    const height = points[points.length - 1].y + CIRCLE / 2 + 22

    // منحنى ناعم يبدأ تحت اسم الخطوة، وينتهي فوق حافة الدائرة اللي بعدها
    const LABEL = 20 // مكان اسم الخطوة تحت الدائرة
    const GAP = 4
    const segment = (i: number) => {
        const p = points[i]
        const q = points[i + 1]
        const y1 = p.y + CIRCLE / 2 + LABEL
        const y2 = q.y - CIRCLE / 2 - GAP
        const bend = (y2 - y1) * 0.6
        return `M ${p.x} ${y1} C ${p.x} ${y1 + bend}, ${q.x} ${y2 - bend}, ${q.x} ${y2}`
    }
    const segments = points.slice(0, -1).map((_, i) => segment(i))

    return (
        <div style={{ position: 'relative', width: '88px', height: `${height}px` }}>
            <svg width="88" height={height} style={{ position: 'absolute', inset: 0, overflow: 'visible' }} aria-hidden>
                {segments.map((d, i) => (
                    // الجزء اللي مشاه الطالب أوضح من الباقي
                    <path key={i} d={d} fill="none" stroke={i < activeIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)'} strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                ))}
            </svg>

            {items.map((item, i) => {
                const on = i === activeIndex
                const done = i < activeIndex
                const p = points[i]
                return (
                    <button
                        key={item.key}
                        className="side-nav-btn"
                        onClick={() => onSelect?.(item.key)}
                        aria-pressed={on}
                        aria-label={item.label}
                        style={{ position: 'absolute', left: `${p.x - CIRCLE / 2}px`, top: `${p.y - CIRCLE / 2}px`, width: `${CIRCLE}px`, background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: 0 }}
                    >
                        <span
                            className="side-nav-circle"
                            style={{
                                width: `${CIRCLE}px`,
                                height: `${CIRCLE}px`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                                background: on ? '#ffffff' : done ? 'rgba(255,255,255,0.28)' : '#8a2a37',
                                border: `2px solid ${on ? '#ffffff' : 'rgba(255,255,255,0.45)'}`,
                                boxShadow: on ? '0 0 0 5px rgba(255,255,255,0.18)' : 'none',
                                transition: 'background 0.2s, box-shadow 0.2s',
                            }}
                        >
                            {item.icon}
                        </span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 'bold', opacity: on ? 1 : 0.8, whiteSpace: 'nowrap', textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}>{item.label}</span>
                    </button>
                )
            })}
        </div>
    )
}

