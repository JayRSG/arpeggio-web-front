import Navbar from '@/components/Layouts/Navbar'
import StudentNav from '@/components/panel/student/StudentNav'
import Footer from '@/components/Layouts/Footer'

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faClock,
    faPlayCircle,
} from '@fortawesome/free-regular-svg-icons'

import Image from 'next/image'
import AppLayout from '@/components/Layouts/AppLayout'
import Button from '@/components/Button'

export default function Home() {
    return (
        <AppLayout type="Student">
            <title>Arpeggio</title>

            <h1 className="text-5xl font-title p-7 pl-16 font-bold md:text-center sm:text-center md:pl-0 md:p-0 sm:p-0 md:py-7 sm:py-7 sm:pl-0">
                Courses
            </h1>

            <div className="grid grid-cols-2 ml-16 md:ml-0 lg:grid-cols-1 gap-8 3xl:gap-4 items-center w-full my-8 lg:px-16 lg:ml-0 md:px-28 sm:px-12 xs:px-6">
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

                        <div className="flex flex-wrap justify-around mt-8 items-center">
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
                                    <rect fill="none" height="24" width="24" />
                                    <g>
                                        <path d="M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z" />
                                    </g>
                                </svg>
                                <p className="ml-2 xl:text-sm lg:text-sm sm:text-sm">
                                    Beginner
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-4 text-2xl xl:text-xl lg:text-xl sm:text-xl font-bold hover:opacity-70 transition-all duration-500">
                            Certificate
                        </div>

                        <Button className="lg:w-44 bg-btn-color text-xl rounded-md self-center my-8 lg:text-sm md:text-sm sm:text-sm hover:opacity-80 transition-all duration-500">
                            START COURSE
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
