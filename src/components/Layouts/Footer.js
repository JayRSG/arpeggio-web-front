// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faYoutube,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
import { Logo } from '../SVGs'
import { useRouter } from 'next/router'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import NavLink from '../NavLink'

const Footer = () => {
    const router = useRouter()

    return (
        <>
            <div className="flex min-w-full justify-around pt-16 pb-8 font-body bg-main-color px-32 font-normal items-center xl:px-28 md:flex-col md:px-8 md:items-start md:pl-24 sm:items-start sm:flex-col sm:px-8">
                <div className="flex flex-col self-start lg:text-sm lg:mr-4 md:mb-16">
                    {/* <Link href="/courses">
            <a className="font-bold">Courses</a>
          </Link> */}
                    <NavLink href="/courses" classname="font-bold">
                        Courses
                    </NavLink>

                    {/* <Link href="">
                      <p className="pt-3">Guitar</p>
                  </Link> */}
                    <NavLink href="#" classname="pt-3">
                        Guitar
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-5 pt-1">Piano</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Piano
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-5 pt-1">Drums</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Drums
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-5 pt-1">Flute</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Flute
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-5 pt-1">Ukulele</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Ukelele
                    </NavLink>
                </div>

                <div className="flex flex-col sm:mt-12 self-start lg:text-sm lg:mr-4 md:mb-16">
                    {/* <Link href="/shop">
                      <a className="font-bold">Shop</a>
                  </Link> */}
                    <NavLink href="#" classname="font-bold">
                        Shop
                    </NavLink>

                    {/* <Link href="">
                      <p className="pt-3">Instruments</p>
                  </Link> */}
                    <NavLink href="#" classname="pt-3">
                        Instruments
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-4 pt-1">Accessories</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Accessories
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-5 pt-1">Merchandise</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Merchandise
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-5 pt-1">Lesson books</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-5 pt-1">
                        Lesson books
                    </NavLink>
                </div>

                <div className="flex flex-col    sm:mt-12 lg:text-sm lg:mr-4 md:mb-16 self-start">
                    <h1 className="font-bold">Company</h1>

                    {/* <Link href="">
                      <p className="pt-3">Privacy policy</p>
                  </Link> */}
                    <NavLink href="#" classname="pt-3">
                        Privacy policy
                    </NavLink>

                    {/* <Link href="">
                      <p className="leading-4 pt-1">Terms of use</p>
                  </Link> */}
                    <NavLink href="#" classname="leading-4 pt-1">
                        Terms of use
                    </NavLink>
                </div>

                <div className="flex flex-col sm:mt-12 lg:text-sm lg:mr-4 md:mb-16 self-start">
                    <h1 className="font-bold">Contact Us</h1>
                    <p className="pt-3">01718-184714</p>
                    <p className="leading-4 pt-1">arpeggio.school@gmail.com</p>
                    <p className="leading-5 pt-2">
                        Branches: Dampara, Halishahar
                    </p>
                </div>

                <div className="flex flex-col items-center w-40 sm:mt-12 sm:w-60 self-start">
                    <Link href="/">
                        <a>
                            <Logo className="lg:px-16 md:pl-16 sm:px-6 pb-10" />
                        </a>
                    </Link>

                    <div className="flex space-x-2 md:pl-12 sm:pl-0 sm:justify-evenly sm:w-full">
                        <div
                            onClick={() => {
                                window.open(
                                    'https://www.facebook.com/Arpeggio.ctg.bd',
                                    '_blank',
                                )
                            }}>
                            <a
                                href="https://www.facebook.com/Arpeggio.ctg.bd"
                                target="_self"
                                className="transition transform duration-500 hover:scale-150 pr-4">
                                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                            </a>
                        </div>

                        <div
                            onClick={() => {
                                window.open(
                                    'https://api.whatsapp.com/send?phone=+8801718134714',
                                    '_blank',
                                )
                            }}>
                            <a
                                href="https://api.whatsapp.com/send?phone=+8801718134714"
                                target=""
                                className="transition transform duration-500 hover:scale-150 pr-4">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </div>

                        <div
                            onClick={() => {
                                window.open(
                                    'https://www.instagram.com/arpeggio.bd/?hl=en',
                                    '_blank',
                                )
                            }}>
                            <a
                                href="https://www.instagram.com/arpeggio.bd/?hl=en"
                                target=""
                                className="transition transform duration-500 hover:scale-150 pr-4">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>

                        <div
                            onClick={() => {
                                window.open(
                                    'https://www.youtube.com/c/ArpeggioMusicSchoolbd',
                                    '_blank',
                                )
                            }}>
                            <a
                                href="https://www.youtube.com/c/ArpeggioMusicSchoolbd"
                                target=""
                                className="transition transform duration-500 hover:scale-150 pr-4">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="min-w-full text-center p-8 bg-main-color font-body font-normal sm:text-sm">
                2022 Copyright &copy; Arpeggio Music School
            </p>

            <div className="">
                <p className="bg-main-color font-body font-normal pl-1 sm:text-xs">
                    Developed By
                    <span>
                        <span
                            className="cursor-pointer text-blue-600"
                            onClick={() => {
                                window.open(
                                    'https://api.whatsapp.com/send?phone=+8801760060004',
                                    '_blank',
                                )
                            }}>
                            <a target="">JSM Softwares Ltd.</a>
                        </span>
                    </span>
                </p>
            </div>
        </>
    )
}

export default Footer
