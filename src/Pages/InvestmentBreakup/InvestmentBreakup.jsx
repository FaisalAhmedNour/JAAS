import Title from "../../Components/Title/Title";

const InvestmentBreakup = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white px-5 my-5 py-5">
            <Title title="Investment Break-Up"></Title>
            <p className="my-10">Developing Micro Enterprises and Supporting Agricultural Diversification is the key area of investment in Microfinance Programme of DFED. About 65% investment goes to agriculture sector out of total investment. Product wise overall investments break up and investment in different agriculture sectors has presented in following charts.</p>
            <div className="grid grid-cols-2 gap-5 mx-5">
                <img src="http://www.dfed.org.bd/wp-content/uploads/2016/04/investmentBreakup.jpg" alt="" />
                <img src="http://www.dfed.org.bd/wp-content/uploads/2016/04/investmentBreakupAg.jpg" alt="" />
            </div>
        </div>
    );
};

export default InvestmentBreakup;