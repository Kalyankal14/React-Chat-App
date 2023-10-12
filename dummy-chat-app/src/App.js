import React, { useContext } from 'react';
import Register from './Components/Register.js';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "./Context/AuthContext";
import './App.scss';


export default function App() {
  const { currUser } = useContext(AuthContext);
  const ProtectedRoute = ({children}) => {
    if(!currUser){
      return <Navigate to = '/login' />;
    }
    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
