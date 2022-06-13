import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import Blog from '@/components/media/Blog'
import GuestLayout from '@/components/Layouts/GuestLayout'

const blog = () => {
    return (
        <>
            <title>Blogs</title>

            <GuestLayout>
                <Navbar />

                <Blog />

                <Footer />
            </GuestLayout>
        </>
    )
}

export default blog
