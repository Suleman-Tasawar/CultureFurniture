import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartIcon from "/assets/shopping-cart.svg";
import logo from "/assets/logo.svg";
import menu from "/assets/icon-hamburger.svg";
import Cart from "./Cart";

export default function NavBar() {
  const stylesActive = {
    borderBottom: "2px solid #FAFAFA",
  };
  const [toggle, setToggle] = useState(false);

  const [toggleCart, setToggleCart] = useState(false);

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
          className="pt-2 cursor-pointer w-[30px] h-[30px] mt-3 lg:hidden md:hidden "
        >
          <img src={menu} />
        </div>
        <ul
          className={`${
            toggle ? "sm:block " : "sm:hidden "
          } sm:absolute md:static lg:static  md:flex lg:flex sm:top-14 sm:right-0 flex lg:flex-row 
        md:flex-row sm:flex-col pt-2 sm:h-[100vh] md:h-[40px]
         lg:h-[40px] sm:w-[300px] md:w-[100%] lg:w-[100%] sm:bg-background sm:rounded-xl`}
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

          <li className="relative ml-3 mr-5 mt-1 cursor-pointer">
            <button onClick={() => setToggleCart(!toggleCart)}>
              <img src={CartIcon} alt="Cart" />
            </button>
            {toggleCart && <Cart />}
          </li>
        </ul>
      </nav>
    </header>
  );
}
