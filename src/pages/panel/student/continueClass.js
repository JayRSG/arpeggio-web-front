import Image from 'next/image'
import AppLayout from '@/components/Layouts/AppLayout'

const continueClass = () => {
    return (
        <>
            <AppLayout type="Student">
                <title>Course</title>

                <div className="flex justify-between h-1/2 w-full xl:flex-col">
                    <div className="flex flex-col pt-7 w-1/2 xl:w-full">
                        <h1 className="text-5xl font-title font-bold p-7 pl-16 xl:text-center">
                            Course Name
                        </h1>
                        <div className="w-full pt-4 pl-16">
                            <Image
                                src="/image/stu-course.jpg"
                                width={5184}
                                height={2900}
                                layout="responsive"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-117 h-full mt-20 xl:w-1/2 xl:pl-16">
                        <p className="text-lg font-bold pl-8">8 Lessons</p>
                        <div className="bg-main-color w-full h-full font-bold text-lg overflow-y-scroll">
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                            <h3 className="pl-8 py-4 cursor-pointer">
                                Lorem ipsum dolor sit
                            </h3>
                        </div>
                    </div>
                </div>
                <a className="btn rounded-lg bg-blue-500 text-base py-6 ml-16 relative bottom-12 2xl:bottom-24 hover:opacity-70 transition-all duration-500">
                    Mark Complete
                </a>
                <hr className="bg-black h-100 w-112" />
                <div className="flex justify-between w-2/5 pl-16 pt-4 2xl:w-3/5">
                    <a className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-all duration-500">
                        Notes
                    </a>
                    <a className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-all duration-500">
                        Discussions
                    </a>
                    <a className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-all duration-500">
                        About
                    </a>
                </div>
                <div className="flex flex-col pl-16">
                    <div className="flex flex-col py-8 w-112">
                        <h3 className="text-2xl font-bold">
                            Lorem ipsum dolor sit
                        </h3>
                        <p className="text-sm pt-4">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <div className="flex flex-col py-8 w-112">
                        <h3 className="text-2xl font-bold">
                            Lorem ipsum dolor sit
                        </h3>
                        <p className="text-sm pt-4">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <div className="flex flex-col py-8 w-112">
                        <h3 className="text-2xl font-bold">
                            Lorem ipsum dolor sit
                        </h3>
                        <p className="text-sm pt-4">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <div className="flex flex-col py-8 w-112">
                        <h3 className="text-2xl font-bold">
                            Lorem ipsum dolor sit
                        </h3>
                        <p className="text-sm pt-4">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default continueClass
