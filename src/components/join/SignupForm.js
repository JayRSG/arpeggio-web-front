import { useState } from 'react'
// import apiClient, { registerEndPoint, spaAuth } from '../../util/api'
// import { responseManager } from '../../util/auth'
import Button from '../Button'
import Input from '../Input'
const SignupForm = () => {
    /**
     * useState for handling formData
     */
    // const [formData, setFormData] = useState({
    // 	first_name: "",
    // 	last_name: "",
    // 	user_name: "",
    // 	email: "",
    // 	password: "",
    // 	password_confirmation: "",
    // });

    // /**
    //  *
    //  * @param {object} e
    //  * The event object
    //  */

    // const handleInputChange = (e) => {
    // 	setFormData({
    // 		...formData,
    // 		[e.currentTarget.name]: e.currentTarget.value,
    // 	});
    // };

    // /**
    //  * Form Submission handler
    //  */

    // const registerUser = async (e) => {
    // 	e.preventDefault();

    // 	/**
    // 	 * getting csrf cookie for authentication
    // 	 */

    // 	apiClient
    // 		.get(spaAuth)
    // 		.then((response) => {
    // 			/**
    // 			 * Posting registration data from form data
    // 			 */
    // 			apiClient
    // 				.post(registerEndPoint, formData)
    // 				.then((response) => {
    // 					responseManager("signup", response, formData);
    // 				})
    // 				.catch((error) => {
    // 					console.log(error);
    // 				});
    // 		})
    // 		.catch((error) => {
    // 			console.log(error);
    // 		});
    // };

    return (
        <form
            className="flex flex-col justify-center w-full items-center mt-8 flex-wrap"
            action=""
            id="RegForm"
            // onSubmit={registerUser}
        >
            <div className="w-full flex flex-col justify-center items-center mb-10">
                <Input
                    id="firstname"
                    type="text"
                    // onChange={e => {
                    //     handleInputChange(e)
                    // }}
                    name="first_name"
                    // value={formData.first_name}
                    placeholder="First Name"
                    required
                />

                <Input
                    id="lastname"
                    type="text"
                    // onChange={e => {
                    //     handleInputChange(e)
                    // }}
                    name="last_name"
                    // value={formData.last_name}
                    placeholder="Last Name"
                    required
                />

                <Input
                    id="user_name"
                    type="text"
                    // onChange={e => {
                    //     handleInputChange(e)
                    // }}
                    name="user_name"
                    // value={formData.username}
                    placeholder="Username"
                    required
                />

                <Input
                    id="email"
                    type="email"
                    // onChange={e => {
                    //     handleInputChange(e)
                    // }}
                    name="email"
                    // value={formData.email}
                    placeholder="Email"
                    required
                />

                <Input
                    id="password"
                    type="password"
                    // onChange={e => {
                    //     handleInputChange(e)
                    // }}
                    name="password"
                    // value={formData.password}
                    placeholder="Password"
                    required
                />

                <Input
                    type="password"
                    // onChange={e => {
                    //     handleInputChange(e)
                    // }}
                    name="password_confirmation"
                    // value={formData.password_confirmation}
                    placeholder="Confirm Password"
                    required
                />
            </div>

            <Button>Register</Button>
        </form>
    )
}
export default SignupForm
