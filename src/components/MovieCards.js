import { IMG_CDN_URL } from "../Utils/useConstant"

const MovieCards=({movie,moviePoster})=>
{
    return(
        <div className="w-48">
             <img src={IMG_CDN_URL+moviePoster}/>
        </div>
    )
}

export default MovieCards