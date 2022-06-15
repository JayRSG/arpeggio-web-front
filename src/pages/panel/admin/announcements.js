import AppLayout from '@/components/Layouts/AppLayout'
import AdminAnouncements from '@/components/panel/admin/AdminAnouncements'

const Announcements = () => {
    return (
        <>
            <title>Announcement</title>

            <AppLayout type="Admin">
                <AdminAnouncements />
            </AppLayout>
        </>
    )
}

export default Announcements
