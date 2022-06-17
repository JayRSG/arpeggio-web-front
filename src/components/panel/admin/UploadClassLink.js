import Button from '@/components/Button'

const UploadClassLink = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full h-2/5 md:h-4/5">
                <div className="w-3/4 bg-gray-100 shadow-md rounded">
                    <div className="flex flex-col justify-center px-4 py-4">
                        <div className="flex flex-col justify-center">
                            <h3 className="text-base font-bold pb-8">
                                Class Link
                            </h3>
                            <input
                                className="border-b-2 border-black mb-8 bg-gray-100"
                                type="text"
                                name="class-link"
                                id=""
                            />
                            <Button className="w-40 rounded-lg bg-btn-color text-xl self-end hover:scale-105 transform transition-all duration-500">
                                Upload
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadClassLink
