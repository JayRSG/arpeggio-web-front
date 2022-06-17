import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import React from 'react'

const AddCourse = () => {
    return (
        <>
            <form
                className="flex flex-col justify-center w-full items-center mt-8"
                action=""
                id="CourseForm">
                <div className="w-full flex flex-col justify-center items-center mb-10">
                    <Input
                        id="coursename"
                        type="text"
                        name="course_name"
                        placeholder="Course Name"
                        required={true}
                        autoFocus
                    />

                    <Input
                        id="course_description"
                        type="text"
                        name="course_description"
                        placeholder="Course Description"
                        required={true}
                        autoFocus
                    />
                </div>

                <Button className="bg-btn-color hover:scale-105 transform transition-all duration-500">
                    Done
                </Button>
            </form>
        </>
    )
}

export default AddCourse
