// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDE2faSTWWpJXyqITwyNNTya82xTPTKO0",
  authDomain: "travel-guru-dccd8.firebaseapp.com",
  projectId: "travel-guru-dccd8",
  storageBucket: "travel-guru-dccd8.appspot.com",
  messagingSenderId: "594550708460",
  appId: "1:594550708460:web:99bbffcaa3a95d85052dc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
