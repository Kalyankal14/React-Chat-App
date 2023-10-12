import React, { useContext } from "react";
import Messages from "../Components/Messages.js";
import Input from "../Components/Input.js";
import { ChatContext } from "../Context/ChatContext.js";

const Chat = () => {
  //const [chats, setChats] = useState([]);

  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons"></div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
