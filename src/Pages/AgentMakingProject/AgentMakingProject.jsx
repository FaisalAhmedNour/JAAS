import SearchBar from "../../Components/SearchBar/SearchBar";
import Title from "../../Components/Title/Title";

const AgentMakingProject = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 py-5 grid gap-5 grid-cols-6">
            <div className="max-w-5xl mx-auto bg-white px-5 py-5 col-span-4">
                <Title title="Agent Banking Project"></Title>
                <p className="mt-10 mb-5">In order to maximize the access of huge un-banked population into the banking system, anagreement is signed between DAM Foundation &#40;DFED&#41; and Bank Asia for Agent Banking on March 16, 2017. Under this agreement, DFED will operate two Agent Bank Outlets at Jessore. The agent outlets will provide banking services such as opening of customer accounts using biometric system, accepting cash deposits and withdrawal, accepting bills, payment of foreign remittance, online fund transfer,DPS, ATM card service etc.</p>
            </div>
            <div className="col-span-2">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default AgentMakingProject;