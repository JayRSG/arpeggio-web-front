import AppLayout from '@/components/Layouts/AppLayout'
import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import AdminNav from '@/components/panel/admin/AdminNav'
import UploadClassLink from '@/components/panel/admin/UploadClassLink'

export default function Home() {
    return (
        <AppLayout type="Admin">
            <title>Admin</title>
            <Navbar />
            <div className="px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28">
                <div className="flex font-body min-h-screen">
                    <AdminNav />
                    <div className="w-full min-h-screen">
                        <h1 className="text-4xl p-7 pl-20 font-bold">
                            Dashboard
                        </h1>

                        {/* Uploading Classlink for online classes */}
                        <UploadClassLink />
                    </div>
                </div>
            </div>
            <Footer />
        </AppLayout>
    )
}
