'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { DEFAULT_CHOICE, READY_NAMES, type NameChoice } from '@/lib/names'

const PRIMARY = '#7a1f2b'

const Ctx = createContext<{ choice: NameChoice; setChoice: (c: NameChoice) => void }>({ choice: DEFAULT_CHOICE, setChoice: () => {} })

/** يحفظ اسم الشخصية اللي اختاره الطالب في هالصفحة. بدون تسجيل دخول وبدون حفظ: كل درس يبدأ فاضي */
export function NameProvider({ children }: { children: ReactNode }) {
    const [choice, setChoice] = useState<NameChoice>(DEFAULT_CHOICE)
    return <Ctx.Provider value={{ choice, setChoice }}>{children}</Ctx.Provider>
}

export const useNameChoice = () => useContext(Ctx).choice

const chip = (active: boolean) => ({
    border: `1px solid ${active ? PRIMARY : '#E4A3AB'}`,
    background: active ? PRIMARY : '#ffffff',
    color: active ? '#ffffff' : '#5A1520',
    borderRadius: '999px',
    padding: '5px 12px',
    fontSize: '0.9rem',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
})

/** فوق الأمثلة: اسم جاهز (Fahad أو Laura) أو اسم يكتبه الطالب، مع ولد أو بنت عشان الضمائر (He / She) */
export function NamePicker() {
    const { choice, setChoice } = useContext(Ctx)
    const typed = choice.name && !READY_NAMES.some((r) => r.name === choice.name)
    return (
        <div style={{ background: '#ffffff', border: '1px dashed #E4A3AB', borderRadius: '12px', padding: '10px 14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 'bold', color: PRIMARY, fontSize: '0.95rem' }}>اسم الشخصية في الأمثلة:</span>
            {READY_NAMES.map((r) => (
                <button key={r.name} type="button" style={chip(choice.name === r.name)} onClick={() => setChoice({ name: r.name, girl: r.girl })}>
                    {r.girl ? '👧' : '👦'} {r.name}
                </button>
            ))}
            <input
                dir="ltr"
                value={typed ? choice.name : ''}
                onChange={(e) => {
                    const v = e.target.value.replace(/[{}<>]/g, '').slice(0, 20)
                    setChoice({ name: v ? v[0].toUpperCase() + v.slice(1) : '', girl: choice.girl })
                }}
                placeholder="أو اكتب اسم"
                aria-label="اكتب اسم الشخصية"
                style={{ border: '1px solid #E4A3AB', borderRadius: '999px', padding: '5px 12px', fontSize: '0.9rem', width: '130px', textAlign: 'left' }}
            />
            <span style={{ display: 'inline-flex', gap: '4px' }}>
                <button type="button" style={chip(!choice.girl)} onClick={() => setChoice({ ...choice, girl: false, name: READY_NAMES.some((r) => r.name === choice.name) ? '' : choice.name })}>
                    ولد
                </button>
                <button type="button" style={chip(choice.girl)} onClick={() => setChoice({ ...choice, girl: true, name: READY_NAMES.some((r) => r.name === choice.name) ? '' : choice.name })}>
                    بنت
                </button>
            </span>
        </div>
    )
}
