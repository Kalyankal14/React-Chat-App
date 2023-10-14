import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, {useState } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Input = () => {
    
  const [user] = useAuthState(auth);

  const [newMessages, setNewMessages] = useState("");
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
      <div className="flex m-[10px] relative">
        <input
          className=" font-semibold placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
                        m-[5px] grow rounded-[10px]"
          value={newMessages}
          placeholder="Type something..."
          onChange={(e) => setNewMessages(e.target.value)}
        />
        <button
          className=" bg-white rounded-[10px] hover:bg-yellow-400 p-3"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
  );
};

export default Input;
