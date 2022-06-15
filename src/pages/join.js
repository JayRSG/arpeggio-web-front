import JoinComponent from '@/components/join/JoinComponent'
import Footer from '@/components/Layouts/Footer'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Navbar from '@/components/Layouts/Navbar'
import Loader from '@/components/Loader'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Join = () => {
    const [loading, setLoading] = useState(true)
    const [preventLoop, setPreventLoop] = useState(false)
    const { user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    useEffect(() => {
        console.log(user)
        if (user) {
            setLoading(true)
        }

        let t
        if (user === undefined) {
            t = setInterval(() => {
                setLoading(false)
            }, 2000)
        }

        return () => {
            clearInterval(t)
        }
    }, [user])

    return (
        <div>
            <title>Join</title>
            <Navbar />
            {loading ? <Loader /> : <JoinComponent />}
            <Footer />{' '}
        </div>
    )
}

export default Join
