import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AdminCourses from "../../../components/panel/admin/AdminCourses";
import AdminNav from "../../../components/panel/admin/AdminNav";

const Courses = () => {
	return (
		<>
			<title>Courses</title>
			<Navbar />
			<div className='px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28 font-body'>
				<div className='flex font-body min-h-screen'>
					<AdminNav />
					<div className='w-full min-h-screen'>
						<AdminCourses />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Courses;
