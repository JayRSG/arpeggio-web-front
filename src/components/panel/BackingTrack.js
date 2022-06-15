import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { checkValidURL } from '@/util/ytmanager'
import Modal from '@/components/Modal'
import axios from '@/lib/axios'

const BackingTrack = () => {
    const [open, setOpen] = useState(false)
    const modalStateCB = modalVal => {
        setOpen(modalVal)
        console.log('Setting open from Modal' + modalVal)
    }

    const [videoData, setVideoData] = useState([])
    const [videoEmbedData, setVideoEmebedData] = useState(false)
    const [searchTerm, setSearchTerm] = useState(false)
    const [getSearch, setGetSearch] = useState(false)

    const fetchBackingTrack = async () => {
        await axios
            .get('sanctum/csrf-cookie')
            .then(() => {
                apiClient
                    .get('api/social-video-link/' + 'Backing_Track')
                    .then(response => {
                        console.log(response)
                        setVideoData(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchBackingTrack()
    }, [])

    const createModalData = (link, title, desc) => {
        let video_id = checkValidURL(link, true)

        let yt_embed = (
            <>
                <YouTube
                    videoId={video_id}
                    opts={{ height: 640, width: 800 }}
                />
                <div className="font-bold">{title}</div>
                <div className="mb-4">{desc}</div>
            </>
        )

        setVideoEmebedData(yt_embed)
        setOpen(true)
    }

    return (
        <>
            <div className="w-full min-h-screen">
                <div className="w-full flex justify-between tablet:flex-col tablet:justify-center large:flex-col large:justify-center mobile:flex-col mobile:justify-center items-center mt-8 flex-wrap">
                    <h1 className="text-5xl font-title p-7 pl-20 font-bold tablet:pl-0 tablet:p-0 tablet:py-7 large:pl-0 large:p-0 large:py-7 mobile:pl-0 mobile:p-0 mobile:py-7">
                        Backing Tracks
                    </h1>

                    <div className="flex border-2 h-12 border-black mr-40 tablet:mr-0 large:mr-0 mobile:mr-0 tablet:mb-16 large:mb-16 mobile:mb-16">
                        <input
                            type="text"
                            className="w-80 px-4 opacity-50"
                            placeholder="Search items"
                            onChange={e => {
                                setSearchTerm(e.currentTarget.value)
                                setGetSearch(true)
                            }}
                        />
                        <button className="flex items-center justify-center px-4">
                            <FontAwesomeIcon
                                icon={faSearch}
                                size="2x"
                                className="w-6 h-6 text-gray-300 opacity-50"
                                onClick={e => {
                                    setGetSearch(true)
                                }}
                            />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap overflow-hidden p-5">
                    {videoData.map((elems, ind) =>
                        searchTerm == '' ||
                        (getSearch &&
                            searchTerm != '' &&
                            (elems.title
                                .toString()
                                .toLowerCase()
                                .includes(
                                    searchTerm.toString().toLocaleLowerCase(),
                                ) ||
                                elems.description
                                    .toString()
                                    .toLowerCase()
                                    .includes(
                                        searchTerm.toString().toLowerCase(),
                                    ))) ? (
                            <div
                                className="flex flex-col w-118 ml-6 cursor-pointer hover:scale-105 transform transition-all duration-500"
                                onClick={e => {
                                    createModalData(
                                        elems.links,
                                        elems.title,
                                        elems.description,
                                    )
                                }}>
                                {/* Images */}
                                <div className="w-118 h-60 overflow-hidden tablet:w-96 tablet:h-96 mobile:w-96 mobile:h-96">
                                    <Image
                                        src={elems.thumbnail_url}
                                        width={5472}
                                        height={3648}
                                        layout="responsive"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>
                                {/* description */}
                                <h2 className="py-6 large:px-16 mobile:px-32 large:pt-0 mobile:pt-0 text-center font-bold">
                                    {elems.title}
                                </h2>
                            </div>
                        ) : (
                            ''
                        ),
                    )}
                </div>
            </div>

            <div id="video_modal">
                {/* A custom component that I have written */}
                <Modal state={open} cb={modalStateCB} data={videoEmbedData} />
            </div>
        </>
    )
}

export default BackingTrack
