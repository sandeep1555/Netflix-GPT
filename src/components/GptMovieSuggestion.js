import {  useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestion = () => {
  const movieName = useSelector((store) => store.gpt.movieName);
  const movieInfo = useSelector((store) => store.gpt.movieInfo);

  return (
    <div>
      <div className="bg-gray-900  mt-[100px] rounded-lg overflow-x-hidden">
        {movieName &&
          movieName.map((moviename, index) => (
            <MovieList
              title={moviename}
              key={moviename}
              movies={movieInfo[index]}
            />
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
