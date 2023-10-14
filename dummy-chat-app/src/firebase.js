import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBV6jpnPhPz0XVRcEDWT9F9JFNaQCSpY8",
  authDomain: "demochat-7487d.firebaseapp.com",
  projectId: "demochat-7487d",
  storageBucket: "demochat-7487d.appspot.com",
  messagingSenderId: "85510851877",
  appId: "1:85510851877:web:da61e7d0a0052ec9cbdecc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
