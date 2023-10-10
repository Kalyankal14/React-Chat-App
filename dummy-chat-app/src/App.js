import React, { useContext } from 'react';
import Register from './Components/Register.js';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from "./Context/AuthContext";


export default function App() {
  const { currUser } = useContext(AuthContext);
  console.log(currUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Messages /> */}
    </BrowserRouter>
  );
}
