import { useEffect, useState } from 'react'
import Footer from '@/components/Layouts/Footer'
import CountDownTimer from '@/components/CountDownTimer'
import Navbar from '@/components/Layouts/Navbar'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'

const verify = () => {
    const waitTime = 10;
    const [resendDisableState, setResendDisableState] = useState(true)
    const [resendWaitTime, setResendWaitTime] = useState(waitTime)
    const [status, setStatus] = useState(null)

    const { user, resendEmailVerification } = useAuth({ middleware: 'auth' })
    const router = useRouter()

    useEffect(() => {
        if (user?.data?.email_verified_at != null) {
            router.push('/')
        }
    }, [user])

    const resendClickHandler = e => {
        resendEmailVerification({ setStatus })

        setResendDisableState(true)
        setResendWaitTime(waitTime)
    }

    /**
     * Timer Restart method implements a timer which counts down to a certain amount before enabling a button in this page
     */

    const handleTimerEnd = timerState => {
        console.log('timer ends and now enabled button')
        if (timerState) {
            setResendDisableState(!timerState)
        }
    }

    return user ? (
        <>
            <title>Verify</title>
            <Navbar />

            {/* Main container */}
            <div className="w-screen bg-gray-500 h-full p-14 mobile:p-0 bg-hero-image bg-no-repeat bg-cover font-body">
                {/* Form container */}
                <div className="min-h-screen flex items-center flex-col m-auto mobile:m-0 w-1/2 mobile:w-full laptop:w-112 tablet:w-4/5 large:w-11/12 h-3/5 bg-white flex-wrap mobile:relative mobile:-top-16 mobile:-mb-16">
                    <div className="w-full mobile:bg-hero-image mobile:bg-no-repeat mobile:bg-cover">
                        <h1 className="hidden mobile:block mobile:px-0 mobile:py-10 mobile:text-4xl mobile:font-bold mobile:text-white mobile:opacity-0">
                            Profile
                        </h1>
                    </div>
                    <h2 className="text-center text-3xl p-14 font-bold text-btn-color">
                        Verify your email address
                    </h2>

                    <p className="text-center text-2xl p-10 font-normal">
                        Email verification link sent to
                        <br />
                        <a className="text-center text-blue-400">
                            {user?.data?.email}
                        </a>
                    </p>

                    <p className="text-center text-2xl p-10 font-normal">
                        Didn't receive link?
                    </p>

                    <p id="timer">
                        Try After{' '}
                        <CountDownTimer
                            seconds={resendWaitTime}
                            repeat={resendDisableState}
                            onTimerEnd={handleTimerEnd}
                        />
                    </p>

                    <button
                        type="submit"
                        id="verification-resend-button"
                        onClick={resendClickHandler}
                        className={`${
                            resendDisableState
                                ? 'bg-gray-400 hover:cursor-not-allowed'
                                : 'bg-btn-color hover:cursor-pointer'
                        }  btn w-50 h-14 shadow-btn text-2xl my-7 font-title font-bold`}
                        disabled={resendDisableState}>
                        Resend Link
                    </button>
                </div>
            </div>

            <Footer />
        </>
    ) : (
        ''
    )
}

export default verify
