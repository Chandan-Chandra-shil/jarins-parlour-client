import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logoOne.jpg";
import './Navbar.css'

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our-Portfolio">Our Portfolio</Link>
      </li>
      <li>
        <Link to="/our-team">Our Team</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar container z-10 bg-opacity-30  mx-auto ">
      <div className="navbar-start ">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Link className="  normal-case text-xl" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn md:btn-md btn-sm px-8 py-2 font-normal btn-secondary"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
