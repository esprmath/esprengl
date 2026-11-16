import AdminPageShell from '@/components/AdminPageShell'
import EnglStudents from '@/components/EnglStudents'

export const metadata = { title: 'طلاب الإنجليزي', robots: { index: false, follow: false } }

export default function AdminStudentsPage() {
    return (
        <AdminPageShell title="🎓 طلاب الإنجليزي">
            <EnglStudents />
        </AdminPageShell>
    )
}
