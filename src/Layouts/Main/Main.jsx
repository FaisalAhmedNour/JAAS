import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-[#f1f1f5]">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;