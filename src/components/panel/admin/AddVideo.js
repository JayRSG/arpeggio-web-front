import axios from '@/lib/axios'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube'
import { checkValidURL, fetchOEmbedData } from '../../../util/ytmanager'

const AddVideo = props => {
    const [formData, setFormData] = useState({
        link: '',
        link_type: '',
        title: '',
        description: '',
        thumbnail_url: '',
    })

    const [youtubeData, setYoutubeData] = useState({
        author_name: '',
        author_url: '',
        height: '',
        width: '',
        html: '',
        provider_name: '',
        provider_url: '',
        thumbnail_height: '',
        thumbnail_width: '',
        thumbnail_url: '',
        title: '',
        version: '',
    })
    const [ytVideoID, setYtVideoID] = useState('')
    const [youtubeDataAvailable, setYoutubeDataAvailable] = useState(false)

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)

    const [typeHook, setTypeHook] = useState('')
    const uploadRef = useRef(null)

    //set Video id for the video
    useEffect(() => {
        let videoFrame = playerRef.current

        let videoData = videoDataRef.current

        if (formData.link != '' && checkValidURL(formData.link)) {
            setYtVideoID(checkValidURL(formData.link, true))
            videoFrame.hidden = false
            videoData.hidden = false
        } else {
            videoFrame.hidden = true
            videoData.hidden = true
        }
    }, [formData.link])

    //set title from the fetched youtube oemebed data
    useEffect(() => {
        setFormData({
            ...formData,
            title: youtubeData.title,
            thumbnail_url: youtubeData.thumbnail_url,
        })
    }, [youtubeData])

    const clearYoutubedata = () => {
        setYtVideoID('')
        setYoutubeData({
            ...youtubeData,
            author_name: '',
            author_url: '',
            height: '',
            width: '',
            html: '',
            provider_name: '',
            provider_url: '',
            thumbnail_height: '',
            thumbnail_width: '',
            thumbnail_url: '',
            title: '',
            version: '',
        })
        titleRef.current.value = ''
        descriptionRef.current.value = ''
    }

    const stopAnimation = (enabled = false) => {
        let videoData = videoDataRef.current
        if (enabled) {
            if (!videoData.className.includes('animate-pulse'))
                videoData.className += ' animate-pulse'
            return
        }

        let classes = videoData.className.split(' ')
        videoData.className = ''
        for (let i = 0; i < classes.length; i++) {
            if (classes[i].includes('animate-pulse')) {
                continue
            }
            videoData.className += classes[i] + ' '
        }
    }

    const fetchVideotitle = async () => {
        var link = formData.link != '' ? formData.link : ''

        var data = await fetchOEmbedData(link)

        if (data) {
            setYoutubeData({ ...youtubeData, ...data })
        }
    }

    const checkAvailability = () => {
        let video_id = ''
        console.log('i am in check availability function')
        if (formData.link != '') {
            video_id = checkValidURL(formData.link, true)
            axios
                .get('api/social-video-available/' + video_id)
                .then(response => {
                    if (response.status == 200) {
                        console.log(response)
                        setYoutubeDataAvailable(response.data)
                    } else if (response.status == 204) {
                        setYoutubeDataAvailable(false)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            setYoutubeDataAvailable(false)
        }
    }

    const toggleButton = () => {
        let tar_elem = checkBtn.current
        let elem = videoLinkRef.current

        if (checkValidURL(elem.value)) {
            tar_elem.className = 'self-start justify-evenly text-green-500'
            stopAnimation(true)
        } else {
            tar_elem.className = 'self-start justify-evenly text-gray-500'
        }
    }

    const checkBtn = useRef(null)
    const videoLinkRef = useRef(null)

    const formSubmissionHandler = async e => {
        e.preventDefault()
        await axios
            .get('sanctum/csrf-cookie')
            .then(async () => {
                return await axios
                    .post('api/social-video-link/', formData)
                    .then(response => {
                        if (response) {
                            console.log('Video Inserted Successfully')
                            if (props) {
                                props.addVideoUpload(true)
                            }
                        } else {
                            console.log('Video Insertion Failed')
                            if (props) {
                                props.addVideoUpload(false)
                            }
                        }
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
        if (
            !youtubeDataAvailable &&
            formData.link != '' &&
            formData.link_type != ''
        ) {
            if (checkValidURL(formData.link)) {
                uploadRef.current.disabled = false
                if (
                    uploadRef.current.className.includes(' cursor-not-allowed')
                ) {
                    uploadRef.current.className = uploadRef.current.className.replace(
                        'cursor-not-allowed',
                        ' ',
                    )
                }
            }
        } else {
            uploadRef.current.disabled = true
            if (!uploadRef.current.className.includes(' cursor-not-allowed')) {
                uploadRef.current.className += ' cursor-not-allowed'
            }
        }
    }, [youtubeDataAvailable, formData])

    //Check for Video Availablity in Database in either free class or backing track
    useEffect(() => {
        checkAvailability()
    }, [formData.link])

    const [newLinkCount, setNewLinkCount] = useState([1])
    const playerRef = useRef()
    const videoDataRef = useRef()
    const videoContentRef = useRef()

    return (
        <>
            <form onSubmit={formSubmissionHandler}>
                <div className="flex flex-wrap overflow-hidden items-center justify-center">
                    <div className="w-full">
                        <div className="flex flex-col justify-center px-2 py-2">
                            <div className="flex flex-col justify-center bg-main-color">
                                <h3 className="text-2xl font-extrabold pb-8 m-2 mb-8">
                                    Youtube Link
                                </h3>

                                {/* New video Link Boundary Starts here */}
                                <div ref={videoContentRef}>
                                    <div className="flex flex-wrap justify-between items-center">
                                        <input
                                            className="border-b-2 border-black mb-14 bg-main-color w-11/12 tablet:w-4/5 large:w-4/5 mobile:w-4/5 flex-col focus:outline-black"
                                            type="text"
                                            name="video_link"
                                            required={true}
                                            ref={videoLinkRef}
                                            onChange={e => {
                                                clearYoutubedata()
                                                setFormData({
                                                    ...formData,
                                                    description: '',
                                                    title: '',
                                                    link: e.currentTarget.value,
                                                })
                                                setYoutubeDataAvailable(false)
                                                toggleButton()
                                            }}
                                        />

                                        <button
                                            ref={checkBtn}
                                            type="button"
                                            className="self-start text-gray-500">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                size="2x"
                                            />
                                        </button>
                                    </div>

                                    <div className="flex tablet:flex-col tablet:items-center large:flex-col large:items-center mobile:flex-col mobile:items-center mr-4 tablet:mr-0">
                                        <div ref={playerRef}>
                                            {ytVideoID != '' ? (
                                                <YouTube
                                                    opts={{
                                                        height: '200',
                                                        width: '280',
                                                    }}
                                                    onReady={e => {
                                                        fetchVideotitle()
                                                        stopAnimation()
                                                        // console.log(e);
                                                    }}
                                                    onStateChange={e => {
                                                        console.log(e)
                                                    }}
                                                    videoId={ytVideoID}
                                                />
                                            ) : (
                                                ''
                                            )}
                                        </div>

                                        <div
                                            ref={videoDataRef}
                                            className="ml-8 tablet:mt-8 large:mt-8 mobile:mt-8"
                                            hidden>
                                            <span className="font-bold">
                                                Customize Video Information:
                                            </span>
                                            <textarea
                                                type="text"
                                                className="input placeholder-black bg-main-color border-solid border-gray-400 py-1 tablet:mt-2 large:mt-2 mobile:mt-2 resize-none"
                                                name="custom_title"
                                                value={youtubeData.title}
                                                placeholder="Video title"
                                                ref={titleRef}
                                                onChange={e => {
                                                    setFormData({
                                                        ...formData,
                                                        title:
                                                            e.currentTarget
                                                                .value,
                                                    })
                                                }}
                                            />

                                            <textarea
                                                type="text"
                                                name="description"
                                                className="input placeholder-black bg-main-color border-solid border-gray-400 pt-2 pb-14 -mt-3 align-text-top resize-none "
                                                placeholder="Write a video description..."
                                                ref={descriptionRef}
                                                onChange={e => {
                                                    setFormData({
                                                        ...formData,
                                                        description:
                                                            e.currentTarget
                                                                .value,
                                                    })
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="">
                                        <select
                                            name="link-type"
                                            className="w-1/4 tablet:w-2/4 laptop:w-117 large:w-1/2 mobile:w-3/5 font-extrabold -mt-5 mb-5 self-end outline-none bg-main-color"
                                            onChange={e => {
                                                setTypeHook(
                                                    e.currentTarget.selected,
                                                )
                                                setFormData({
                                                    ...formData,
                                                    link_type:
                                                        e.currentTarget.value,
                                                })
                                                console.log(
                                                    e.currentTarget.value,
                                                )
                                            }}
                                            value={typeHook}
                                            required={true}>
                                            <option
                                                disabled
                                                value={typeHook}
                                                defaultValue="select_type"
                                                key="disabled">
                                                Select Video Type
                                            </option>
                                            <option value="1" key="FreeClass">
                                                Free Classes
                                            </option>
                                            <option
                                                value="2"
                                                key="BackingTrack">
                                                Backing Track
                                            </option>
                                        </select>
                                    </div>

                                    <div className="bg-green-400">
                                        {youtubeDataAvailable
                                            ? 'Video Avaiable in - ' +
                                              (youtubeDataAvailable.link_type ==
                                              1
                                                  ? 'Free Class'
                                                  : 'Backing Track')
                                            : ''}
                                    </div>
                                    {/* New Content inserts here */}
                                </div>
                                {/* New Link Boundary Ends Here */}

                                <div className="flex justify-between">
                                    <input
                                        className="btn rounded-lg bg-btn-color text-xl px-8 mobile:px-4 mt-16 font-bold shadow-btn mr-2 mb-2"
                                        placeholder="Upload"
                                        type="submit"
                                        value="Add Link"
                                        name="link"
                                        onClick={() => {
                                            setNewLinkCount(newLinkCount =>
                                                newLinkCount.push(1),
                                            )
                                        }}
                                    />

                                    <input
                                        className="btn rounded-lg bg-btn-color text-xl px-8 mobile:px-4 mt-16 font-bold shadow-btn mr-2 mb-2 disabled:opacity-50"
                                        placeholder="Upload"
                                        type="submit"
                                        value="Upload"
                                        name="upload"
                                        ref={uploadRef}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddVideo
