import { useSelector } from "react-redux";
import useMovietrailer from "../Hooks/useMovieTrailer";

const VedioBackground=({id})=>
{
const mute=useSelector(store=>store.movies.muteTotrailer);
const muteval=mute?"":"mute=1";
console.log(muteval)
const TrailerKey=useSelector(store=>store.movies?.VedioTrailer?.key);
   useMovietrailer(id);

    return(<div className="w-screen ">

 
 <iframe className="aspect-video w-screen" src={"https://www.youtube.com/embed/"+ TrailerKey+"?&autoplay=1&showinfo=1&"+muteval+"&playlist="+TrailerKey} 
        allowFullScreen title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>




    </div>)
}

export default VedioBackground



