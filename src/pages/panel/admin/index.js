import AppLayout from '@/components/Layouts/AppLayout'
import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import AdminNav from '@/components/panel/admin/AdminNav'
import UploadClassLink from '@/components/panel/admin/UploadClassLink'

export default function Home() {
    return (
        <AppLayout type="Admin">
            <title>Admin</title>

            {/* Uploading Classlink for online classes */}
            <UploadClassLink />
        </AppLayout>
    )
}
