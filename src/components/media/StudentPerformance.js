import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import apiClient, { getSocialVideoLinkEndPoint, spaAuth } from "../../util/api";
import YouTube from 'react-youtube'
// import { checkValidURL, fetchOEmbedData } from "../../util/ytmanager";
// import Student_Performance from "../../lib/student_performance"; //Local file Storage

const StudentPerformance = () => {
    const [open, setOpen] = useState(false)
    const modalStateCB = modalVal => {
        setOpen(modalVal)
        // console.log("Setting open from Modal" + modalVal);
    }
    const [videoData, setVideoData] = useState([])
    /* {
		Data Schema of VideoData: 
		Title
		description
		links
		thumbnail_url
	} */
    const [videoEmbedData, setVideoEmebedData] = useState(false)
    const [searchTerm, setSearchTerm] = useState(false)
    const [getSearch, setGetSearch] = useState(false)

    // const studentPerformnaces = async () => {
    // 	await apiClient
    // 		.get(spaAuth)
    // 		.then(() => {
    // 			apiClient
    // 				.get(getSocialVideoLinkEndPoint + "Free_Class")
    // 				.then((response) => {
    // 					setVideoData(response.data);
    // 				})
    // 				.catch((error) => {
    // 					console.log(error);
    // 				});
    // 		})
    // 		.catch((error) => {
    // 			console.log(error);
    // 		});
    // };

    // useEffect(() => {
    // 	/**
    // 	 * Fetching from the backend is disabled for temporary basis and is served from local file stored in Video_links. Uncomment the fetchFreeClasses() to enable backend fetching video data.
    // 	 */
    // 	// fetchFreeClasses();
    // 	setVideoData(Student_Performance);
    // }, []);

    // useEffect(() => {
    // 	console.log(videoData);
    // }, [videoData]);

    const createModalData = (link, title, desc) => {
        let video_id = checkValidURL(link, true)

        let yt_embed = (
            <>
                {/* <div className='w-full'>
				</div> */}
                <YouTube
                    className="w-full"
                    videoId={video_id}
                    opts={{ height: 400, width: 400 }}
                />
                <div className="p-4 text-center">
                    <div className="font-bold text-xl">{title}</div>
                    <div className="py-2 text-sm">{desc}</div>
                </div>
            </>
        )

        setVideoEmebedData(yt_embed)
        setOpen(true)
    }

    return (
        <>
            <div className="px-52 md:px-0 sm:px-0 2xl:px-28 xl:px-28 lg:px-28">
                <div className="flex flex-col font-body min-h-screen">
                    <div className="w-full flex justify-between mb-8 lg:flex-col lg:justify-center md:flex-col md:justify-center sm:flex-col sm:justify-center items-center mt-8">
                        <h1 className="text-5xl font-title py-7 font-bold xl:text-4xl lg:text-center lg:pb-8 md:pb-8 md:text-center sm:text-center sm:text-3xl md:mb-8 sm:mb-8">
                            Student Performance
                        </h1>

                        <div className="flex border-2 h-12 border-black md:mx-4 sm:mx-4 lg:mr-0 lg:mb-16 md:mb-16 sm:mb-16 shadow-md">
                            <input
                                type="text"
                                className="w-121 2xl:w-118 xl:w-80 lg:w-119 md:w-119 sm:w-56 px-4 opacity-50 outline-none"
                                placeholder="Search Free Classes"
                                onChange={e => {
                                    setSearchTerm(e.currentTarget.value)
                                    setGetSearch(true)
                                }}
                            />
                            <button
                                className="flex items-center justify-center px-4"
                                onClick={e => {
                                    setGetSearch(true)
                                }}>
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    size="2x"
                                    className="w-6 h-6 text-gray-300 opacity-50"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:px-8 sm:grid-cols-1 sm:px-4">
                        {videoData.map((elems, ind) =>
                            searchTerm == '' ||
                            (getSearch &&
                                searchTerm != '' &&
                                (elems.title
                                    .toString()
                                    .toLowerCase()
                                    .includes(
                                        searchTerm
                                            .toString()
                                            .toLocaleLowerCase(),
                                    ) ||
                                    elems.description
                                        .toString()
                                        .toLowerCase()
                                        .includes(
                                            searchTerm.toString().toLowerCase(),
                                        ))) ? (
                                <div key={ind} className="h-full">
                                    <div
                                        className="cursor-pointer hover:scale-105 transition-all transform duration-500"
                                        onClick={e => {
                                            createModalData(
                                                elems.links,
                                                elems.title,
                                                elems.description,
                                            )
                                        }}>
                                        <Image
                                            //   src="/image/freeclass-1.jpg"
                                            src={elems.thumbnail_url}
                                            width={1280}
                                            height={720}
                                            layout="responsive"
                                            objectFit="cover"
                                            className="cursor-pointer"
                                            priority={false}
                                        />
                                        <p className="text-base lg:text-sm text-center font-bold p-8">
                                            {elems.title}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                ''
                            ),
                        )}
                    </div>
                </div>
            </div>

            <div id="video_modal">
                {/* A custom component that I have written */}
                <Modal
                    state={open}
                    cb={modalStateCB}
                    data={videoEmbedData}
                    className1="min-w-full h-full"
                    className2="w-full text-center bg-gray-300"
                />
            </div>
        </>
    )
}

export default StudentPerformance
