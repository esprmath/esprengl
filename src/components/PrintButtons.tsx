'use client'

import Link from 'next/link'

/**
 * أزرار صفحة الملخص (ما تطلع في الورقة المطبوعة).
 * التحميل والطباعة نفس الشي: نافذة الطباعة في المتصفح، ومنها "حفظ كـ PDF" أو الطابعة.
 */
export default function PrintButtons({ lessonHref }: { lessonHref: string }) {
    const btn: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', minHeight: '46px', padding: '0 18px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.98rem', cursor: 'pointer', textDecoration: 'none', border: '1.5px solid #7a1f2b' }
    return (
        <div className="no-print" style={{ maxWidth: '794px', margin: '0 auto 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button onClick={() => window.print()} style={{ ...btn, background: '#7a1f2b', color: '#ffffff', flex: '1 1 180px' }}>⬇️ تحميل الملخص (PDF)</button>
                <button onClick={() => window.print()} style={{ ...btn, background: '#ffffff', color: '#7a1f2b', flex: '1 1 120px' }}>🖨️ طباعة</button>
                <Link href={lessonHref} style={{ ...btn, background: '#ffffff', color: '#7a1f2b', flex: '1 1 140px' }}>→ رجوع للدرس</Link>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B5357' }}>للتحميل: اضغط الزر، ومن نافذة الطباعة اختر «حفظ كـ PDF» (Save as PDF).</p>
        </div>
    )
}
