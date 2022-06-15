// import your icons

import AppLayout from '@/components/Layouts/AppLayout'
import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import BackingTrack from '@/components/panel/BackingTrack'
import StudentNav from '@/components/panel/student/StudentNav'

const backtrack = () => {
    return (
        <>
            <AppLayout type="Determine">
                <title>Backing Track</title>

                <div className="px-52 large:px-0 mobile:px-0">
                    <BackingTrack />
                </div>
            </AppLayout>
        </>
    )
}

export default backtrack
