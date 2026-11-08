'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

/** موديول أُضيف من لوحة التحكم ولم تُجهَّز صفحة محتواه بعد */
export default function ModulePlaceholderPage() {
    const params = useParams();
    const courseId = params.courseId as string;

    return (
        <div style={{ minHeight: '100vh', background: '#FBF6F6', color: '#2A1A1D' }}>
            <Navbar isLoggedIn={true} />
            <div style={{ maxWidth: 480, margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 44 }}>🚧</div>
                <h1 style={{ fontSize: 22, fontWeight: 900, margin: '10px 0 6px' }}>
                    Module {params.moduleId as string} قيد التجهيز
                </h1>
                <p style={{ color: '#63585a', marginBottom: 18 }}>نجهز محتوى هذا الموديول، وسيكون متاحًا قريبًا.</p>
                <Link href={`/workspace/${courseId}`} style={{ color: '#7a1f2b', fontWeight: 800 }}>
                    → الرجوع للكورس
                </Link>
            </div>
        </div>
    );
}
