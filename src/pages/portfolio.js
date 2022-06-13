import Footer from '@/components/Layouts/Footer'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Navbar from '@/components/Layouts/Navbar'
import Portfolio from '@/components/Portfolio'

const portfolio = () => {
    return (
        <>
            <title>Portfolio</title>

            <GuestLayout>
                <Navbar />

                <Portfolio />

                <Footer />
            </GuestLayout>
        </>
    )
}

export default portfolio
