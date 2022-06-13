import JoinComponent from '@/components/join/JoinComponent'
import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'

const Join = () => {
    const [loading, setLoading] = useState(true)

    const { user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    useEffect(() => {
        if (user === 'undefined') {
            setLoading(false)
        }
    }, [user])

    if (loading) {
        return <>{/* <Loader /> */}</>
    } else {
        return (
            <>
                <title>Join</title>
                <Navbar />

                <JoinComponent />

                <Footer />
            </>
        )
    }
}

export default Join
