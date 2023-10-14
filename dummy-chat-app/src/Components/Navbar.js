import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currUser } = useContext(AuthContext);
  //console.log(currentUser);

  return (
    <div className="navbar">
      <span className="logo">chatApp</span>
      <div className="user">
        <span> {currUser.displayName} </span>
        <button
          className="logout-btn"
          onClick={() => signOut(auth)}
          type="submit"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
