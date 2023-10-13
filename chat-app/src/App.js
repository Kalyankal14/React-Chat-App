import "./index.css";
import React, { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase.js";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState([]);
  const [newMessages, setNewMessages] = useState("");

  

  useEffect(() => {
    const messagesCollection = collection(db, "messages");
    const q = query(messagesCollection, orderBy("timestamp"));

    const unsub = onSnapshot(q, (snapshot) => {
      setMsg(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsub;
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessages,
      timestamp: serverTimestamp(),
    });
    setNewMessages("");
  };

  return (
    <div className="flex justify-center flex-col py-10 bg-gray-800 min-h-screen">
      {user ? (
        <>
          <div className="text-gray-100	"> Logged in as {user.displayName}</div>
          <input
            value={newMessages}
            onChange={(e) => setNewMessages(e.target.value)}
          />
          <button className=' bg-white rounded-[10px] hover:bg-blue-400 p-3'onClick={sendMessage}> Send </button>
          <button className='mb-8 bg-white rounded-[10px] p-3' onClick={() => auth.signOut()}> Logout </button>

          <div className="flex flex-col gap-5">
          {msg.map((m) => (
            <div className={`message flex ${m.data.uid === user.uid? 'justify-end' : 'justify-start'}`}>
            <div key={m.id} className={`message flex flex-row p-3 gap-3 rounded-[20px] items-center ${m.data.uid === user.uid? ' text-white bg-blue-500' : 'bg-white'}`}>
              <img className= 'w-10 h-10 rounded-full' src={m.data.photoURL} />
              {m.data.text}
            </div>
            </div>
          ))}
          </div>
        </>
      ) : (
        <button onClick={handleLogin}> Login with Google</button>
      )}
    </div>
  );
}

export default App;
