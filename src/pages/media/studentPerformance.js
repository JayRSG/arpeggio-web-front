import Footer from '@/components/Layouts/Footer'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Navbar from '@/components/Layouts/Navbar'
import StudentPerformance from '@/components/media/StudentPerformance'

const studentPerformance = () => {
    return (
        <>
            <title>Student Performances</title>

            <GuestLayout>
                <Navbar />

                <StudentPerformance />

                <Footer />
            </GuestLayout>
        </>
    )
}

export default studentPerformance
