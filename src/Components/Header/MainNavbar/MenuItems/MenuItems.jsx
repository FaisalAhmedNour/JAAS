import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MenuItems = ({ items, level }) => {
    const [open, isOpen] = useState(false);
    level = level + 1;
    const location = useLocation();
    const route = location.pathname;

    if (items.sub) {
        return (
            <div className="text-white">
                <div
                    className={`bg-[#254b74] hover:bg-[#376ca6] uppercase flex flex-col lg:flex-row lg:mr-[1px]`}
                    onMouseEnter={() => isOpen(true)}
                    onMouseLeave={() => isOpen(false)}
                >
                    <p className="w-full py-2 px-5 lg:px-1 flex text-base justify-between items-end">
                        <span>{items.name}</span>
                        <span>
                            {
                                level > 1 ?
                                    <i className="fa-solid fa-chevron-right text-xs"></i> :
                                    <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
                            }
                        </span>
                    </p>
                    <div
                        className={`menubar-content lg:absolute flex flex-col w-full lg:w-60 ${level > 1 ? open ? "left-[0px] lg:left-[240px]" : "hidden" : open ? "top-[40.5px]" : "hidden"}`}
                    >
                        {items.sub.map((child, index) => <MenuItems key={index} items={child} level={level} />)}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Link to={`${items.path}`} className={`py-2 px-5 lg:px-1 flex text-base bg-[#254b74] hover:bg-[#376ca6] uppercase lg:mr-[1px] text-white ${route === items.path ? "bg-[#376ca6]" : ""}`}>
                {items.name}
            </Link>
        )
    }
};

export default MenuItems;