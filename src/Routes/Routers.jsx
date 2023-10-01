import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/Signup";
import ShowAllNews from "../Pages/ShowAllNews/ShowAllNews";
import SingleNews from "../Pages/SingleNews/SingleNews";

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
                element: <Home></Home>
            },
            {
                path: "/legal-status",
                element: <Home></Home>
            },
            {
                path: "/management-council",
                element: <Home></Home>
            },
            {
                path: "/organogram",
                element: <Home></Home>
            },
            {
                path: "/financial-overview",
                element: <Home></Home>
            },
            {
                path: "/investment-breakup",
                element: <Home></Home>
            },
            {
                path: "/population-coverage",
                element: <Home></Home>
            },
            {
                path: "/geographical-coverage",
                element: <Home></Home>
            },
            {
                path: "/general-savings",
                element: <Home></Home>
            },
            {
                path: "/deposit-pension-scheme",
                element: <Home></Home>
            },
            {
                path: "/islamic-micro-finance-program",
                element: <Home></Home>
            },
            {
                path: "/micro-enterprise-development-program",
                element: <Home></Home>
            },
            {
                path: "/agricultural-development-program",
                element: <Home></Home>
            },
            {
                path: "/program-for-ultra-poor",
                element: <Home></Home>
            },
            {
                path: "/enrich",
                element: <Home></Home>
            },
            {
                path: "/rojgar",
                element: <Home></Home>
            },
            {
                path: "/beggars-rehabilitation-project",
                element: <Home></Home>
            },
            {
                path: "/agent-making-project",
                element: <Home></Home>
            },
            {
                path: "/mungbean-value-chain-development-project",
                element: <Home></Home>
            },
            {
                path: "/siep-project",
                element: <Home></Home>
            },
            {
                path: "/sdl-project",
                element: <Home></Home>
            },
            {
                path: "/pubali-ltd",
                element: <Home></Home>
            },
            {
                path: "/southeast-bank-limited",
                element: <Home></Home>
            },
            {
                path: "/national-credit-and-commerce-bank-limited",
                element: <Home></Home>
            },
            {
                path: "/commercial-of-ceylon",
                element: <Home></Home>
            },
            {
                path: "/palli-karma-sahayak-foundation",
                element: <Home></Home>
            },
            {
                path: "/sgs-bangladesh",
                element: <Home></Home>
            },
            {
                path: "/first-security-islami-bank-ltd",
                element: <Home></Home>
            },
            {
                path: "/dutch-bangla-bank-limited",
                element: <Home></Home>
            },
            {
                path: "/trust-limited",
                element: <Home></Home>
            },
            {
                path: "/midland-mnk-limited",
                element: <Home></Home>
            },
            {
                path: "/care-bangladesh",
                element: <Home></Home>
            },
            {
                path: "/win-rock-international",
                element: <Home></Home>
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