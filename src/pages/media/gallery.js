import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import Gallery from '@/components/media/Gallery'
import GuestLayout from '@/components/Layouts/GuestLayout'

const gallery = () => {
    return (
        <>
            <title>Gallery</title>

            <GuestLayout>
                <Navbar />

                {/* <Carousal centerMode={true} /> */}
                <Gallery />

                <Footer />
            </GuestLayout>
        </>
    )
}

export default gallery
