import { useRef, useState } from "react"
import Header from "./Header"
import { CheckValidation } from "../Utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
const Login=()=>
{
    const [IsSignInForm,setIsSignInForm]=useState(true);
  const [Errormessage,setErrormessage]=useState(null);
const email=useRef(null);
const password=useRef(null);
const navigate=useNavigate();
    const clickhandlebutton=()=>
    {
        
          const message=CheckValidation( email.current.value,password.current.value);
          setErrormessage(message);
          if(message) return;
if(!IsSignInForm)
{
    
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
   
                 const user = userCredential.user;
                 console.log(user);
                 navigate("/browse");
  
                  })
            .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrormessage(errorMessage+errorCode)
  });

}
else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
     console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrormessage("User not Found,please Sign Up");
    });


}
    }


    const toggleSignInForm=()=>
    {
         setIsSignInForm(!IsSignInForm);
    }
    return (
        <div>
         
            <Header/>
<div className="absolute">
<img  className="bg-opacity-25 bg-black" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bg" />
</div>

<form onSubmit={(e)=>{e.preventDefault()}} className="absolute bg-black px-10 py-10 w-3/12 text-white my-32 mx-auto left-0 right-0 opacity-85 ">
    
        <h1 className="text-2xl my-5 mx-2">{IsSignInForm ? "Sign In": "Sign Up"}</h1>
    <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black" ref={email}  type="text" placeholder={IsSignInForm?"Email or Phone Number ":"Email"}/>
    {!IsSignInForm &&  <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black  "  type="number" placeholder="Phone Number "/>}
    <input className="m-2 w-full p-4 rounded-lg border-white border bg-black" type="password"  ref={password} placeholder={IsSignInForm?"Password ":"Create New Password"}/>
    {!IsSignInForm &&  <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black"  type="password" placeholder="confirm Password"/>}
    <button  className="bg-red-600 m-2  w-full p-2 my-4  rounded-lg" onClick={clickhandlebutton}>{IsSignInForm ? "Sign In": "Sign Up"}</button>
    <p className="text-bold text-red-600">{Errormessage}</p>
<p onClick={toggleSignInForm} className="cursor-pointer  my-4">New to Netflix,<b> Sign up now</b></p>
</form>
        </div>
    )
}

export default Login
