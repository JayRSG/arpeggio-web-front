// import { useGetAuth } from "../../util/auth";
import Login from './Login'
import Signup from './Signup'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const JoinComponent = () => {
    const [show, setShow] = useState(true)
    // const [auth, setAuth] = useState(false);
    const router = useRouter()

    // useGetAuth()
    //   .then((authdata) => {
    //     setAuth(authdata);
    //     // console.log(auth);
    //   })

    // .catch((error) => {
    //   console.log(error);
    // });

    //redirects from login/signup page if the user is already logged in
    // useEffect(() => {
    //   if (auth) {
    //     router.push("/");
    //   }
    // }, [auth]);

    const handler = () => {
        setShow(show => !show)
    }

    // return !auth ? (
    //   <>{show ? <Login handler={handler} /> : <Signup handler={handler} />}</>
    // ) : (
    //   <></>
    // );
    return (
        <>{show ? <Login handler={handler} /> : <Signup handler={handler} />}</>
    )
}

export default JoinComponent
