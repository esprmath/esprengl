'use client'

import { useEffect, useState } from 'react'
import SideNav, { type SideNavItem } from '@/components/SideNav'
import SiteNavbar from '@/components/SiteNavbar'
import WordTranslator from '@/components/WordTranslator'
import EnglAssistant from '@/components/EnglAssistant'
import { pillStyle } from '@/components/pillStyle'
import type { LessonView } from '@/content/lessons'

const VIEWS: (SideNavItem & { key: LessonView })[] = [
    { key: 'explain', label: 'شرح', icon: '📖' },
    { key: 'examples', label: 'أمثلة', icon: '💡' },
    { key: 'practice', label: 'تدريب', icon: '✍️' },
]

/**
 * غلاف صفحة الدرس. في الشاشات الكبيرة: نافبار جانبي فيه 3 دوائر (شرح، أمثلة، تدريب)
 * والصفحة تعرض القسم المختار بس. على الجوال: نفس الأقسام في شريط بالعرض فوق الدرس، يختفي مع السكرول لتحت ويرجع مع السكرول لفوق.
 */
export default function LessonShell({ header, children, footer, ai }: { header: React.ReactNode; children: React.ReactNode; footer?: React.ReactNode; ai?: { course: string; topic: string; lesson: string } }) {
    const [view, setView] = useState<LessonView>('explain')
    const [translating, setTranslating] = useState(false)
    const barVisible = useShowOnScrollUp()
    const index = VIEWS.findIndex((v) => v.key === view)
    const next = VIEWS[index + 1]

    const go = (key: string) => {
        setView(key as LessonView)
        window.scrollTo({ top: 0 })
    }

    return (
        <div className="with-side-nav" style={{ minHeight: '100dvh', color: '#2A1A1D' }}>
            <div className="top-nav-only">
                <SiteNavbar />
            </div>
            <SideNav items={VIEWS} active={view} onSelect={go} ai={ai} bottomAction={<TranslateToggle on={translating} onToggle={() => setTranslating((t) => !t)} />} />
            <WordTranslator active={translating} containerId="lesson-main" />
            {/* لما تكون الترجمة شغالة يطلع شريط تحت، ومنه يقفلها. يختفي أول ما تنقفل */}
            {translating && (
                <div className="translate-bar" role="status">
                    <span>🌐 الترجمة شغالة: اضغط على أي كلمة إنجليزية</span>
                    <button onClick={() => setTranslating(false)}>إيقاف ✕</button>
                </div>
            )}

            <main id="lesson-main" className={translating ? 'lesson translating' : 'lesson'} data-view={view} style={{ maxWidth: '780px', margin: '0 auto', padding: '24px 20px 60px' }}>
                {header}

                {/* شريط الجوال تحت اسم الدرس: الترجمة يمين، الأقسام بالنص، المساعد يسار.
                    يلزق فوق الشاشة مع السكرول، ويختفي لما ينزل الطالب ويرجع لما يطلع */}
                <div
                    className="mobile-only"
                    style={{ position: 'sticky', top: '8px', zIndex: 50, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', transform: barVisible ? 'none' : 'translateY(-150%)', transition: 'transform 0.25s ease' }}
                >
                    <TranslateToggle on={translating} onToggle={() => setTranslating((t) => !t)} floating />
                    <div style={{ flex: 1, display: 'flex', gap: '4px', background: '#7a1f2b', borderRadius: '999px', padding: '4px', boxShadow: '0 6px 16px rgba(122,31,43,0.25)' }}>
                        {VIEWS.map((v) => {
                            const on = v.key === view
                            return (
                                <button
                                    key={v.key}
                                    onClick={() => go(v.key)}
                                    aria-pressed={on}
                                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', border: 'none', borderRadius: '999px', padding: '7px 2px', background: on ? '#ffffff' : 'transparent', color: on ? '#7a1f2b' : '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                >
                                    <span style={{ fontSize: '0.9rem' }}>{v.icon}</span>
                                    {v.label}
                                </button>
                            )
                        })}
                    </div>
                    <EnglAssistant variant="bar" {...ai} />
                </div>

                {children}

                {next && (
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '36px' }}>
                        <button
                            onClick={() => go(next.key)}
                            style={{ background: '#7a1f2b', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px 22px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                        >
                            التالي: {next.label} {next.icon} ←
                        </button>
                    </div>
                )}
                {footer}
            </main>
        </div>
    )
}

/** زر تشغيل وضع الترجمة. في البار الجانبي مكان زر البحث، وعلى الجوال دائرة في شريط الأقسام */
function TranslateToggle({ on, onToggle, floating }: { on: boolean; onToggle: () => void; floating?: boolean }) {
    if (floating) {
        return (
            <button
                onClick={onToggle}
                aria-pressed={on}
                aria-label={on ? 'إيقاف الترجمة' : 'ترجم'}
                style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: on ? '#ffffff' : '#7a1f2b', border: '2px solid #7a1f2b', boxShadow: '0 6px 16px rgba(122,31,43,0.25)', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
            >
                🌐
            </button>
        )
    }
    return (
        <button onClick={onToggle} aria-pressed={on} title="اضغط وبعدين اضغط على أي كلمة" style={pillStyle(on)}>
            <span style={{ fontSize: '0.95rem' }}>🌐</span>
            {on ? 'إيقاف' : 'ترجم'}
        </button>
    )
}

/** يرجع false لما الطالب ينزل بالسكرول، و true لما يطلع لفوق أو يكون قريب من أول الصفحة */
function useShowOnScrollUp() {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        let last = window.scrollY
        const onScroll = () => {
            const y = window.scrollY
            if (y < 80) setVisible(true)
            else if (y > last + 6) setVisible(false)
            else if (y < last - 6) setVisible(true)
            if (Math.abs(y - last) > 6) last = y
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return visible
}
