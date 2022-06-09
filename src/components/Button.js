const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} btn bg-btn-color w-56 h-14 shadow-btn text-2xl mb-5 font-title font-bold`}
        {...props}
    />
)

export default Button
