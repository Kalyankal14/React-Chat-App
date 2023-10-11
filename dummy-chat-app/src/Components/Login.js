import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  //console.log(auth)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
      
    } catch (err) {
      setErr(true);
    }
  };


  return <>
  <h1> chatApp </h1>
  <h2> Login </h2>
  <form onSubmit={handleSubmit}> 
  <input type="text" placeholder = 'Email'/>
  <input type="password" placeholder = 'Password'/> <br /> <br />
  <button type = 'submit'> Sign In </button>
  {err && <span> Email/Password is incorrect </span>}
    </form>
    <p> You don't have an account? <Link to = '/register'> Register</Link> </p>
    
    </>;
}
export default Login;