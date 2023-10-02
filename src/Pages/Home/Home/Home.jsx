import Banner from "../Banner/Banner";
import CurrentNews from "../CurrentNews/CurrentNews";

const Home = () => {
    return (
        <div className="grid grid-cols-4 max-w-5xl mx-auto py-5">
            <div className="col-span-3 px-5 bg-white py-5">
                <Banner></Banner>
                <CurrentNews></CurrentNews>
            </div>
            <div className="flex flex-col">
                <div className="h-60"></div>
                <div className="border-l border-[#1d0909]">
                    <img className="w-full" src="http://dfed.org.bd/wp-content/themes/child-simple-east/images/citigencharter.png" alt="" />
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg mx-2 text-[#5e5151]">Notice Board</h3>
                        <button className="text-xs font-semibold text-[#fb850b] hover:underline">All Notice</button>
                    </div>
                    <hr className="border-1 border-[#5e5151] ms-1" />
                    <div className="h-60">

                    </div>
                </div>
                <div className="border-l border-[#1d0909]">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg mx-2 text-[#5e5151]">CASE STORY</h3>
                        <button className="text-xs font-semibold text-[#fb850b] hover:underline">More Case</button>
                    </div>
                    <hr className="border-1 border-[#5e5151] ms-1" />
                    <div className="grid grid-cols-1">
                        <div className="border flex px-1  my-2 gap-1">
                            <img className="w-20" src="http://www.dfed.org.bd/wp-content/uploads/2015/12/Pic-Cricket-Bat-1-150x150.jpg" alt="" />
                            <div className="pt-1">
                                <h5 className="text-xs text-gray-700 font-semibold">Conquering poverty...</h5>
                                <p className="text-xs text-gray-700">Here is an interesting tale of a simple rural woman who has conquered poverty by... </p>
                            </div>
                        </div>
                        <div className="border flex px-1  my-2 gap-1">
                            <img className="w-20" src="http://www.dfed.org.bd/wp-content/uploads/2015/12/Pic-Cricket-Bat-1-150x150.jpg" alt="" />
                            <div className="pt-1">
                                <h5 className="text-xs text-gray-700 font-semibold">Conquering poverty...</h5>
                                <p className="text-xs text-gray-700">Here is an interesting tale of a simple rural woman who has conquered poverty by...</p>
                            </div>
                        </div>
                        <div className="border flex px-1  my-2 gap-1">
                            <img className="w-20" src="http://www.dfed.org.bd/wp-content/uploads/2015/12/Pic-Cricket-Bat-1-150x150.jpg" alt="" />
                            <div className="pt-1">
                                <h5 className="text-xs text-gray-700 font-semibold">Conquering poverty...</h5>
                                <p className="text-xs text-gray-700">Here is an interesting tale of a simple rural woman who has conquered poverty by...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;