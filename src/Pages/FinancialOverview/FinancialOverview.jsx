import Title from "../../Components/Title/Title";

const FinancialOverview = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white px-5 my-5 py-5">
            <Title title="Financial Overview 2022-2023"></Title>
            <div>
                <p className="my-10">DFED’s major sources of revolving loan fund are Loans from PKSF, Loans from commercial Bank, group member’s savings fund, capital fund and Others Fund. During FY 2022-23, profit margin of DFED stands at 28.82% of total income amounting to 1155.48 million BDT. Out of total income, 97.68% comes from service charge. Expenditure analysis of FY 2022-23 shows that four major fields of expense were for operating expenses 11%, financial expenses 19%, 41% expenses were to meet administrative expenses and 29% for other expenses. DFED growth in terms of financial turnover of last five years shows a steady position creating a sound base for future organizational development.</p>
                <div className="grid grid-cols-2 gap-5 mx-5">
                    <img src="http://www.dfed.org.bd/wp-content/uploads/2023/08/image001.png" alt="" />
                    <img src="http://www.dfed.org.bd/wp-content/uploads/2023/08/image003.png" alt="" />
                    <img src="http://www.dfed.org.bd/wp-content/uploads/2023/08/image005.png" alt="" />
                    <img src="http://www.dfed.org.bd/wp-content/uploads/2023/08/image007.png" alt="" />
                    <img src="http://www.dfed.org.bd/wp-content/uploads/2023/08/image009.png" alt="" />
                    <img src="http://www.dfed.org.bd/wp-content/uploads/2023/08/image011.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FinancialOverview;