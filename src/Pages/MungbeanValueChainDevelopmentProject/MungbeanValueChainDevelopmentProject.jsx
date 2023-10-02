import SearchBar from "../../Components/SearchBar/SearchBar";
import Title from "../../Components/Title/Title";

const MungbeanValueChainDevelopmentProject = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 py-5 grid gap-5 grid-cols-6">
            <div className="max-w-5xl mx-auto bg-white px-5 py-5 col-span-4">
                <Title title="Mungbean Value Chain Development Project"></Title>
                <p className="mt-10 mb-5">DAM Foundation for Economic Development has been implementing <span className="font-semibold">“Muugbean Value Chain Development Project”</span> with the financial assistance of PKSF at BargunaSadarUpazila under Barguna District since 2016. With aview to promoting safe vegetables for consumersthrough developing capacity of vegetables farmers, the project has been implementing. The project focuses on selected crops like Mungbean to promote the variety “BARI-6” at community level. The project will be implemented with three years period since 2016. During 2016-17, 102 master trainers trained under this project. Later on, they provided training to 3000 farmers. The key factors of the training were seed selection, fertilizer application, weeding and irrigation, pest control and management and post-harvest management. 3000 farmers provided training separately on each factor. The project established twenty demonstration plots at project location. The project also observed twenty farmers Field Day. The project signed accord with a Japanese Company named Grameen Euglana to export the “BARI-6”. As a significant achievement, the project exported farmers produced five-ton Mungbean to Japan during this period.</p>
            </div>
            <div className="col-span-2">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default MungbeanValueChainDevelopmentProject;