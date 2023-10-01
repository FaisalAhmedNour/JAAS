import { Link } from "react-router-dom";
import './TopNavbar.css';
import logo from '../../../assets/logo.jpg'

const TopNavbar = () => {
    return (
        <div className="bg-[white]">
            <div className="flex justify-between max-w-5xl mx-auto">
                <div className="w-40">
                    <img className="w-full" src={logo} alt="" />
                </div>
                <div className="flex flex-col items-end py-2">
                    <div className="flex gap-2  text-sm text-[#d0892f]">
                        <Link><i className="fa-solid fa-bars mr-1"></i>Jobs</Link> |
                        <Link><i className="fa-solid fa-bars mr-1"></i>Tender</Link> |
                        <Link><i className="fa-regular fa-envelope mr-1"></i>Webmail</Link>
                    </div>
                    <div className=" text-sm text-[#d0892f]">
                        <p>Phone:(880-2)-55010300 Fax:(880-2)-8113010, 9144030  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;