import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { useAuth } from '@/hooks/auth'
import AuthValidationErrors from '../AuthValidationErrors'

const SignupForm = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/verify',
    })

    /**
     * useState for handling formData
     */
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const [errors, setErrors] = useState([])

    // /**
    //  *
    //  * @param {object} e
    //  * The event object
    //  */

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    // /**
    //  * Form Submission handler
    //  */

    const submitForm = async e => {
        e.preventDefault()

        // console.log({ ...formData })

        register({
            ...formData,
            setErrors,
        })
    }

    return (
        <>
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />

            <form
                className="flex flex-col justify-center w-full items-center mt-8 flex-wrap"
                action=""
                id="RegForm"
                onSubmit={submitForm}>
                <div className="w-full flex flex-col justify-center items-center mb-10">
                    <Input
                        id="firstname"
                        type="text"
                        onChange={e => {
                            handleInputChange(e)
                        }}
                        name="first_name"
                        value={formData.first_name}
                        placeholder="First Name"
                        required
                    />

                    <Input
                        id="lastname"
                        type="text"
                        onChange={e => {
                            handleInputChange(e)
                        }}
                        name="last_name"
                        value={formData.last_name}
                        placeholder="Last Name"
                        required
                    />

                    <Input
                        id="user_name"
                        type="text"
                        onChange={e => {
                            handleInputChange(e)
                        }}
                        name="user_name"
                        value={formData.username}
                        placeholder="Username"
                        required
                    />

                    <Input
                        id="email"
                        type="email"
                        onChange={e => {
                            handleInputChange(e)
                        }}
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        required
                    />

                    <Input
                        id="password"
                        type="password"
                        onChange={e => {
                            handleInputChange(e)
                        }}
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        required
                    />

                    <Input
                        type="password"
                        onChange={e => {
                            handleInputChange(e)
                        }}
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        placeholder="Confirm Password"
                        required
                    />
                </div>

                <Button
                    onClick={e => {
                        e.stopPropagation()
                    }}
                    className="bg-btn-color hover:scale-105 transform transition-all duration-500">
                    Register
                </Button>
            </form>
        </>
    )
}
export default SignupForm
