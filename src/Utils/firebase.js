

import { getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJMoxHm4KZ3xFYK6ow1nSseBNTVCsOq3Q",
  authDomain: "netflix-clone-fed55.firebaseapp.com",
  projectId: "netflix-clone-fed55",
  storageBucket: "netflix-clone-fed55.appspot.com",
  messagingSenderId: "351505813908",
  appId: "1:351505813908:web:45200d4cf26edf1387bf81",
  measurementId: "G-22YFSV7WC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();