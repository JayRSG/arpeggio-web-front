import JoinComponent from '@/components/join/JoinComponent'
import Footer from '@/components/Layouts/Footer'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Navbar from '@/components/Layouts/Navbar'
import Loader from '@/components/Loader'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const Join = () => {
    const loading = useRef(true)
    const [preventLoop, setPreventLoop] = useState(false)
    const { user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    useEffect(() => {
        console.log(user)
        if (user) {
            loading.current = true
        }

        let t
        if (user === undefined) {
            t = setInterval(() => {
                loading.current = false
            }, 3000)
        }

        return () => {
            clearInterval(t)
        }
    }, [user])

    return (
        <div>
            <title>Join</title>
            <Navbar />
            {loading.current ? <Loader /> : <JoinComponent />}
            <Footer />{' '}
        </div>
    )
}

export default Join
