import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../Utils/userSlice";
import { useEffect } from "react";

const Body=()=>
{
const dispatch=useDispatch();
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/browse",
        element:<Browse/>,
    }
])



useEffect(()=>
    {

 onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,email,displayName,photoURL}  = user;
    dispatch(adduser({uid:uid,email: email,displayName:displayName,photoURL: photoURL}));
   
  } else {
    dispatch(removeuser());
    
  }
});
    },[]);



    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body