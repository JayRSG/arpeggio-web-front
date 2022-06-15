import AppLayout from '@/components/Layouts/AppLayout'
import AdminCourses from '@/components/panel/admin/AdminCourses'

const Courses = () => {
    return (
        <>
            <AppLayout type="Admin">
                <title>Courses</title>
                <AdminCourses />
            </AppLayout>
        </>
    )
}

export default Courses
