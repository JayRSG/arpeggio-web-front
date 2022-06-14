import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUpload } from "@fortawesome/free-solid-svg-icons";
import { DeleteIcon } from "../../SVGs";
import Image from "next/image";
// import Modal from "../../Modal";
// import { useState } from "react";

const AdminAnouncements = () => {
	// const [open, setOpen] = useState(false);
	// const [modalData, setModalData] = useState(false);

	// const modalStateCB = (modalVal) => {
	// 	setOpen(modalVal);
	// 	setDeletedData(false);
	// 	// console.log("Setting open from Modal" + modalVal);
	// };

	return (
		<>
			<div className='flex flex-col'>
				<div className='flex justify-between items-center'>
					<h1 className='text-5xl p-8 font-bold font-title tablet:text-3xl mobile:text-xl'>Anouncements</h1>

					<button
						className='btn bg-transparent text-black shadow-md pb-12 tablet:pb-10 tablet:px-8 pt-4 px-10 h-12 font-bold text-2xl tablet:text-xl text-center rounded-md my-8 large:mr-4 mobile:text-xl mobile:px-6 mobile:mr-4 mobile:pb-10 mobile:py-2'
						// onClick={() => {
						// 	setModalData(<AddVideo addVideoUpload={addVideoUpload} />);
						// 	setOpen(true);
						// }}
					>
						<FontAwesomeIcon icon={faUpload} size='1x' />
					</button>
				</div>
				{/* <div>
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
				</div> */}
				{/* this two part will come from the database. start here*/}
				<div>
					<hr className='bg-black h-101 mb-8' />

					<div className='flex justify-between tablet:flex-col tablet:items-center large:flex-col large:items-center mobile:flex-col mobile:items-center'>
						<div className='flex flex-col w-2/5 pl-8 laptop:w-1/5 tablet:w-3/4 tablet:mt-8 large:w-112 large:mt-8 mobile:w-4/5 mobile:mt-8'>
							<h1 className='text-xl font-bold'>
								Chord introduction | Chord diagram and progressions | Arpeggio online guitar lesson |
							</h1>

							<p className='text-sm mt-4'>Chord Introduction Free Class Video</p>
						</div>

						<h1 className='text-2xl font-bold self-center laptop:text-base tablet:mt-8 large:mt-8 mobile:mt-8'>12 September, 2021</h1>

						<div className='flex justify-between w-1/6 items-center laptop:w-1/4 tablet:w-1/2 tablet:mt-8 large:w-2/5 large:mt-8 mobile:w-3/5 mobile:mt-8'>
							{/* Edit Button */}
							<div
								// ref={(btn) => editBtnRef.current.push(btn)}
								// onClick={(e) => {
								// 	titleRef.current[ind].hidden = !titleRef.current[ind].hidden;

								// 	titleEditRef.current[ind].hidden = !titleEditRef.current[ind].hidden;

								// 	descriptionRef.current[ind].hidden = !descriptionRef.current[ind].hidden;

								// 	descriptionEditRef.current[ind].hidden = !descriptionEditRef.current[ind].hidden;

								// 	confirmEditBtnRef.current[ind].hidden = false;
								// 	confirmEditBtnRef.current[ind].className = "inline-flex";
								// 	e.currentTarget.hidden = true;
								// }}
								className='cursor-pointer'>
								<FontAwesomeIcon icon={faPen} size='2x' />
							</div>

							{/* Confirm Edit btns tick and cross */}

							{/* <div ref={(btn) => confirmEditBtnRef.current.push(btn)} className='hidden'>
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
							</div> */}

							{/* delete video btn */}
							<div
								className='cursor-pointer'
								// onClick={() => {
								// 	deleteVideo(data.id);
								// }}
								// title={data.id}
							>
								<DeleteIcon />
							</div>

							{/* play video btn */}
							<div
								// onClick={() => {
								// 	playVideo(data.links, data.title, data.description);
								// }}
								className='cursor-pointer'>
								<FontAwesomeIcon icon={faPlayCircle} size='2x' />
							</div>
						</div>
					</div>
				</div>

				{/* <>
					<Modal state={open} cb={modalStateCB} data={modalData} />
				</> */}
			</div>
		</>
	);
};

export default AdminAnouncements;
