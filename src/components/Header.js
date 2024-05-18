import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { adduser, removeuser } from "../Utils/userSlice";
import { LOGO_URL, SUPPORTED_LANG, options } from "../Utils/useConstant";
import { changeTopgptSearch } from "../Utils/gptSlice";
import { changelanguage } from "../Utils/configSlice";
import { getSearchResult } from "../Utils/movieSlice";



const Header=()=>
{
  const dispatch=useDispatch();
  const user=useSelector(store => store.user);
  const  changegptPage=useSelector(store=>store.gpt.gptSearch);
  const [searchButton,setSearchButton]=useState(false);
  const [searchQuery,setSearchQuery]=useState(null);
    const navigate=useNavigate();
    const handleSignout=()=>
    {
signOut(auth).then(() => {
  removeuser(user);
  navigate("/");
  window.location.reload();


}).catch((error) => {
  
});
    }


    useEffect(()=>
    {

 const unsubsribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,email,displayName,photoURL}  = user;
    dispatch(adduser({uid:uid,email: email,displayName:displayName,photoURL: photoURL}));
    navigate("/browse");
   
  } else {
    dispatch(removeuser());
    navigate("/");
    
  }
  return ()=> unsubsribe();
});
    },[]);

    const handleGptSearch=()=>
    {

    if( changegptPage)
    {
      navigate("/");
      dispatch(changeTopgptSearch(false));
     
    }  
    else
   { 
    dispatch(changeTopgptSearch(true));
  } ;


    }

    const handleLanguageChange=(e)=>
    {
         dispatch(changelanguage(e.target.value))
    }

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const searchClickHandle=()=>
  {
    setSearchButton(!searchButton);
  }
  console.log(searchQuery);
const getSearchQuery=async(event)=>
{
  console.log(event)
  if(event.key==='Enter')
  {
  const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+searchQuery,options);
  const json=await data.json();
  dispatch(getSearchResult(json.results));

      navigate("/search?q="+searchQuery);
     }

}



    return(<div className={` w-screen  px-8 py-2 ${isScrolled ?   'bg-black':'bg-gradient-to-b from-black  to-transparent' }   flex justify-between items-center fixed z-50 h-[100px]`} >
        <div>
<Link to={"/"}><img  className="w-44 cursor-pointer" src={LOGO_URL} alt="logo" onClick={()=> dispatch(changeTopgptSearch(false))}/></Link>
</div>
<div className="text-white">
  <ul className="flex ">
    <Link to={"/browse"}><li className="mx-2 cursor-pointer" onClick={()=> dispatch(changeTopgptSearch(false))}>Home</li></Link>
    <Link to={"/browse"} > <li className="mx-2 cursor-pointer" onClick={()=> dispatch(changeTopgptSearch(false))}>Movies</li></Link>
    <Link to={"/browse"}><li className="mx-2 cursor-pointer" onClick={()=> dispatch(changeTopgptSearch(false))}>New & Popular</li></Link>
  </ul>
</div>



           { user && <div className="flex p-2">
            { changegptPage && <select className="m-4 my-6 px-2 bg-red rounded-lg" onChange={handleLanguageChange}>
              {SUPPORTED_LANG.map((lang)=> <option  key={lang.name} value={lang.identifer}>{lang.name}</option>)}
            </select>}
            <input className="bg-gray-100 border border-gray-500 p-2 h-[50px] mt-[20px] rounded-lg outline-none " type="text" placeholder="search for movies" onChange={(e)=>setSearchQuery(e.target.value)} onKeyDown={getSearchQuery} />
            {/* {searchButton ?  <input type="text" placeholder="search for movies"/>: <button className="px-4 py-2 m-6  bg-red-600 text-white rounded-lg" onClick={searchClickHandle}>Search</button>} */}
           <button className="px-4 py-2 m-6  bg-red-600 text-white rounded-lg " onClick={handleGptSearch}>{changegptPage ? "Home" : "GPT Search"}</button>
          
           <p className="text-white mx-4 my-8">Welcome,{user.displayName}</p>

           <img  className="w-14 h-14  my-4 rounded-lg" src={user.photoURL}/>


           <button onClick={handleSignout} className="bg-red-600 text-white px-4 py-2 m-6 rounded-lg ">Sign Out</button>
           </div>}


    </div>)
}


export default Header