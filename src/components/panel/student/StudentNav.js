import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const StudentNav = () => {
    const router = useRouter()

    return (
        <div className="font-body min-h-screen w-117 2xl:w-117 lg:w-2/5 md:hidden">
            <ul className="flex flex-col top-16 w-full h-full bg-btn-color px-8 lg:pr-4 lg:pl-4 lg:px-0 xl:pr-4 xl:pl-4 xl:px-0">
                <li className="navlink text-white text-xl lg:text-sm xl:text-base py-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/student">
                        <a
                            className={
                                router.pathname === '/panel/student'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Courses
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-xl xl:text-base pb-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/backtrack">
                        <a
                            className={
                                router.pathname === '/panel/backtrack'
                                    ? 'bg-white text-black pr-2 pl-2 py-1'
                                    : ''
                            }>
                            Backing Track
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-xl xl:text-base pb-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/student/announcement">
                        <a
                            className={
                                router.pathname ===
                                '/panel/student/announcement'
                                    ? 'bg-white text-black pr-4 pl-2 py-1'
                                    : ''
                            }>
                            Announcements
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-xl xl:text-base pb-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/tools">
                        <a
                            className={
                                router.pathname === '/panel/tools'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Tools
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-xl xl:text-base pb-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/myprofile">
                        <a
                            className={
                                router.pathname === '/panel/myprofile'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            My Profile
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-xl xl:text-base hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/student/payment">
                        <a
                            className={
                                router.pathname === '/panel/student/payment'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Payment
                        </a>
                    </Link>
                </li>
            </ul>

            {/* the menu button  */}
            {/* <button
                onClick={() => {
                    showSideBar()
                }}
                className="hidden mobile:flex large:flex mobile:absolute large:absolute mobile:top-8 large:top-8 mobile:navlink large:navlink mobile:hover:text-blue-400 large:hover:text-blue-400 mobile:z-40 large:right-2 mobile:right-2">
                <FontAwesomeIcon
                    icon={faEllipsisV}
                    size="2x"
                    className="text-black"
                />
            </button> */}
        </div>
    )
}

export default StudentNav
