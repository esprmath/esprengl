'use client'

import { useEffect, useRef, useState } from 'react'

/** عرض ورقة A4 بالبكسل (نفس عرض .sheet في صفحة الملخص) */
const SHEET_WIDTH = 794

/**
 * يعرض الورقة بحجمها الحقيقي (نفس تنسيق الطباعة) ويصغّرها كلها لتناسب عرض الشاشة.
 * على الجوال تبان الصفحة كاملة مثل معاينة ملف PDF، بدون ما تتكسر الأعمدة ولا يضغط الكلام.
 * الطالب يكبّر بأصابعه إذا بغى. عند الطباعة يرجع الحجم الطبيعي.
 */
export default function SheetFit({ children }: { children: React.ReactNode }) {
    const outer = useRef<HTMLDivElement>(null)
    const inner = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1)
    const [height, setHeight] = useState<number | undefined>(undefined)

    useEffect(() => {
        const update = () => {
            const wrap = outer.current?.parentElement
            if (!wrap || !inner.current) return
            const cs = getComputedStyle(wrap)
            const avail = wrap.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
            const s = Math.min(1, avail / SHEET_WIDTH)
            setScale(s)
            setHeight(inner.current.offsetHeight * s)
        }
        update()
        const ro = new ResizeObserver(update)
        if (inner.current) ro.observe(inner.current)
        if (outer.current?.parentElement) ro.observe(outer.current.parentElement)
        return () => ro.disconnect()
    }, [])

    return (
        <div ref={outer} className="fit-outer" style={{ width: SHEET_WIDTH * scale, height, margin: '0 auto', overflow: 'hidden', direction: 'ltr' }}>
            <div ref={inner} className="fit-inner" style={{ width: SHEET_WIDTH, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
                {children}
            </div>
        </div>
    )
}
