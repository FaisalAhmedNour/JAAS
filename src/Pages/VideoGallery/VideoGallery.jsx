import Title from "../../Components/Title/Title";

const VideoGallery = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white px-5 my-5 py-5">
            <Title title="Video Gallery"></Title>
            <div className="grid grid-cols-4 gap-5 mb-12">
                <div className="h-36">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fzv-rgwcFKk?si=HSlyWaczk_rAl5Iz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="h-36">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Fzv-rgwcFKk?si=HSlyWaczk_rAl5Iz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;