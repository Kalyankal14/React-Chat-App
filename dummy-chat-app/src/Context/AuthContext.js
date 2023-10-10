import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrUser(user);
      console.log(user);
    });

    return () => {
      unSub();
    };
  }, []);

  return <AuthContext.Provider value={{currUser}}>{children}</AuthContext.Provider>;
};
