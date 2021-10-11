import React from "react";


// components imports
import Header from "./Header";
import Search from "./Search";
import Conversation from "./Conversation";


const Menu = () => {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Conversation />
    </React.Fragment>
  )
}
export default Menu;

