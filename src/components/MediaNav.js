import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

const MediaNav = (props) => {
	// for linking
	const MyLink = (props) => {
		let { href, children, ...rest } = props;
		return (
			<Link href={href}>
				<a {...rest}>{children}</a>
			</Link>
		);
	};

	return (
		<>
			<div>
				<div>
					<Menu as='div' className='relative inline-block text-left z-50'>
						<div>
							<Menu.Button className='font-body font-bold'>
								<span className={`${props.className}`}>Media</span>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-500'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-300'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'>
							<Menu.Items
								className={`flex flex-col items-center ${props.className1} -right-8 w-32 mt-2 origin-top-right divide-y divide-gray-100`}>
								<div className='px-1 py-1 '>
									<Menu.Item>
										{({ active }) => (
											<MyLink
												href='/media/gallery'
												className={`${
													!active ? " text-white" : "text-black"
												} group flex rounded-md items-center justify-center w-full px-2 py-2 text-sm large:text-lg mobile:text-lg`}>
												Gallery
											</MyLink>
										)}
									</Menu.Item>

									<Menu.Item>
										{({ active }) => (
											<MyLink
												href='/media/blog'
												className={`${
													!active ? " text-white" : "text-black"
												} group flex rounded-md items-center justify-center w-full px-2 py-2 text-sm large:text-lg mobile:text-lg`}>
												Blogs
											</MyLink>
										)}
									</Menu.Item>

									<Menu.Item>
										{({ active }) => (
											<MyLink
												href='/media/studentPerformance'
												className={`${
													!active ? " text-white" : "text-black"
												} group flex rounded-md items-center justify-center text-center w-full px-2 py-2 text-sm large:text-lg mobile:text-lg`}>
												Student Performance
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
	);
};

export default MediaNav;
