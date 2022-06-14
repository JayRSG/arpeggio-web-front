import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const SpecialNav = props => {
    // for linking
    const MyLink = props => {
        let { href, children, ...rest } = props
        return (
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        )
    }

    return (
        <>
            <div className={`${props.className}`}>
                <div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-btn-color transition-colors duration-500 rounded-md hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <FontAwesomeIcon
                                    icon={faUserAlt}
                                    size="1x"
                                    className="mr-3 self-center"
                                />
                                <span className={`${props.className1}`}>
                                    {props.user_name}
                                </span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="w-5 h-5 ml-2 -mr-1 mt-1"
                                    size="1x"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                id="student_mini_nav"
                                className="absolute right-0 w-40 mt-2 origin-top-right bg-btn-color divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/student"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Courses
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/backtrack"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Backing Track
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/student/announcement"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Announcements
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/tools"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Tools
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/myprofile"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                My Profile
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/student/payment"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Payment
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/logout"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Log Out
                                            </MyLink>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>

                            {/* admin */}
                            <Menu.Items
                                id="admin_mini_nav"
                                className="absolute right-0 w-40 mt-2 origin-top-right bg-btn-color divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Dashboard
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin/analytics"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Analytics
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/backtrack"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Backing Track
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin/courses"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Courses
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin/addVideo"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Add Video
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin/students"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Students
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin/announcements"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Announcements
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/tools"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Tools
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/admin/messages"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                Messages
                                            </MyLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <MyLink
                                                href="/panel/myprofile"
                                                className={`${
                                                    !active
                                                        ? ' text-white'
                                                        : 'text-black'
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                My Profile
                                            </MyLink>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default SpecialNav
