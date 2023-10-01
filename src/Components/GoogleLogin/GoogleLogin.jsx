import googleIcon from '../../assets/google.png'

const GoogleLogin = () => {
    return (
        <div className="flex flex-col space-y-4">
            <a
                href="#"
                className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-[#eb4a4aef] focus:outline-none"
            >
                <span>
                    <img src={googleIcon} className='w-6' alt="googleIcon" />
                </span>
                <span
                    className="text-sm font-medium text-gray-800 group-hover:text-white"
                >Github</span>
            </a>
        </div>
    );
};

export default GoogleLogin;