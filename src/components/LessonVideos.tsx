'use client'

import { useState } from 'react'
import type { LessonVideo } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

/**
 * مقاطع شرح الدرس، اختيارية: القسم مقفل، والطالب يفتحه إذا حب يتابع.
 * ولما ينفتح نعرض صورة المقطع بس، والمشغّل ما ينحمّل إلا لما يضغط الطالب،
 * عشان الصفحة تبقى خفيفة وما يتحمّل يوتيوب لكل اللي يفتح الدرس.
 */
export default function LessonVideos({ videos }: { videos: LessonVideo[] }) {
    const [open, setOpen] = useState(false)
    const [playing, setPlaying] = useState<string | null>(null)
    const [current, setCurrent] = useState(0)
    const video = videos[current]

    return (
        <section style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '14px', padding: '14px', marginBottom: '18px' }}>
            <button
                onClick={() => {
                    setOpen((o) => !o)
                    setPlaying(null)
                }}
                aria-expanded={open}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'right', color: '#2A1A1D' }}
            >
                <span style={{ fontSize: '1.2rem' }}>🎬</span>
                <span style={{ flex: 1 }}>
                    <strong style={{ color: PRIMARY, display: 'block' }}>تحب تتابع؟ شرح الدرس بالفيديو</strong>
                    <span style={{ fontSize: '0.8rem', color: '#9b8a8d' }}>
                        {videos.length > 1 ? `${videos.length} مقاطع` : 'مقطع واحد'} · اختياري
                    </span>
                </span>
                <span style={{ background: open ? '#F7E6E8' : PRIMARY, color: open ? PRIMARY : '#ffffff', borderRadius: '999px', padding: '6px 14px', fontSize: '0.85rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {open ? 'إخفاء ▴' : 'افتح ▾'}
                </span>
            </button>

            {open && (
            <div style={{ marginTop: '12px' }}>

            {videos.length > 1 && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    {videos.map((v, i) => (
                        <button
                            key={v.id}
                            onClick={() => {
                                setCurrent(i)
                                setPlaying(null)
                            }}
                            style={{ border: `1px solid ${i === current ? PRIMARY : '#ecdcdd'}`, background: i === current ? PRIMARY : '#ffffff', color: i === current ? '#ffffff' : '#2A1A1D', borderRadius: '999px', padding: '5px 12px', fontSize: '0.82rem', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            {i + 1}. {v.note ?? v.title}
                        </button>
                    ))}
                </div>
            )}

            <div style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: '10px', overflow: 'hidden', background: '#2A1A1D' }}>
                {playing === video.id ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                ) : (
                    <button
                        onClick={() => setPlaying(video.id)}
                        aria-label={`شغّل ${video.title}`}
                        style={{ position: 'absolute', inset: 0, border: 'none', padding: 0, cursor: 'pointer', background: `center / cover no-repeat url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)` }}
                    >
                        <span style={{ position: 'absolute', inset: 0, background: 'rgba(42,26,29,0.25)' }} />
                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '64px', height: '64px', borderRadius: '50%', background: PRIMARY, color: '#ffffff', fontSize: '1.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(0,0,0,0.35)', paddingLeft: '4px' }}>
                            ▶
                        </span>
                    </button>
                )}
            </div>

            <div dir="ltr" style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginTop: '8px', fontSize: '0.85rem', color: '#6B5357' }}>
                <span>
                    <strong style={{ color: '#2A1A1D' }}>{video.title}</strong> · {video.channel}
                </span>
                <span>{video.minutes}</span>
            </div>
            <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: '#9b8a8d' }}>المقطع من يوتيوب وبالإنجليزي، ويغطي نفس فكرة الدرس بس بأسلوب ثاني.</p>
            </div>
            )}
        </section>
    )
}
