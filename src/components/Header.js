import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import {  useSelector } from "react-redux";



const Header=()=>
{
  const user=useSelector(store => store.user);
    const navigate=useNavigate();
    const handleSignout=()=>
    {
signOut(auth).then(() => {
  navigate("/")
}).catch((error) => {
    navigate("/error");
  
});
    }


    return(<div className="absolute w-screen  px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
        <div>
<img  className="w-44    "src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
</div>



           { user && <div className="flex p-2">
           <p className="text-white mx-4 my-8">Welcome,{user.displayName}</p>
           <img  className="w-14 h-14  my-4 rounded-lg" src={user.photoURL}/>

           <button onClick={handleSignout} className="bg-red-600 text-white px-4 py-2 m-6 ">Sign Out</button>
           </div>}


    </div>)
}


export default Header