import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidation } from "../Utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { updateProfile } from "firebase/auth";
import { adduser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { AVATAR_URL, BG_URL } from "../Utils/useConstant";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import CopyButton from "./CopyButton";
const Login = () => {
  const dispatch = useDispatch();
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [SignInButton, setSignInButton] = useState("Sign In");
  const [SignUpButton, setSignUpButton] = useState("Sign Up");
  const [Errormessage, setErrormessage] = useState(null);
  const [showCredentials,setshowCredentails]=useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const newPassword = useRef(null);

  const clickhandlebutton = () => {
    const message = CheckValidation(
      email.current.value,
      password.current.value,
      newPassword.current?.value
    );
    setErrormessage(message);
    if (message) return;
    if (!IsSignInForm) {
      setSignUpButton(
        <svg
          aria-hidden="true"
          class="w-8 h-8 mx-44 text-gray-200 animate-spin dark:text-gray-600 fill-red-600 text-center"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      );

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorMessage + errorCode);
          setSignUpButton("Sign Up");
        });
    } else {
      setSignInButton(
        <svg
          aria-hidden="true"
          class="w-8 h-8 mx-44 text-gray-200 animate-spin dark:text-gray-600 fill-red-600 text-center"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      );

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage("User not Found,please Sign Up");
          setSignInButton("Sign In");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
    setErrormessage(null);
  };

  const handleCredentails=()=>
  {
    setshowCredentails(!showCredentials)
  }
  
  return (
    <div className="bg-gray-900">
      <div className="absolute ">
        <img
          className="bg-opacity-25 bg-black  w-screen h-screen "
          src={BG_URL}
          alt="netflix-bg"
        />
      </div>
     <div className="flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" bg-black px-10 py-10 w-4/12 text-white my-44 mx-auto left-0 right-0 opacity-90  rounded-lg"
      >
        <h1 className="text-2xl my-4 mx-2 py-2 ">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            className="m-2 w-full p-4 rounded-lg border-white border bg-black focus:outline-none"
            ref={name}
            autoComplete="username"
            type="text"
            placeholder="User Name"
          />
        )}
        <input
          className="m-2 w-full p-4 rounded-lg border-white border bg-black focus:outline-none "
          ref={email}
          type="text"
          autoComplete="email"
          placeholder={IsSignInForm ? "Email or Phone Number " : "Email"}
        />
        <input
          className="m-2 w-full p-4 rounded-lg border-white border bg-black focus:outline-none"
          type="password"
          ref={password}
          autoComplete="password"
          placeholder={IsSignInForm ? "Password " : "Create New Password"}
        />
        {!IsSignInForm && (
          <input
            className="m-2 w-full p-4 rounded-lg border-white border bg-black focus:outline-none"
            ref={newPassword}
            autoComplete="confirmpassword"
            type="password"
            placeholder="confirm Password"
          />
        )}
        <button
          className="bg-red-600 m-2  w-full p-2 my-4  rounded-lg py-3"
          onClick={clickhandlebutton}
        >
          {IsSignInForm ? SignInButton : SignUpButton}
        </button>

        {Errormessage && (
          <div className="flex items-center  mb-2 mx-2">
            <ExclamationCircleIcon className="w-[30px] h-[30px] text-red-600" />
            <span className="text-bold text-red-600 px-2">{Errormessage}</span>
          </div>
        )}
        <span className="cursor-pointer  my-4">
          {IsSignInForm ? "New to Netflix, " : "already have account,"}
        </span>
        <span
          onClick={toggleSignInForm}
          className="hover:underline cursor-pointer text-red-600  "
        >
          {IsSignInForm ? "Sign Up Now" : "Sign In"}
        </span>
        <div className="my-4">
        <span >Demo Credentials,<span onClick={handleCredentails} className="hover:underline cursor-pointer text-red-600 ">{showCredentials ?"hide":"show"}</span></span>
        {showCredentials && 
        <div className="my-2">
          <p>Email:demo123@gmail.com<CopyButton text={"demo123@gmail.com"}/></p>
          <p>Password:Demo@123<CopyButton text={"Demo@123"}/></p>
          </div>}
      </div>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
