import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

// import apiClient, { getSocialVideoLinkEndPoint, spaAuth } from "../util/api";
import YouTube from "react-youtube";
import { checkValidURL, fetchOEmbedData } from "../util/ytmanager";
import Video_Links from "../lib/video_links.json"; //Local File storing video

const FreeClasses = () => {
	const [open, setOpen] = useState(false);
	const modalStateCB = (modalVal) => {
		setOpen(modalVal);
		// console.log("Setting open from Modal" + modalVal);
	};
	const [videoData, setVideoData] = useState([]);
	/* {
		Data Schema of VideoData: 
		Title
		description
		links
		thumbnail_url
	} */
	const [videoEmbedData, setVideoEmebedData] = useState(false);
	const [searchTerm, setSearchTerm] = useState(false);
	const [getSearch, setGetSearch] = useState(false);

	const fetchFreeClasses = async () => {
		await apiClient
			.get(spaAuth)
			.then(() => {
				apiClient
					.get(getSocialVideoLinkEndPoint + "Free_Class")
					.then((response) => {
						setVideoData(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		/**
		 * Fetching from the backend is disabled for temporary basis and is served from local file stored in Video_links. Uncomment the fetchFreeClasses() to enable backend fetching video data.
		 */
		// fetchFreeClasses();
		setVideoData(Video_Links);
	}, []);

	// useEffect(() => {
	// 	console.log(videoData);
	// }, [videoData]);

	const createModalData = (link, title, desc) => {
		let video_id = checkValidURL(link, true);

		let yt_embed = (
			<>
				{/* <div className='w-full'>
				</div> */}
				<YouTube className='w-full' videoId={video_id} opts={{ height: 400, width: 400 }} />
				<div className='p-4 text-center'>
					<div className='font-bold text-xl'>{title}</div>
					<div className='py-2 text-sm'>{desc}</div>
				</div>
			</>
		);

		setVideoEmebedData(yt_embed);
		setOpen(true);
	};

	return (
		<>
			<div className='px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28'>
				<div className='flex flex-col font-body min-h-screen'>
					<div className='w-full flex justify-between mb-8 tablet:flex-col tablet:justify-center large:flex-col large:justify-center mobile:flex-col mobile:justify-center items-center mt-8 flex-wrap'>
						<h1 className='text-5xl font-title py-7 font-bold tablet:text-center large:text-center mobile:text-center large:mb-8 mobile:mb-8'>
							Free Classes
						</h1>

						<div className='flex border-2 h-12 border-black large:mx-4 mobile:mx-4 tablet:mr-0 tablet:mb-16 large:mb-16 mobile:mb-16 shadow-md'>
							<input
								type='text'
								className='w-121 laptop:w-96 tablet:w-119 large:w-118 mobile:w-56 px-4 opacity-50 outline-none'
								placeholder='Search Free Classes'
								onChange={(e) => {
									setSearchTerm(e.currentTarget.value);
									setGetSearch(true);
								}}
							/>
							<button
								className='flex items-center justify-center px-4'
								onClick={(e) => {
									setGetSearch(true);
								}}>
								<FontAwesomeIcon icon={faSearch} size='2x' className='w-6 h-6 text-gray-300 opacity-50' />
							</button>
						</div>
					</div>

					<div className='grid grid-cols-3 gap-4 large:grid-cols-1 large:px-8 mobile:grid-cols-1 mobile:px-4'>
						{videoData.map((elems, ind) =>
							searchTerm == "" ||
							(getSearch &&
								searchTerm != "" &&
								(elems.title.toString().toLowerCase().includes(searchTerm.toString().toLocaleLowerCase()) ||
									elems.description.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()))) ? (
								<div key={ind} className='h-full'>
									<div
										className='cursor-pointer hover:scale-105 transition-all transform duration-500'
										onClick={(e) => {
											createModalData(elems.links, elems.title, elems.description);
										}}>
										<Image
											//   src="/image/freeclass-1.jpg"
											src={elems.thumbnail_url}
											width={1280}
											height={720}
											layout='responsive'
											objectFit='cover'
											className='cursor-pointer'
											priority={false}
										/>
										<p className='text-base tablet:text-sm text-center font-bold p-4'>{elems.title}</p>
									</div>
								</div>
							) : (
								""
							)
						)}
					</div>
				</div>
			</div>

			<div id='video_modal'>
				{/* A custom component that I have written */}
				<Modal
					state={open}
					cb={modalStateCB}
					data={videoEmbedData}
					className1='min-w-full h-full'
					className2='w-full text-center bg-gray-300'
				/>
			</div>
		</>
	);
};

export default FreeClasses;
