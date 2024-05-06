import React, { useState } from "react";
import Logo from "../../assets/VA.jpeg";
import { IoMdMail } from "react-icons/io";
import {
  FaInstagram,
} from "react-icons/fa";

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
];
const Footer = () => {
  return (
    <div
      className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300
    "
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="" className="w-16 " />
            <div>
              {/* Social Handle */}
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/vaquantuminstitite">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://vaquantuminstitute@gmail.com">
                  <IoMdMail className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="sm:block hidden"></div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold  hover:text-primary py-1 hover:border-primary transition-colors duration-300  "
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
