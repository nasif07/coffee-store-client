// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDloaJITgHPqsRGqVkjgmreEsM6buyCx1I",
  authDomain: "coffee-house-2af23.firebaseapp.com",
  projectId: "coffee-house-2af23",
  storageBucket: "coffee-house-2af23.appspot.com",
  messagingSenderId: "413246831612",
  appId: "1:413246831612:web:d95e38a7521f2809f51079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;