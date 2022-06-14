import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import StudentNav from "../../../components/panel/student/StudentNav";

const announcement = () => {
	return (
		<>
			<title>Announcements</title>
			<Navbar />
			<div className='px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28'>
				<div className='flex font-body min-h-screen'>
					<StudentNav />

					<div className='w-full min-h-screen'>
						<h1 className='text-5xl font-title p-7 pl-20 font-bold large:pl-0 mobile:pl-0 large:p-0 mobile:p-0 large:py-7 mobile:py-7 large:text-center mobile:text-center'>
							Announcements
						</h1>

						<div className='flex flex-wrap overflow-hidden justify-center pb-16'>
							<div className='w-3/4 bg-main-color shadow-md mt-8'>
								<div className='flex flex-col items-center justify-center px-8 pb-8 pt-4 mobile:px-0'>
									<div className='flex flex-col justify-center flex-wrap'>
										<div className='flex justify-between pb-8 mobile:justify-center mobile:flex-col'>
											<h3 className='text-2xl font-bold pr-14  mobile:pr-6 mobile:text-xl'>Lorem ipsum dolor sit</h3>

											<h3 className='text-2xl font-bold '>22 September, 2021</h3>
										</div>

										<p className='text-sm pb-8 tablet:px-12 large:px-20 mobile:px-8'>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquam consequuntur magnam error
											doloribus exercitationem repellendus ex voluptatem quod provident?
										</p>
									</div>
								</div>
							</div>

							<div className='w-3/4 bg-main-color shadow-md mt-8'>
								<div className='flex flex-col items-center justify-center px-8 pb-8 pt-4 mobile:px-0'>
									<div className='flex flex-col justify-center flex-wrap'>
										<div className='flex justify-between pb-8 mobile:justify-center mobile:flex-col'>
											<h3 className='text-2xl font-bold pr-14  mobile:pr-6 mobile:text-xl'>Lorem ipsum dolor sit</h3>

											<h3 className='text-2xl font-bold '>22 September, 2021</h3>
										</div>

										<p className='text-sm pb-8 tablet:px-12 large:px-20 mobile:px-8'>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquam consequuntur magnam error
											doloribus exercitationem repellendus ex voluptatem quod provident?
										</p>
									</div>
								</div>
							</div>

							<div className='w-3/4 bg-main-color shadow-md mt-8'>
								<div className='flex flex-col items-center justify-center px-8 pb-8 pt-4 mobile:px-0'>
									<div className='flex flex-col justify-center flex-wrap'>
										<div className='flex justify-between pb-8 mobile:justify-center mobile:flex-col'>
											<h3 className='text-2xl font-bold pr-14  mobile:pr-6 mobile:text-xl'>Lorem ipsum dolor sit</h3>

											<h3 className='text-2xl font-bold '>22 September, 2021</h3>
										</div>

										<p className='text-sm pb-8 tablet:px-12 large:px-20 mobile:px-8'>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquam consequuntur magnam error
											doloribus exercitationem repellendus ex voluptatem quod provident?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default announcement;
