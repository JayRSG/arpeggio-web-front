import Login from './Login'
import Signup from './Signup'
import { useState } from 'react'

const JoinComponent = () => {
    const [show, setShow] = useState(true)

    const handler = () => {
        setShow(show => !show)
    }

    return (
        <>{show ? <Login handler={handler} /> : <Signup handler={handler} />}</>
    )
}

export default JoinComponent
