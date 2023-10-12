import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Message = ({ message }) => {
  const { currUser } = useContext(AuthContext);
  //const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currUser.uid && "owner"}`}
    >
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
