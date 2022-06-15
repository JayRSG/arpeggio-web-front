import Navbar from '@/components/Layouts/Navbar'
import StudentNav from '@/components/panel/student/StudentNav'
import GuitarChords from '@/components/tools/GuitarChords'
import Metronome from '@/components/tools/Metronome'
import PianoChords from '@/components/tools/PianoChords'
import Tuner from '@/components/tools/Tuner'
import Recorder from '@/components/tools/Recorder'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Footer from '@/components/Layouts/Footer'
import { useAuth } from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'

const tools = () => {
    const { user } = useAuth({ middleware: 'auth' })

    const images = [
        { img: '/image/tools-1.png', type: 'tuner' },
        { img: '/image/tools-2.png', type: 'metronome' },
        { img: '/image/tools-3.png', type: 'guitar_chord' },
        { img: '/image/tools-4.png', type: 'piano_chord' },
        { img: '/image/tools-5.png', type: 'recorder' },
    ]
    const [selectedImg, setSelectedImg] = useState(images[0].img)
    const [currentTool, setCurrentTool] = useState('')
    const [timerWorker, setTimerWorker] = useState(null) // The Web Worker used to fire timer messages
    const worker = useRef(() => new Worker('/assets/js/worker.js'))

    const imageClickHandler = (img, type) => {
        setSelectedImg(img)
        // document.getElementById("targetImg").hidden = false;

        console.log(type)

        switch (type) {
            case 'tuner':
                setCurrentTool('tuner')
                break
            case 'metronome':
                setCurrentTool('metronome')
                setTimerWorker(worker.current)
                break
            case 'guitar_chord':
                setCurrentTool('guitar_chord')
                break
            case 'piano_chord':
                setCurrentTool('piano_chord')
                break
            case 'recorder':
                setCurrentTool('recorder')
                break

            default:
                break
        }

        //stop the metronome from playing
        if (type != 'metronome' && timerWorker != null) {
            timerWorker.postMessage('stop')
        }
    }
    return (
        <>
            <AppLayout type="Determine">
                <title>Tools</title>

                <div className="px-52 large:px-0 mobile:px-0 3k:px-28 laptop:px-28 tablet:px-28">
                    {/* <div className="flex font-body min-h-screen">
                        <div className="w-full min-h-screen"> */}
                    <h1 className="text-5xl font-title font-bold pt-6 pl-20 pb-6 large:pl-0 large:p-0 large:text-center large:py-7 mobile:pl-0 mobile:p-0 mobile:text-center mobile:py-7">
                        Tools
                    </h1>

                    <div className="flex w-full flex-wrap large:justify-center large:items-center mobile:justify-center mobile:items-center">
                        {images.map(img => (
                            <div
                                key={img.img}
                                className="w-1/5 laptop:w-1/3 tablet:w-1/3 mobile:w-1/3 mobile:py-8">
                                <Image
                                    src={img.img}
                                    width={20}
                                    height={20}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="cursor-pointer"
                                    onClick={e => {
                                        imageClickHandler(img.img, img.type)
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center items-center w-full py-8 flex-wrap">
                        {/* <div className='w-2/5' id='targetImg' hidden={true}>
								<Image src={selectedImg} width={200} height={200} layout='responsive' objectFit='cover' className='cursor-pointer' />

							</div> */}

                        <div className="flex self-start w-full">
                            {currentTool == 'metronome' ? (
                                <Metronome
                                    worker={timerWorker}
                                    activated={currentTool}
                                />
                            ) : currentTool == 'tuner' ? (
                                <Tuner />
                            ) : currentTool == 'guitar_chord' ? (
                                <GuitarChords />
                            ) : currentTool == 'piano_chord' ? (
                                <PianoChords />
                            ) : currentTool == 'recorder' ? (
                                <Recorder />
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                    {/* </div>
                    </div> */}
                </div>
            </AppLayout>
        </>
    )
}

export default tools
