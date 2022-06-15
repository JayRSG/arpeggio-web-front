import AppLayout from '@/components/Layouts/AppLayout'
import VideoList from '@/components/panel/admin/VideoList'

const videoList = () => {
    return (
        <div>
            <title>Admin</title>

            <AppLayout type="Admin">
                <VideoList />
            </AppLayout>
        </div>
    )
}

export default videoList
