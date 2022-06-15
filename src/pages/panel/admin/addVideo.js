import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import AddVideo from '@/components/panel/admin/AddVideo'
import AdminNav from '@/components/panel/admin/AdminNav'
import { useEffect } from 'react'

const addvideo = () => {
    return (
        <>
            <title>Admin</title>
            <Navbar />
            <div className="px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28">
                <div className="flex font-body min-h-screen">
                    <AdminNav />
                    <div className="w-full min-h-screen">
                        {/* Lists all backing track and free classes and allows adding new video */}
                        <AddVideo />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default addvideo
