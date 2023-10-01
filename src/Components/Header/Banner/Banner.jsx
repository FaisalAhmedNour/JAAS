import './Banner.css'

const Banner = () => {
    return (
        <div className='py-5 max-w-5xl mx-auto flex justify-between'>
            <div className="flex gap-3 mt-4">
                <div>
                    <img src="http://www.dfed.org.bd/wp-content/themes/child-simple-east/images/dam-logo.png" alt="" />
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-[15px] text-[#fb8906] font">Former Micro Finance Programme of Dhaka Ahsania Mission</p>
                    <h3 className="text-2xl">DAM Foundation for Economic Development</h3>
                    <p className="text-[#fb8906] text-lg font">[An Institution of Dhaka Ahsania Mission]</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mb-5 mt-auto mr-3'>
                    <p className='text-lg font'>Our Inspiration</p>
                    <p className='text-xs text-[#fb8906]'>Khan Bahadur Ahsanullah (R.)</p>
                </div>
                <div className='w-32'>
                    <img className='w-full' src="http://www.dfed.org.bd/wp-content/themes/child-simple-east/images/founder.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;