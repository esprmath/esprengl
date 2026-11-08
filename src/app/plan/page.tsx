import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNavbar from '@/components/SiteNavbar'
import PlanBuilder from '@/components/PlanBuilder'

export const metadata: Metadata = {
    title: 'خطة التحسين | EsprEngl',
    description: 'الذكاء يسألك عن مستواك ووش يضايقك في الإنجليزي، ويبني لك خطة تحسين بمراحل واضحة وروتين يومي.',
}

export default function PlanPage() {
    return (
        <div style={{ minHeight: '100dvh', color: '#2A1A1D' }}>
            <div className="top-nav-only no-print">
                <SiteNavbar />
            </div>
            <main style={{ maxWidth: '680px', margin: '0 auto', padding: '24px 20px 60px' }}>
                <div className="no-print">
                    <Link href="/" style={{ color: '#7a1f2b', fontWeight: 'bold', fontSize: '0.9rem', textDecoration: 'none' }}>
                        → الرئيسية
                    </Link>
                    <h1 style={{ fontSize: '1.7rem', margin: '16px 0 4px' }}>خطة التحسين 🎯</h1>
                    <p style={{ color: '#6B5357', margin: '0 0 18px', lineHeight: 1.8 }}>خطة شخصية في الإنجليزي، يبنيها لك الذكاء على مستواك ووقتك.</p>
                </div>
                <PlanBuilder />
            </main>
        </div>
    )
}
