import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/fav-icon.png" />
            </Head>

            {<Component {...pageProps} />}
        </>
    )
}

export default App
