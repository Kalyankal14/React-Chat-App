import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    //console.log(displayName);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> chatApp </span>
          <span className="title"> Register </span>
          <form onSubmit={handleSubmit}>
            <input required type="text" placeholder="Display Name" />
            <input required type="email" placeholder="Email" />
            <input
              required
              type="password"
              placeholder="Password"
            /> <br /> <br />
            <button type="submit"> Sign Up </button>
            {err && (
              <span style={{ color: "red" }}> Something went wrong </span>
            )}
          </form>
          <p>
            You do have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
