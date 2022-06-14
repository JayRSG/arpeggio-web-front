import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

// const SideBar = () => {
// 	return (
// 		<ul className='fixed right-0 transition-all duration-500 flex flex-col items-center top-16 w-3/4 h-screen bg-btn-color font-body z-50'>
// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/admin'>
// 					<a>Dashboard</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/backtrack'>
// 					<a>Analytics</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/admin/courses'>
// 					<a>Courses</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl pb-8'>
// 				<Link href='/panel/admin/videoList'>
// 					<a>Add Video</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/admin/students'>
// 					<a>Students</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/admin/instructors'>
// 					<a>Instructors</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/admin/announcements'>
// 					<a>Announcements</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/tools'>
// 					<a>Tools</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
// 				<Link href='/panel/admin/messages'>
// 					<a>Messages</a>
// 				</Link>
// 			</li>

// 			<li className='navlink text-white text-2xl pb-8'>
// 				<Link href='/panel/myprofile'>
// 					<a>My Profile</a>
// 				</Link>
// 			</li>
// 		</ul>
// 	);
// };

const AdminNav = () => {
    // const router = useRouter();

    // const [isSideBarOpen, setisSideBarOpen] = useState(false);

    // // is the sidebar menu open or not
    // const showSideBar = () => {
    // 	{
    // 		isSideBarOpen ? setisSideBarOpen(false) : setisSideBarOpen(true);
    // 	}
    // };
    return (
        <div className="font-body min-h-screen 2xl:w-1/5 xl:w-1/4 lg:w-2/5">
            <ul className="md:hidden sm:hidden flex flex-wrap flex-col top-16 w-full h-full bg-btn-color px-8 lg:pr-4 lg:pl-4 lg:px-0 xl:pr-4 xl:pl-4 xl:px-0">
                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin">
                        <a
                            className={
                                router.pathname === '/panel/admin'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Dashboard
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/student/backtrack">
                        <a
                            className={
                                router.pathname === '/panel/admin/analytics'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Analytics
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/student/backtrack">
                        <a
                            className={
                                router.pathname === '/panelbacktrack'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Backing Track
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin/courses">
                        <a
                            className={
                                router.pathname === '/panel/admin/courses'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Courses
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base pt-8 pb-6 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin/videoList">
                        <a
                            className={
                                router.pathname === '/panel/admin/videoList'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Add Video
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin/students">
                        <a
                            className={
                                router.pathname === '/panel/admin/students'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Students
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin/instructors">
                        <a
                            className={
                                router.pathname === '/panel/admin/instructors'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Instructors
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin/announcements">
                        <a
                            className={
                                router.pathname === '/panel/admin/announcements'
                                    ? 'bg-white text-black pr-4 pl-2 py-1'
                                    : ''
                            }>
                            Announcements
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
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

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
                    <Link href="/panel/admin/messages">
                        <a
                            className={
                                router.pathname === '/panel/admin/messages'
                                    ? 'bg-white text-black pr-10 pl-2 py-1'
                                    : ''
                            }>
                            Messages
                        </a>
                    </Link>
                </li>

                <li className="navlink text-white text-2xl lg:text-sm xl:text-base py-8 -mt-8 hover:opacity-80 drop-shadow-md">
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
            </ul>

            {/* the menu button  */}
            {/* <button
				onClick={() => {
					showSideBar();
				}}
				className='hidden sm:flex md:flex sm:absolute md:absolute sm:top-8 md:top-8 sm:navlink md:navlink sm:hover:text-blue-400 md:hover:text-blue-400 sm:z-40 md:right-2 sm:right-2'>
				<FontAwesomeIcon icon={faEllipsisV} size='2x' className='text-black' />
			</button>

			{isSideBarOpen ? SideBar() : ""} */}
        </div>
    )
}

export default AdminNav
