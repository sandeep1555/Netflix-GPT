import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";

const PrimaryContainer = () => {
  const Allmovies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!Allmovies) return;
  const mainMovie = Allmovies[1];

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VedioTitle title={title} overview={overview} id={id} />
      <VedioBackground id={id} />
    </div>
  );
};

export default PrimaryContainer;
