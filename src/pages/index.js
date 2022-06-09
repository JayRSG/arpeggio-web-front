import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'

export default function home() {
    // const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Arpeggio</title>
                <meta property="og:url" content="www.arpeggiobd.com" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="867124930576205" />
                <meta property="og:title" content={'Arpeggio Music School'} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content={'image/home-2.jpg'} />
                <meta
                    property="og:description"
                    content="The courses we offer are - Guitar, Piano, Violin, Bass, Drums, Ukulele, Flute and Painting. Besides regular courses we have many short-term courses as well. We also offer private classes and online music courses for students staying abroad or far away from our location."
                />
                <meta property="og:image" content={'image/home-2.jpg'} />
            </Head>

            <Navbar />
            {/* <Home /> */}

            <Footer />
        </>
    )
}
