const SignupWith = ({ className1, className2, title }) => {
    return (
        <div
            className={`flex justify-center items-center w-full ${className1}`}>
            <hr className={`bg-gray-600 border-0 h-99 ${className2}`} />
            <p className="text-lg font-normal px-2 text-center md:text-base sm:text-sm">
                {title}
            </p>
            <hr className={`bg-gray-600 border-0 h-99 ${className2}`} />
        </div>
    )
}

export default SignupWith
