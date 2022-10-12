import Image from "next/image";

// image imports

import portfolio_1_image from '../../public/image/PORTOFOLIO-1.png'
import portfolio_2_image from '../../public/image/PORTOFOLIO-2.png'
import portfolio_3_image from '../../public/image/PORTOFOLIO-3.png'
import portfolio_4_image from '../../public/image/PORTOFOLIO-4.png'
import portfolio_5_image from '../../public/image/PORTOFOLIO-5.png'
import portfolio_6_image from '../../public/image/PORTOFOLIO-6.png'
import portfolio_7_image from '../../public/image/PORTOFOLIO-7.png'
import portfolio_8_image from '../../public/image/PORTOFOLIO-8.png'
import portfolio_9_image from '../../public/image/PORTFOLIO-9.png'
import portfolio_10_image from '../../public/image/PORTOFOLIO-10.png'
import portfolio_11_image from '../../public/image/PORTOFOLIO-11.png'
import portfolio_12_image from '../../public/image/PORTOFOLIO-12.png'
import portfolio_13_image from '../../public/image/PORTOFOLIO-13.png'
import portfolio_14_image from '../../public/image/PORTOFOLIO-14.png'
import portfolio_15_image from '../../public/image/PORTOFOLIO-15.png'
import portfolio_16_image from '../../public/image/PORTOFOLIO-16.png'
import portfolio_17_image from '../../public/image/PORTOFOLIO-17.png'

