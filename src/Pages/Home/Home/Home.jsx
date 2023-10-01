import Banner from "../Banner/Banner";
import CurrentNews from "../CurrentNews/CurrentNews";

const Home = () => {
    return (
        <div className="grid grid-cols-4 max-w-5xl mx-auto py-5">
            <div className="col-span-3 px-5 bg-white py-5">
                <Banner></Banner>
                <CurrentNews></CurrentNews>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;