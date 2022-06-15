import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)
const isWindowContext = typeof window !== 'undefined'

export const useWidth = () => {
    const [width, setWidth] = useState(0) // default width, detect on server.
    const handleResize = () => setWidth(getCurrentWindowWidth())
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])
    return width
}

export const useHeight = () => {
    const [height, setHeight] = useState(0) // default height, detect on server.
    const handleResize = () => setHeight(getCurrentWindowHeight())
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])
    return height
}

export const getBreakpointValue = value => {
    return parseInt(fullConfig.theme.screens[value].min)
}

export const getCurrentWindowWidth = () => {
    return isWindowContext && window.innerWidth ? window.innerWidth : null
}

export const getCurrentWindowHeight = () => {
    return isWindowContext && window.innerheight ? window.innerheight : null
}

export const getCurrentBreakPoint = () => {
    let currentBreakPoint
    let biggestBreakpointValue = 0
    let breakpointValue

    for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
        breakpointValue = getBreakpointValue(breakpoint)

        if (
            breakpointValue > biggestBreakpointValue &&
            getCurrentWindowWidth() >= breakpointValue
        ) {
            biggestBreakpointValue = breakpointValue
            currentBreakPoint = breakpoint
        }
    }
    return currentBreakPoint
}
