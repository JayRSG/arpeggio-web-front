import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()

    useEffect(() => {
        if (user?.data?.user_type == 'Student') {
            router.push('/panel/student')
        } else if (user?.data?.user_type == 'Admin') {
            router.push('/panel/admin')
        }
    }, [user])

    return <></>
}

export default Home
