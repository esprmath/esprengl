'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import type { Session } from '@supabase/supabase-js'
import Navbar from '@/components/Navbar'
import EsprMathAd from '@/components/EsprMathAd'
import SearchBox from '@/components/SearchBox'
import TopicCard from '@/components/TopicCard'
import AdminHomePanel from '@/components/AdminHomePanel'
import { supabase } from '@/lib/supabase'
import { checkIsAdmin } from '@/lib/admin'
import { logSearchMiss } from '@/lib/searchLog'
import { TOPICS, searchTopics } from '@/content/lessons'
import { SESSIONS, SECTIONS, SESSION_MINUTES, SESSIONS_ENABLED, nextSession } from '@/content/sessions'
import { fetchCompletedPlans } from '@/lib/planProgress'

const PRIMARY = '#7a1f2b'

const shortcut: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #ecdcdd', color: '#7a1f2b', borderRadius: '999px', padding: '8px 16px', fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(122,31,43,0.08)' }

// رابط تيليقرام أسفل الصفحة: الرابط الفارغ تظهر دائرته بدون ما تنضغط
const CONTACT_LINKS = [
    { title: 'قناة التحديثات', href: 'https://t.me/esprengl' },
]

export default function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [query, setQuery] = useState('')
    const [tab, setTab] = useState<'search' | 'plans'>('search')
    const [completed, setCompleted] = useState<Set<string>>(new Set())

    // الموقع مفتوح للكل، الدخول لإظهار الاسم وقوائم المشرف وحفظ الخطط المنتهية
    useEffect(() => {
        // الرجوع من صفحة خطة يفتح تبويب الخطط
        if (SESSIONS_ENABLED && new URLSearchParams(window.location.search).get('tab') === 'plans') setTab('plans')

        const apply = (session: Session | null) => {
            setIsLoggedIn(!!session)
            setUserName(session?.user?.user_metadata?.full_name || '')
            checkIsAdmin(session?.user?.email || null).then(setIsAdmin)
            fetchCompletedPlans().then(setCompleted)
        }
        supabase.auth.getSession().then(({ data: { session } }) => apply(session))
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => apply(session))
        return () => subscription.unsubscribe()
    }, [])

    const results = useMemo(() => searchTopics(query), [query])

    // البحث اللي ما لقى شي ينحفظ للمشرف، بعد ما يوقف الطالب عن الكتابة ثانية ونص
    useEffect(() => {
        if (query.trim().length < 2 || results.length > 0) return
        const t = setTimeout(() => logSearchMiss(query), 1500)
        return () => clearTimeout(t)
    }, [query, results.length])
    // اقتراحات تحت البحث قبل ما يكتب الطالب شي
    const suggestions = [...TOPICS.map((t) => t.title), 'nor', 'fragment'].slice(0, 6)
    const upNext = nextSession(completed)
    const q = query.trim()

    return (
        // سكرول الصفحة العادي، وشريط التواصل ينزل لآخر الشاشة إذا كان المحتوى قصير
        <div className="with-side-nav" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', color: '#2A1A1D', margin: 0 }}>
            <div className="top-nav-only">
                <Navbar isLoggedIn={isLoggedIn} />
            </div>

            <header style={{ textAlign: 'center', margin: '28px 0 0', padding: '10px 20px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {isLoggedIn && (
                    <h2 style={{ fontSize: '1.2rem', color: PRIMARY, fontWeight: 'bold', marginBottom: '6px' }}>
                        مرحباً {userName || 'طالبنا العزيز'} 👋
                    </h2>
                )}
                <h1 className="hero-title" style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#2A1A1D', marginBottom: '6px' }}>
                    وش تبي تذاكر اليوم؟
                </h1>
                <p style={{ fontSize: '1.05rem', color: '#5A4A4D', margin: 0, maxWidth: '600px' }}>
                    {tab === 'search'
                        ? 'ابحث عن أي درس، ويطلع لك شرحه بالضبط زي ما هو في كتاب مادتك'
                        : 'جلسة وحدة تمرّ فيها على كل شي: كلمات، قاعدة، قراءة، استماع، نطق، وكتابة'}
                </p>
                {/* اختصارات: تعلم كلمات للكل، و"ضايع بالانقلش؟ ابني خطتك" بالذكاء */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
                    <Link href="/words" style={shortcut}>📚 تعلم كلمات <span style={{ fontWeight: 'normal', color: '#9b8a8d' }}>· 5 دقايق</span></Link>
                    <Link href="/plan" style={shortcut}>🎯 ضايع بالانقلش؟ ابني خطتك <span style={{ fontWeight: 'normal', color: '#9b8a8d' }}>· بالذكاء</span></Link>
                </div>
                {SESSIONS_ENABLED && <div role="tablist" style={{ display: 'flex', gap: '6px', background: '#F7E6E8', padding: '5px', borderRadius: '12px', marginTop: '18px' }}>
                    {([['search', '🔍 دروس المواد'], ['plans', '🚀 جلسات التحسين']] as const).map(([key, label]) => (
                        <button
                            key={key}
                            type="button"
                            role="tab"
                            aria-selected={tab === key}
                            onClick={() => setTab(key)}
                            style={{ border: 'none', cursor: 'pointer', padding: '8px 18px', borderRadius: '9px', fontWeight: 'bold', fontSize: '0.95rem', background: tab === key ? PRIMARY : 'transparent', color: tab === key ? '#ffffff' : '#5A1520' }}
                        >
                            {label}
                        </button>
                    ))}
                </div>}
            </header>

            {SESSIONS_ENABLED && tab === 'plans' && (
                <section style={{ maxWidth: '760px', margin: '22px auto 40px', padding: '0 20px', width: '100%' }}>
                    {upNext ? (
                        <Link href={`/sessions/${upNext.slug}`} style={{ display: 'block', background: PRIMARY, color: '#ffffff', borderRadius: '16px', padding: '20px', textDecoration: 'none', marginBottom: '16px' }}>
                            <span style={{ fontSize: '0.85rem', opacity: 0.85 }}>{isLoggedIn ? 'جلستك الجاية' : 'ابدأ من هنا'}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '6px 0 10px' }}>
                                <span style={{ fontSize: '34px' }}>{upNext.icon}</span>
                                <strong style={{ fontSize: '1.3rem' }}>الجلسة {SESSIONS.indexOf(upNext) + 1}: {upNext.theme}</strong>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', fontSize: '0.82rem' }}>
                                {SECTIONS.map((s) => (
                                    <span key={s.key} style={{ background: 'rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '6px' }}>{s.icon} {s.label}</span>
                                ))}
                            </div>
                            <div style={{ marginTop: '12px', fontWeight: 'bold' }}>⏱ {SESSION_MINUTES} دقيقة · ابدأ ←</div>
                        </Link>
                    ) : (
                        <div style={{ background: '#eef1e4', border: '1px solid #bcc6a8', borderRadius: '16px', padding: '20px', textAlign: 'center', marginBottom: '16px', color: '#3d5a3a', fontWeight: 'bold' }}>
                            🎉 خلصت كل الجلسات! جلسات جديدة قريبًا.
                        </div>
                    )}

                    <p style={{ fontSize: '0.9rem', color: '#6B5357', margin: '0 4px 10px' }}>
                        {isLoggedIn
                            ? `خلصت ${SESSIONS.filter((s) => completed.has(s.slug)).length} من ${SESSIONS.length} جلسات`
                            : 'سجل دخول عشان نحفظ الجلسات اللي خلصتها، وتطلع لك الجاية بمحتوى جديد'}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {SESSIONS.map((s, i) => {
                            const done = completed.has(s.slug)
                            return (
                                <Link key={s.slug} href={`/sessions/${s.slug}`}
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', background: done ? '#eef1e4' : '#ffffff', border: `1px solid ${done ? '#bcc6a8' : '#ecdcdd'}`, borderRadius: '12px', padding: '12px 14px', textDecoration: 'none', color: '#2A1A1D' }}>
                                    <span style={{ fontSize: '24px' }}>{s.icon}</span>
                                    <span style={{ flex: 1, fontWeight: 'bold' }}>الجلسة {i + 1}: {s.theme}</span>
                                    <span style={{ fontSize: '0.8rem', color: done ? '#3d5a3a' : '#6B5357', fontWeight: done ? 'bold' : 'normal' }}>
                                        {done ? '✓ خلصتها' : <bdi>{s.grammar.title}</bdi>}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            )}

            {tab === 'search' && (
            <section style={{ maxWidth: '760px', margin: '22px auto 40px', padding: '0 20px', width: '100%' }}>
                <SearchBox query={query} setQuery={setQuery} />

                {/* مساحة ثابتة تحت البحث عشان الصفحة ما تقفز ولا تطلع فاضية، سواء قبل البحث أو أثناءه */}
                <div style={{ minHeight: '320px' }}>
                {!q ? (
                    <div style={{ textAlign: 'center', padding: '34px 10px 0', color: '#9b8a8d' }}>
                        <div style={{ fontSize: '2.6rem', marginBottom: '8px', opacity: 0.6 }}>📚</div>
                        <p style={{ margin: '0 0 16px', fontSize: '0.95rem' }}>اكتب اسم الدرس بالعربي أو الإنجليزي، ويطلع لك في كل مادة جاء فيها</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '0.85rem', alignSelf: 'center' }}>جرّب:</span>
                            {suggestions.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    dir="ltr"
                                    onClick={() => setQuery(s)}
                                    style={{ background: '#ffffff', border: '1px dashed #E4A3AB', color: PRIMARY, borderRadius: '999px', padding: '6px 14px', fontSize: '0.88rem', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p style={{ fontSize: '0.9rem', color: '#6B5357', margin: '14px 4px 10px' }}>
                        {results.length ? `${results.length} نتيجة لـ «${q}»` : `ما لقينا شي لـ «${q}»، جرّب كلمة ثانية`}
                    </p>
                )}

                {q && <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {results.map((topic) => <TopicCard key={topic.slug} topic={topic} />)}
                </div>}
                </div>
            </section>
            )}

            {/* للمشرف بس: كل الدروس، وطلاب الإنجليزي، وعمليات البحث */}
            {isAdmin && <AdminHomePanel />}

            <EsprMathAd />

            {/* شريط التواصل في آخر الصفحة، خط متقطع بعرض الصفحة */}
            <div style={{ marginTop: 'auto', height: '2px', backgroundImage: `repeating-linear-gradient(to left, ${PRIMARY} 0 18px, transparent 18px 30px)` }} />
            <footer dir="rtl" style={{ padding: '20px 24px 28px', display: 'flex', justifyContent: 'flex-start', gap: '28px', flexWrap: 'wrap' }}>
                {CONTACT_LINKS.map((c) => {
                    const circle = (
                        <span style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '2px solid #E4A3AB', boxShadow: '0 2px 6px rgba(122, 31, 43,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* سهم الرسالة مثل شعار تيليقرام بلون الموقع */}
                            <svg width="26" height="26" viewBox="3 4 18.5 16" fill={PRIMARY} aria-hidden="true" style={{ display: 'block' }}>
                                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                            </svg>
                        </span>
                    )
                    return (
                        <div key={c.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
                            <span style={{ color: PRIMARY, fontWeight: 'bold', fontSize: '0.85rem' }}>{c.title}</span>
                            {c.href ? (
                                <a href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`${c.title} على تيليقرام`}>
                                    {circle}
                                </a>
                            ) : (
                                <span title="قريبًا">{circle}</span>
                            )}
                        </div>
                    )
                })}
            </footer>
        </div>
    )
}
