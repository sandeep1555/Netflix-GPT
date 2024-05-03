import { useRef, useState } from "react";
import { IMG_CDN_URL } from "../Utils/useConstant"

const MovieCards=({movie,moviePoster})=>

{


  
    const scrollToTop = () => {
     // Scroll the video container to the top
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };
    return(
        <div className="w-64 ml-5  rounded-lg" onClick={scrollToTop}  >
           <img  className="rounded-lg" src={IMG_CDN_URL+moviePoster}/>

           
           
        </div>
    )
}

export default MovieCards