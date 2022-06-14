import JoinComponent from '@/components/join/JoinComponent'
import Footer from '@/components/Layouts/Footer'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Navbar from '@/components/Layouts/Navbar'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'

const Join = () => {
    const router = useRouter()
    const { user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    if (user !== undefined) {
        return (
            <GuestLayout>
                <title>Join</title>
                <div></div>
            </GuestLayout>
        )
    } else {
        return (
            <GuestLayout>
                <title>Join</title>
                <Navbar />
                <JoinComponent />
                <Footer />{' '}
            </GuestLayout>
        )
    }
}

export default Join
