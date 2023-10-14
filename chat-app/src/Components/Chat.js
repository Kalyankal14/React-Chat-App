import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Input from "./Input";

const Chat = () => {
  const scroll = useRef();
  const [user] = useAuthState(auth);
  const [msg, setMsg] = useState([]);

  const scrollToBottom = () => {
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(scrollToBottom,[msg])

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
  return (
    <>
      <div className="flex flex-col gap-5">
        {msg.map((m) => (
          <div key={m.id}
            className={`message flex ${
              m.data.uid === user.uid ? "justify-end" : "justify-start"
            }`}
          >
            <div
              
              className={`message flex flex-row p-3 gap-3 rounded-[20px] items-center ${
                m.data.uid === user.uid
                  ? " font-semibold	text-white bg-blue-500"
                  : " font-semibold	bg-white"
              }`}
            >
              <img className="w-10 h-10 rounded-full" src={m.data.photoURL} />
              {m.data.text}
            </div>
          </div>
        ))}
      </div>
      <Input />
      <div ref={scroll}></div>
    </>
  );
};

export default Chat;
