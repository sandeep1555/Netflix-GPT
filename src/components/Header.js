import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adduser, removeuser } from "../Utils/userSlice";
import { LOGO_URL } from "../Utils/useConstant";



const Header=()=>
{
  const dispatch=useDispatch();
  const user=useSelector(store => store.user);
    const navigate=useNavigate();
    const handleSignout=()=>
    {
signOut(auth).then(() => {

}).catch((error) => {
    navigate("/error");
  
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


    return(<div className="absolute w-screen  px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
        <div>
<img  className="w-44" src={LOGO_URL} alt="logo"/>
</div>



           { user && <div className="flex p-2">
           <p className="text-white mx-4 my-8">Welcome,{user.displayName}</p>
           <img  className="w-14 h-14  my-4 rounded-lg" src={user.photoURL}/>

           <button onClick={handleSignout} className="bg-red-600 text-white px-4 py-2 m-6 ">Sign Out</button>
           </div>}


    </div>)
}


export default Header