import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import AdminAnouncements from '@/components/panel/admin/AdminAnouncements'
import AdminNav from '@/components/panel/admin/AdminNav'

const Announcements = () => {
    return (
        <>
            <title>Announcement</title>
            <Navbar />
            <div className="px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28 font-body">
                <div className="flex font-body min-h-screen">
                    <AdminNav />
                    <div className="w-full min-h-screen">
                        <AdminAnouncements />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Announcements
