import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SiteNavbar from '@/components/SiteNavbar'
import SessionRunner from '@/components/SessionRunner'
import { SESSIONS, SESSIONS_ENABLED, findSession } from '@/content/sessions'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
    return SESSIONS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const session = findSession((await params).slug)
    return { title: session ? `${session.theme} | EsprEngl` : 'EsprEngl' }
}

export default async function SessionPage({ params }: { params: Promise<Params> }) {
    const session = findSession((await params).slug)
    if (!SESSIONS_ENABLED || !session) notFound()

    return (
        <div style={{ backgroundColor: '#FBF6F6', minHeight: '100dvh', color: '#2A1A1D' }}>
            <SiteNavbar />
            <SessionRunner session={session} />
        </div>
    )
}
