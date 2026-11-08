// إعلان EsprMath أسفل الصفحة الرئيسية. الحسابات مشتركة بين الموقعين، فنفس الحساب يشتغل هناك.

import { ESPRMATH_URL } from '@/lib/links'

const logoFont: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 700 }

export default function EsprMathAd() {
    const card = (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '22px',
                flexWrap: 'wrap',
                background: 'linear-gradient(120deg, #2A1A1D 0%, #5A1520 55%, #7a1f2b 100%)',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '26px 28px',
                boxShadow: '0 10px 30px rgba(122,31,43,0.25)',
            }}
        >
            {/* رموز رياضيات باهتة في الخلفية */}
            <div aria-hidden dir="ltr" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', fontSize: '4.5rem', opacity: 0.08, letterSpacing: '18px', whiteSpace: 'nowrap', fontFamily: 'Georgia, serif', pointerEvents: 'none' }}>
                ∫ π Σ √x
            </div>

            <div style={{ width: '74px', height: '74px', borderRadius: '18px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', flexShrink: 0 }}>
                📐
            </div>

            <div style={{ flex: '1 1 260px', position: 'relative' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#E4A3AB', marginBottom: '4px' }}>من نفس الفريق</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 'bold', marginBottom: '6px' }}>
                    عندك رياضيات؟ جرّب{' '}
                    <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                        <span style={{ ...logoFont, color: '#E4A3AB' }}>Espr</span>
                        <span style={{ ...logoFont, color: '#ffffff' }}>Math</span>
                    </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.8, color: '#F3DADD' }}>
                    شرح مبسط لمقررات الرياضيات الجامعية، مع تدريبات تفاعلية واختبارات ومعلم ذكي يساعدك خطوة بخطوة. وتدخل بنفس حسابك هنا.
                </p>
            </div>

            <span style={{ position: 'relative', background: '#ffffff', color: '#7a1f2b', fontWeight: 'bold', padding: '12px 22px', borderRadius: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {ESPRMATH_URL ? 'زور EsprMath ←' : 'قريبًا'}
            </span>
        </div>
    )

    return (
        <section style={{ maxWidth: '1100px', margin: '10px auto 50px', padding: '0 20px', width: '100%' }}>
            {ESPRMATH_URL ? (
                <a href={ESPRMATH_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                    {card}
                </a>
            ) : (
                card
            )}
        </section>
    )
}
