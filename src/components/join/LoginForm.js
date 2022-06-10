// import apiClient, { spaAuth, loginEndPoint } from '../../util/api'
// import { responseManager } from '../../util/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const LoginForm = () => {
    // const loginCred = {
    // 	user_name: "",
    // 	password: "",
    // 	remember: false,
    // }
    // const [formData, setFormData] = useState(loginCred);
    // const [remember, setRemember] = useState(false);

    // const handleInputChange = (e) => {
    // 	setFormData({
    // 		...formData,
    // 		[e.currentTarget.name]: e.currentTarget.value,
    // 	});
    // };

    // const rememberHandler = (e) => {
    // 	e.currentTarget.value = e.currentTarget.checked;
    // };

    // /**
    //  *
    //  * @param {*} e
    //  * Form Submission Handler
    //  */
    // const loginHandler = async (e) => {
    // 	e.preventDefault();

    // 	apiClient
    // 		.get(spaAuth)
    // 		.then((response) => {
    // 			console.log(response);

    // 			console.log(formData);
    // 			apiClient
    // 				.post(loginEndPoint, formData)
    // 				.then((response) => {
    // 					console.log(response);

    // 					responseManager("login", response, formData);
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
            id="LoginForm"
            // onSubmit={loginHandler}
        >
            <div className="w-full flex flex-col justify-center items-center mb-10">
                <Input
                    id="username"
                    type="text"
                    name="user_name"
                    placeholder="Username"
                    // onChange={handleInputChange}
                    required={true}
                />

                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    // onChange={handleInputChange}
                    required={true}
                />

                <div className="w-5/6 flex items-center justify-between">
                    <div>
                        <label className="flex items-center text-gray-400 font-bold">
                            <input
                                className="leading-tight"
                                type="checkbox"
                                // value={remember}
                                id="remember"
                                // onChange={handleInputChange}
                                // onClick={rememberHandler}
                                name="remember"
                            />
                            <span className="text-sm pl-2">Remember Me</span>
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

            <Button className="bg-btn-color hover:scale-105 transform transition-all duration-500">
                Login
            </Button>
        </form>
    )
}

export default LoginForm
