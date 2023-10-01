import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const title = news?.title;
    const description = news?.description.slice(0, 74);

    return (
        <div className=" bg-base-100 shadow-xl rounded-md">
            <figure><img className="rounded-md" src={news?.img} alt="Shoes" /></figure>
            <div className="card-body px-2 pb-3">
                <pre
                    className="overflow-hidden text-ellipsis font-semibold my-1 font-sans bg-white"
                >{title}</pre>
                <p>
                    {description}...
                    <Link to={`/single-news`} className="btn text-xs text-[#254b74] cursor-pointer hover:underline">Read more</Link>
                </p>
            </div>
        </div>
    );
};

export default NewsCard;