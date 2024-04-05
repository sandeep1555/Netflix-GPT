import { useRef, useState } from "react"
import Header from "./Header"
import { CheckValidation } from "../Utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { adduser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
const Login=()=>
{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [IsSignInForm,setIsSignInForm]=useState(true);
  const [SignInButton,setSignInButton]=useState("Sign In");
  const [Errormessage,setErrormessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
 const clickhandlebutton=()=>
    {

     

          const message=CheckValidation( email.current.value,password.current.value);
          setErrormessage(message);
          if(message) return;
if(!IsSignInForm)
{
  setSignInButton(<svg aria-hidden="true" class="w-8 h-6 mx-28 text-gray-200 animate-spin dark:text-gray-600 fill-red-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>);
    
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
   
                 const user = userCredential.user;
              


updateProfile(user, {
  displayName: name.current.value, photoURL: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdRUXsDKxLIe5bne0KXYY3zWjquntg26jfvZ03sYKuaHv_xf0e_r6y6olhLLWdQdSzc9K4CWfUrs6mLk9mXhbT2B-Nc4NiZp15EBlPJ8wbp4ZB6Gp0jwiB5iT_3ilxYZFOKTa2yUvYEsKOvP7Q0r2msSIBO-WaYqfokNc_9A7ycUWR5ryQ7bFTRKBWpLol/s0/IMG_20231221_173204-01.jpeg"
}).then(() => {

  
  const {uid,email,displayName,photoURL}  = auth.currentUser;
  dispatch(adduser({uid:uid,email: email,displayName:displayName,photoURL: photoURL}));

  navigate("/browse");

}).catch((error) => {
  setErrormessage(error.message)
  console.log(error.message);
});
            

  
                  })
            .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrormessage(errorMessage+errorCode)
  });

}
else{
  setSignInButton(<svg aria-hidden="true" class="w-8 h-8 mx-28 text-gray-200 animate-spin dark:text-gray-600 fill-red-600 text-center" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>);
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      navigate("/browse");
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

     
<div className="absolute">
<img  className="bg-opacity-25 bg-black" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bg" />
</div>

<form onSubmit={(e)=>{e.preventDefault()}} className="absolute bg-black px-10 py-10 w-3/12 text-white my-32 mx-auto left-0 right-0 opacity-85 ">
    
        <h1 className="text-2xl my-5 mx-2">{IsSignInForm ? "Sign In": "Sign Up"}</h1>
    <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black" ref={email}  type="text" placeholder={IsSignInForm?"Email or Phone Number ":"Email"}/>
    {!IsSignInForm &&  <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black  " ref={name} type="text" placeholder="User Name"/>}
    {!IsSignInForm &&  <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black  "  type="number" placeholder="Phone Number "/>}
    <input className="m-2 w-full p-4 rounded-lg border-white border bg-black" type="password"  ref={password} placeholder={IsSignInForm?"Password ":"Create New Password"}/>
    {!IsSignInForm &&  <input  className="m-2 w-full p-4 rounded-lg border-white border bg-black"  type="password" placeholder="confirm Password"/>}
    <button  className="bg-red-600 m-2  w-full p-2 my-4  rounded-lg" onClick={clickhandlebutton}>{IsSignInForm ? SignInButton : "Sign Up" }</button>
    <p className="text-bold text-red-600">{Errormessage}</p>
<p onClick={toggleSignInForm} className="cursor-pointer  my-4" >New to Netflix,<b> Sign up now</b></p>
</form>

<Header/>
        </div>
    )
}

export default Login
