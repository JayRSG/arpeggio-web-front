import { useEffect, useState, useRef } from 'react'

export default function CountDownTimer(props) {
    const Ref = useRef(null)
    const [timer, setTimer] = useState('00:00:${props.seconds}')

    const getTimeRemaining = e => {
        const total = Date.parse(e) - Date.parse(new Date())
        const seconds = Math.floor((total / 1000) % 60)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const hours = Math.floor((total / 1000 / 60 / 60) % 24)
        return {
            total,
            hours,
            minutes,
            seconds,
        }
    }

    const startTimer = e => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e)
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) +
                    ':' +
                    (minutes > 9 ? minutes : '0' + minutes) +
                    ':' +
                    (seconds > 9 ? seconds : '0' + seconds),
            )
        }
    }

    const clearTimer = e => {
        if (props.seconds <= 9) setTimer(`00:00:0${props.seconds}`)
        else setTimer(`00:00:${props.seconds}`)

        if (Ref.current) clearInterval(Ref.current)

        const id = setInterval(() => {
            startTimer(e)
        }, 1000)

        Ref.current = id
    }
    const getDeadline = () => {
        let deadline = new Date()
        deadline.setSeconds(deadline.getSeconds() + props.seconds)

        return deadline
    }
    useEffect(() => {
        clearTimer(getDeadline())
    }, [])

    useEffect(() => {
        if (timer == '00:00:00') {
            props.onTimerEnd(true)
        }
    }, [timer])

    useEffect(() => {
        if (props.repeat) {
            clearTimer(getDeadline())
        }
    }, [props.repeat])

    return (
        <>
            <span id="countDown">
                <span>{timer}</span>
            </span>
        </>
    )
}
