// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiDGZ_TTW0AJ6VYPffD_a2IzAwJiYzOuk",
  authDomain: "netflixgpt-6f9a6.firebaseapp.com",
  projectId: "netflixgpt-6f9a6",
  storageBucket: "netflixgpt-6f9a6.appspot.com",
  messagingSenderId: "238410509907",
  appId: "1:238410509907:web:22ab86ddf743ad0a46e0a6",
  measurementId: "G-HBJLFV97F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();