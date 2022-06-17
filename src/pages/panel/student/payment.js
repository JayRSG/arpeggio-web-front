import AppLayout from '@/components/Layouts/AppLayout'

const payment = () => {
    return (
        <>
            <AppLayout type="Student">
                <title>Payments</title>

                <h1 className="text-5xl font-title p-7 pl-20 font-bold large:pl-0 large:p-0 large:py-7 large:text-center mobile:pl-0 mobile:p-0 mobile:py-7 mobile:text-center">
                    Payment
                </h1>
                <div className="flex flex-wrap overflow-hidden justify-center pb-16">
                    <div className="w-3/4 bg-main-color shadow-md rounded h-48 tablet:w-11/12 large:w-11/12 mobile:w-11/12">
                        <div className="flex flex-col items-center justify-center px-4 py-4 flex-wrap h-full tablet:px-0 large:px-0 mobile:px-0">
                            <div className="w-11/12 flex justify-between mobile:flex-col mobile:justify-center">
                                <div className="flex flex-col justify-center py-4">
                                    <h3 className="font-bold text-lg">
                                        Guitar Chapter 1
                                    </h3>
                                    <p className="mt-2 text-sm font-normal tablet:text-xs large:text-xs">
                                        Payment Date ID: 2021-08-26 10:36:05 am{' '}
                                        <br /> Transaction ID:
                                        162995256261271a3213ea7
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center py-4">
                                    <h3 className="font-bold text-base pb-4">
                                        Price{' '}
                                        <span className="pl-19 pr-10">-</span>{' '}
                                        500
                                    </h3>
                                    <h3 className="font-bold text-base">
                                        Payment Status -{' '}
                                        <span className="text-payment-color text-base relative left-8">
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
