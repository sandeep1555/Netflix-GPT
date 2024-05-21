import { IMG_CDN_URL } from "../Utils/useConstant";

const MovieCards = ({ moviePoster }) => {
  if (!moviePoster) return null;

  const scrollToTop = () => {
    // Scroll the video container to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="w-64 ml-5  rounded-lg hover:scale-110 p-2 "
      onClick={scrollToTop}
    >
      <img alt="movieposter" className="rounded-lg" src={IMG_CDN_URL + moviePoster} />
    </div>
  );
};

export default MovieCards;
