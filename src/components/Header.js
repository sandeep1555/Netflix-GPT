import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { adduser, removeuser } from "../Utils/userSlice";
import { LOGO_URL, SUPPORTED_LANG, options } from "../Utils/useConstant";
import { changeTopgptSearch, removeMovieInfo } from "../Utils/gptSlice";
import { changelanguage } from "../Utils/configSlice";
import {getMovieList,getPopularList,getSearchResult} from "../Utils/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const changegptPage = useSelector((store) => store.gpt.gptSearch);
  const [searchButton, setSearchButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        removeuser(user);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
      return () => unsubsribe();
    });
  }, []);

  const handleGptSearch = () => {
    if (changegptPage) {
      navigate("/browse");
      dispatch(changeTopgptSearch(false));
      dispatch(removeMovieInfo())

    } else {
      dispatch(changeTopgptSearch(true));
    }
  };

  const handleLanguageChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchClickHandle = () => {
    setSearchButton(!searchButton);
  };

  const getSearchQuery = async (event) => {
    if (event.key === "Enter") {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + searchQuery,
        options
      );
      const json = await data.json();
      dispatch(getSearchResult(json.results));

      navigate("/search?q=" + searchQuery);
    }
  };

  const HandleMovieClick = async () => {
    dispatch(changeTopgptSearch(false));
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const json = await data.json();
    dispatch(getMovieList(json.results));
    navigate("/movie");
  };
  const handlePopularClick = async () => {
    dispatch(changeTopgptSearch(false));
    navigate("/movie");
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(getPopularList(json.results));
    navigate("/popular");
  };

  const handleProfileMouseEnter = () => {
    setDropDown(true);
  };
  const handleProfileMouseLeave = () => {
    setDropDown(false);
  };
  const handlelogoClick=()=>
  {
    dispatch(changeTopgptSearch(false))
    if(user)
    {
      navigate("/browse")
      window.location.reload();
    }
    else{
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <div
      className={` w-screen  px-4 md:py-2 ${isScrolled ? "bg-black" : "bg-gradient-to-b from-black  to-transparent"} mx-auto   flex flex-col  md:flex-row md:justify-between items-center fixed z-50 h-[100px] md:mt-[-7px]`}>
      <div className="">
        
          <img
            className="w-[200px]  cursor-pointer "
            src={LOGO_URL}
            alt="logo"
            onClick={handlelogoClick}
          />
    
      </div>
      {user && (
        <div className="md:ml-[-150px] flex items-center ">
          <div className="text-white ml-[-80px] md:ml-[30px]">
            <ul className="flex  ">
              <Link to={"/browse"}>
                <li
                  className="mx-2 cursor-pointer"
                  onClick={() => dispatch(changeTopgptSearch(false))}
                >
                  Home
                </li>
              </Link>
              <li className="mx-2 cursor-pointer" onClick={HandleMovieClick}>
                Movies
              </li>
              <li className="mx-2 cursor-pointer" onClick={handlePopularClick}>
                New & Popular
              </li>
            </ul>
          </div>
        
        </div>)}
       {user && <div>
        {!changegptPage && (
            <input
              className="bg-transparent text-white border border-white  p-3 h-[50px]  rounded-lg outline-none placeholder-gray md:mr-[100px] w-[300px]"
              type="text"
              placeholder="Search for Movies....."
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={getSearchQuery}
            />
          )}
          </div>}
    

      {user && (
        <div className="flex p-2">
          {changegptPage && (
            <select
              className="m-4 my-6 px-2 bg-red rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.name} value={lang.identifer}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* {searchButton ?  <input type="text" placeholder="search for movies"/>: <button className="px-4 py-2 m-6  bg-red-600 text-white rounded-lg" onClick={searchClickHandle}>Search</button>} */}
          <button
            className="px-4 py-3 m-6  bg-red-600 text-white rounded-lg "
            onClick={handleGptSearch}
          >
            {changegptPage ? "Home" : "GPT Search"}
          </button>
          <div
            className="relative"
            onMouseEnter={handleProfileMouseEnter}
            onMouseLeave={handleProfileMouseLeave}
          >
            <div className="flex mr-[40px] items-center">
              <img
                className="w-12 h-12  mt-6 rounded-lg "
                src={user.photoURL}
                alt="user-pics"
              />
              <span className="text-white m-2 text-xl ">
                {dropDown ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </span>
            </div>

            {dropDown && (
              <div className="absolute   px-4  w-[250px] ml-[-180px]  text-center my-[15px] bg-gray-800 rounded-lg ">
                <Link to={"/comingsoon"}>
                  <button className=" text-white  px-8 py-2 font-normal hover:underline ">
                    Manage Profile
                  </button>
                </Link>
                <Link to={"/comingsoon"}>
                  <button className=" text-white  px-8 py-2 font-normal hover:underline">
                    Account
                  </button>
                </Link>
                <Link to={"/comingsoon"}>
                  <button className=" text-white  px-8 py-2 font-normal hover:underline">
                    Help Centre
                  </button>
                </Link>
                <hr></hr>
                <button
                  onClick={handleSignout}
                  className=" text-white  px-8 py-2 pb-4 font-normal hover:underline "
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
