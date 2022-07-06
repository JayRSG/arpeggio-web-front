import Link from 'next/link'
import { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import AuthSessionStatus from '../AuthSessionStatus'
import AuthValidationErrors from '../AuthValidationErrors'
import Loader from '../Loader'

const LoginForm = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    const [user_name, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()
        console.log('Submit Handler Pressed')
        setLoading(true)
        login({ user_name, password, setErrors, setStatus })
    }
    return (
        <>
            <div className="flex flex-col justify-center mt-3 flex-wrap">
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />
            </div>
            <form
                className="flex flex-col justify-center w-full items-center mt-8 flex-wrap"
                action=""
                id="LoginForm"
                onSubmit={submitForm}>
                <div className="w-full flex flex-col justify-center items-center mb-10">
                    <Input
                        id="username"
                        type="text"
                        name="user_name"
                        placeholder="Username"
                        tabIndex={1}
                        value={user_name}
                        onChange={event =>
                            setUsername(event.currentTarget.value)
                        }
                        required={true}
                        autoFocus
                    />

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        tabIndex={2}
                        value={password}
                        onChange={event =>
                            setPassword(event.currentTarget.value)
                        }
                        required={true}
                        autoComplete="current-password"
                    />

                    <div className="w-5/6 flex items-center justify-between">
                        <div>
                            <label
                                className="flex items-center text-gray-400 font-bold"
                                htmlFor="remember">
                                <input
                                    className="leading-tight"
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    checked={remember}
                                    onChange={e =>
                                        setRemember(e.currentTarget.checked)
                                    }
                                />
                                <span className="text-sm pl-2">
                                    Remember Me
                                </span>
                            </label>
                        </div>

                        <div>
                            <Link href="/">
                                <a className="font-bold text-sm text-gray-400 transition-colors duration-500 hover:text-blue-300">
                                    Forgot Password
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <Button
                    onClick={e => {
                        e.stopPropagation()
                    }}
                    className="bg-btn-color hover:scale-105 transform transition-all duration-500">
                    Login
                </Button>
            </form>
        </>
    )
}

export default LoginForm
