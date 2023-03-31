// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARRdwD42VJSsgyDAsuBe5xw_yU0EEOPRQ",
  authDomain: "react-js---pabloulled.firebaseapp.com",
  projectId: "react-js---pabloulled",
  storageBucket: "react-js---pabloulled.appspot.com",
  messagingSenderId: "727940483204",
  appId: "1:727940483204:web:dee9cdf1d4d1e9d4ff1ad1",
  measurementId: "G-1CVQ5W9XGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()