// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const GoogleAndFacebookLogin = ({ className }) => {
    const router = useRouter()
    const { socialLoginRedirect } = useAuth({
        middleware: 'guest',
    })

    const [status, setStatus] = useState(null)
    const [errors, setErrors] = useState([])
    const [redirect, setRedirect] = useState('')
    const [provider, setProvider] = useState('')

    useEffect(() => {
        if (redirect != '' && provider != '') {
            router.push('/social/' + provider + '?redirect=' + redirect)
        }
    }, [redirect, provider])

    return (
        <div
            className={`flex justify-around w-full pb-5 flex-wrap ${className}`}>
            <a
                onClick={() => {
                    setProvider('google')
                    socialLoginRedirect(
                        'google',
                        setRedirect,
                        setErrors,
                        setStatus,
                    )
                }}
                className="btn text-black border-2 border-gray-300 rounded-3xl w-60 sm:w-52 xs:w-36 h-12 text-center text-xs xs:text-xxs font-bold hover:scale-105 transform transition-all duration-500">
                <FontAwesomeIcon
                    icon={faGoogle}
                    size="1x"
                    transform="left-20"
                />
                LOGIN WITH GOOGLE
            </a>

            <a
                onClick={() => {
                    setProvider('facebook')
                    socialLoginRedirect(
                        'facebook',
                        setRedirect,
                        setErrors,
                        setStatus,
                    )
                }}
                className="btn border-2 border-blue-400 rounded-3xl w-60 sm:w-52 xs:w-36 h-12 text-center text-blue-400 text-xs xs:text-xxxxs font-bold hover:scale-105 transform transition-all duration-500">
                <FontAwesomeIcon
                    icon={faFacebookF}
                    size="1x"
                    transform="left-28"
                />
                LOGIN WITH FACEBOOK
            </a>
        </div>
    )
}

export default GoogleAndFacebookLogin
