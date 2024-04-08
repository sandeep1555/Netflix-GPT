import { useEffect } from "react";
import { AddVedioTrailer } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";
import { options } from "../Utils/useConstant";

const useMovietrailer=(id)=>
{
    const dispatch= useDispatch();

    const getMovieVedios= async()=>
    {

        const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",options)
        const json=await data.json();
        const Allvedios=json.results;
        const FilterTrailer= Allvedios.filter(vedio=> vedio.type==="Trailer");
      
        const Trailer=FilterTrailer.length ?  FilterTrailer[0] : Allvedios[0] ;
         dispatch(AddVedioTrailer(Trailer));
    }
    
    useEffect(()=>
    {
         getMovieVedios();
    },[])


}

export default useMovietrailer




