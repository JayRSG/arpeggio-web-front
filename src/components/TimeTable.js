function TimeTable() {
    return (
        <>
            <table className="text-center text-main-color bg-opacity-40 bg-gray-500 w-full h-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td
                            colSpan={3}
                            className="font-bold font-title text-xl pb-4">
                            Dampara Branch
                        </td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Friday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            10:30am - 01:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Friday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            03:00pm - 06:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele/Piano</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Saturday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            11:00am - 01:00pm
                        </td>
                        <td className="pb-4">Piano/Violin</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Saturday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            03:00pm - 06:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Sunday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            04:00pm - 06:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Sunday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            06:00pm - 09:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Tuesday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            04:00pm - 06:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele/Violin</td>
                    </tr>
                    <tr>
                        <td
                            colSpan={3}
                            className="font-bold font-title text-xl py-4">
                            Halishahar Branch
                        </td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Friday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            10:30am - 01:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele</td>
                    </tr>
                    <tr className="sm:text-sm">
                        <td className="pb-4 pl-4">Monday</td>
                        <td className="pb-4 pl-28 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-4">
                            04:00pm - 06:00pm
                        </td>
                        <td className="pb-4">Guitar/Ukulele/Piano</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TimeTable
