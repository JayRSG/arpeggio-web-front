import Image from 'next/image'
import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faClock,
    faPlayCircle,
} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GuestLayout from '@/components/Layouts/GuestLayout'

const Courses = () => {
    return (
        <>
            <title>Video Courses</title>
            <GuestLayout>
                <Navbar />
                <div className="px-52 md:px-0 2xl:px-28 lg:px-14">
                    <div className="flex flex-col font-body min-h-screen">
                        <div className="w-full flex justify-between mb-8 lg:flex-col lg:justify-center md:flex-col md:justify-center sm:flex-col sm:justify-center items-center mt-8">
                            <h1 className="text-5xl sm:text-3xl font-title py-7 font-bold">
                                Video Courses
                            </h1>

                            <div className="flex border-2 h-12 border-black md:mx-4 lg:mr-0 lg:mt-8 md:mt-8 sm:mt-8 lg:mb-16 md:mb-16 sm:mb-16 shadow-md">
                                <input
                                    type="text"
                                    className="w-121 xl:w-96 lg:w-119 md:w-118 sm:w-60 px-4 opacity-50 outline-none"
                                    placeholder="Search items"
                                />
                                <button className="flex items-center justify-center px-4">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        size="2x"
                                        className="w-6 h-6 text-gray-300 opacity-50"
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 3xl:gap-4 items-center w-full h-full my-8 md:px-28 sm:px-12 xs:px-6">
                            <div className="border-2 rounded hover:border-btn-color hover:scale-105 transform transition-all duration-500 cursor-pointer">
                                <div className="flex flex-col bg-main-color px-6 w-full shadow-md rounded">
                                    <div className="w-full pt-4">
                                        <Image
                                            src="/image/stu-course.jpg"
                                            width={5184}
                                            height={3456}
                                            layout="responsive"
                                            objectFit="cover"
                                            className=""
                                        />
                                    </div>

                                    <h2 className="text-center mt-4 text-3xl xl:text-2xl lg:text-2xl sm:text-base font-bold text-btn-color">
                                        Course Name
                                    </h2>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                50 students
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faPlayCircle}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                8 videos
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                2 months
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24"
                                                height="35px"
                                                viewBox="0 0 24 24"
                                                width="35px"
                                                fill="#2568F8">
                                                <rect
                                                    fill="none"
                                                    height="24"
                                                    width="24"
                                                />
                                                <g>
                                                    <path d="M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z" />
                                                </g>
                                            </svg>
                                            <p className="ml-2 xl:text-sm lg:text-sm sm:text-sm">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-3/5 h-12 font-bold text-xl 3xl:text-base xl:text-base xl:w-112 3xl:w-112 rounded-md self-center my-8 lg:text-sm md:text-sm md:w-1/2 sm:text-sm hover:opacity-80 transition-all duration-500">
                                        START COURSE
                                    </button>
                                </div>
                            </div>

                            <div className="border-2 rounded hover:border-btn-color hover:scale-105 transform transition-all duration-500 cursor-pointer">
                                <div className="flex flex-col bg-main-color px-6 ll shadow-md rounded">
                                    <div className="ll pt-4">
                                        <Image
                                            src="/image/stu-course.jpg"
                                            width={5184}
                                            height={3456}
                                            layout="responsive"
                                            objectFit="cover"
                                            className=""
                                        />
                                    </div>

                                    <h2 className="text-center mt-4 text-3xl xl:text-2xl lg:text-2xl sm:text-base font-bold text-btn-color">
                                        Course Name
                                    </h2>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                50 students
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faPlayCircle}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                8 videos
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                2 months
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24"
                                                height="35px"
                                                viewBox="0 0 24 24"
                                                width="35px"
                                                fill="#2568F8">
                                                <rect
                                                    fill="none"
                                                    height="24"
                                                    width="24"
                                                />
                                                <g>
                                                    <path d="M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z" />
                                                </g>
                                            </svg>
                                            <p className="ml-2 xl:text-sm lg:text-sm sm:text-sm">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-3/5 h-12 font-bold text-xl 3xl:text-base xl:text-base xl:w-112 3xl:w-112 rounded-md self-center my-8 lg:text-sm md:text-sm md:w-1/2 sm:text-sm hover:opacity-80 transition-all duration-500">
                                        START COURSE
                                    </button>
                                </div>
                            </div>

                            <div className="border-2 rounded hover:border-btn-color hover:scale-105 transform transition-all duration-500 cursor-pointer">
                                <div className="flex flex-col bg-main-color px-6 ll shadow-md rounded">
                                    <div className="ll pt-4">
                                        <Image
                                            src="/image/stu-course.jpg"
                                            width={5184}
                                            height={3456}
                                            layout="responsive"
                                            objectFit="cover"
                                            className=""
                                        />
                                    </div>

                                    <h2 className="text-center mt-4 text-3xl xl:text-2xl lg:text-2xl sm:text-base font-bold text-btn-color">
                                        Course Name
                                    </h2>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                50 students
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faPlayCircle}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                8 videos
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                2 months
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24"
                                                height="35px"
                                                viewBox="0 0 24 24"
                                                width="35px"
                                                fill="#2568F8">
                                                <rect
                                                    fill="none"
                                                    height="24"
                                                    width="24"
                                                />
                                                <g>
                                                    <path d="M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z" />
                                                </g>
                                            </svg>
                                            <p className="ml-2 xl:text-sm lg:text-sm sm:text-sm">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-3/5 h-12 font-bold text-xl 3xl:text-base xl:text-base xl:w-112 3xl:w-112 rounded-md self-center my-8 lg:text-sm md:text-sm md:w-1/2 sm:text-sm hover:opacity-80 transition-all duration-500">
                                        START COURSE
                                    </button>
                                </div>
                            </div>

                            <div className="border-2 rounded hover:border-btn-color hover:scale-105 transform transition-all duration-500 cursor-pointer">
                                <div className="flex flex-col bg-main-color px-6 ll shadow-md rounded">
                                    <div className="w-full pt-4">
                                        <Image
                                            src="/image/stu-course.jpg"
                                            width={5184}
                                            height={3456}
                                            layout="responsive"
                                            objectFit="cover"
                                            className=""
                                        />
                                    </div>

                                    <h2 className="text-center mt-4 text-3xl xl:text-2xl lg:text-2xl sm:text-base font-bold text-btn-color">
                                        Course Name
                                    </h2>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                50 students
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faPlayCircle}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                8 videos
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                2 months
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24"
                                                height="35px"
                                                viewBox="0 0 24 24"
                                                width="35px"
                                                fill="#2568F8">
                                                <rect
                                                    fill="none"
                                                    height="24"
                                                    width="24"
                                                />
                                                <g>
                                                    <path d="M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z" />
                                                </g>
                                            </svg>
                                            <p className="ml-2 xl:text-sm lg:text-sm sm:text-sm">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-3/5 h-12 font-bold text-xl 3xl:text-base xl:text-base xl:w-112 3xl:w-112 rounded-md self-center my-8 lg:text-sm md:text-sm md:w-1/2 sm:text-sm hover:opacity-80 transition-all duration-500">
                                        START COURSE
                                    </button>
                                </div>
                            </div>

                            <div className="border-2 rounded hover:border-btn-color hover:scale-105 transform transition-all duration-500 cursor-pointer">
                                <div className="flex flex-col bg-main-color px-6 w-full shadow-md rounded">
                                    <div className="w-full pt-4">
                                        <Image
                                            src="/image/stu-course.jpg"
                                            width={5184}
                                            height={3456}
                                            layout="responsive"
                                            objectFit="cover"
                                            className=""
                                        />
                                    </div>

                                    <h2 className="text-center mt-4 text-3xl xl:text-2xl lg:text-2xl sm:text-base font-bold text-btn-color">
                                        Course Name
                                    </h2>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                50 students
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faPlayCircle}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                8 videos
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="xl:text-sm lg:text-sm sm:text-sm">
                                                2 months
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24"
                                                height="35px"
                                                viewBox="0 0 24 24"
                                                width="35px"
                                                fill="#2568F8">
                                                <rect
                                                    fill="none"
                                                    height="24"
                                                    width="24"
                                                />
                                                <g>
                                                    <path d="M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z" />
                                                </g>
                                            </svg>
                                            <p className="ml-2 xl:text-sm lg:text-sm sm:text-sm">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-3/5 h-12 font-bold text-xl 3xl:text-base xl:text-base xl:w-112 3xl:w-112 rounded-md self-center my-8 lg:text-sm md:text-sm md:w-1/2 sm:text-sm hover:opacity-80 transition-all duration-500">
                                        START COURSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </GuestLayout>
        </>
    )
}

export default Courses
