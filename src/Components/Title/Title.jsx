
const Title = ({title}) => {
    return (
        <h2 className="uppercase text-center text-2xl mb-5 w-[280px] mx-auto">
            <hr className="font-xl border-t-2 border-[#f98807]" />
            <span>{title}</span>
            <hr className="font-xl border-t-2 border-[#f98807]" />
        </h2>
    );
};

export default Title;