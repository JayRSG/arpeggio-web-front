// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
// import apiClient, {
//   facebookLoginEndPoint,
//   googleLoginEndPoint,
// } from "../../util/api";
// import router from "next/router";

// export const getSocialLogin = (social) => {
//   apiClient
//     .get(
//       social == "facebook"
//         ? facebookLoginEndPoint
//         : social == "google"
//         ? googleLoginEndPoint
//         : ""
//     )
//     .then((response) => {
//       console.log(response);
//       if (response.statusText == "OK") {
//         router.push(
//           "/social/" +
//             social +
//             (response?.data?.url ? "?redirect=" : "") +
//             (response?.data?.url || "")
//         );
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const GoogleAndFacebookLogin = ({ className }) => {
    return (
        <div
            className={`flex justify-around w-full pb-5 flex-wrap ${className}`}>
            <a
                // onClick={() => {
                //   getSocialLogin("google");
                // }}
                className="btn text-black border-2 border-gray-300 rounded-3xl w-60 2xl:w-48 h-12 text-center text-xxxs sm:text-xxs sm:w-40 sm:px-0 font-bold">
                <FontAwesomeIcon
                    icon={faGoogle}
                    size="1x"
                    transform="left-20"
                />{' '}
                LOGIN WITH GOOGLE
            </a>

            <a
                // onClick={() => {
                //   getSocialLogin("facebook");
                // }}
                className="btn border-2 border-blue-400 rounded-3xl w-60 2xl:w-48 h-12 text-center text-blue-400 text-xxxs sm:text-xxs sm:px-0 sm:w-40 font-bold">
                <FontAwesomeIcon
                    icon={faFacebookF}
                    size="1x"
                    transform="left-20"
                />{' '}
                LOGIN WITH FACEBOOK
            </a>
        </div>
    )
}

export default GoogleAndFacebookLogin
