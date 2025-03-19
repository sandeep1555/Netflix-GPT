import { useSelector } from "react-redux";
import { BG_URL } from "../Utils/useConstant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  const movieName = useSelector((store) => store.gpt.movieName);
  return (
    <div>
      <div className="absolute  -z-20">
        <img
          className="bg-opacity-25 bg-black  w-screen h-screen  "
          src={BG_URL}
          alt="netflix-bg"
        />
      </div>
      <GptSearchBar />

      {movieName && <GptMovieSuggestion />}
    </div>
  );
};

export default GptSearchPage;
