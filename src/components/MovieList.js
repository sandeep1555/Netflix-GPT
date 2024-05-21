import { Link } from "react-router-dom";
import MovieCards from "./MovieCards";
import { useDispatch, useSelector } from "react-redux";
import { changeTopgptSearch } from "../Utils/gptSlice";

const MovieList = ({ title, movies }) => {
  const changegptPage = useSelector((store) => store.gpt.gptSearch);
  const dispatch = useDispatch();
  const moviecardClick = () => {
    if (changegptPage) {
      dispatch(changeTopgptSearch());
    }
  };

  return (
    movies && (
      <div className=" p-4  w-screen">
        <h1 className="text-3xl my-2 text-white font-bold ">{title}</h1>
        <div className="flex overflow-x-scroll  hide-scrollbar ">
          <div
            className="flex overflow-y-hidden  hide-scrollbar"
            onClick={moviecardClick}
          >
            {movies.map((movie) => (
              <Link to={"/watch?v=" + movie.id}>
                <MovieCards key={movie.id} moviePoster={movie.poster_path} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
