import { useEffect, useRef, useState } from "react";
import AddVideo from "./AddVideo";
import Image from "next/image";
import Modal from "../../Modal";
import { checkValidURL } from "../../../util/ytmanager";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble, faCopy, faPen, faSync, faTimes, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { DeleteIcon } from "../../SVGs";
import YouTube from "react-youtube";
import apiClient, { getSocialVideoLinkEndPoint, socialVideoLinkEndPoint, spaAuth } from "../../../util/api";

const VideoList = () => {
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState(false);

	const modalStateCB = (modalVal) => {
		setOpen(modalVal);
		setDeletedData(false);
		// console.log("Setting open from Modal" + modalVal);
	};

	const addVideoUpload = (state) => {
		if (state) {
			setOpen(false);
			fetchVideos();
		} else {
			setOpen(true);
		}
	};

	const [videoInfo, setVideoInfo] = useState(false);

	const [typeHook, setTypeHook] = useState("");

	const fetchVideos = () => {
		let route = typeHook == 1 ? getSocialVideoLinkEndPoint + "Free_Class" : typeHook == 2 ? getSocialVideoLinkEndPoint + "Backing_Track" : "";

		apiClient
			.get(spaAuth)
			.then(() => {
				apiClient
					.get(route)
					.then((response) => {
						setVideoInfo(response.data);
						console.log(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const extract_date = (dt) => {
		let date = new Date(dt);

		let options = {
			day: "numeric",
			month: "short",
			year: "numeric",
		};
		return date.toLocaleDateString("en-GB", options);
	};

	const playVideo = (link, title, desc) => {
		let video_id = checkValidURL(link, true);
		let yt_embed = (
			<>
				{/* <div className='w-full'>
			</div> */}
				<YouTube className='w-full' videoId={video_id} opts={{ height: 400, width: 400 }} />
				<div className='p-4 text-center'>
					<div className='font-bold text-xl'>{title}</div>
					<div className='py-2 text-lg'>{desc ? desc : "No description found"}</div>
					<div className='font-bold text-lg'>
						Link: {link}{" "}
						<span
							className='cursor-pointer ml-4'
							onClick={() => {
								navigator.clipboard.writeText(link);
								document.getElementById("checked-copied-first").hidden = false;

								setTimeout(() => {
									document.getElementById("checked-copied-first").hidden = true;
								}, 3000);
							}}>
							<FontAwesomeIcon icon={faCopy} size='1x' />
							<span id='checked-copied-first' className='text-green-600 ml-4' hidden>
								<FontAwesomeIcon icon={faCheckDouble} size='1x' /> Copied
							</span>
						</span>
					</div>
				</div>
			</>
		);

		setModalData(yt_embed);
		setOpen(true);
	};

	const editVideoInformation = (id, index) => {
		apiClient
			.get(spaAuth)
			.then(async (response) => {
				return await apiClient
					.patch(socialVideoLinkEndPoint, {
						id: id,
						title: titleEditRef.current[index].value,
						description: descriptionEditRef.current[index].value,
					})
					.then((response) => {
						if (response.status == 200) {
							fetchVideos();
						}
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const [deletedData, setDeletedData] = useState(false);

	const deleteVideo = (id) => {
		apiClient
			.get(spaAuth)
			.then(async () => {
				return await apiClient
					.delete(socialVideoLinkEndPoint + id)
					.then((response) => {
						setDeletedData(false);
						console.log(socialVideoLinkEndPoint + id);
						setDeletedData(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => console.log(error));
	};

	const showLastDeleted = () => {
		if (deletedData) {
			let data_view = (
				<>
					<h1 className='font-bold bg-center text-red-700 text-xl text-center'>
						Deleted Successfully{" "}
						<span className='text-gray-500'>
							<FontAwesomeIcon icon={faTrash} size='1x' />
						</span>
					</h1>
					<Image src={deletedData.thumbnail_url} width={1280} height={720} layout='responsive' objectFit='cover' />
					<div className='text-center'>
						<h1 className='font-bold'>{deletedData.title}</h1>
						<div>
							<span
								className='hover:underline hover:text-blue-600 cursor-pointer'
								onClick={() => {
									playVideo(deletedData.links, deletedData.title, deletedData.description);
								}}>
								URL: {deletedData.links}
							</span>
							{/* copy Button to copy link to clipboard */}
							<span
								onClick={() => {
									navigator.clipboard.writeText(deletedData.links);
									document.getElementById("checked-copied").hidden = false;

									setTimeout(() => {
										document.getElementById("checked-copied").hidden = true;
									}, 3000);
								}}
								className='ml-4 text-black cursor-pointer'>
								<FontAwesomeIcon icon={faCopy} />
							</span>
							{/* Show tick mark for 3 seconds after the link has been copied to clipboard */}
							<span hidden id='checked-copied' className='text-green-600 ml-4'>
								<FontAwesomeIcon icon={faCheckDouble} /> Copied
							</span>
						</div>
					</div>
				</>
			);
			fetchVideos();
			setModalData(data_view);
			setOpen(true);
		}
	};

	useEffect(() => {
		if (deletedData) {
			showLastDeleted();
		}
	}, [deletedData]);

	useEffect(() => {
		if (typeHook != "") {
			fetchVideos();
		}
	}, [typeHook]);

	const titleRef = useRef([]);
	const titleEditRef = useRef([]);

	const descriptionRef = useRef([]);
	const descriptionEditRef = useRef([]);

	const editBtnRef = useRef([]);
	const confirmEditBtnRef = useRef([]);

	return (
		<div className='flex flex-col'>
			<div className='flex justify-between items-center'>
				<h1 className='text-5xl p-8 font-bold font-title tablet:text-3xl mobile:text-xl'>Videos</h1>

				<button
					className='btn bg-btn-color text-black shadow-md pb-12 hover:scale-105 transition-all transform duration-500 tablet:pb-10 tablet:px-8 pt-4 px-10 h-12 font-bold text-2xl tablet:text-xl text-center rounded-md my-8 large:mr-4 mobile:text-xl mobile:px-6 mobile:mr-4 mobile:pb-10 mobile:py-2'
					onClick={() => {
						setModalData(<AddVideo addVideoUpload={addVideoUpload} />);
						setOpen(true);
					}}>
					<FontAwesomeIcon icon={faUpload} size='1x' />
				</button>
			</div>

			<div>
				<select
					className='ml-4 mb-1 outline-none text-lg w-1/5 font-bold 3xl:w-117 3k:w-117 laptop:w-2/5 tablet:w-3/5 large:w-2/5'
					value={typeHook}
					onChange={(e) => {
						setTypeHook(e.target.value);
					}}
					required>
					<option value={!typeHook ? typeHook : null} disabled>
						Select Video Type
					</option>
					<option value='1'>Free Classes</option>
					<option value='2'>Backing Track</option>
				</select>

				<span
					className='ml-5 cursor-pointer text-xl'
					onClick={() => {
						fetchVideos();
					}}>
					<FontAwesomeIcon icon={faSync} size='1x' />
				</span>
			</div>
			{/* this two part will come from the database. start here*/}
			{videoInfo != false ? (
				videoInfo
					.slice(0)
					.reverse()
					.map((data, ind) => (
						<div key={ind}>
							<hr className='bg-black h-101 mb-8' />

							<div className='flex justify-between tablet:flex-col tablet:items-center large:flex-col large:items-center mobile:flex-col mobile:items-center'>
								<div className='w-52 tablet:w-80 h-32 tablet:h-44 ml-4 tablet:ml-0 large:w-119 large:h-72 large:ml-0 mobile:w-64 mobile:h-36 mobile:ml-0'>
									<Image src={data.thumbnail_url} width={1280} height={720} layout='responsive' objectFit='cover' className='' />
								</div>

								<div className='flex flex-col w-117 laptop:w-1/5 tablet:w-3/4 tablet:mt-8 large:w-112 large:mt-8 mobile:w-4/5 mobile:mt-8'>
									<h1 ref={(element) => titleRef.current.push(element)} className='text-xl font-bold '>
										{data.title}
									</h1>
									<input
										ref={(element) => titleEditRef.current.push(element)}
										defaultValue={data.title}
										className='w-full outline-black text-x1 font-bold'
										hidden
									/>

									<p
										className='text-sm mt-4'
										ref={(description) => {
											descriptionRef.current.push(description);
										}}>
										{data.description ? data.description : "[ No Description Found ]"}
									</p>
									<textarea
										ref={(description) => descriptionEditRef.current.push(description)}
										defaultValue={data.description}
										className='w-full mt-4 outline-black text-sm font-bold resize-none'
										hidden
									/>
								</div>

								<h1 className='text-2xl font-bold self-center laptop:text-base tablet:mt-8 large:mt-8 mobile:mt-8'>
									{extract_date(data.date_created)}
								</h1>

								<div className='flex justify-between w-1/6 items-center laptop:w-1/4 tablet:w-1/2 tablet:mt-8 large:w-2/5 large:mt-8 mobile:w-3/5 mobile:mt-8'>
									{/* Edit Button */}
									<div
										ref={(btn) => editBtnRef.current.push(btn)}
										onClick={(e) => {
											titleRef.current[ind].hidden = !titleRef.current[ind].hidden;

											titleEditRef.current[ind].hidden = !titleEditRef.current[ind].hidden;

											descriptionRef.current[ind].hidden = !descriptionRef.current[ind].hidden;

											descriptionEditRef.current[ind].hidden = !descriptionEditRef.current[ind].hidden;

											confirmEditBtnRef.current[ind].hidden = false;
											confirmEditBtnRef.current[ind].className = "inline-flex";
											e.currentTarget.hidden = true;
										}}
										className='cursor-pointer'>
										<FontAwesomeIcon icon={faPen} size='2x' />
									</div>

									{/* Confirm Edit btns tick and cross */}
									<div ref={(btn) => confirmEditBtnRef.current.push(btn)} className='hidden'>
										<div
											className='mr-4 text-green-500 cursor-pointer'
											onClick={() => {
												editVideoInformation(data.id, ind);

												titleRef.current[ind].hidden = !titleRef.current[ind].hidden;

												titleEditRef.current[ind].hidden = !titleEditRef.current[ind].hidden;

												descriptionRef.current[ind].hidden = !descriptionRef.current[ind].hidden;

												descriptionEditRef.current[ind].hidden = !descriptionEditRef.current[ind].hidden;

												editBtnRef.current[ind].hidden = false;
												confirmEditBtnRef.current[ind].className = "hidden";
											}}>
											<FontAwesomeIcon icon={faCheck} size='2x' />
										</div>

										<div
											className='text-red-600 cursor-pointer'
											onClick={() => {
												titleRef.current[ind].hidden = !titleRef.current[ind].hidden;

												titleEditRef.current[ind].hidden = !titleEditRef.current[ind].hidden;

												descriptionRef.current[ind].hidden = !descriptionRef.current[ind].hidden;

												descriptionEditRef.current[ind].hidden = !descriptionEditRef.current[ind].hidden;

												editBtnRef.current[ind].hidden = false;
												confirmEditBtnRef.current[ind].className = "hidden";

												titleEditRef.current[ind].value = data.title;
												descriptionEditRef.current[ind].value = data.description;
											}}>
											<FontAwesomeIcon icon={faTimes} size='2x' />
										</div>
									</div>

									{/* delete video btn */}
									<div
										className='cursor-pointer'
										onClick={() => {
											deleteVideo(data.id);
										}}
										title={data.id}>
										<DeleteIcon />
									</div>

									{/* play video btn */}
									<div
										onClick={() => {
											playVideo(data.links, data.title, data.description);
										}}
										className='cursor-pointer'>
										<FontAwesomeIcon icon={faPlayCircle} size='2x' />
									</div>
								</div>
							</div>
						</div>
					))
			) : typeHook == "" ? (
				<div className='flex justify-between tablet:flex-col tablet:items-center large:flex-col large:items-center mobile:flex-col mobile:items-center text-center pl-5 pt-10'>
					Select Video Type
				</div>
			) : (
				<div className='flex justify-between tablet:flex-col tablet:items-center large:flex-col large:items-center mobile:flex-col mobile:items-center text-center pl-5 pt-10'>
					No Data Found
				</div>
			)}

			{/* end here */}
			<>
				<Modal state={open} cb={modalStateCB} data={modalData} />
			</>
		</div>
	);
};

export default VideoList;
