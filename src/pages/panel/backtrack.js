import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StudentNav from "../../components/panel/student/StudentNav";

// import your icons

import BackingTrack from "../../components/panel/BackingTrack";

const backtrack = () => {
  return (
    <>
      <title>Backing Track</title>
      <Navbar />

      <div className="px-52 large:px-0 mobile:px-0">
        <div className="flex font-body min-h-screen">
          <StudentNav />
          <BackingTrack />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default backtrack;
