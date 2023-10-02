import SearchBar from "../../Components/SearchBar/SearchBar";
import Title from "../../Components/Title/Title";

const SiepProject = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 py-5 grid gap-5 grid-cols-6">
            <div className="max-w-5xl mx-auto bg-white px-5 py-5 col-span-4">
                <Title title="Siep Project"></Title>
                <p className="mt-10 mb-5">Aproject entitled <span className="font-semibold">“Skills for Employment Investment Programme (SIEP)”</span> has been implemented by DAM Foundation for Economic Development (DFED). The project is funded by PKSF.  The goal of the project is to develop skilled workforce through skills training and therefore placing them in productive self and wage employment which will in turn improve their sustainable livelihood. During reporting period, a total of 109 unemployed youth received training on different trade under this project.</p>
            </div>
            <div className="col-span-2">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default SiepProject;