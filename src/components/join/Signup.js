import GoogleAndFacebookLogin from './GoogleAndFacebookLogin'
import SignupForm from './SignupForm'
import SignupWith from './SignupWith'

function Signup({ handler }) {
    return (
        <>
            <title>Signup</title>
            {/* Main container */}
            <div className="min-w-full bg-gray-500 h-full p-14 lg:p-8 md:px-0 md:py-10 sm:p-0 bg-hero-image bg-no-repeat bg-cover font-body">
                {/* Form container */}
                <div className="min-h-screen flex items-center flex-col m-auto sm:m-0 w-1/2 2xl:w-3/5 xl:w-3/4 lg:w-full md:w-full sm:w-full h-3/5 bg-white flex-wrap sm:relative sm:-top-24 sm:-mb-24">
                    <div className="w-full bg-main-color sm:bg-hero-image sm:bg-no-repeat sm:bg-cover sm:pt-28">
                        <h1 className="text-4xl pt-5 font-bold mb-10 text-center font-title sm:pt-20 sm:text-white">
                            Get Started
                        </h1>

                        <div className="flex justify-around w-full flex-wrap">
                            <a className="text-2xl cursor-pointer pr-8 font-bold sm:text-white sm:text-base">
                                SIGN UP
                            </a>
                            <a
                                className="text-2xl cursor-pointer font-bold sm:text-white sm:text-base"
                                onClick={handler}>
                                LOGIN
                            </a>
                        </div>
                    </div>

                    <hr
                        id="indicator"
                        className="bg-blue-200 w-1/2 border-0 h-2 transition transform -translate-x-1/2 duration-500 mb-1 shadow-md"
                    />
                    {/* Signup form */}
                    <SignupForm />

                    <SignupWith
                        className2="w-2/5 sm:w-149"
                        title="or sign up with"
                    />

                    <GoogleAndFacebookLogin className="mt-3" />
                </div>
            </div>
        </>
    )
}
export default Signup
