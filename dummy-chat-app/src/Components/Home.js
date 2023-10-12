import React from "react";
import Sidebar from "../Components/Sidebar.js";
import Chat from "../Components/Chat.js";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
export default Home;
