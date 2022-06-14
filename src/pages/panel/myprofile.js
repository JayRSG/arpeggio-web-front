import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StudentNav from "../../components/panel/student/StudentNav";
import Image from "next/image";
// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Component, useEffect, useState } from "react";
import { useGetAuth } from "../../util/auth";
import { loadProfilePicture } from "../../helpers/profileHelpers";
import withAuth from "../../components/withAuth";

const myprofile = () => {
	const [auth, setAuth] = useState(false);
	const [profilePicture, setProfilePicture] = useState("");
	const [profilePictureBlob, setProfilePictureBlob] = useState("/image/tools-1.png");
	const [file, setFile] = useState("");
	const [disabled, setDisabled] = useState(true);

	// disabled handler
	const disabledHandler = () => {
		setDisabled((prev) => !prev);
	};

	useGetAuth()
		.then((authdata) => {
			setAuth(authdata);
			// console.log(auth);
		})

		.catch((error) => {
			console.log(error);
		});

	useEffect(() => {
		//load profile Picture
		loadProfilePicture()
			.then((profile_picture) => {
				setProfilePicture(profile_picture.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		var binaryData = [];
		binaryData.push(profilePicture);
		setProfilePictureBlob(window.URL.createObjectURL(new Blob(binaryData, { type: "Image/*" })));
	}, [profilePicture]);

	const handleChange = (e) => {
		setFile(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<>
			<title>My Profile</title>
			<Navbar />
			<div className='px-52 large:px-0 mobile:px-0'>
				<div className='flex font-body min-h-screen'>
					<StudentNav />
					<div className='w-full min-h-screen'>
						<h1 className='text-5xl font-title p-7 pl-20 font-bold large:text-center mobile:text-center large:pl-0 large:p-0 mobile:p-0 large:py-7 mobile:py-7 mobile:pl-0 pt-6'>
							Profile
						</h1>

						<form className='w-full flex flex-col justify-center items-center flex-wrap'>
							{/* profile pic */}
							<label className='w-60 h-60 rounded-full flex flex-col items-center mb-8 bg-white shadow-md tracking-wide uppercase border-2 border-solid border-main-color ease-linear transition-all duration-150'>
								<div className='w-full h-full'>
									{/* <Image src={profilePictureBlob} width={200} height={200} layout='responsive' objectFit='cover' className='rounded-full' /> */}
									<Image
										src={profilePictureBlob}
										width={200}
										height={200}
										layout='responsive'
										objectFit='cover'
										className='rounded-full'
									/>
								</div>

								{/**
                Attention, make a Proper Image container for displaying the profile picture instead of the Fa-User icon
              */}

								<div className='relative left-20 bottom-14 p-2 border-solid border-2 border-gray-300 rounded-full text-center'>
									<FontAwesomeIcon
										icon={faCamera}
										size='2x'
										className=' text-blue-400 cursor-pointer transition-colors duration-500 hover:text-blue-200'
									/>
								</div>
								<input id='profile_picture' type='file' className='hidden' onChange={handleChange} />
								{/* <p>
								<Image src={file} id='output' height={200} width={200} layout='responsive' objectFit='cover'></Image>
							</p> */}
							</label>

							<div className='w-full flex flex-col justify-center px-16 tablet:pr-8 laptop:pr-4'>
								{/* first name */}
								<label htmlFor='fname'>First name</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='fname'
										name='fname'
										placeholder=''
										defaultValue={auth.first_name}
										disabled={disabled}
									/>

									{/* <FontAwesomeIcon
										icon={faPen}
										size='2x'
										className='cursor-pointer relative right-10 top-2'
										onClick={disabledHandler}
									/> */}
								</div>

								{/* last name */}
								<label htmlFor='lname'>Last name</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='lname'
										name='lname'
										defaultValue={auth.last_name}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* Date of Birth */}
								<label htmlFor='dob'>Date of Birth</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='dob'
										name='dob'
										defaultValue={auth.dob}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* username */}
								<label htmlFor='username'>username</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='username'
										name='username'
										defaultValue={auth.user_name}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* email */}
								<label htmlFor='email'>Email</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='email'
										name='email'
										defaultValue={auth.email}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* institution */}
								<label htmlFor='email'>Institution</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='institution'
										name='institution'
										defaultValue={auth.institute}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* gender */}
								<label htmlFor='gender'>Gender</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='gender'
										name='gender'
										defaultValue={auth.gender}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* occupation */}
								<label htmlFor='occupation'>Occupation</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='occupation'
										name='occupation'
										defaultValue={auth.occupation}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* contact number */}
								<label htmlFor='contact'>Contact number</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='contact'
										name='contact'
										defaultValue={auth.contact_number}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* country */}
								<label htmlFor='country'>Country</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='country'
										name='country'
										defaultValue={auth.country}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* city */}
								<label htmlFor='city'>City</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='city'
										name='city'
										defaultValue={auth.city}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* division */}
								<label htmlFor='division'>Division</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='division'
										name='division'
										placeholder=''
										defaultValue={auth.division}
										disabled={disabled}
									/>
								</div>

								{/* Street address */}
								<label htmlFor='street'>Street Address</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='street'
										name='street'
										defaultValue={auth.street_address}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* Social Account */}
								<label htmlFor='street'>Social Account</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='social-account'
										name='social-account'
										defaultValue={auth.social_provider}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								{/* Account Name */}
								<label htmlFor='street'>Account Name</label>
								<div className='flex w-full'>
									<input
										className='h-12 w-full font-normal focus:outline-none text-sm bg-main-color mb-4 rounded-md shadow-md pl-4'
										type='text'
										id='acoount-name'
										name='acoount-name'
										defaultValue={auth.social_name}
										placeholder=''
										disabled={disabled}
									/>
								</div>

								<div className='flex justify-between my-8'>
									<a className='text-blue-500 text-lg font-bold'>Change Password</a>
									<a className='btn rounded-lg bg-blue-500 text-xl px-10' onClick={disabledHandler}>
										Edit
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

// export default withAuth(myprofile);
export default myprofile;
