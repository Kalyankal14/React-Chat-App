import React from 'react';
import Navbar from '../Components/Navbar.js';
import Search from '../Components/Search.js';
import ChatList from '../Components/ChatList.js';


const Sidebar = () => {
  return (
    <>
      <Navbar />
      <Search />
      <ChatList />
    </>
  );
};
export default Sidebar;
