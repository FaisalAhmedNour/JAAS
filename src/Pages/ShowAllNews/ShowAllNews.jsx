import NewsCard from "../../Components/NewsCard/NewsCard";
import Title from "../../Components/Title/Title";

const ShowAllNews = () => {

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

    return (
        <div className="max-w-5xl mx-auto my-5 py-5 px-5 bg-[white]">
            <Title title="current news" />
            <div className="grid grid-cols-4 gap-5">
                {
                    newses.map((news, index) => <NewsCard key={index} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default ShowAllNews;