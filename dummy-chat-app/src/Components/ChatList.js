import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const { currUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currUser.uid && getChats();
  }, [currUser.uid]);

  console.log(Object.entries(chats));
  return (
    <>
      {Object.entries(chats)?.map((chat)=>(
        <div key={chat[0]}>
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].lastMessage?.text}</p>
        </div>
      ))}
    </>
  );
};
export default ChatList;
