import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import SpecialNav from '../SpecialNav'

// import your icons
import { Logo, SpecialNavBox } from '../SVGs'
import MediaNav from '../MediaNav'
import NavLink from '../NavLink'
import Button from '../Button'
import { useAuth } from '@/hooks/auth'
// import { getCurrentBreakPoint, useWidth } from "../helpers/screensRes";

const Navbar = () => {
    const [isSideBarOpen, setisSideBarOpen] = useState(false)

    const { user } = useAuth({ middleware: 'guest' })

    // the sidebar mobile menu
    const sideBarRef = useRef(false)
    const sideBarButton = useRef(false)

    const SideBar = () => {
        return (
            <div ref={sideBarRef}>
                <ul className="absolute transition-all duration-500 flex flex-col top-16 w-2/5 sm:w-1/2 xs:w-145 h-screen bg-btn-color font-body font-bold z-50 left-0 pl-4">
                    <li className="navlink text-white text-2xl pt-16 pb-8">
                        {/* <Link href="/">
              <a className="hover:opacity-70 transition-all duration-500">
                Home
              </a>
            </Link> */}
                        <NavLink
                            href="/"
                            classname="hover:opacity-70 transition-all
                            duration-500">
                            Home
                        </NavLink>
                    </li>

                    <li className="navlink text-white text-2xl pb-8">
                        {/* <Link href="/courses">
                        <a className="hover:opacity-70 transition-all duration-500">
                            Courses
                        </a>
                    </Link> */}
                        <NavLink
                            href="/courses"
                            classname="hover:opacity-70 transition-all
                            duration-500">
                            Courses
                        </NavLink>
                    </li>

                    <li className="navlink text-white text-2xl pb-8">
                        {/* <Link href="/freeClasses">
                        <a className="hover:opacity-70 transition-all duration-500">
                            Free Classes
                        </a>
                    </Link> */}
                        <NavLink
                            href="/freeClasses"
                            classname="hover:opacity-70 transition-all
                            duration-500">
                            Free Classes
                        </NavLink>
                    </li>

                    <li className="navlink text-white text-2xl pb-8">
                        <div className="flex">
                            <MediaNav className="text-2xl hover:opacity-70 transition-all duration-500" />
                        </div>
                    </li>

                    <li className="navlink text-white text-2xl pb-8">
                        {/* <Link href="/portfolio">
                        <a className="hover:opacity-70 transition-all duration-500">
                            Portfolio
                        </a>
                    </Link> */}
                        <NavLink
                            href="/portfolio"
                            classname="hover:opacity-70 transition-all
                            duration-500">
                            Portfolio
                        </NavLink>
                    </li>

                    <li className="navlink text-white text-2xl pb-8">
                        {/* <Link href="/shop">
                        <a className="hover:opacity-70 transition-all duration-500">
                            Shop
                        </a>
                    </Link> */}
                        <NavLink
                            href="/shop"
                            classname="hover:opacity-70 transition-all
                            duration-500">
                            Shop
                        </NavLink>
                    </li>

                    {/* <li className="pt-16">
                        <Link href="/join">
                            <Button className="bg-white text-btn-color rounded-lg hover:opacity-70 transition-all duration-500 w-40">
                                Join
                            </Button>
                        </Link>
                    </li> */}

                    {!user ? (
                        <li className="pt-16">
                            <Link href="/join">
                                <a className="btn text-btn-color font-bold text-2xl bg-white rounded-lg px-12 hover:opacity-70 transition-all duration-500">
                                    Join
                                </a>
                            </Link>
                        </li>
                    ) : (
                        <SpecialNav
                            user_name={user?.data?.user_name}
                            className="w-40 text-center pt-4 z-50"
                            className1="text-2xl"
                        />
                    )}
                </ul>
            </div>
        )
    }

    // Opens and closes sidebar menu
    const showSideBar = () => {
        {
            isSideBarOpen ? setisSideBarOpen(false) : setisSideBarOpen(true)
        }
    }

    //check if mobile display size, if not closes the sidebar if open
    // function getSideBarState() {
    //   getCurrentBreakPoint() != "mobile" && isSideBarOpen ? showSideBar() : "";
    // }
    //sidebaropen closed on bigger screen size resizing
    // useEffect(() => {
    //   window.addEventListener("resize", getSideBarState);
    //   return () => window.removeEventListener("resize", getSideBarState);
    // }, [getSideBarState]);

    //check if clicked outside sidebar while it is open, closes it if so
    function checkSideBarClick(e) {
        e.preventDefault()
        if (
            isSideBarOpen &&
            sideBarRef.current &&
            !sideBarRef.current.contains(e.target) &&
            sideBarButton.current &&
            !sideBarButton.current.contains(e.target)
        ) {
            showSideBar()
        }
    }

    useEffect(() => {
        window.addEventListener('click', checkSideBarClick)
        return () => window.removeEventListener('click', checkSideBarClick)
    }, [checkSideBarClick])

    return (
        <>
            <div>
                <nav className="flex justify-between min-w-full h-40 md:h-24 sm:h-28 flex-col bg-main-color text-body shadow-md px-52 2xl:px-28 xl:px-28 lg:px-12 md:px-0 sm:px-0">
                    <div className="flex justify-between md:justify-center">
                        {/* Logo */}
                        <Link href="/">
                            <a>
                                <Logo className="relative top-4 md:-top-4 md:left-2/4 sm:-top-4 sm:left-2/4 transform -translate-x-2/4 p-4 sm:p-7 left-32 lg:left-28 sm:z-40" />
                            </a>
                        </Link>

                        {!user ? (
                            <Link href="/join">
                                <Button className="w-36 bg-btn-color rounded-lg outline-none hover:scale-105 transform transition-all duration-500 md:hidden sm:hidden self-end absolute top-12 right-52 2xl:right-28 xl:right-28 lg:right-12">
                                    Join
                                </Button>
                            </Link>
                        ) : (
                            <SpecialNav
                                user_name={user?.data?.user_name}
                                className="w-28 text-center relative top-14 right-8 z-50 md:hidden sm:hidden"
                                className1="text-base"
                            />
                        )}
                    </div>

                    <ul className="md:hidden font-body font-bold sm:hidden list-none flex justify-between items-center w-3/5 lg:w-146 self-end">
                        <li className="navlink hover:text-btn-color xl:text-base lg:text-base">
                            {/* <Link href="/">
                              <a>Home</a>
                          </Link> */}
                            <NavLink href="/"> Home</NavLink>
                        </li>

                        <li className="navlink hover:text-btn-color xl:text-base lg:text-base">
                            {/* <Link href="/courses">
                              <a>Courses</a>
                          </Link> */}
                            <NavLink href="/courses"> Courses</NavLink>
                        </li>

                        <li className="navlink hover:text-btn-color xl:text-base lg:text-base">
                            {/* <Link href="/freeClasses">
                              <a>Free Classes</a>
                          </Link> */}
                            <NavLink href="/freeClasses"> Free Classes</NavLink>
                        </li>

                        <li className="navlink hover:text-btn-color xl:text-base lg:text-base">
                            <MediaNav
                                className="text-2xl xl:text-base lg:text-base"
                                className1="absolute bg-btn-color rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            />
                        </li>

                        <li className="navlink hover:text-btn-color xl:text-base lg:text-base">
                            {/* <Link href="/portfolio">
                              <a>Portfolio</a>
                          </Link> */}
                            <NavLink href="/portfolio"> Portfolio</NavLink>
                        </li>

                        <li className="navlink hover:text-btn-color xl:text-base lg:text-base">
                            {/* <Link href="/shop">
                              <a>Shop</a>
                          </Link> */}
                            <NavLink href="/shop">Shop</NavLink>
                        </li>
                    </ul>

                    {/* the menu button  */}
                    <button
                        ref={sideBarButton}
                        onClick={e => {
                            showSideBar()
                        }}
                        className="hidden sm:flex md:flex sm:absolute md:absolute sm:top-8 md:top-8 sm:navlink md:navlink sm:hover:text-btn-color md:hover:text-btn-color sm:z-40 md:left-2 sm:left-2">
                        {/* The Special Nav Rectangle that open the side bar in small menu */}
                        <SpecialNavBox />
                    </button>

                    {isSideBarOpen ? SideBar() : ''}
                </nav>
            </div>
        </>
    )
}

export default Navbar
