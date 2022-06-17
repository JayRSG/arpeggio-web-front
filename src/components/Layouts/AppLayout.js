// import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import AdminNav from '../panel/admin/AdminNav'
import StudentNav from '../panel/student/StudentNav'

const AppLayout = ({ type, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            setLoading(true)
        } else if (
            user &&
            (user?.data?.user_type == type || type == 'Determine')
        ) {
            setLoading(false)
        } else if (user?.data?.user_type != type) {
            setLoading(true)
            if (user?.data?.user_type == 'Student') {
                router.push('/panel/student')
            } else if (user?.data?.user_type == 'Admin') {
                router.push('/panel/admin')
            }
        }
    }, [user])

    return (
        <div>
            <header>
                <Navbar />
            </header>
            {/* Page Content */}
            <main>
                <div className="px-52 2xl:px-28 xl:px-28 lg:px-12 md:px-0 sm:px-0">
                    <div className="flex font-body min-h-screen">
                        {!loading &&
                        (type == 'Admin' || type == 'Determine') &&
                        user?.data?.user_type == 'Admin' ? (
                            <AdminNav />
                        ) : !loading &&
                          (type == 'Student' || type == 'Determine') &&
                          user?.data?.user_type == 'Student' ? (
                            <StudentNav />
                        ) : (
                            ''
                        )}

                        {!loading ? (
                            <div className="w-full min-h-screen">
                                {children}
                            </div>
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default AppLayout
