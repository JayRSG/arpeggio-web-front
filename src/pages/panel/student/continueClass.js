import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import StudentNav from "../../../components/panel/student/StudentNav";
import Image from "next/image";
import Notes from "../../../components/panel/student/Notes";
import Discussions from "../../../components/panel/student/Discussions";
import About from "../../../components/panel/student/About";
import { useState } from "react";

const continueClass = () => {
	return (
		<>
			<title>Course</title>
			<Navbar />
			<div className='px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28'>
				<div className='flex font-body min-h-screen'>
					<StudentNav />
					<div className='w-full min-h-screen h-full'>
						<div className='flex justify-between h-1/2 w-full laptop:flex-col'>
							<div className='flex flex-col pt-7 w-1/2 laptop:w-full'>
								<h1 className='text-5xl font-title font-bold p-7 pl-16 laptop:text-center'>Course Name</h1>

								<div className='w-full pt-4 pl-16'>
									<Image
										src='/image/stu-course.jpg'
										width={5184}
										height={2900}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>
							</div>

							<div className='flex flex-col w-117 h-full mt-20 laptop:w-1/2 laptop:pl-16'>
								<p className='text-lg font-bold pl-8'>8 Lessons</p>

								<div className='bg-main-color w-full h-full font-bold text-lg overflow-y-scroll'>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
									<h3 className='pl-8 py-4 cursor-pointer'>Lorem ipsum dolor sit</h3>
								</div>
							</div>
						</div>

						<a className='btn rounded-lg bg-blue-500 text-base py-6 ml-16 relative bottom-12 3k:bottom-24 hover:opacity-70 transition-all duration-500'>
							Mark Complete
						</a>

						<hr className='bg-black h-100 w-112' />

						<div className='flex justify-between w-2/5 pl-16 pt-4 3k:w-3/5'>
							<a className='text-2xl font-bold cursor-pointer hover:opacity-80 transition-all duration-500'>Notes</a>
							<a className='text-2xl font-bold cursor-pointer hover:opacity-80 transition-all duration-500'>Discussions</a>
							<a className='text-2xl font-bold cursor-pointer hover:opacity-80 transition-all duration-500'>About</a>
						</div>

						<div className='flex flex-col pl-16'>
							<div className='flex flex-col py-8 w-112'>
								<h3 className='text-2xl font-bold'>Lorem ipsum dolor sit</h3>

								<p className='text-sm pt-4'>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
									dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
									kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
								</p>
							</div>

							<div className='flex flex-col py-8 w-112'>
								<h3 className='text-2xl font-bold'>Lorem ipsum dolor sit</h3>

								<p className='text-sm pt-4'>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
									dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
									kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
								</p>
							</div>

							<div className='flex flex-col py-8 w-112'>
								<h3 className='text-2xl font-bold'>Lorem ipsum dolor sit</h3>

								<p className='text-sm pt-4'>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
									dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
									kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
								</p>
							</div>

							<div className='flex flex-col py-8 w-112'>
								<h3 className='text-2xl font-bold'>Lorem ipsum dolor sit</h3>

								<p className='text-sm pt-4'>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
									dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
									kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default continueClass;
