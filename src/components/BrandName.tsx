// اسم الموقع داخل النصوص بنفس خط الشعار: Espr بالعنابي و Engl بالأسود.
// الخط يُحدد على كل كلمة لأن globals.css يفرض Tajawal على كل العناصر.

const font: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: 700,
};

/** onDark للخلفيات الغامقة، وblack يكتب الاسم كله بالأسود داخل العناوين */
export default function BrandName({ onDark = false, black = false }: { onDark?: boolean; black?: boolean }) {
    return (
        <span dir="ltr" style={{ unicodeBidi: 'isolate', whiteSpace: 'nowrap' }}>
            <span style={{ ...font, color: onDark ? '#E4A3AB' : black ? '#2A1A1D' : '#7A1F2B' }}>Espr</span>
            <span style={{ ...font, color: onDark ? '#FBF6F6' : '#2A1A1D' }}>Engl</span>
        </span>
    );
}
