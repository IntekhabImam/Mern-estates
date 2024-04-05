// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estates-8f6cd.firebaseapp.com",
  projectId: "mern-estates-8f6cd",
  storageBucket: "mern-estates-8f6cd.appspot.com",
  messagingSenderId: "261111495755",
  appId: "1:261111495755:web:04cd9667146e115c49a1ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);