import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      setCurrUser(user);
      if (user) {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          setCurrUser({ ...currUser, ...userData });
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      }
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currUser }}>{children}</AuthContext.Provider>
  );
};
