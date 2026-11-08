// أشكال مشتركة في النافبار الجانبي: الأزرار البيضاء (الذكاء والترجمة) والدوائر برا الدروس
/** زر أبيض بحواف دائرية (الذكاء والترجمة في البار) */
export const pillStyle = (active: boolean): React.CSSProperties => ({
    width: '70px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    padding: '7px 4px',
    borderRadius: '999px',
    background: active ? '#F7E6E8' : '#ffffff',
    color: '#7a1f2b',
    border: 'none',
    boxShadow: '0 2px 8px rgba(42,26,29,0.18)',
    fontWeight: 'bold',
    fontSize: '0.78rem',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
})

/** شكل الدوائر في نص البار برا الدروس (تعلم كلمات، خطتي) */
export const circleStyle: React.CSSProperties = { width: '52px', height: '52px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', background: '#ffffff', boxShadow: '0 0 0 5px rgba(255,255,255,0.15)', position: 'relative' }
export const circleLabel: React.CSSProperties = { fontSize: '0.78rem', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.3 }
