import Title from "../../Components/Title/Title";

const ManagementCouncil = () => {

    const councils = [
        {
            name: "Mr. Kazi Rafiqul Alam",
            img: "http://www.dfed.org.bd/management_council/kaziRafiqulAlam.jpg",
            Designation: "Chief Advisor"
        },
        {
            name: "Mr. Kazi Rafiqul Alam",
            img: "http://www.dfed.org.bd/management_council/kaziRafiqulAlam.jpg",
            Designation: "Chief Advisor"
        },
        {
            name: "Mr. Kazi Rafiqul Alam",
            img: "http://www.dfed.org.bd/management_council/kaziRafiqulAlam.jpg",
            Designation: "Chief Advisor"
        },
        {
            name: "Mr. Kazi Rafiqul Alam",
            img: "http://www.dfed.org.bd/management_council/kaziRafiqulAlam.jpg",
            Designation: "Chief Advisor"
        },
        {
            name: "Mr. Kazi Rafiqul Alam",
            img: "http://www.dfed.org.bd/management_council/kaziRafiqulAlam.jpg",
            Designation: "Chief Advisor"
        },
        {
            name: "Mr. Kazi Rafiqul Alam",
            img: "http://www.dfed.org.bd/management_council/kaziRafiqulAlam.jpg",
            Designation: "Chief Advisor"
        },
    ]

    return (
        <div className="max-w-5xl mx-auto bg-white my-5 py-5">
            <Title title="Management Council"></Title>
            <div className="grid grid-cols-4 gap-5 mx-5 mt-5">
                {
                    councils.map((council, index) => <div
                        key={index}
                        className="card bg-base-100 shadow-xl"
                    >
                        <figure className="w-full"><img className="mx-auto" src={council.img} alt="Shoes" /></figure>
                        <div className="card-body mx-5 my-3">
                            <h2 className="card-title font-medium">{council.name}</h2>
                            <p className="font-semibold text-sm">{council.Designation}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManagementCouncil;