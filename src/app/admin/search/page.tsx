import AdminPageShell from '@/components/AdminPageShell'
import { SearchMisses } from '@/components/SearchMisses'

export const metadata = { title: 'وش بحثوا عنه', robots: { index: false, follow: false } }

export default function AdminSearchPage() {
    return (
        <AdminPageShell title="🔍 وش بحثوا عنه">
            <SearchMisses />
        </AdminPageShell>
    )
}
