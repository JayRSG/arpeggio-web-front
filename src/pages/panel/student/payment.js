import AppLayout from '@/components/Layouts/AppLayout'

const payment = () => {
    return (
        <>
            <AppLayout type="Student">
                <title>Payments</title>

                <h1 className="text-5xl font-title p-7 pl-20 font-bold md:pl-0 md:p-0 md:py-7 md:text-center sm:pl-0 sm:p-0 sm:py-7 sm:text-center">
                    Payment
                </h1>
                <div className="flex overflow-hidden justify-center pb-16">
                    <div className="w-3/4 xl:w-11/12 bg-main-color shadow-md rounded h-48">
                        <div className="flex flex-col items-center justify-center px-4 py-4 h-full lg:px-0 md:px-0 sm:px-0">
                            <div className="w-11/12 lg:w-full flex justify-between lg:justify-evenly sm:flex-col sm:justify-center sm:px-12">
                                <div className="flex flex-col justify-center py-4">
                                    <h3 className="font-bold text-lg lg:text-sm">
                                        Guitar Chapter 1
                                    </h3>

                                    <p className="mt-2 text-sm font-normal lg:text-xs md:text-xs">
                                        Payment Date ID: 2021-08-26 10:36:05 am
                                        <br /> Transaction ID:
                                        162995256261271a3213ea7
                                    </p>
                                </div>

                                <div className="flex flex-col justify-center py-4">
                                    <h3 className="font-bold text-base pb-4 lg:text-sm">
                                        Price -<span className="pl-2">500</span>
                                    </h3>

                                    <h3 className="font-bold text-base lg:text-sm">
                                        Payment Status -
                                        <span className="text-payment-color text-base lg:text-sm pl-2">
                                            Complete
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default payment
