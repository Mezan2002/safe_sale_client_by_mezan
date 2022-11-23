import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../../assets/SafeSaleLogo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li className="mr-2">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-2">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar -mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img className="w-28" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
        <div className="">
          <div className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center">
            <span>
              <FaUserAlt className="text-xl"></FaUserAlt>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
