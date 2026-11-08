'use client'

import { useMemo, useState } from 'react'
import { suggest } from '@/content/lessons'

const PRIMARY = '#7a1f2b'

/** خانة البحث، وتحتها اقتراحات تطلع وهو يكتب. الأسهم تتنقل بينها و Enter يختار */
export default function SearchBox({ query, setQuery }: { query: string; setQuery: (q: string) => void }) {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(-1)
    const items = useMemo(() => suggest(query), [query])
    const show = open && items.length > 0

    const choose = (label: string) => {
        setQuery(label)
        setOpen(false)
        setActive(-1)
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!show) return
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setActive((a) => (a + 1) % items.length)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActive((a) => (a <= 0 ? items.length - 1 : a - 1))
        } else if (e.key === 'Enter' && active >= 0) {
            e.preventDefault()
            choose(items[active].label)
        } else if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            <label
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#ffffff',
                    border: `2px solid ${PRIMARY}`,
                    borderRadius: show ? '14px 14px 0 0' : '14px',
                    padding: '12px 16px',
                }}
            >
                <span aria-hidden="true" style={{ fontSize: '1.2rem' }}>🔍</span>
                <input
                    type="search"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setOpen(true)
                        setActive(-1)
                    }}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    onKeyDown={onKeyDown}
                    placeholder="مثلاً: Sentences أو الجمل"
                    aria-label="ابحث عن درس"
                    aria-autocomplete="list"
                    aria-expanded={show}
                    role="combobox"
                    autoComplete="off"
                    style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', fontSize: '1.05rem', background: 'transparent', color: '#2A1A1D' }}
                />
            </label>

            {show && (
                <ul
                    role="listbox"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 20,
                        listStyle: 'none',
                        margin: 0,
                        padding: '6px',
                        background: '#ffffff',
                        border: `2px solid ${PRIMARY}`,
                        borderTop: '1px solid #ecdcdd',
                        borderRadius: '0 0 14px 14px',
                        boxShadow: '0 12px 24px rgba(122,31,43,0.12)',
                    }}
                >
                    {items.map((s, i) => (
                        <li
                            key={s.label}
                            role="option"
                            aria-selected={i === active}
                            // mousedown عشان يختار قبل ما الخانة تفقد التركيز وتقفل القائمة
                            onMouseDown={(e) => {
                                e.preventDefault()
                                choose(s.label)
                            }}
                            onMouseEnter={() => setActive(i)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '10px',
                                padding: '9px 12px',
                                borderRadius: '9px',
                                cursor: 'pointer',
                                background: i === active ? '#F7E6E8' : 'transparent',
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span aria-hidden style={{ color: '#c9a9ae' }}>🔍</span>
                                <Highlight text={s.label} query={query} />
                            </span>
                            <span style={{ fontSize: '0.8rem', color: '#9b8a8d', whiteSpace: 'nowrap' }}>{s.topic.titleAr}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

/** يبرز الجزء اللي كتبه الطالب داخل الاقتراح */
function Highlight({ text, query }: { text: string; query: string }) {
    const q = query.trim().toLowerCase()
    const i = q ? text.toLowerCase().indexOf(q) : -1
    if (i < 0) return <bdi style={{ fontWeight: 'bold', color: '#2A1A1D' }}>{text}</bdi>
    return (
        <bdi style={{ color: '#2A1A1D' }}>
            {text.slice(0, i)}
            <strong style={{ color: PRIMARY }}>{text.slice(i, i + q.length)}</strong>
            {text.slice(i + q.length)}
        </bdi>
    )
}
