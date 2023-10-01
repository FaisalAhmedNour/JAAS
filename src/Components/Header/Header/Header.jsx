import TopNavbar from "../TopNavbar/TopNavbar";
import MainNavbar from "../MainNavbar/MainNavbar/MainNavbar"

const Header = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            {/* <Banner></Banner> */}
            <MainNavbar></MainNavbar>
        </div>
    );
};

export default Header;