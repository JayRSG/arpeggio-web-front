import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import * as gtag from "@/lib/gtag"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from "next/script";

config.autoAddCss = false

const App = ({ Component, pageProps }) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events])

    return (
        <>

            <Head>
                <link rel="icon" href="/fav-icon.png" />
            </Head>

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];

                    function gtag(){dataLayer.push(arguments);}
                    
                    gtag('js', new Date());
                    
                    gtag('config', '${gtag.GA_TRACKING_ID}',
                    {
                        page_path: window.location.pathname,
                    });`,
                }}
            />

            {<Component {...pageProps} />}
        </>
    )
}

export default App
