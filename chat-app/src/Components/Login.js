import React from "react";
import { auth } from "../firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center my-20 ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
        onClick={handleLogin}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
