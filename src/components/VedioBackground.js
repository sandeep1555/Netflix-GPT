import { useSelector } from "react-redux";
import useMovietrailer from "../Hooks/useMovieTrailer";

const VedioBackground = ({ id }) => {
  const mute = useSelector((store) => store.movies.muteTotrailer);
  const muteval = mute ? "" : "mute=1";
  const TrailerKey = useSelector((store) => store.movies?.VedioTrailer?.key);
  useMovietrailer(id);

  return (
    <div className="w-full h-full hidden xl:block">
      <iframe
        className="w-full object-cover aspect-video"
        src={`https://www.youtube.com/embed/${TrailerKey}?autoplay=1&${muteval}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="YouTube video player"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VedioBackground;


