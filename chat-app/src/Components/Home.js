import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }
  return (
    <div>
        
        <h1> Welcome to the chatApp............ </h1>
        <button type='button' onClick={handleLogout}> Logout </button> </div>
  )
}
