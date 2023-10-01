import { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";

function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menus = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Us",
            path: "/about-us"
        },
        {
            name: "Organization",
            sub: [
                {
                    name: "LEGAL STATUS",
                    path: "/legal-status"
                },
                {
                    name: "MANAGEMENT COUNCIL",
                    path: "/management-council"
                },
                {
                    name: "ORGANOGRAM",
                    path: "/organogram"
                },
                {
                    name: "FINANCIAL OVERVIEW",
                    path: "/financial-overview"
                },
                {
                    name: "INVESTMENT BREAK-UP",
                    path: "/investment-breakup"
                },
                {
                    name: "POPULATION COVERAGE",
                    path: "/population-coverage"
                },
                {
                    name: "GEOGRAPHICAL COVERAGE",
                    path: "/geographical-coverage"
                }
            ]
        },
        {
            name: "Programs/Projects",
            sub: [
                {
                    name: "core programs",
                    sub: [
                        {
                            name: "Micro Finance Program",
                            sub: [
                                {
                                    name: "Saving Products",
                                    sub: [
                                        {
                                            name: "general savings",
                                            path: "/general-savings"
                                        },
                                        {
                                            name: "DEPOSIT PENSION SCHEME (DPS)",
                                            path: "/deposit-pension-scheme"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "ISLAMIC MICRO FINANCE PROGRAM",
                            path: "/islamic-micro-finance-program"
                        },
                        {
                            name: "MICRO ENTERPRISE DEVELOPMENT PROGRAM",
                            path: "/micro-enterprise-development-program"
                        },
                        {
                            name: "AGRICULTURAL DEVELOPMENT PROGRAM",
                            path: "/agricultural-development-program"
                        },
                        {
                            name: "PROGRAM FOR ULTRA POOR",
                            path: "/program-for-ultra-poor"
                        }
                    ]
                },
                {
                    name: "projects",
                    sub: [
                        {
                            name: "enrich",
                            path: "/enrich"
                        },
                        {
                            name: "rojgar",
                            path: "/rojgar"
                        },
                        {
                            name: "BEGGARS REHABILITATION PROJECT",
                            path: "/beggars-rehabilitation-project"
                        },
                        {
                            name: "AGENT MAKING PROJECT",
                            path: "/agent-making-project"
                        },
                        {
                            name: "MUNGBEAN VALUE CHAIN DEVELOPMENT PROJECT",
                            path: "/mungbean-value-chain-development-project"
                        },
                        {
                            name: "SIEP PROJECT",
                            path: "/siep-project"
                        },
                        {
                            name: "SDL PROJECT",
                            path: "sdl-project"
                        }
                    ]
                }
            ]
        },
        {
            name: "Development Partners",
            sub: [
                {
                    name: "PUBALI LTD",
                    path: "/pubali-ltd"
                },
                {
                    name: "SOUTHEAST BANK LIMITED",
                    path: "/southeast-bank-limited"
                },
                {
                    name: "NATIONAL CREDIT AND COMMERCE BANK LIMITED",
                    path: "/national-credit-and-commerce-bank-limited"
                },
                {
                    name: "COMMERCIAL OF CEYLON",
                    path: "/commercial-of-ceylon"
                },
                {
                    name: "PALLI KARMA-SAHAYAK FOUNDATION (PKSF)",
                    path: "/palli-karma-sahayak-foundation"
                },
                {
                    name: "SGS BANGLADESH",
                    path: "/sgs-bangladesh"
                },
                {
                    name: "FIRST SECURITY ISLAMI BANK LTD",
                    path: "/first-security-islami-bank-ltd"
                },
                {
                    name: "DUTCH BANGLA BANK LIMITED",
                    path: "/dutch-bangla-bank-limited"
                },
                {
                    name: "TRUST LIMITED",
                    path: "/trust-limited"
                },
                {
                    name: "MIDLAND MNK LIMITED",
                    path: "/midland-mnk-limited"
                },
                {
                    name: "CARE BANGLADESH",
                    path: "/care-bangladesh"
                },
                {
                    name: "WIN ROCK INTERNATIONAL",
                    path: "/win-rock-international"
                }
            ]
        },
        {
            name: "Get Invited",
            sub: [
                {
                    name: "Jobs",
                    path: "/jobs"
                },
                {
                    name: "tender",
                    path: "/tender"
                },
                {
                    name: "internship",
                    path: "/internship"
                }
            ]
        },
        {
            name: "Gallery",
            sub: [
                {
                    name: "Photo gallery",
                    path: "/photo-gallery"
                },
                {
                    name: "video gallery",
                    path: "/video-gallery"
                }
            ]
        },
        {
            name: "Contact us",
            path: "/contact-us"
        }
    ]
    
    let level = 0;

    return (
        <nav className="bg-[#254b74] h-[40px]">
            <div
                className="container grid grid-cols-2 items-center max-w-5xl mx-0 lg:mx-auto"
            >
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden ml-5 lg:ml-0 order-1"
                >
                    <p className="py-2 text-white font-semibold">Menu</p>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} lg:block order-3 col-span-2 lg:relative`}>
                    <div className="flex flex-col lg:flex-row">
                        {
                            menus.map((items, index) => <MenuItems
                                key={index}
                                items={items}
                                level={level}
                            ></MenuItems>)
                        }
                    </div>
                </div>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden mr-5 lg:mr-0 order-2 text-right"
                >
                    <i className="fa-solid fa-bars text-white"></i>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;
