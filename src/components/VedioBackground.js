import { useEffect } from "react";
import { options } from "../Utils/useConstant";
import { useDispatch, useSelector } from "react-redux";
import { AddVedioTrailer } from "../Utils/movieSlice";

const VedioBackground=({id})=>
{
const disptach=useDispatch();
const TrailerKey=useSelector(store=>store.movies?.VedioTrailer?.key);
    const getMovieVedios= async()=>
    {
        const data=await fetch("https://api.themoviedb.org/3/movie/823464/videos?language=en-US",options)
        const json=await data.json();
        const Allvedios=json.results;
        const FilterTrailer= Allvedios.filter(vedio=> vedio.type==="Trailer");
        const Trailer=FilterTrailer.length ?  FilterTrailer[0] : Allvedios[0] ;
         console.log(Trailer);
         disptach(AddVedioTrailer(Trailer));
    }

    useEffect(()=>
    {
         getMovieVedios();
    },[])





    return(<div className="w-screen aspect-video">
 
 <iframe className="aspect-video w-screen" src={"https://www.youtube.com/embed/"+ TrailerKey+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>




    </div>)
}

export default VedioBackground