const Portfolio = () => {
	return (
		<>
			<div className='flex flex-col font-body min-h-screen'>
				{/* part-1 */}
				{/* <div className='flex h-105 text-gray-200 3xl:h-104 3k:h-104 laptop:h-104 tablet:flex-col tablet:h-full large:flex-col large:h-full mobile:flex-col mobile:h-full'>
						<div className='w-2/5 bg-portfolio-color-1 pl-20 pr-32 3xl:pl-12 pt-28 text-justify 3k:pt-16 3k:pr-40 3k:pl-12 laptop:pt-20 laptop:pr-28 laptop:pl-8	 tablet:w-full tablet:py-24 tablet:px-12 tablet:h-full large:w-full large:py-24 large:px-12 large:h-full mobile:w-full mobile:py-24 mobile:px-12 mobile:h-full'>
							<h1 className='font-title text-3xl tablet:text-2xl font-bold tablet:text-center large:text-center mobile:text-center'>
								About Us
							</h1>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-xs mt-4'>
								Founded in 2009, Arpeggio has established itself as Chattogram’s go-to provider for music lessons and tuition for all
								ages and levels. Our journey started with 20 students, and since then we've been fortunate enough to train more than
								4000 students
							</p>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-xs mt-8'>
								Whatever your skill level may be, whether you're an established player or you've never picked up an instrument before,
								Arpeggio’s modern facilities and devoted teachers will help you achieve your goals.
							</p>

							<h2 className='font-medium font-title text-xl 3xl:text-base 3k:text-base laptop:text-base mt-4'>
								Welcome to the world of Arpeggio...
							</h2>
						</div>

						<div className='w-3/5 bg-portfolio-color-2 tablet:w-full large:w-full mobile:w-full'>
							<div className='w-11/12 relative right-20 top-20 shadow-sm laptop:right-16 laptop:top-24 tablet:w-full tablet:static tablet:h-full large:w-full large:static large:h-full mobile:w-full mobile:static mobile:h-full'>
								<Image src='/image/home-2.jpg' width={960} height={560} layout='responsive' objectFit='cover' className='' />
							</div>
						</div>
					</div> */}
				<div className='w-full h-full'>
					<div className='w-full h-full'>
						<Image src={portfolio_1_image} width={1329} height={510} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-2 */}
				{/* <div className='flex h-104 text-gray-200 w-full bg-gray-100 mt-8 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-2/5 bg-portfolio-color-2 z-10 relative tablet:hidden large:hidden mobile:hidden'></div>

						<div className='w-3/5 bg-portfolio-color-1 pl-148 pr-20 pt-32 3xl:pt-28 3k:pt-20 3k:pl-124 3k:pr-12 laptop:pt-12 laptop:pl-96 laptop:pr-4 laptop:h-72 h-102 z-20 absolute right-52 tablet:w-full tablet:h-full tablet:px-12 tablet:py-24 tablet:static large:w-full large:h-full large:px-12 large:py-24 large:static mobile:w-full mobile:h-full mobile:px-12 mobile:py-24 mobile:static'>
							<h1 className='font-title text-3xl 3xl:text-2xl font-bold text-right tablet:text-center large:text-center mobile:text-center'>
								Our Courses
							</h1>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify text-right-last'>
								The courses we offer are - Guitar, Piano, Violin, Bass, Drums, Ukulele, Flute and Painting. Besides regular courses we
								have many short-term courses as well. We also offer private classes and online music courses for students staying
								abroad or far away from our location.
							</p>
						</div>

						<div className='w-116 relative right-72 top-12 shadow-sm z-30 3k:w-115 laptop:w-115 tablet:w-full tablet:static large:w-full large:static mobile:w-full mobile:static'>
							<Image src='/image/portfolio-26.png' width={435} height={400} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_2_image} width={1322} height={519} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-3 */}
				{/* <div className='flex h-105 text-gray-200 w-full bg-portfolio-color-3 mt-8 relative 3xl:h-104 3k:h-104 laptop:h-104 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-11/12 3xl:h-1/2 bg-portfolio-color-1 relative h-96 top-48 pl-12 pt-20 3xl:pt-12 3k:pt-12 3k:top-24 laptop:pt-8 laptop:top-24 laptop:pl-4 laptop:pr-20 tablet:w-full tablet:static tablet:h-full tablet:px-12 tablet:py-24 large:w-full large:static large:h-full large:px-12 large:py-24 mobile:w-full mobile:static mobile:h-full mobile:px-12 mobile:py-24'>
							<h1 className='font-title text-3xl 3xl:text-2xl font-bold w-52 tablet:text-center tablet:w-full tablet:px-12 large:text-center large:w-full large:px-12 mobile:text-center mobile:w-full mobile:px-6'>
								Lesson plan and methodology
							</h1>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify w-2/5 pr-4 3xl:pr-12 tablet:w-full large:w-full mobile:w-full'>
								Our syllabus is made to guide the students step by step. We offer one-to-one lesson to understand everyone's inner
								soul. Our lesson plan is made to help the students play music on their own just like the way we use different
								languages to communicate in our daily life. We understand everyone is different, so we try to treat them as
								individuals.
							</p>
						</div>

						<div className='w-2/5 absolute top-30 4xl:top-42 3k:top-24 right-52 shadow-sm laptop:top-24 laptop:w-143 laptop:right-28 tablet:static tablet:w-full large:static large:w-full mobile:static mobile:w-full'>
							<Image src='/image/portfolio-1.jpg' width={768} height={608} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_3_image} width={1328} height={528} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-4 */}
				{/* <div className='flex h-117 text-gray-200 w-full bg-gray-100 mt-8 relative 3xl:h-104 3k:h-104 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-full bg-portfolio-color-2 relative h-96 top-32 laptop:h-80 laptop:top-20 tablet:hidden large:hidden mobile:hidden'></div>

						<div className='w-138 absolute top-32 4xl:top-40 left-40 shadow-sm 3k:left-32 laptop:left-24 laptop:top-20 tablet:static tablet:w-full large:static large:w-full mobile:static mobile:w-full'>
							<Image src='/image/portfolio-2.jpg' width={700} height={530} layout='responsive' objectFit='cover' className='' />
						</div>

						<div className='w-1/4 bg-portfolio-color-1 absolute h-119 right-52 px-12 pt-48 3xl:right-20 3xl:px-8 3k:right-44 3k:pt-32 laptop:right-36 laptop:pt-16 laptop:h-102 laptop:px-4 tablet:w-full tablet:static tablet:h-full tablet:py-24 large:w-full large:static large:h-full large:py-24 mobile:w-full mobile:static mobile:h-full mobile:py-24'>
							<h1 className='font-body text-3xl laptop:text-2xl font-bold text-right tablet:text-center large:text-center mobile:text-center'>
								Theoritical & Practical test
							</h1>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify text-right-last'>
								After completing a grade, our students sit for an exam that contains both theoretical and practical tests. They must
								pass the test to step up to the next grade. This helps them face all the puzzles given in the lessons and makes them
								even better.
							</p>
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_4_image} width={1347} height={542} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-5 */}
				{/* <div className='flex h-105 text-gray-200 w-full bg-gray-100 mt-8 relative 3xl:h-104 3k:h-104 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-1/4 absolute top-36 z-20 right-96 shadow-sm laptop:right-72 tablet:static tablet:w-full large:static large:w-full mobile:static mobile:w-full'>
							<Image src='/image/portfolio-3.jpg' width={400} height={320} layout='responsive' objectFit='cover' className='' />
						</div>

						<div className='w-1/2 z-10 bg-portfolio-color-1 relative h-102 top-20 pl-12 pt-24 pr-40 laptop:top-12 laptop:pl-4 laptop:pt-12 laptop:pr-32 tablet:w-full tablet:static tablet:h-full tablet:py-24 tablet:px-12 large:w-full large:static large:h-full large:py-24 large:px-12 mobile:w-full mobile:static mobile:h-full mobile:py-24 mobile:px-12'>
							<h1 className='font-body text-3xl font-bold w-96 3k:w-80 laptop:w-80 tablet:w-full tablet:text-center large:w-full large:text-center mobile:w-full mobile:text-center'>
								Jamming session, Group playing & Listening session
							</h1>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify'>
								We pick up students and arrange jamming sessions to let them understand the musical conversation. This is a way out
								toward the freedom of their own composition. We also arrange listening sessions for introducing them to new genres of
								music. They can share different music with each other to widen their listening.
							</p>
						</div>

						<div className='w-1/4 absolute right-0 top-36 shadow-sm tablet:static tablet:w-full large:static large:w-full mobile:static mobile:w-full'>
							<Image src='/image/portfolio-4.jpg' width={1400} height={1120} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}

				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_5_image} width={1346} height={527} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-6 */}
				{/* <div className='flex h-105 text-gray-200 w-full bg-gray-100 mt-8 3xl:h-104 3k:h-104 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-1/2 my-20 ml-20 flex relative tablet:static tablet:w-full tablet:my-0 tablet:ml-0 large:static large:w-full large:my-0 large:ml-0 mobile:static mobile:w-full mobile:my-0 mobile:ml-0'>
							<div className='w-2/5 h-full bg-portfolio-color-1 z-10 4xl:h-125 3xl:h-95 3k:h-95 laptop:h-80 tablet:hidden large:hidden mobile:hidden'></div>

							<div className='w-3/5 h-full bg-portfolio-color-4 z-10 4xl:h-125 3xl:h-95 3k:h-95 laptop:h-80 tablet:hidden large:hidden mobile:hidden'></div>

							<div className='absolute z-20 px-16 pt-28 laptop:pt-12 laptop:pl-8 tablet:w-full tablet:static tablet:h-full tablet:py-24 tablet:px-12 tablet:text-portfolio-color-5 large:w-full large:static large:h-full large:py-24 large:px-12 large:text-portfolio-color-5 mobile:static mobile:h-full mobile:py-24 mobile:px-12 mobile:text-portfolio-color-5'>
								<h1 className='font-body text-3xl font-bold w-68 tablet:w-full tablet:text-center large:w-full large:text-center mobile:w-full mobile:text-center'>
									Students performing session
								</h1>

								<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify tablet:font-bold large:font-bold mobile:font-bold'>
									We arrange regular performing sessions for students to get rid of performance anxiety and stage fright. This helps
									them to grow more confident to become a better performer.
								</p>
							</div>
						</div>

						<div className='w-1/2 bg-portfolio-color-7 py-20 pr-20 shadow-sm overflow-hidden h-127 tablet:w-full tablet:h-full tablet:py-0 tablet:pr-0 tablet:bg-transparent large:w-full large:h-full large:py-0 large:pr-0 large:bg-transparent mobile:w-full mobile:h-full mobile:py-0 mobile:pr-0 mobile:bg-transparent'>
							<Image src='/image/portfolio-5.jpg' width={1024} height={950} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_6_image} width={1342} height={514} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-7 */}
				{/* <div className='flex h-105 text-gray-200 w-full bg-portfolio-color-7 mt-8 relative 3xl:h-104 3k:h-104 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 tablet:static large:flex-col large:h-full large:mt-16 large:static mobile:flex-col mobile:h-full mobile:mt-16 mobile:static'>
						<div className='w-4/5 h-72 bg-portfolio-color-1 absolute bottom-24 left-24 3k:h-56 laptop:h-56 tablet:hidden large:hidden mobile:hidden'></div>

						<div className='w-1/4 absolute right-104 bottom-24 shadow-sm 3k:right-96 laptop:right-76 tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
							<Image src='/image/portfolio-6.jpg' width={650} height={600} layout='responsive' objectFit='cover' className='' />
						</div>

						<div className='absolute z-20 top-32 w-1/2 4xl:top-52 3k:top-44 laptop:top-32 tablet:static tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 large:static large:w-full large:h-full large:py-24 large:px-12 mobile:static mobile:w-full mobile:h-full mobile:py-24 mobile:px-12'>
							<h1 className='font-body text-3xl 3k:text-2xl laptop:text-2xl font-bold text-portfolio-color-5 pl-32 laptop:pl-28 tablet:text-center tablet:pl-0 large:text-center large:pl-0 mobile:text-center mobile:pl-0'>
								Recording experience
							</h1>

							<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-xs mt-4 text-justify pr-40 pl-32 pt-8 laptop:pt-0 laptop:pl-28 tablet:text-portfolio-color-5 tablet:font-bold tablet:pr-0 tablet:pl-0 tablet:pt-0 large:text-portfolio-color-5 large:font-bold large:pr-0 large:pl-0 large:pt-0 mobile:text-portfolio-color-5 mobile:font-bold mobile:pr-0 mobile:pl-0 mobile:pt-0'>
								Our students get access to our recording studio "Studio Big Bang" to have a recording experience. Since recording is
								completely different from stage performance it helps them understand the key factors.
							</p>
						</div>

						<div className='w-1/4 absolute right-8 bottom-24 shadow-sm tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
							<Image src='/image/portfolio-7.jpg' width={650} height={600} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_7_image} width={1333} height={533} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-8 */}
				{/* <div className='flex h-105 text-portfolio-color-5 w-full bg-portfolio-color-7 mt-8 3k:h-120 laptop:h-120 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-2/5 pt-40 px-20 text-portfolio-color-5 laptop:pl-8 laptop:pt-32 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 large:w-full large:h-full large:py-24 large:px-12 mobile:w-full mobile:h-full mobile:py-24 mobile:px-12'>
							<h1 className='font-body text-3xl laptop:text-2xl font-bold  w-68 laptop:w-60 tablet:w-full tablet:text-center large:w-full large:text-center mobile:w-full mobile:text-center'>
								Audition, grooming and Promotion
							</h1>

							<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify '>
								We arrange auditions to pick talented musicians from our students. After the grooming session we promote them through
								social media and other platforms (i.e Our Facebook page, Youtube and different live concerts) by making their
								performing videos and to letting them perform in various live shows
							</p>
						</div>

						<div className='w-3/5 bg-portfolio-color-1 relative my-21 overflow-hidden 3xl:my-36 3k:my-24 laptop:my-36 tablet:w-full tablet:h-full tablet:static tablet:my-0 large:w-full large:h-full large:static large:my-0 mobile:w-full mobile:h-full mobile:static mobile:my-0'>
							<div className='w-4/5 absolute right-0 shadow-sm tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
								<Image src='/image/portfolio-8.jpg' width={600} height={397} layout='responsive' objectFit='cover' className='' />
							</div>
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_8_image} width={1341} height={527} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-9 */}
				{/* <div className='flex h-105 text-portfolio-color-5 w-full bg-portfolio-color-7 mt-8 relative 3k:h-104 laptop:h-119 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-4/5 h-20 bg-portfolio-color-1 absolute bottom-0 right-0 tablet:hidden large:hidden mobile:hidden'></div>

						<div className='w-117 absolute right-109 bottom-40 3xl:bottom-56 3xl:right-106 3k:right-104 3k:bottom-48 laptop:right-84 laptop:bottom-48 shadow-sm tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
							<Image src='/image/portfolio-9.png' width={650} height={400} layout='responsive' objectFit='cover' className='' />
						</div>

						<div className='absolute z-20 top-52 w-2/5 px-16 3xl:pl-12 3xl:pr-32 3k:pl-8 3k:pr-40 3k:top-40 laptop:pl-8 laptop:pr-32 laptop:top-28 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 tablet:static large:w-full large:h-full large:py-24 large:px-12 large:static mobile:w-full mobile:h-full mobile:py-24 mobile:px-12 mobile:static'>
							<h1 className='font-body text-3xl laptop:text-2xl font-bold text-portfolio-color-5 tablet:text-center large:text-center mboile:text-center'>
								School bands
							</h1>

							<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify'>
								Till date, we have formed 7 complete bands from our school. We select the individuals through all the filtering
								processes and make them team members. Jamming sessions help them to prepare the team. Currently, all the bands are
								performing regularly throughout the country.
							</p>
						</div>

						<div className='w-117 absolute right-4 bottom-40 3xl:bottom-56 3k:bottom-48 laptop:bottom-48 shadow-sm tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
							<Image src='/image/portfolio-10.png' width={650} height={400} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}
				{/********* Image has some issues so it is being blocked ******/}
				{/* <div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_9_image} width={1340} height={529} layout='responsive' objectFit='cover' className='' />
					</div>
				</div> */}

				{/* part-10 */}
				{/* <div className='w-full h-full flex text-portfolio-color-5 bg-portfolio-color-6 mt-8 3xl:h-104 laptop:h-104 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='w-full flex bg-portfolio-color-7 m-16 laptop:h-3/5 laptop:mt-24 tablet:m-0 tablet:h-full tablet:flex-col large:m-0 large:h-full large:flex-col mobile:m-0 mobile:h-full mobile:flex-col'>
							<div className='w-2/5 h-full px-14 pt-32 3xl:pt-20 laptop:pt-4 laptop:px-10 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 large:w-full large:h-full large:py-24 large:px-12 mobile:w-full mobile:h-full mobile:py-24 mobile:px-12'>
								<h1 className='font-body text-3xl font-bold text-portfolio-color-5 tablet:text-center large:text-center mobile:text-center'>
									The dream show
								</h1>

								<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify'>
									We arrange a big concert every 2/3 years titled "the dream show" where our school bands and other inspiring bands
									perform in front of a huge audience. Our students get a real concert feel which boosts them to grow in the long
									run
								</p>
							</div>

							<div className='w-3/5 h-full shadow-sm overflow-hidden tablet:w-full large:w-full mobile:w-full'>
								<Image src='/image/portfolio-11.jpg' width={2980} height={1870} layout='responsive' objectFit='cover' className='' />
							</div>
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_10_image} width={1336} height={520} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-11 */}
				{/* <div className='flex h-105 text-gray-200 w-full bg-gray-100 mt-8 relative 3xl:h-104 3k:h-104 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 tablet:static large:flex-col large:h-full large:mt-16 large:static mobile:flex-col mobile:h-full mobile:mt-16 mobile:static'>
						<div className='w-full h-90 3xl:h-72 3k:h-72 laptop:h-72 bg-portfolio-color-1 absolute z-20 top-28 flex overflow-hidden tablet:static tablet:h-full tablet:flex-col large:static large:h-full large:flex-col mobile:static mobile:h-full mobile:flex-col'>
							<div className='w-20 bg-portfolio-color-8 h-full tablet:hidden large:hidden mobile:hidden'></div>

							<div className='grid grid-cols-2 gap-2 w-2/5 h-full overflow-hidden 3k:gap-3 laptop:w-1/2 tablet:w-full large:w-full mobile:w-full'>
								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-12.jpg'
										width={273}
										height={175}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-13.jpg'
										width={273}
										height={175}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-14.jpg'
										width={273}
										height={175}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-15.jpg'
										width={273}
										height={175}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>
							</div>

							<div className='w-1/2 pl-24 pt-16 3xl:w-109 3xl:pr-12 laptop:pt-4 laptop:px-12 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 large:w-full large:h-full large:py-24 large:px-12 mobile:w-full mobile:h-full mobile:py-24 mobile:px-12'>
								<h1 className='font-body text-3xl font-bold text-right tablet:text-center large:text-center mobile:text-center'>
									Music workshop
								</h1>

								<p className='font-light text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify text-right-last'>
									We arrange regular music workshops on various musical topics. Till date, we have arranged 11 workshops
									successfully and the outcome was very good. We invite prominent musicians to motivate and inspire our students.
									Legend Bassbaba Sumon, Dewan Anamul Hasan, Mahan Fahim, Mehdi hossain Khan Sagor, and many more musicians came to
									our school to conduct music workshops.
								</p>
							</div>
						</div>

						<div className='w-3/5 h-full bg-portfolio-color-6 z-10 absolute right-0 tablet:hidden large:hidden mobile:hidden'></div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_11_image} width={1334} height={526} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-12 */}
				{/* <div className='flex h-105 text-portfolio-color-5 w-full bg-gray-100 mt-8 3xl:h-103 3k:h-104 laptop:h-103 tablet:flex-col tablet:h-full tablet:mt-16 large:flex-col large:h-full large:mt-16 mobile:flex-col mobile:h-full mobile:mt-16'>
						<div className='flex flex-col w-full h-full p-16 relative tablet:static tablet:p-0 large:static large:p-0 mobile:static mobile:p-0'>
							<div className='w-full bg-portfolio-color-8 h-1/2 tablet:hidden large:hidden mobile:hidden'></div>

							<div className='w-full bg-portfolio-color-1 h-1/2 tablet:hidden large:hidden mobile:hidden'></div>

							<div className='flex w-full absolute top-16 4xl:left-21 laptop:left-10 tablet:static tablet:h-full tablet:flex-col tablet:bg-portfolio-color-8 large:static large:h-full large:flex-col large:bg-portfolio-color-8 mobile:static mobile:h-full mobile:flex-col mobile:bg-portfolio-color-8'>
								<div className='w-1/2 pr-28	pl-40 pt-40 3xl:pt-16 3k:pt-25 laptop:pt-16 laptop:pl-20 laptop:pr-20 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 large:w-full large:h-full large:py-24 large:px-12 mobile:w-full mobile:h-full mobile:py-24 mobile:px-12'>
									<h1 className='font-body text-3xl font-bold tablet:text-center large:text-center mobile:text-center'>
										Music for kids
									</h1>

									<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify 3k:mt-3'>
										Kids are really quick learners! We emphasize their interest and prepare lesson plans accordingly. We gradually
										introduce them to
									</p>

									<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm text-gray-200 text-justify tablet:text-portfolio-color-5 large:text-portfolio-color-5 mobile:text-portfolio-color-5'>
										the magic of music.
									</p>
								</div>

								<div className='grid grid-cols-2 gap-2 w-2/5 h-full 3xl:w-110 tablet:w-full large:w-full mobile:w-full'>
									<div className='shadow-sm'>
										<Image
											src='/image/portfolio-16.jpg'
											width={960}
											height={960}
											layout='responsive'
											objectFit='cover'
											className=''
										/>
									</div>

									<div className='shadow-sm'>
										<Image
											src='/image/portfolio-17.jpg'
											width={960}
											height={960}
											layout='responsive'
											objectFit='cover'
											className=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_12_image} width={1346} height={522} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-13 */}
				{/* <div className='w-full h-full flex text-portfolio-color-5 bg-portfolio-color-9 mt-8 tablet:flex-col tablet:mt-16 large:flex-col large:mt-16 mobile:flex-col mobile:mt-16'>
						<div className='w-full flex bg-portfolio-color-2 m-16 laptop:h-3/5 laptop:mt-28 tablet:flex-col tablet:h-full tablet:m-0 large:flex-col large:h-full large:m-0 mobile:flex-col mobile:h-full mobile:m-0'>
							<div className='w-1/2 px-10 pt-32 3xl:pt-24 3k:pt-24 laptop:pt-8 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 large:w-full large:h-full large:py-24 large:px-12 mobile:w-full mobile:h-full mobile:py-24 mobile:px-12'>
								<h1 className='font-body text-3xl font-bold text-portfolio-color-5 tablet:text-center large:text-center mobile:text-center'>
									Online and private class
								</h1>

								<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify'>
									Besides regular classes, we have a good number of online students from different cities and also from abroad.
									Right now students from the USA, Canada, France, Australia, and Abu Dhabi are doing online classes regularly. We
									also offer private lessons where our instructors give a lot of time and effort.
								</p>
							</div>

							<div className='grid grid-cols-2 gap-2 w-1/2 h-full overflow-hidden tablet:w-full large:w-full mobile:w-full'>
								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-18.png'
										width={2020}
										height={3100}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-19.jpg'
										width={2020}
										height={3100}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>
							</div>
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_13_image} width={1319} height={523} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-14 */}
				{/* <div className='w-full h-105 flex flex-col text-portfolio-color-5 bg-gray-200 mt-8 relative 3xl:h-104 3k:h-115 laptop:h-120 tablet:flex-col tablet:h-full tablet:mt-16 tablet:static large:flex-col large:h-full large:mt-16 large:static mobile:flex-col mobile:h-full mobile:mt-16 mobile:static'>
						<div className='flex w-full z-30 relative tablet:flex-col tablet:h-full tablet:static large:flex-col large:h-full large:static mobile:flex-col mobile:h-full mobile:static'>
							<div className='grid grid-cols-2 gap-2 w-2/5 h-1/2 absolute bg-gray-200 top-0 ml-8 mt-8 laptop:mt-10 tablet:static tablet:w-full tablet:ml-0 tablet:mt-0 tablet:h-full large:static large:w-full large:ml-0 large:mt-0 large:h-full mobile:static mobile:w-full mobile:ml-0 mobile:mt-0 mobile:h-full'>
								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-20.jpg'
										width={782}
										height={500}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-21.jpg'
										width={782}
										height={500}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-22.jpg'
										width={782}
										height={500}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>

								<div className='shadow-sm'>
									<Image
										src='/image/portfolio-23.jpg'
										width={782}
										height={500}
										layout='responsive'
										objectFit='cover'
										className=''
									/>
								</div>
							</div>

							<div className='w-2/5 absolute right-0 pt-44 pr-14 pl-5 3xl:pt-20 3k:pt-20 laptop:pt-20 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 tablet:static large:w-full large:h-full large:py-24 large:px-12 large:static mobile:w-full mobile:h-full mobile:py-24 mobile:px-12 mobile:static'>
								<h1 className='font-body text-3xl font-bold text-right tablet:text-center large:text-center mobile:text-center'>
									Picnic and fun
								</h1>

								<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify text-right-last'>
									We arrange outings from our school so that students get to know each other better and which help them later while
									playing together as a team.
								</p>
							</div>
						</div>

						<div className='w-full h-1/2 bg-portfolio-color-1 absolute bottom-0 z-10 tablet:hidden large:hidden mobile:hidden'></div>
						<div className='w-104 h-1/5 bg-gray-200 absolute bottom-52 z-20 3xl:w-109 3k:w-109 laptop:w-140 tablet:hidden large:hidden mobile:hidden'></div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_14_image} width={1340} height={528} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-15 */}
				{/* <div className='w-full h-104 flex text-portfolio-color-5 bg-gray-200 mt-8 relative 3xl:h-103 3k:h-103 laptop:h-125 tablet:flex-col tablet:h-full tablet:mt-16 tablet:static large:flex-col large:h-full large:mt-16 large:static mobile:flex-col mobile:h-full mobile:mt-16 mobile:static'>
						<div className='w-1/2 h-5/6 bg-portfolio-color-1 relative z-20 overflow-hidden tablet:static tablet:h-full tablet:w-full large:static large:h-full large:w-full mobile:static mobile:h-full mobile:w-full'>
							<div className='w-3/4 h-5/6 absolute bottom-0 right-0 shadow-sm tablet:static tablet:w-full tablet:h-full large:static large:w-full large:h-full mobile:static mobile:w-full mobile:h-full'>
								<Image src='/image/portfolio-24.jpg' width={960} height={700} layout='responsive' objectFit='cover' className='' />
							</div>
						</div>

						<div className='w-1/2 h-5/6 bg-portfolio-color-6 relative z-20 tablet:h-full tablet:w-full tablet:static large:h-full large:w-full large:static mobile:h-full mobile:w-full mobile:static'>
							<div className='w-3/4 absolute left-0 bg-gray-200 h-90 bottom-0 pt-24 4xl:h-137 3k:h-84 laptop:h-68 laptop:pt-4 tablet:w-full tablet:h-full tablet:py-24 tablet:px-12 tablet:static large:w-full large:h-full large:py-24 large:px-12 large:static mobile:w-full mobile:h-full mobile:py-24 mobile:px-12 mobile:static'>
								<h1 className='font-body text-3xl laptop:text-xl font-bold text-right pl-40 pr-16 3xl:pl-32 3k:pl-32 laptop:pl-32 tablet:pl-0 tablet:pr-0 tablet:text-center large:pl-0 large:pr-0 large:text-center mobile:pl-0 mobile:pr-0 mobile:text-center'>
									Social responsibilities and awareness
								</h1>

								<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify text-right-last px-12 pr-16 tablet:pr-0 tablet:px-0 large:pr-0 large:px-0 mobile:pr-0 mobile:px-0'>
									We try to contribute to society by creating social awareness, charity, or raising funds for helpless people.
									Students take part in all these activities.
								</p>
							</div>
						</div>

						<div className='w-3/5 h-20 bg-portfolio-color-1 absolute bottom-4 right-0 z-10 tablet:hidden large:hidden mobile:hidden'></div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_15_image} width={1328} height={523} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-16 */}
				{/* <div className='w-full h-105 flex items-center text-portfolio-color-5 bg-portfolio-color-1 mt-8 relative 3xl:h-104 3k:h-104 laptop:h-104 tablet:flex-col tablet:h-full tablet:mt-16 tablet:static large:flex-col large:h-full large:mt-16 large:static mobile:flex-col mobile:h-full mobile:mt-16 mobile:static'>
						<div className='w-1/4 h-125 bg-portfolio-color-6 absolute left-60 pt-32 px-6 4xl:h-103 3xl:left-40 3xl:h-92 3k:left-40 3k:h-97 3k:px-10 laptop:left-16 laptop:h-84 laptop:px-10 laptop:pt-20 laptop:w-117 tablet:w-full tablet:h-full tablet:px-12 tablet:py-24 tablet:static large:w-full large:h-full large:px-12 large:py-24 large:static mobile:w-full mobile:h-full mobile:px-12 mobile:py-24 mobile:static'>
							<h1 className='font-body text-3xl laptop:text-2xl font-bold tablet:text-center large:text-center mobile:text-center'>
								Scholarship
							</h1>

							<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify'>
								We offer a scholarship for talented students. Especially for those who are unable to afford the tuition fees.
							</p>
						</div>

						<div className='w-1/2 absolute right-20 shadow-sm tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
							<Image src='/image/home-3.jpg' width={960} height={620} layout='responsive' objectFit='cover' className='' />
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_16_image} width={1344} height={526} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>

				{/* part-17 */}
				{/* <div className='w-full h-106 flex text-gray-200 bg-portfolio-color-6 my-8 relative 3xl:h-105 3k:h-105 laptop:h-104 tablet:flex-col tablet:h-full tablet:mt-16 tablet:static large:flex-col large:h-full large:mt-16 large:static mobile:flex-col mobile:h-full mobile:mt-16 mobile:static'>
						<div className='w-full h-3/5 bg-portfolio-color-1 absolute bottom-20 tablet:h-full tablet:static large:h-full large:static mobile:h-full mobile:static'>
							<div className='w-117 border-8 border-black border-solid absolute bottom-24 left-24 shadow-sm laptop:bottom-32 tablet:w-full tablet:h-full tablet:static large:w-full large:h-full large:static mobile:w-full mobile:h-full mobile:static'>
								<Image src='/image/home-4.jpg' width={845} height={845} layout='responsive' objectFit='cover' className='' />
							</div>

							<div className='w-1/2 h-103 absolute right-0 pr-36 pt-24 pl-6 laptop:pt-16 tablet:w-full tablet:h-full tablet:px-12 tablet:py-24 tablet:static large:w-full large:h-full large:px-12 large:py-24 large:static mobile:w-full mobile:h-full mobile:px-12 mobile:py-24 mobile:static'>
								<h1 className='font-body text-3xl font-bold text-right tablet:text-center large:text-center mobile:text-center'>
									Success story
								</h1>

								<p className='font-bold text-base 3xl:text-sm 3k:text-sm laptop:text-sm mt-4 text-justify text-right-last'>
									Many of our students are playing important roles in the music industry. They are successfully contributing to
									being part of prominent bands of our country or as solo artists. Right now the majority of our instructors are
									from our students who have completed the course successfully.
								</p>
							</div>
						</div>
					</div> */}
				<div className='w-full h-full mt-8'>
					<div className='w-full h-full'>
						<Image src={portfolio_17_image} width={1343} height={526} layout='responsive' objectFit='cover' className='' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
