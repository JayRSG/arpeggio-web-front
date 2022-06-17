import AppLayout from '@/components/Layouts/AppLayout'

const announcement = () => {
    return (
        <>
            <AppLayout type="Student">
                <title>Announcements</title>

                <h1 className="text-5xl font-title p-7 pl-20 font-bold md:pl-0 sm:pl-0 md:p-0 sm:p-0 md:py-7 sm:py-7 md:text-center sm:text-center xs:text-4xl">
                    Announcements
                </h1>
                <div className="flex flex-wrap overflow-hidden justify-center pb-16">
                    <div className="w-3/4 bg-main-color shadow-md mt-8">
                        <div className="flex flex-col items-center justify-center px-8 pb-8 pt-4 sm:px-0">
                            <div className="flex flex-col justify-center flex-wrap">
                                <div className="flex justify-between pb-8 sm:justify-center sm:flex-col sm:pl-8 xs:pl-4">
                                    <h3 className="text-2xl font-bold pr-14 sm:pr-6 sm:text-xl">
                                        Lorem ipsum dolor sit
                                    </h3>

                                    <h3 className="text-2xl font-bold sm:text-xl sm:pt-2">
                                        22 September, 2021
                                    </h3>
                                </div>

                                <p className="text-sm pb-8 md:px-8 sm:px-8 xs:px-4">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Suscipit aliquam
                                    consequuntur magnam error doloribus
                                    exercitationem repellendus ex voluptatem
                                    quod provident?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default announcement
