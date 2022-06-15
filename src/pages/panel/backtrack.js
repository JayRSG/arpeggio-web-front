// import your icons

import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import BackingTrack from '@/components/panel/BackingTrack'
import StudentNav from '@/components/panel/student/StudentNav'

const backtrack = () => {
    return (
        <>
            <title>Backing Track</title>
            <Navbar />

            <div className="px-52 large:px-0 mobile:px-0">
                <div className="flex font-body min-h-screen">
                    <StudentNav />
                    <BackingTrack />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default backtrack
