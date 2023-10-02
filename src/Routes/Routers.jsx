import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/Signup";
import ShowAllNews from "../Pages/ShowAllNews/ShowAllNews";
import SingleNews from "../Pages/SingleNews/SingleNews";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LegalStatus from "../Pages/LegalStatus/LegalStatus";
import ManagementCouncil from "../Pages/ManagementCouncil/ManagementCouncil";
import Organogram from "../Pages/Organogram/Organogram";
import FinancialOverview from "../Pages/FinancialOverview/FinancialOverview";
import InvestmentBreakup from "../Pages/InvestmentBreakup/InvestmentBreakup";
import PopulationCoverage from "../Pages/PopulationCoverage/PopulationCoverage";
import GeographicalCoverage from "../Pages/GeographicalCoverage/GeographicalCoverage";
import GeneralSavings from "../Pages/GeneralSavings/GeneralSavings";
import DepositPensionScheme from "../Pages/DepositPensionScheme/DepositpensionScheme";
import IslamicMicroFinanceProgram from "../Pages/IslamicMicroFinanceProgram/IslamicMicroFinanceProgram";
import MicroEnterpriseDevelopmentProgram from "../Pages/MicroEnterpriseDevelopmentProgram/MicroEnterpriseDevelopmentProgram";
import AgriculturalDevelopmentProgram from "../Pages/AgriculturalDevelopmentProgram/AgriculturalDevelopmentProgram";
import ProgramForUltraPoor from "../Pages/ProgramForUltraPoor/ProgramForUltraPoor";
import Enrich from "../Pages/Enrich/Enrich";
import Rojgar from "../Pages/Rojgar/Rojgar";
import BeggarsRehabilitationProject from "../Pages/BeggarsRehabilitationProject/BeggarsRehabilitationProject";
import AgentMakingProject from "../Pages/AgentMakingProject/AgentMakingProject";
import MungbeanValueChainDevelopmentProject from "../Pages/MungbeanValueChainDevelopmentProject/MungbeanValueChainDevelopmentProject";
import SiepProject from "../Pages/SiepProject/SiepProject";
import SdlProject from "../Pages/SdlProject/SdlProject";
import PubaliLtd from "../Pages/PubaliLtd/PubaliLtd";
import SoutheastBankLimited from "../Pages/SoutheastBankLimited/SoutheastBankLimited";
import NationalCreditAndCommerceBank from "../Pages/NationalCreditAndCommerceBankLimited/NationalCreditAndCommerceBank";
import CommercialOfCeylon from "../Pages/CommercialOfCeylon/CommercialOfCeylon";
import PalliKarmaSahayakFoundation from "../Pages/PalliKarmaSahayakFoundation/PalliKarmaSahayakFoundation";
import SgsBangladesh from "../Pages/SgsBangladesh/SgsBangladesh";
import FirstSecurityIslamiBankLtd from "../Pages/FirstSecurityIslamiBankLtd/FirstSecurityIslamiBankLtd";
import DutchBanglaBank from "../Pages/DutchBanglaBank/DutchBanglaBank";
import TrustBankLimited from "../Pages/TrustBankLimited/TrustBankLimited";
import CareBank from "../Pages/CareBank/CareBank";
import WinRockInternational from "../Pages/WinRockInternational/WinRockInternational";
import MidlandBankLimited from "../Pages/MidlandBankLimited/MidlandBankLimited";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/show-all-news",
                element: <ShowAllNews></ShowAllNews>
            },
            {
                path: "/single-news",
                element: <SingleNews></SingleNews>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/legal-status",
                element: <LegalStatus></LegalStatus>
            },
            {
                path: "/management-council",
                element: <ManagementCouncil></ManagementCouncil>
            },
            {
                path: "/organogram",
                element: <Organogram></Organogram>
            },
            {
                path: "/financial-overview",
                element: <FinancialOverview></FinancialOverview>
            },
            {
                path: "/investment-breakup",
                element: <InvestmentBreakup></InvestmentBreakup>
            },
            {
                path: "/population-coverage",
                element: <PopulationCoverage></PopulationCoverage>
            },
            {
                path: "/geographical-coverage",
                element: <GeographicalCoverage></GeographicalCoverage>
            },
            {
                path: "/general-savings",
                element: <GeneralSavings></GeneralSavings>
            },
            {
                path: "/deposit-pension-scheme",
                element: <DepositPensionScheme></DepositPensionScheme>
            },
            {
                path: "/islamic-micro-finance-program",
                element: <IslamicMicroFinanceProgram></IslamicMicroFinanceProgram>
            },
            {
                path: "/micro-enterprise-development-program",
                element: <MicroEnterpriseDevelopmentProgram></MicroEnterpriseDevelopmentProgram>
            },
            {
                path: "/agricultural-development-program",
                element: <AgriculturalDevelopmentProgram></AgriculturalDevelopmentProgram>
            },
            {
                path: "/program-for-ultra-poor",
                element: <ProgramForUltraPoor></ProgramForUltraPoor>
            },
            {
                path: "/enrich",
                element: <Enrich></Enrich>
            },
            {
                path: "/rojgar",
                element: <Rojgar></Rojgar>
            },
            {
                path: "/beggars-rehabilitation-project",
                element: <BeggarsRehabilitationProject></BeggarsRehabilitationProject>
            },
            {
                path: "/agent-making-project",
                element: <AgentMakingProject></AgentMakingProject>
            },
            {
                path: "/mungbean-value-chain-development-project",
                element: <MungbeanValueChainDevelopmentProject></MungbeanValueChainDevelopmentProject>
            },
            {
                path: "/siep-project",
                element: <SiepProject></SiepProject>
            },
            {
                path: "/sdl-project",
                element: <SdlProject></SdlProject>
            },
            {
                path: "/pubali-ltd",
                element: <PubaliLtd></PubaliLtd>
            },
            {
                path: "/southeast-bank-limited",
                element: <SoutheastBankLimited></SoutheastBankLimited>
            },
            {
                path: "/national-credit-and-commerce-bank-limited",
                element: <NationalCreditAndCommerceBank></NationalCreditAndCommerceBank>
            },
            {
                path: "/commercial-of-ceylon",
                element: <CommercialOfCeylon></CommercialOfCeylon>
            },
            {
                path: "/palli-karma-sahayak-foundation",
                element: <PalliKarmaSahayakFoundation></PalliKarmaSahayakFoundation>
            },
            {
                path: "/sgs-bangladesh",
                element: <SgsBangladesh></SgsBangladesh>
            },
            {
                path: "/first-security-islami-bank-ltd",
                element: <FirstSecurityIslamiBankLtd></FirstSecurityIslamiBankLtd>
            },
            {
                path: "/dutch-bangla-bank-limited",
                element: <DutchBanglaBank></DutchBanglaBank>
            },
            {
                path: "/trust-limited",
                element: <TrustBankLimited></TrustBankLimited>
            },
            {
                path: "/midland-mnk-limited",
                element: <MidlandBankLimited></MidlandBankLimited>
            },
            {
                path: "/care-bangladesh",
                element: <CareBank></CareBank>
            },
            {
                path: "/win-rock-international",
                element: <WinRockInternational></WinRockInternational>
            },
            {
                path: "/jobs",
                element: <Home></Home>
            },
            {
                path: "/tender",
                element: <Home></Home>
            },
            {
                path: "/internship",
                element: <Home></Home>
            },
            {
                path: "/photo-gallery",
                element: <Home></Home>
            },
            {
                path: "/video-gallery",
                element: <Home></Home>
            },
            {
                path: "/contact-us",
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);