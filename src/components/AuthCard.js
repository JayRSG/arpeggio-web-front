const AuthCard = ({ children }) => (
    <div className="min-w-full h-screen md:h-full bg-gray-500 p-14 lg:p-8 md:px-0 md:py-10 sm:p-0 bg-hero-image bg-no-repeat bg-cover font-body">
        <div className="h-full flex items-center flex-col m-auto sm:m-0 w-1/2 2xl:w-3/5 xl:w-3/4 lg:w-full md:w-full sm:w-full bg-white flex-wrap sm:relative sm:-top-28 sm:-mb-28">
            {children}
        </div>
    </div>
)

export default AuthCard
