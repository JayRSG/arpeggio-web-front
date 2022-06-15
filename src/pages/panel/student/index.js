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

export default function Home() {
    return (
        <AppLayout type="Student">
            <title>Arpeggio</title>
            <Navbar />
            <div className="px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28">
                <div className="flex font-body min-h-screen">
                    <StudentNav />
                    <div className="w-full min-h-screen">
                        <h1 className="text-5xl font-title p-7 pl-16 font-bold large:text-center mobile:text-center large:pl-0 large:p-0 mobile:p-0 large:py-7 mobile:py-7 mobile:pl-0">
                            Courses
                        </h1>

                        <div className="grid grid-cols-2 ml-16 3k:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-2 large:grid-cols-1 mobile:grid-cols-1 gap-8 3xl:gap-4 items-center w-full my-8">
                            <div className="w-3/5 large:px-36 mobile:px-9 border-2 rounded hover:border-btn-color hover:scale-105 transform transition-all duration-500 cursor-pointer">
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

                                    <h2 className="text-center mt-4 text-3xl laptop:text-2xl tablet:text-2xl mobile:text-base font-bold text-btn-color">
                                        Course Name
                                    </h2>

                                    <div className="flex justify-around mt-8 items-center">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="laptop:text-sm tablet:text-sm mobile:text-sm">
                                                50 students
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faPlayCircle}
                                                size="2x"
                                                className="text-btn-color mr-2"
                                            />
                                            <p className="laptop:text-sm tablet:text-sm mobile:text-sm">
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
                                            <p className="laptop:text-sm tablet:text-sm mobile:text-sm">
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
                                            <p className="ml-2 laptop:text-sm tablet:text-sm mobile:text-sm">
                                                Beginner
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-center mt-4 text-2xl laptop:text-xl tablet:text-xl mobile:text-xl font-bold hover:opacity-70 transition-all duration-500">
                                        Certificate
                                    </div>

                                    <button className="btn bg-btn-color px-0 py-0 w-3/5 h-12 font-bold text-xl 3xl:text-base laptop:text-base laptop:w-112 3xl:w-112 rounded-md self-center my-8 tablet:text-sm large:text-sm large:w-1/2 mobile:text-sm hover:opacity-80 transition-all duration-500">
                                        START COURSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AppLayout>
    )
}
