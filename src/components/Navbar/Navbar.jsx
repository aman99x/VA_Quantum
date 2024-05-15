import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/VA.jpeg";
import DarkMode from "./DarkMode";
import Register from "../Register/Register";

export const Navlinks = [
  {
    id: 1,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 2,
    name: "COURSES",
    link: "/#services",
  },
  {
    id: 3,
    name: "CONTACT",
    link: "/#appbanner",
  },
  {
    id: 4,
    name: "REGISTER",
    action: "register",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleLinkClick = (link, action) => {
    if (action === "register") {
      setShowRegister(true);
    } else {
      window.location.href = link;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-2xl sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            VA Quantum Institute
          </div>
          <div>
            <img
              src={Logo}
              alt=""
              className="w-16 sm:w-14 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0"
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link, action }) => (
                <li key={id} className="py-4">
                  <button
                    onClick={() => handleLinkClick(link, action)}
                    className="inline-block text-lg font-semibold hover:text-primary duration-300"
                  >
                    {name}
                  </button>
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
            {showMenu && (
              <div ref={menuRef}>
              </div>
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu
        showMenu={showMenu}
        handleLinkClick={handleLinkClick}
      />
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <Register />
            <button
              onClick={() => setShowRegister(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
