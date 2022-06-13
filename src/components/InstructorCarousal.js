import Image from 'next/image'
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useEffect, useRef, useState } from 'react'
// import { getCurrentBreakPoint, useWidth } from '../helpers/screensRes'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'

// import required modules
import { Pagination, Autoplay } from 'swiper'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const InstructorCarousal = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                allowTouchMove={false}
                autoplay={{
                    delay: 15000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="flex justify-evenly items-center w-full h-full lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center  sm:flex-col sm:items-center sm:justify-center">
                        <div className="w-117 pl-4 lg:flex lg:items-center lg:w-1/2 lg:justify-center md:flex md:items-center md:justify-center md:w-1/2 sm:flex sm:items-center sm:w-3/4 sm:justify-center">
                            <div className="w-96 h-full 2xl:w-80 xl:w-64 sm:w-60">
                                <Image
                                    src="/image/instructor-1.jpg"
                                    width={1718}
                                    height={2048}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-140 mr-8 pr-4 lg:mr-0 lg:pr-0 md:mr-0 md:pr-0 sm:mr-0 sm:pr-0 xl:pl-4 lg:w-3/4 md:w-3/4 sm:w-full">
                            <h1 className="text-white text-3xl sm:text-2xl font-title text-center font-bold lg:pt-8 md:pt-8 sm:pt-8">
                                Nazim Uddin Zahed <br /> (Founder and Owner of
                                Arpeggio, Band-The Tree)
                            </h1>

                            <p className="text-white text-2xl 2xl:text-xl xl:text-xl lg:text-xl md:text-xl font-medium sm:text-lg text-justify pt-16 sm:px-8">
                                I have always been drawn to music ever since my
                                childhood. Growing up, I noticed a lack of
                                opportunity in Chittagong for young musicians. I
                                found many who wanted to learn but couldn’t
                                because of proper guidance. I wanted to change
                                that and play my part in ushering in a new era
                                of musicians. That is the main inspiration
                                behind forming Arpeggio.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-evenly items-center lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center">
                        <div className="w-117 pl-4 lg:flex lg:items-center lg:justify-center lg:w-1/2 md:flex md:items-center md:justify-center md:w-1/2 sm:w-1/2 sm:flex sm:items-center sm:justify-center">
                            <div className="w-96 h-full 2xl:w-80 xl:w-64 sm:w-60">
                                <Image
                                    src="/image/instructor-2.jpg"
                                    width={1367}
                                    height={1700}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-140 mr-8 pr-4 lg:mr-0 lg:pr-0 md:mr-0 md:pr-0 sm:mr-0 sm:pr-0 xl:pl-4 lg:w-3/4 md:w-3/4 sm:w-full">
                            <h1 className="text-white text-3xl sm:text-2xl font-title text-center font-bold lg:pt-8 md:pt-8 sm:pt-16">
                                Labib Ahmed Nizam <br /> (Instructor: Guitar,
                                Band – The Tree)
                            </h1>

                            <p className="text-white text-2xl 2xl:text-xl xl:text-xl lg:text-xl md:text-xl font-medium sm:text-lg text-justify pt-16 sm:px-8">
                                I was a student of Arpeggio back in 2010. This
                                school taught me to enjoy life and feel the
                                music. I found friends, I found mentors, and I
                                found a passion that I never knew existed. And
                                when I joined as an instructor in 2015, my
                                experiences became a primary motivator for me to
                                become a better musician and a better teacher.
                                Life is beautiful with music in it, and that is
                                what I want to teach my students.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-evenly items-center lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center">
                        <div className="w-117 pl-4 lg:flex lg:items-center lg:justify-center lg:w-1/2 md:flex md:items-center md:justify-center md:w-1/2 sm:w-3/4 sm:flex sm:items-center sm:justify-center">
                            <div className="w-96 h-full 2xl:w-80 xl:w-64 sm:w-60 sm:h-80">
                                <Image
                                    src="/image/instructor-3.jpg"
                                    width={1343}
                                    height={1700}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-140 mr-8 pr-4 lg:mr-0 lg:pr-0 md:mr-0 md:pr-0 sm:mr-0 sm:pr-0 xl:pl-4 lg:w-3/4 md:w-3/4 sm:w-full">
                            <h1 className="text-white text-3xl sm:text-2xl font-title text-center font-bold lg:pt-8 md:pt-8 sm:pt-16">
                                Sarbojit Sen <br />
                                (Instructor: Guitar, Band – Ghost Radio)
                            </h1>

                            <p className="text-white text-2xl 2xl:text-xl xl:text-xl lg:text-xl md:text-xl font-medium sm:text-lg text-justify pt-16 sm:px-8">
                                I owe much to Arpeggio. Every step in my musical
                                journey is credited to the school and the
                                passion towards music that I found here. I truly
                                found a home in this school and in its students,
                                I found a family. I want to teach my students
                                everything that I learned in my musical journey
                                so far; help them grow, and grow up with them at
                                the same time.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-evenly items-center lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center">
                        <div className="w-117 pl-4 lg:flex lg:items-center lg:justify-center lg:w-1/2 md:flex md:items-center md:justify-center md:w-1/2 sm:w-3/4 sm:flex sm:items-center sm:justify-center">
                            <div className="w-96 h-full 2xl:w-80 xl:w-64 sm:w-60 sm:h-80">
                                <Image
                                    src="/image/instructor-4.jpg"
                                    width={1440}
                                    height={1700}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-140 mr-8 pr-4 lg:mr-0 lg:pr-0 md:mr-0 md:pr-0 sm:mr-0 sm:pr-0 xl:pl-4 lg:w-3/4 md:w-3/4 sm:w-full">
                            <h1 className="text-white text-3xl sm:text-2xl font-title text-center font-bold lg:pt-8 md:pt-8 sm:pt-8">
                                Shazid Ul Alam <br /> (Instructor: Keyboard,
                                Band – Avocados)
                            </h1>

                            <p className="text-white text-2xl 2xl:text-xl xl:text-xl lg:text-xl md:text-xl font-medium sm:text-lg text-justify pt-16 mb-8 sm:px-8">
                                Every student that comes to the school comes
                                with a passion and a will to learn about music.
                                I love being a part of their journey and helping
                                them understand everything that they want to
                                learn. And whenever I find someone asking a
                                critical question related to theory or practice,
                                it inspires me to do more research to help him
                                or her. Music is supposed to be fun and about
                                cooperation. Pressure has no place here, and
                                that is what makes it truly special.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-evenly items-center lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center">
                        <div className="w-117 pl-4 lg:flex lg:items-center lg:justify-center lg:w-1/2 md:flex md:items-center md:justify-center md:w-1/2 sm:w-3/4 sm:flex sm:items-center sm:justify-center">
                            <div className="w-96 h-full 2xl:w-80 xl:w-64 sm:w-60 sm:h-80">
                                <Image
                                    src="/image/instructor-5.jpg"
                                    width={1440}
                                    height={1700}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-140 mr-8 pr-4 lg:mr-0 lg:pr-0 md:mr-0 md:pr-0 sm:mr-0 sm:pr-0 xl:pl-4 lg:w-3/4 md:w-3/4 sm:w-full">
                            <h1 className="text-white text-3xl sm:text-2xl font-title text-center font-bold lg:pt-8 md:pt-8 sm:pt-8">
                                Parag Barua <br /> (Instructor: Guitar, Flute,
                                Band – Cotton in my Brain)
                            </h1>

                            <p className="text-white text-2xl 2xl:text-xl xl:text-xl lg:text-xl md:text-xl font-medium sm:text-lg text-justify pt-16 sm:px-8">
                                I love being an instructor. I get to share
                                everything that I learned throughout my musical
                                journey with a group of enthusiastic and
                                passionate young musicians. And that is a very
                                special feeling. It is truly magical to see my
                                students performing their hearts out on stage
                                and knowing that I could play a small role to
                                play in his journey.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-evenly items-center lg:flex-col lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center sm:pb-12">
                        <div className="w-117 pl-4 lg:flex lg:items-center lg:justify-center lg:w-1/2 md:flex md:items-center md:justify-center md:w-1/2 sm:w-3/4 sm:flex sm:items-center sm:justify-center">
                            <div className="w-96 h-full 2xl:w-80 xl:w-64 sm:w-60 sm:h-80">
                                <Image
                                    src="/image/instructor-6.jpg"
                                    width={674}
                                    height={671}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-140 mr-8 pr-4 lg:mr-0 lg:pr-0 md:mr-0 md:pr-0 sm:mr-0 sm:pr-0 xl:pl-4 lg:w-3/4 md:w-3/4 sm:w-full">
                            <h1 className="text-white text-3xl sm:text-2xl font-title text-center font-bold lg:pt-8 md:pt-8">
                                Mohammed Ullah Siddiki Dalim <br /> (Instructor:
                                Drums, Bands – Ex member Pumpkins )
                            </h1>

                            <p className="text-white text-2xl 2xl:text-xl xl:text-xl lg:text-xl md:text-xl mb-8 font-medium sm:text-lg text-justify pt-8 sm:px-8">
                                I have had a fascination with drums since I was
                                a child. Back in the year 2005, when I started
                                learning drums, I went through a lot of hurdles
                                for a lack of proper guidance and learning
                                materials. Back then, technical guidance was not
                                easy to find. The main reason I became a drums
                                instructor is that I do not want any new
                                musician to face the same struggles that I faced
                                back in my days. Everyone who wants to learn
                                should get proper help and support, and that is
                                what I try to provide to my students.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Implement a pause and play button for the swiper carousal */}
            {/* <div className="self-center text-white">
        <span className="z-40">
          <FontAwesomeIcon icon={faPause} size="1x" />
        </span>
        <span className="z-40">
          <FontAwesomeIcon icon={faPlay} size="1x" />
        </span>
      </div> */}
        </>
    )
}

export default InstructorCarousal
