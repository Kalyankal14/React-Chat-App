// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABs_7Pa3gME-MEf71gaqrXCO37hh7ErN0",
  authDomain: "chatapp-f5c7b.firebaseapp.com",
  projectId: "chatapp-f5c7b",
  storageBucket: "chatapp-f5c7b.appspot.com",
  messagingSenderId: "567610152976",
  appId: "1:567610152976:web:3b927205f9f6453206d295"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);