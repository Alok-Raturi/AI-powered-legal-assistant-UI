import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";

import logo from "../assets/logo.png";

const Navbar = ({ handleSideBar, show }) => {
  return (
    <header className="flex text-white justify-between items-center ">
      <div>
        <GiHamburgerMenu
          onClick={handleSideBar}
          className={show && "hidden invisible"}
          size={"1.5rem"}
        />
      </div>
      <div className="flex flex-row justify-between items-center gap-3">
        <img src={logo} className="logo hidden md:block " alt="" />
        <p className="text-xl text-bold md:text-3xl underline ">
          LEGAL DASTAVEZ
        </p>
      </div>
      <div>
        <BiUserCircle />
      </div>
    </header>
  );
};

export default Navbar;
