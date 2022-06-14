import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
	return (
		<ul className='fixed right-0 transition-all duration-500 flex flex-col items-center top-16 w-3/4 h-screen bg-btn-color font-body z-50'>
			<li className='navlink text-white text-2xl py-8 hover:opacity-50'>
				<Link href='/panel/student'>
					<a>Courses</a>
				</Link>
			</li>

			<li className='navlink text-white text-2xl pb-9 hover:opacity-50'>
				<Link href='/panel/backtrack'>
					<a>Backing Track</a>
				</Link>
			</li>

			<li className='navlink text-white text-2xl pb-9 hover:opacity-50'>
				<Link href='/panel/student/announcement'>
					<a>Announcements</a>
				</Link>
			</li>

			<li className='navlink text-white text-2xl pb-9 hover:opacity-50'>
				<Link href='/panel/tools'>
					<a>Tools</a>
				</Link>
			</li>

			<li className='navlink text-white text-2xl pb-9 hover:opacity-50'>
				<Link href='/panel/myprofile'>
					<a>My Profile</a>
				</Link>
			</li>

			<li className='navlink text-white text-2xl hover:opacity-50'>
				<Link href='/panel/student/payment'>
					<a>Payment</a>
				</Link>
			</li>
		</ul>
	);
};

const StudentNav = () => {
	const router = useRouter();

	const [isSideBarOpen, setisSideBarOpen] = useState(false);

	// is the sidebar menu open or not
	const showSideBar = () => {
		{
			isSideBarOpen ? setisSideBarOpen(false) : setisSideBarOpen(true);
		}
	};
	return (
		<div className='font-body min-h-screen'>
			<ul className='large:hidden mobile:hidden flex flex-wrap flex-col top-16 w-full tablet:w-4/5 h-full bg-btn-color px-8 tablet:pr-12 tablet:pl-4 tablet:px-0 laptop:pr-4 laptop:pl-4 laptop:px-0'>
				<li className='navlink text-white text-2xl tablet:text-base laptop:text-base py-8 hover:opacity-80 drop-shadow-md'>
					<Link href='/panel/student'>
						<a className={router.pathname === "/panel/student" ? "bg-white text-black pr-10 pl-2 py-1" : ""}>Courses</a>
					</Link>
				</li>

				<li className='navlink text-white text-2xl tablet:text-base laptop:text-base pb-8 hover:opacity-80 drop-shadow-md'>
					<Link href='/panel/backtrack'>
						<a className={router.pathname === "/panel/backtrack" ? "bg-white text-black pr-2 pl-2 py-1" : ""}>Backing Track</a>
					</Link>
				</li>

				<li className='navlink text-white text-2xl tablet:text-base laptop:text-base pb-8 hover:opacity-80 drop-shadow-md'>
					<Link href='/panel/student/announcement'>
						<a className={router.pathname === "/panel/student/announcement" ? "bg-white text-black pr-4 pl-2 py-1" : ""}>Announcements</a>
					</Link>
				</li>

				<li className='navlink text-white text-2xl tablet:text-base laptop:text-base pb-8 hover:opacity-80 drop-shadow-md'>
					<Link href='/panel/tools'>
						<a className={router.pathname === "/panel/tools" ? "bg-white text-black pr-10 pl-2 py-1" : ""}>Tools</a>
					</Link>
				</li>

				<li className='navlink text-white text-2xl tablet:text-base laptop:text-base pb-8 hover:opacity-80 drop-shadow-md'>
					<Link href='/panel/myprofile'>
						<a className={router.pathname === "/panel/myprofile" ? "bg-white text-black pr-10 pl-2 py-1" : ""}>My Profile</a>
					</Link>
				</li>

				<li className='navlink text-white text-2xl tablet:text-base laptop:text-base hover:opacity-80 drop-shadow-md'>
					<Link href='/panel/student/payment'>
						<a className={router.pathname === "/panel/student/payment" ? "bg-white text-black pr-10 pl-2 py-1" : ""}>Payment</a>
					</Link>
				</li>
			</ul>

			{/* the menu button  */}
			<button
				onClick={() => {
					showSideBar();
				}}
				className='hidden mobile:flex large:flex mobile:absolute large:absolute mobile:top-8 large:top-8 mobile:navlink large:navlink mobile:hover:text-blue-400 large:hover:text-blue-400 mobile:z-40 large:right-2 mobile:right-2'>
				<FontAwesomeIcon icon={faEllipsisV} size='2x' className='text-black' />
			</button>

			{isSideBarOpen ? SideBar() : ""}
		</div>
	);
};

export default StudentNav;
