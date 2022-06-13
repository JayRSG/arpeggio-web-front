import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import BlogsDetail from '@/components/media/BlogDetail'
import GuestLayout from '@/components/Layouts/GuestLayout'

const blogsId = () => {
    return (
        <>
            <title>Blogs Details</title>

            <GuestLayout>
                <Navbar />

                <BlogsDetail />

                <Footer />
            </GuestLayout>
        </>
    )
}

export default blogsId
