import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-row sticky top-0 bg-gray-50	">
      <div className=" font-medium w-40 text-center text-black p-2 rounded-[10px] bg-gray-400 grow h-12">
        Logged in as {user.displayName}
      </div>
      <div>
        <button
          className=" font-medium text-black rounded-[10px] p-3 w-40 hover:bg-red-400"
          onClick={() => auth.signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
