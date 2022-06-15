// import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

const AppLayout = ({ type, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            setLoading(true)
        } else if (user && user?.data?.user_type == type) {
            setLoading(false)
        }

        if (user?.data?.user_type != type) {
            router.push('/panel')
        }
    }, [user])

    if (!loading) {
        return (
            <div>
                {/* Page Content */}
                <main>{children}</main>
            </div>
        )
    } else {
        return (
            <div>
                <main>
                    <Loader />
                </main>
            </div>
        )
    }
}

export default AppLayout
