import JoinComponent from '@/components/join/JoinComponent'
import Footer from '@/components/Layouts/Footer'
import Navbar from '@/components/Layouts/Navbar'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'

const Join = () => {
    const { user } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    return (
        <>
            <title>Join</title>
            <Navbar />
            <JoinComponent />
            <Footer />{' '}
        </>
    )
}

export default Join
