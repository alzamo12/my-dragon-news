import Marquee from "react-fast-marquee";

const LatesNews = () => {
    return (
        <div className="flex items-center bg-base-200 p-3 gap-2">
            <button className="btn-secondary btn text-base-100">Latest</button>
            <Marquee speed={100} pauseOnHover={true} autoFill={true} className="font-bold mr-5">
                <p className="mr-12"> Match Highlights: Germany vs Spain — as it happened </p>
            </Marquee>
        </div>
    );
};

export default LatesNews;