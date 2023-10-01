import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#254b74] ">
            <div className=" max-w-5xl mx-auto text-white font-semibold grid grid-cols-4">
                <div className="col-span-3 my-8">
                    <p>© Copyright DAM Foundation for Economic Development. All right reserved</p>
                    <p>Design & Developed By <Link target="blank" to="https://faisalahmednour.netlify.app">Faisal Ahmed</Link></p>
                </div>
                <div className="my-8 flex justify-center items-center">
                    <p className="mr-2">Follow Us</p>
                    <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                            <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                        </svg>
                    </Link>
                    <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                            <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;