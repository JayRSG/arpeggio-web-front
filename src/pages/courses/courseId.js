import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import Image from 'next/image'

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faClock,
    faPlayCircle,
} from '@fortawesome/free-regular-svg-icons'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'
import GuestLayout from '@/components/Layouts/GuestLayout'

const courseId = () => {
    return (
        <>
            <title>Course Details</title>
            <GuestLayout>
                <Navbar />
                <div className="px-52 md:px-0 sm:px-0 2xl:px-28 xl:px-28 lg:px-28 font-body">
                    <div className="flex justify-between lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse">
                        <div className=" flex flex-col w-3/5 py-8 xl:w-1/2 lg:w-full md:w-full md:px-8 sm:w-full sm:px-4">
                            <div className="flex flex-col">
                                <h1 className="text-4xl font-bold font-title">
                                    Guitar Chapter 1
                                </h1>
                                <p className="text-lg py-4 xl:text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Pariatur, aut veritatis!
                                    Sapiente, culpa eveniet. Consequuntur
                                    voluptate eaque quos molestias quam!
                                </p>
                            </div>

                            <hr className="bg-gray-400 my-4 h-100" />

                            <div className="flex flex-col">
                                <h1 className="text-4xl font-bold font-title">
                                    Instructor
                                </h1>

                                <div className="flex w-4/5 sm:w-full items-center justify-between py-8 self-center">
                                    <div className="w-32 h-32 xl:h-28 sm:h-28 rounded-full shadow-md overflow-hidden">
                                        <Image
                                            src="/image/instructor-1.jpg"
                                            width={1719}
                                            height={2048}
                                            layout="responsive"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>

                                    <div className="flex flex-col w-3/4 2xl:pl-4 xl:pl-4 lg:pl-4 md:pl-4 sm:pl-4">
                                        <h1 className="text-xl font-bold">
                                            Nazim Uddin Zahed
                                        </h1>

                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Suscipit temporibus voluptatem vel
                                            rem tenetur ullam doloremque
                                            quisquam commodi quasi nesciunt?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="bg-gray-400 my-4 h-100" />

                            <div className="flex flex-col">
                                <h1 className="text-4xl font-bold font-title">
                                    Course Description
                                </h1>

                                <p className="text-lg py-8 xl:text-sm">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Amet omnis architecto odio
                                    quas, iure inventore blanditiis excepturi
                                    mollitia a ad itaque, dolorum porro adipisci
                                    ipsam deserunt aliquam ducimus aut pariatur
                                    quisquam quam ullam harum sed fugit? Tempora
                                    ducimus sapiente quis.
                                </p>
                            </div>

                            <hr className="bg-gray-400 my-4 h-100" />
                        </div>

                        <div className="rounded w-117 py-8 xl:w-109 lg:w-112 lg:self-center md:w-112 md:self-center sm:w-4/5 sm:self-center">
                            <div className="flex flex-col bg-main-color w-full p-4 shadow-md rounded">
                                <div className="w-full">
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

                                <div className="flex justify-between mt-8 items-center">
                                    <div className="flex items-center sm:flex-col">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            size="2x"
                                            className="text-btn-color mr-2"
                                        />
                                        <p className="2xl:text-sm xl:text-sm lg:text-sm sm:text-sm sm:pt-4">
                                            50 students
                                        </p>
                                    </div>

                                    <div className="flex items-center sm:flex-col">
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            size="2x"
                                            className="text-btn-color mr-2"
                                        />
                                        <p className="2xl:text-sm xl:text-sm lg:text-sm sm:text-sm sm:pt-4">
                                            2 months
                                        </p>
                                    </div>

                                    <div className="flex items-center sm:flex-col">
                                        <FontAwesomeIcon
                                            icon={faPlayCircle}
                                            size="2x"
                                            className="text-btn-color mr-2"
                                        />
                                        <p className="2xl:text-sm xl:text-sm lg:text-sm sm:text-sm sm:pt-4">
                                            8 videos
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-evenly sm:justify-between mt-8 items-center">
                                    <div className="flex items-center">
                                        <svg
                                            className="mb-2"
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
                                    <h2 className="text-2xl font-bold hover:opacity-70 transition-all duration-500 cursor-pointer">
                                        Certificate
                                    </h2>
                                </div>

                                <div className="flex flex-wrap justify-evenly sm:justify-between items-center">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon
                                            icon={faLiraSign}
                                            size="2x"
                                            className=""
                                        />
                                        <p className="text-3xl font-bold">
                                            500
                                        </p>
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-2/5 h-12 font-bold text-xl 3xl:text-base xl:text-base xl:w-1/2 rounded-md self-center my-8 lg:text-sm md:text-sm md:w-1/2 sm:text-sm sm:w-1/2 hover:opacity-80 transition-all duration-500">
                                        Start Course
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

export default courseId
