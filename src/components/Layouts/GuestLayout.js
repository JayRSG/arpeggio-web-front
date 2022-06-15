import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

const GuestLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'guest' })
    
    return (
        <div>
            <Head>
                <title>Arpeggio</title>
            </Head>

            <div className="">{children}</div>
        </div>
    )
}

export default GuestLayout
