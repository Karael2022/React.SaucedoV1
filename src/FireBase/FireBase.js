//documentos son objetos
//colecciones son arrays

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo9aet6u9zf-_29DDTij6WxCNxWN8A4xk",
  authDomain: "react-roxana.firebaseapp.com",
  projectId: "react-roxana",
  storageBucket: "react-roxana.appspot.com",
  messagingSenderId: "321802708771",
  appId: "1:321802708771:web:eefc4c4b07cf2b8905ce96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)