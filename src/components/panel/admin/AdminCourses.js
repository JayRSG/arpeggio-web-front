import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Modal from '@/components/Modal'
import { useState } from 'react'
import AddCourse from './AddCourse'
import Button from '@/components/Button'

const AdminCourses = () => {
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState(false)

    const modalStateCB = modalVal => {
        setOpen(modalVal)

        // console.log("Setting open from Modal" + modalVal);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl p-8 font-bold font-title lg:text-3xl sm:text-lg">
                        Courses
                    </h1>

                    <Button
                        className="lg:w-48 sm:w-44 bg-btn-color text-2xl lg:text-xl text-center rounded-md my-8 md:mr-4 sm:text-lg sm:mr-4 hover:scale-105 transform transition-all duration-500"
                        onClick={() => {
                            setModalData(<AddCourse />)
                            setOpen(true)
                        }}>
                        Create Course
                    </Button>
                </div>

                <>
                    <Modal state={open} cb={modalStateCB} data={modalData} />
                </>
            </div>
        </>
    )
}

export default AdminCourses
