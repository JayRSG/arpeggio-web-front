import AuthCard from '../AuthCard'
import GuestLayout from '../Layouts/GuestLayout'
import GoogleAndFacebookLogin from './GoogleAndFacebookLogin'
import LoginForm from './LoginForm'
import SignupWith from './SignupWith'

function Login({ handler }) {
    return (
        <>
            <title>Login</title>
            {/*main  container */}
            <GuestLayout>
                <AuthCard>
                    <div className="w-full bg-main-color sm:bg-hero-image sm:bg-no-repeat sm:bg-cover sm:pt-28">
                        <h1 className="text-4xl pt-5 font-bold mb-10 text-center font-title sm:pt-20 sm:text-white">
                            Welcome Back
                        </h1>

                        <div className="flex justify-around w-full flex-wrap">
                            <a
                                className="text-2xl cursor-pointer pr-8 font-bold sm:text-white sm:text-base"
                                onClick={handler}>
                                SIGN UP
                            </a>
                            <a className="text-2xl cursor-pointer font-bold sm:text-white sm:text-base">
                                LOGIN
                            </a>
                        </div>
                    </div>

                    <hr
                        id="indicator"
                        className="bg-blue-200 w-1/2 border-0 h-2 transition transform translate-x-1/2 duration-500 mb-1 shadow-md"
                    />

                    {/* Login Form */}
                    <LoginForm />

                    <SignupWith
                        className1="mt-8 mb-3"
                        className2="w-2/5 sm:w-2/5 xs:w-149"
                        title="or login with"
                    />

                    <GoogleAndFacebookLogin />
                </AuthCard>
            </GuestLayout>
        </>
    )
}

export default Login
