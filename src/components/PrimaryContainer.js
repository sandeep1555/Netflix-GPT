import { useSelector } from "react-redux"
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";

const PrimaryContainer=()=>
{

    const Allmovies=useSelector(store=>store.movies?.nowPlayingMovies);

       if(!Allmovies) return;
    const mainMovie=Allmovies[0];
    console.log(mainMovie);
    const {title,overview,id}=mainMovie;
   
    return(<div>
       <VedioTitle title={title} overview={overview}/>
       <VedioBackground id={id} />
    </div>)
}

export default PrimaryContainer