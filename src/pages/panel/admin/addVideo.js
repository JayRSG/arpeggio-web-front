import AppLayout from '@/components/Layouts/AppLayout'
import AddVideo from '@/components/panel/admin/AddVideo'

const addvideo = () => {
    return (
        <>
            <title>Admin</title>
            <AppLayout type="Admin">
                {/* Lists all backing track and free classes and allows adding new video */}
                <AddVideo />
            </AppLayout>
        </>
    )
}

export default addvideo
