import "./index.css";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Chat from "./Components/Chat";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <div className="py-4 bg-gray-800 min-h-screen">
          <Navbar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
