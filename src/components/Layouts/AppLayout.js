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
            router.push('/panel')
        }
    }, [user])

    return (
        <div>
            <header>
                <Navbar />
            </header>
            {/* Page Content */}
            <main>
                <div className="px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28 font-body">
                    <div className="flex w-full min-h-screen">
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
                            <div className="">{children}</div>
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
