// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtp2hR1Z3rnmIKB7M30eFauxQwdSuJb1Q",
  authDomain: "foodvilla-7691c.firebaseapp.com",
  projectId: "foodvilla-7691c",
  storageBucket: "foodvilla-7691c.appspot.com",
  messagingSenderId: "370784571830",
  appId: "1:370784571830:web:b4b24aae7f4c7e56217117",
  measurementId: "G-WP8L2VV4LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();