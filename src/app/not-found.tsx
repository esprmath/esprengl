import Link from 'next/link';

export default function NotFound() {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            padding: 20,
            background: '#FBF6F6',
            color: '#2A1A1D',
            fontWeight: 800,
            textAlign: 'center',
        }}>
            <div style={{ fontSize: 42 }}>🔍</div>
            <h1 style={{ fontSize: 20, margin: 0 }}>الصفحة غير موجودة</h1>
            <Link href="/" style={{ color: '#7a1f2b' }}>الرجوع للصفحة الرئيسية</Link>
        </main>
    );
}
