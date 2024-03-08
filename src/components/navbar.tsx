// NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Adjust the `top` value as per the AppBar's height
  return (
    <>
      {/* Adjust the left position of the hamburger icon based on the open state */}
      <div
        className={`fixed top-16 z-30 p-5 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-[175px]" : "transform translate-x-0"
        }`}
        onClick={toggleNav}
      >
        {/* Hamburger Icon */}
        <div className="text-3xl cursor-pointer text-white">☰</div>
      </div>
      <div
        className={`fixed top-16 left-0 bottom-0 w-64 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out z-20`}
        style={{ background: "linear-gradient(to top, #00703B, #00D671)" }} // Inline gradient style
      >
        {/* Navigation Links */}
        <div className="mt-20 ml-5">
        <Link to="/chore-list" className="block mb-4 text-xl font tracking-wider hover:bg-green-700 p-2 rounded">
          Chore List
        </Link>
        <Link to="/shopping-list" className="block mb-4 text-xl font tracking-wider hover:bg-green-700 p-2 rounded">
          Shopping List
        </Link>
        <Link to="/supply-list" className="block mb-4 text-xl font tracking-wider hover:bg-green-700 p-2 rounded">
          Supply List
        </Link>
        <Link to="/calendar" className="block mb-4 text-xl font tracking-wider hover:bg-green-700 p-2 rounded">
          Calendar
        </Link>
        <Link to="/settings" className="block mb-4 text-xl font tracking-wider hover:bg-green-700 p-2 rounded">
          Settings
        </Link>
        </div>
        {/* ... other links */}
      </div>
    </>
  );
};

export default NavBar;
