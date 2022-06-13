import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <>
            <div className="px-52 md:px-0 sm:px-0 2xl:px-28 xl:px-28 lg:px-28">
                <div className="flex flex-col font-body min-h-screen">
                    <div className="w-full flex justify-between mb-8 lg:flex-col lg:justify-center md:flex-col md:justify-center sm:flex-col sm:justify-center items-center mt-8 flex-wrap">
                        <h1 className="text-5xl font-title py-7 font-bold lg:text-center md:text-center sm:text-center">
                            Blogs
                        </h1>

                        <div className="flex border-1 h-12 border-black md:mx-4 sm:mx-4 lg:mr-0 lg:mb-16 md:mb-16 sm:mb-16 shadow-md">
                            <input
                                type="text"
                                className="w-121 xl:w-96 lg:w-119 md:w-118 sm:w-60 px-4 opacity-50 outline-none"
                                placeholder="Search item"
                                onChange={e => {
                                    setSearchTerm(e.currentTarget.value)
                                    setGetSearch(true)
                                }}
                            />
                            <button
                                className="flex items-center justify-center px-4"
                                onClick={e => {
                                    setGetSearch(true)
                                }}>
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    size="2x"
                                    className="w-6 h-6 text-gray-300 opacity-50"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="px-4">
                        <div className="flex justify-between lg:flex-col md:flex-col sm:flex-col lg:bg-main-color md:bg-main-color sm:bg-main-color lg:p-4 md:p-4 sm:p-4 lg:shadow-md md:shadow-md sm:shadow-md lg:rounded-md md:rounded-md sm:rounded-md">
                            <div className="shadow-md w-7/12 h-full lg:w-full md:w-full sm:w-full">
                                <Image
                                    src="/image/blog-1.jpg"
                                    width={5184}
                                    height={3456}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer rounded-xl shadow-md"
                                />
                            </div>

                            <div className="flex flex-col w-2/5 lg:w-full md:w-full sm:w-full">
                                <p className="font-bold text-base pb-2 xl:text-sm lg:pt-4 md:pt-4 sm:pt-4">
                                    22 September 2022
                                </p>

                                <h1 className="font-bold text-2xl pb-4 2xl:text-xl xl:text-base">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h1>

                                <p className="font-normal text-base 3xl:text-sm 2xl:text-sm xl:text-xs">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea
                                    rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit
                                    amet. Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr,
                                </p>

                                <div className="flex items-center md:justify-evenly pt-12 lg:items-center md:items-center sm:items-center">
                                    <div className="rounded-full w-1/5 lg:w-1/5 md:w-1/5 sm:w-3/5">
                                        <Image
                                            src="/image/profilepic.jpg"
                                            width={400}
                                            height={400}
                                            layout="responsive"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>

                                    <div className="flex flex-col pl-4">
                                        <h1 className="font-bold text-xl 2xl:text-xl xl:text-base sm:text-lg">
                                            Lorem ipsum dolor sit amet,
                                        </h1>

                                        <p className="font-normal text-base pt-4 2xl:text-sm xl:text-sm">
                                            Lorem ipsum dolor sit amet,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-32 my-40 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:px-4 md:px-4 sm:px-4">
                        <div className="flex flex-col lg:bg-main-color md:bg-main-color sm:bg-main-color lg:p-4 md:p-4 sm:p-4 lg:shadow-md md:shadow-md sm:shadow-md lg:rounded-md md:rounded-md sm:rounded-md">
                            <div className="shadow-md w-full">
                                <Image
                                    src="/image/blog-2.jpg"
                                    width={4000}
                                    height={2500}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer rounded-xl shadow-md"
                                />
                            </div>

                            <p className="font-bold text-base py-2 lg:pt-4 md:pt-4 sm:pt-4">
                                22 September 2022
                            </p>

                            <h1 className="font-bold text-2xl pb-4">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h1>

                            <p className="font-normal text-base xl:text-sm">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit
                            </p>

                            <div className="flex items-center md:justify-evenly pt-12 xl:items-center lg:items-center md:items-center sm:items-center">
                                <div className="rounded-full w-1/6 xl:w-1/2 lg:w-1/5 md:w-1/5 sm:w-3/5">
                                    <Image
                                        src="/image/profilepic.jpg"
                                        width={400}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>

                                <div className="flex flex-col pl-4">
                                    <h1 className="font-bold text-xl xl:text-base 2xl:text-base sm:text-lg">
                                        Lorem ipsum dolor sit amet,
                                    </h1>

                                    <p className="font-normal text-base pt-4 xl:text-sm 2xl:text-sm">
                                        Lorem ipsum dolor sit amet,
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:bg-main-color md:bg-main-color sm:bg-main-color lg:p-4 md:p-4 sm:p-4 lg:shadow-md md:shadow-md sm:shadow-md lg:rounded-md md:rounded-md sm:rounded-md">
                            <div className="shadow-md w-full">
                                <Image
                                    src="/image/blog-3.jpg"
                                    width={4000}
                                    height={2500}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer rounded-xl shadow-md"
                                />
                            </div>

                            <p className="font-bold text-base py-2 lg:pt-4 md:pt-4 sm:pt-4">
                                22 September 2022
                            </p>

                            <h1 className="font-bold text-2xl pb-4">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h1>

                            <p className="font-normal text-base xl:text-sm">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit
                            </p>

                            <div className="flex items-center md:justify-evenly pt-12 xl:items-center lg:items-center md:items-center sm:items-center">
                                <div className="rounded-full w-1/6 xl:w-1/2 lg:w-1/5 md:w-1/5 sm:w-3/5">
                                    <Image
                                        src="/image/profilepic.jpg"
                                        width={400}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>

                                <div className="flex flex-col pl-4">
                                    <h1 className="font-bold text-xl xl:text-base 2xl:text-base sm:text-lg">
                                        Lorem ipsum dolor sit amet,
                                    </h1>

                                    <p className="font-normal text-base pt-4 xl:text-sm 2xl:text-sm">
                                        Lorem ipsum dolor sit amet,
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:bg-main-color md:bg-main-color sm:bg-main-color lg:p-4 md:p-4 sm:p-4 lg:shadow-md md:shadow-md sm:shadow-md lg:rounded-md md:rounded-md sm:rounded-md">
                            <div className="shadow-md w-full">
                                <Image
                                    src="/image/blog-4.jpg"
                                    width={4000}
                                    height={2500}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer rounded-xl shadow-md"
                                />
                            </div>

                            <p className="font-bold text-base py-2 lg:pt-4 md:pt-4 sm:pt-4">
                                22 September 2022
                            </p>

                            <h1 className="font-bold text-2xl pb-4">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h1>

                            <p className="font-normal text-base xl:text-sm">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit
                            </p>

                            <div className="flex items-center md:justify-evenly pt-12 xl:items-center lg:items-center md:items-center sm:items-center">
                                <div className="rounded-full w-1/6 xl:w-1/2 lg:w-1/5 md:w-1/5 sm:w-3/5">
                                    <Image
                                        src="/image/profilepic.jpg"
                                        width={400}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>

                                <div className="flex flex-col pl-4">
                                    <h1 className="font-bold text-xl xl:text-base 2xl:text-base sm:text-lg">
                                        Lorem ipsum dolor sit amet,
                                    </h1>

                                    <p className="font-normal text-base pt-4 xl:text-sm 2xl:text-sm">
                                        Lorem ipsum dolor sit amet,
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:bg-main-color md:bg-main-color sm:bg-main-color lg:p-4 md:p-4 sm:p-4 lg:shadow-md md:shadow-md sm:shadow-md lg:rounded-md md:rounded-md sm:rounded-md">
                            <div className="shadow-md w-full">
                                <Image
                                    src="/image/blog-5.jpg"
                                    width={4000}
                                    height={2500}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer rounded-xl shadow-md"
                                />
                            </div>

                            <p className="font-bold text-base py-2 lg:pt-4 md:pt-4 sm:pt-4">
                                22 September 2022
                            </p>

                            <h1 className="font-bold text-2xl pb-4">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h1>

                            <p className="font-normal text-base xl:text-sm">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit
                            </p>

                            <div className="flex items-center md:justify-evenly pt-12 xl:items-center lg:items-center md:items-center sm:items-center">
                                <div className="rounded-full w-1/6 xl:w-1/2 lg:w-1/5 md:w-1/5 sm:w-3/5">
                                    <Image
                                        src="/image/profilepic.jpg"
                                        width={400}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>

                                <div className="flex flex-col pl-4">
                                    <h1 className="font-bold text-xl xl:text-base 2xl:text-base sm:text-lg">
                                        Lorem ipsum dolor sit amet,
                                    </h1>

                                    <p className="font-normal text-base pt-4 xl:text-sm 2xl:text-sm">
                                        Lorem ipsum dolor sit amet,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
