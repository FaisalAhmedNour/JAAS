import Title from "../../Components/Title/Title";

const AboutUs = () => {

    const sectionTitle = "text-base font-semibold mt-5 mb-2 capitalize";
    return (
        <div className="my-3 p-5 bg-white max-w-5xl mx-auto">
            <Title title="About us"></Title>
            <p>DAM Foundation for Economic Development (DFED) was established by Dhaka Ahsania Mission (DAM) in June 2014 as a specialized economic development institution to offer financial services and other development programmes to enhance the socio-economic condition of poor people for creating their employment opportunities, raising income and increasing their asset and financial resources. It is mentionable that Microfinance programme of Dhaka Ahsania Mission (DAM) was merged with DFED. With a view to alleviating poverty through improvement of standard of living of poverty-stricken people across the country and women’s empowerment, Dhaka Ahsania Mission (DAM) started implementation of Microfinance Programme since 1993. With the passage of time, DAM’s Microfinance Programme has enabled to stand on a sustainable foundation. To give microfinance programme an institutional shape, DAM has established “DAM Foundation for Economic Development (DFED)” as a Social Enterprise of DAM.</p>
            <h4 className={sectionTitle}>Vision</h4>
            <p>The vision of DAM Foundation for Economic Development (DFED) is a society where people, particularly the disadvantaged segment, free from poverty, undergo a transformation process for fulfillment of basic rights in an atmosphere of improved socio-economic living condition.</p>
            <h4 className={sectionTitle}>Mission</h4>
            <p>DFED pursues a mission to create conditions for increased access of targeted people and communities to public and private services and enhance their capacities to maximally utilize the services particularly in the fields of socio-economic development and agriculture with gender and environment as a cross cutting theme.</p>
            <h4 className={sectionTitle}>Objectives</h4>
            <ul className="list-disc list-outside ps-12">
                <li>To address the needs of disadvantage households through financial and technical services in order that they may become self-reliant and contribute as the active citizens of Bangladesh.</li>
                <li>To plan, organize, manage and implement programs and projects in the fields of agriculture diversification, rural enterprise development, forestry, fishery, livestock and other innovative technology aided higher value added products and services.</li>
                <li>To provide support and training as may be necessary for the social and economic development of the beneficiaries so as to achieve their self-reliance and sustainable development.</li>
                <li>To provide aid and assistance to the people affected by natural calamities and disasters.</li>
                <li>To inform the DFED’s program beneficiaries about facilities and services available and provided by government, non-government organizations and private agencies and assist them in receiving these.</li>
                <li>To operate financial services of DFED based on Islamic Shariah and on terms and conditions as required under the law of the country.</li>
            </ul>
            <h4 className={sectionTitle}>future destination</h4>
            <p>DFED’s future direction will be both horizontal and vertical expansion by offering demand-driven new products. Promoting SME and Islamic Microfinance will be two thrust areas as cross-cutting approach in the next decade. Diversification of agricultural credit schemes for increased women involvement in agricultural technology and promotion of youth entrepreneurship development will be the two main planks of DFED. In the agriculture loan, specific focus will be on value chain development. As part of governance improvement, DFED would go for digitization both programmatically and institutionally by introducing mobile banking and mobile-based monitoring. Special efforts will be made to increase mobilization of internal resources by diversifying savings products and service packages. Effective marketing strategy will be developed to ensure client uptake.</p>
        </div>
    );
};

export default AboutUs;