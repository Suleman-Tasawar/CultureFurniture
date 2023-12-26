import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import menu from "/assets/icon-hamburger.svg";

export default function NavBar() {
  const stylesActive = {
    borderBottom: "2px solid #FAFAFA",
  };
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex flex-row justify-between align-middle bg-background text-grey">
      <div className="w-[60px] h-[60px] pt-2 cursor-pointer">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="relative">
        <div
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer w-[30px] h-[30px] mt-6 lg:hidden md:hidden "
        >
          <img src={menu} />
        </div>
        <ul
          className={`${
            toggle ? "sm:block " : "sm:hidden "
          } sm:absolute md:static lg:static  md:flex lg:flex sm:top-14 sm:right-0 flex lg:flex-row 
        md:flex-row sm:flex-col pt-2 sm:h-[300px] md:h-[40px]
         lg:h-[40px] sm:w-[200px] md:w-[100%] lg:w-[100%] sm:bg-background sm:rounded-xl`}
        >
          <li className=" cursor-pointer pl-5 sm:mt-5 sm:ml-8 md:mt-0 md:ml-0 lg:mt-0 lg:ml-0 ">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? stylesActive : null)}
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer pl-5 sm:mt-5 sm:ml-8 md:mt-0 md:ml-0 lg:mt-0 lg:ml-0">
            <NavLink
              to="/products"
              style={({ isActive }) => (isActive ? stylesActive : null)}
            >
              Products
            </NavLink>
          </li>
          <li className="cursor-pointer pl-5 sm:mt-5 sm:ml-8 pr-2 md:mt-0 md:ml-0 lg:mt-0 lg:ml-0">
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? stylesActive : null)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
