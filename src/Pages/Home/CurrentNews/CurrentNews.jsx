import { Link } from "react-router-dom";
import NewsCard from "../../../Components/NewsCard/NewsCard";

const newses = [
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    },
    {
        img: "http://www.dfed.org.bd/wp-content/uploads/2022/02/124549236_367190341153560_7774535394866845371_o-1536x1017.jpg",
        title: "DFED Establish A Training Center",
        description: "DFED establish a Training Center with Conference Room and Residential Facilities at its own premises. Dhaka Ahsania Mission (DAM) President and Chairperson of DFED Kazi Rafiqul Alam inaugurate the Training Center on November 09, 2020 while DAM General Secretary Dr. S. M. Khalilur Rahman, Executive Director Dr. M. Ehsanur Rahman and Chief Executive Officer of DFED Md. Asaduzzaman were also present on the occasion. The DFED Training Division is responsible for capacity building and professional development of DFED staff and the program participants through a wide range of training and exposure initiatives. DTC plays a significant role in developing new need based training courses for DFED programs. It takes special initiative to upgrade the existing modules and materials. Enhancing the quality and skills of DFED staff is a key priority of DTC. DTC has also been instrumental in disseminating organizational culture and values among the staff of DFED. DFED Training Center will also be used as commercial basis.",
        date: "1 August 2023"
    }
]

const CurrentNews = () => {
    return (
        <div className="mt-5">
            <div className="flex justify-between items-end mb-2">
                <p className="uppercase text-xl text-[#1b1646] font-semibold">Current news</p>
                <Link to="/show-all-news" className="text-sm font-bold text-[#f58811] hover:underline">Show all</Link>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    newses.map((news, index) => <NewsCard key={index} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CurrentNews;