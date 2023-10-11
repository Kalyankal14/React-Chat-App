import React from 'react';
import Messages from '../Components/Messages.js';
import Input from '../Components/Input.js';

const Chat = () => {
  return (
    <>
      <div>
        {/* <header>username</header> */}
        <Messages />
        <Input />
      </div>
    </>
  );
};
export default Chat;
