import SearchBar from "../../Components/SearchBar/SearchBar";
import Title from "../../Components/Title/Title";

const LegalStatus = () => {
    return ( 
        <div className="grid grid-cols-6 gap-5 my-10 max-w-5xl mx-auto">
            <div className="bg-white p-5 col-span-4">
                <Title title="Legal Status"></Title>
                <ul className="list-disc list-outside ps-10 text-sm">
                    <li>DFED is Registered under the Societies Act: Registration no. S-11775</li>
                    <li>Registered with the MRA: License no. DFED- 00109-02243-00747</li>
                </ul>
            </div>
            <div className="col-span-2">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default LegalStatus;