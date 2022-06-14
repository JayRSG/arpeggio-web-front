import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AdminNav from "../../../components/panel/admin/AdminNav";
import VideoList from "../../../components/panel/admin/VideoList";
import withAuth from "../../../components/withAuth";
const videoList = () => {
	return (
		<div>
			<title>Admin</title>
			<Navbar />
			<div className='px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28 font-body'>
				<div className='flex font-body min-h-screen'>
					<AdminNav />
					<div className='w-full min-h-screen'>
						<VideoList />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default withAuth(videoList);
