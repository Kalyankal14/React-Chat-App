import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../firebase';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const {currUser} = useContext(AuthContext);
  //console.log(currentUser);
  
  return (
    <>
      <span> chatApp </span>
      
        <span> {currUser.displayName}  </span>
        <button onClick= {()=>signOut(auth)} type="submit"> Logout </button> <br />
      
      
    </>
  );
};
export default Navbar;
