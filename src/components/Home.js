import Link from 'next/link'
import Image from 'next/image'
import HeroCarousal from './HeroCarousal'
import NavLink from './NavLink'
import InstructorCarousal from './InstructorCarousal'
import TimeTable from './TimeTable'
import Button from './Button'

// Importing Images
import stu_course from '../../public/image/stu-course.jpg'
import image_piano from '../../public/image/piano.jpg'
import image_violin from '../../public/image/violin.jpg'
import image_drum from '../../public/image/drum.jpg'
import image_ukulele from '../../public/image/ukelele.jpg'
import image_flute from '../../public/image/flute.jpg'
import image_certificate from "../../public/image/certificate.png"


const Home = () => {
    return (
        <>
            <main className="flex flex-col font-body min-h-screen">
                {/* part1 */}
                {/* <div className='bg-home-image bg-no-repeat bg-cover bg-gray-500 h-106 md:bg-contain md:h-72 sm:h-88'> */}
                <div className="h-full relative w-full">
                    <HeroCarousal className="z-10" />

                    <div className="flex flex-col items-center pt-28 z-20 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full md:pt-0 sm:pt-0">
                        <h1 className="text-white text-7xl w-full lg:text-6xl md:text-4xl sm:text-2xl font-normal pb-4 font-title text-center">
                            Your online music school
                        </h1>

                        <p className="text-white text-4xl md:text-2xl sm:text-base font-normal font-title text-center">
                            Learn music from anywhere
                        </p>
                    </div>

                    <div className="flex items-center absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 md:bottom-1/5 md:-translate-y-[20%] sm:bottom-1/5 sm:-translate-y-[20%] z-10">
                        <Link href="/join">
                            <Button className="rounded-lg h-16 mb-4 bg-btn-color text-3xl text-center w-60 z-20 md:text-xl md:w-48 md:mb-0 sm:text-xl sm:w-48 sm:py-3 hover:scale-105 transition:all transform duration-500">
                                Enroll Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* part2 */}
                <div className="bg-home-bg bg-no-repeat bg-cover bg-gray-500 py-8 w-full">
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-5xl md:text-4xl sm:text-4xl font-bold py-4 font-title text-center">
                            Our Courses
                        </h1>

                        <p className="text-white text-3xl font-light py-4 md:text-2xl sm:text-lg px-88 2xl:px-16 xl:px-32 lg:px-24 md:px-16 sm:px-8 text-center">
                            The courses we offer are - Guitar, Piano, Violin,
                            Bass, Drums, Ukulele, Flute and Painting. Besides
                            regular courses we have many short-term courses as
                            well. We also offer private classes and online music
                            courses for students staying abroad or far away from
                            our location.
                        </p>

                        <div className="grid grid-cols-3 gap-28 my-4 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                            <div className="flex flex-col items-center">
                                <div className="w-80 h-56 lg:w-119 lg:h-84 md:w-119 md:h-84 sm:w-68 sm:h-60">
                                    <Image
                                        src={stu_course}
                                        width={5184}
                                        height={3456}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>

                                <h1 className="text-white text-3xl font-bold">
                                    Guitar
                                </h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-80 h-56 lg:w-119 lg:h-84 md:w-119 md:h-84 sm:w-68 sm:h-60">
                                    <Image
                                        src={image_piano}
                                        width={5184}
                                        height={3456}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>

                                <h1 className="text-white text-3xl font-bold">
                                    Piano
                                </h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-80 h-56 lg:w-119 lg:h-84 md:w-119 md:h-84 sm:w-68 sm:h-60">
                                    <Image
                                        src={image_violin}
                                        width={5184}
                                        height={3456}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>

                                <h1 className="text-white text-3xl font-bold">
                                    Violin
                                </h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-80 h-56 lg:w-119 lg:h-84 md:w-119 md:h-84 sm:w-68 sm:h-60">
                                    <Image
                                        src={image_drum}
                                        width={5184}
                                        height={3456}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>

                                <h1 className="text-white text-3xl font-bold">
                                    Drums
                                </h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-80 h-56 lg:w-119 lg:h-84 md:w-119 md:h-84 sm:w-68 sm:h-60">
                                    <Image
                                        src={image_ukulele}
                                        width={5760}
                                        height={3840}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>

                                <h1 className="text-white text-3xl font-bold">
                                    Ukelele
                                </h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-80 h-56 lg:w-119 lg:h-84 md:w-119 md:h-84 sm:w-68 sm:h-60">
                                    <Image
                                        src={image_flute}
                                        width={6016}
                                        height={4000}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>

                                <h1 className="text-white text-3xl font-bold">
                                    Flute
                                </h1>
                            </div>
                        </div>

                        <Link href="/courses">
                            <Button className="rounded-lg h-20 bg-btn-color text-3xl sm:text-xl text-center w-80 sm:w-60 shadow-md mt-12 hover:scale-105 transition:all transform duration-500">
                                Check all course
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* part3 */}
                <div className="bg-home-image-2 bg-no-repeat bg-cover brightness-90 w-full">
                    <div className="flex flex-col items-center w-full h-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm py-8">
                        <h1 className="text-white font-title text-5xl md:text-4xl sm:text-4xl font-bold pb-8 sm:pb-0 text-center">
                            Regular Class
                        </h1>

                        <p className="text-white font-light text-2xl md:text-xl sm:text-lg px-88 3xl:px-48 2xl:px-32 xl:px-36 lg:px-32 md:px-20 sm:px-8 text-justify py-16">
                            You always have the option to learn online through
                            our website. But if you would rather be a part of
                            our physical classroom, feel free to contact:
                            +8801718134714 (Zahed) <br /> Here is a chart of our
                            regular weekly class schedule:
                        </p>

                        <div className="w-1/2 h-full mb-12 xl:w-3/5 lg:w-3/4 md:w-4/5 sm:w-11/12">
                            {/* <Image src='/image/home-8.png' width={838} height={639} layout='responsive' objectFit='cover' className='' /> */}
                            <TimeTable />
                        </div>

                        <Link href="/join">
                            <Button className="rounded-lg h-20 bg-btn-color text-3xl text-center w-80 sm:w-60 shadow-md hover:scale-105 transition:all transform duration-500">
                                Join Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* part4 */}
                <div className="flex justify-center items-center h-108 lg:h-112 md:h-112 bg-home-bg-2 bg-no-repeat bg-cover">
                    <div className="flex justify-around items-center lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse sm:justify-center">
                        <div className="flex flex-col items-center w-117 pl-4 lg:w-3/4 md:w-3/4 sm:w-3/4">
                            <h1 className="text-white text-5xl sm:text-4xl font-title font-bold text-center lg:pt-16 md:pt-16 sm:pt-16">
                                Certificates
                            </h1>

                            <p className="text-white text-2xl font-light sm:text-lg text-justify pt-16">
                                Completed a chapter or two in your selected
                                courses and want to go abroad? We have your
                                back. You will receive certification from the
                                school when you finish all the chapters of a
                                particular course. And if you have to leave
                                mid-course, we will provide certification that
                                details your achievement thus far in our
                                institute.
                            </p>
                        </div>

                        <div className="w-2/5 lg:w-146 md:w-145 md:pl-8 sm:w-4/5">
                            <div className="w-full h-full">
                                <Image
                                    src={image_certificate}
                                    width={799}
                                    height={795}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* part5 */}
                <div className="flex justify-center items-center h-106 lg:h-113 md:h-113 sm:h-113 bg-home-bg-3 bg-no-repeat bg-cover sm:pb-20 w-full">
                    <InstructorCarousal />
                </div>

                {/* part6 */}
                <div className="bg-home-image-3 bg-no-repeat bg-cover bg-gray-500 brightness-90">
                    <div className="flex flex-col items-center w-full h-full backdrop-filter backdrop-blur opacity-90 py-8">
                        <h1 className="text-white text-5xl text-center sm:text-3xl font-title font-bold pb-8">
                            Structured courses
                        </h1>

                        <p className="text-white text-2xl font-light md:text-lg sm:text-lg text-justify md:px-8 sm:px-8">
                            From beginner to expert, you'll easily find courses
                            that interest you!
                        </p>

                        <div className="flex justify-evenly items-center py-32 w-4/5 xl:w-full lg:flex-col md:flex-col sm:flex-col ">
                            <a className="btn py-6 2xl:py-5 xl:py-5 bg-white text-3xl 2xl:text-2xl xl:text-2xl text-black font-title cursor-auto font-bold text-center w-68 sm:w-60 2xl:w-56 xl:w-56 lg:mb-8 lg:w-68 md:mb-8 sm:mb-8 shadow-md">
                                Beginner
                            </a>

                            <a className="btn py-6 2xl:py-5 xl:py-5 bg-intermediate-level-color text-black text-3xl 2xl:text-2xl xl:text-2xl font-title cursor-auto font-bold text-center w-68 sm:w-60 2xl:w-56 xl:w-56 lg:mb-8 lg:w-68 md:mb-8 sm:mb-8 shadow-md">
                                Intermediate
                            </a>

                            <a className="btn py-6 2xl:py-5 xl:py-5 bg-advance-level-color text-black text-3xl 2xl:text-2xl xl:text-2xl font-title cursor-auto font-bold text-center w-68 sm:w-60 2xl:w-56 xl:w-56 lg:mb-8 lg:w-68 md:mb-8 sm:mb-8 shadow-md">
                                Advance
                            </a>

                            <a className="btn py-6 2xl:py-5 xl:py-5 bg-black text-3xl 2xl:text-2xl xl:text-2xl font-title cursor-auto font-bold text-center w-68 sm:w-60 2xl:w-56 xl:w-56 lg:w-68 shadow-md">
                                Expert
                            </a>
                        </div>

                        <div className="pb-16">
                            <p className="text-white text-2xl sm:text-lg text-center px-56 py-4 xl:px-32 lg:px-24 md:px-24 sm:px-8 sm:pt-0 sm:pb-8">
                                For a musician, the early stage is usually the
                                hardest. Without proper guidance and help, it is
                                very easy for a student to lose interest in his
                                instrument. We have created a structured
                                syllabus that can guide a beginner to become an
                                expert within a few short years. Our lessons are
                                divided into short chapters to help a student
                                capture knowledge faster and practice better.
                            </p>

                            <p className="text-white text-2xl italic opacity-90 sm:text-lg text-center pb-4 xl:px-32 lg:px-24 md:px-24 sm:px-8 sm:pt-0 sm:pb-8">
                                Not everyone wants to shred, and not everyone
                                wants to perform.
                            </p>

                            <p className="text-white text-2xl italic opacity-90 sm:text-lg text-center pb-4 xl:px-32 lg:px-24 md:px-24 sm:px-8 sm:pt-0 sm:pb-8">
                                Some people just want to play some chords and
                                sing along.
                            </p>

                            <p className="text-white text-center text-2xl sm:text-lg px-56 xl:px-32 lg:px-24 md:px-24 sm:px-8 sm:pt-0 sm:pb-8">
                                Whichever group you fall into, you will find all
                                the help you want from Arpeggio Music School and
                                Workshop.
                            </p>
                        </div>

                        <Link href="/join">
                            <Button className="rounded-lg h-20 bg-btn-color text-4xl sm:text-2xl text-center w-80 sm:w-48 shadow-md mt-4 hover:scale-105 transition:all transform duration-500">
                                Join Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* part7 */}
                <div className="h-105 lg:h-107 md:h-109 sm:h-107 bg-home-image-4 bg-no-repeat bg-contain bg-right bg-transparent w-full">
                    <div className="flex flex-col justify-center w-full h-full backdrop-filter backdrop-blur-xl opacity-90">
                        <h1 className="text-white text-5xl font-title font-bold py-16 pl-56 xl:pl-32 lg:pl-24 md:pl-24 sm:pl-8">
                            FAQ
                        </h1>

                        <div className="flex flex-col text-lg text-justify xl:text-sm lg:text-sm sm:text-sm text-white pl-56 xl:pl-32 lg:px-24 md:px-24 sm:px-8">
                            <div className="flex flex-col pb-8">
                                <p>
                                    •Q : Where is Arpeggio Music School and
                                    Workshop located and how do I get in touch?
                                </p>

                                <p>
                                    •A : Head Quarter: 361/ A, MM Ali Road
                                    Circle, Dampara Chattogram <br /> Halisahar
                                    branch: Block L, Lane 3, Road 1, House 14,
                                    Halishahar, Chattogram
                                </p>
                            </div>

                            <div className="flex flex-col pb-8">
                                <p>•Q : What courses are available?</p>

                                <p>
                                    •A : Guitar, Piano, Ukulele, Violin, Drums,
                                    Flute
                                </p>
                            </div>

                            <div className="flex flex-col pb-8">
                                <p>•Q : How long are the courses?</p>

                                <p>•A : 2 years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
