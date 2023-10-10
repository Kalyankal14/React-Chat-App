import React from 'react';

const Login = () => {

  return <>
  <h1> chatApp </h1>
  <h2> Login </h2>
  <form> 
  <input type="text" placeholder = 'Email'/>
  <input type="password" placeholder = 'Password'/> <br /> <br />
  <button type = 'submit'> Sign In </button>
    </form>
    <p> You don't have an account? Register </p>
    
    </>;
}
export default Login;