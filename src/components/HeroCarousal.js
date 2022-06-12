import { getCurrentBreakPoint, useWidth } from '../helpers/screensRes'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useEffect, useRef } from 'react'

const HeroCarousal = () => {
    const deviceWidth = useWidth()
    const currentBreakPoint = useRef(getCurrentBreakPoint())

    useEffect(() => {
        currentBreakPoint.current = getCurrentBreakPoint()
    }, [deviceWidth])

    return (
        <>
            <div className="carousel-wrapper">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    renderIndicator={(
                        onClickHandler,
                        isSelected,
                        index,
                        label,
                    ) => {
                        const defStyle = {
                            background: 'white',
                            marginLeft: 20,
                            color: 'white',
                            cursor: 'pointer',
                            width: 6,
                            height: 6,
                            display: 'inline-block',
                            borderRadius: 50,
                            marginBottom:
                                currentBreakPoint.current == 'md' ? 0 : 280,
                        }
                        const style = isSelected
                            ? { ...defStyle, background: '#2568f8' }
                            : { ...defStyle }
                        return (
                            <li
                                style={style}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-label={`${label} ${index + 1}`}></li>
                        )
                    }}>
                    <div>
                        <div className="bg-home-image bg-no-repeat bg-cover bg-gray-500 h-106 w-full md:h-72 sm:h-88"></div>
                    </div>

                    <div>
                        <div className="bg-home-image-5 bg-no-repeat bg-cover object-fill bg-center bg-gray-500 h-106 w-full md:h-72 sm:h-88"></div>
                    </div>

                    <div>
                        <div className="bg-home-image-7 bg-no-repeat bg-cover bg-gray-500 h-106 w-full md:h-72 sm:h-88"></div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}
export default HeroCarousal
