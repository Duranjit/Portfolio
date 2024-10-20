import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../Constant";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const links = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "works", title: "Works" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Duranjit &nbsp; <span className="sm:block hidden">Bharadwaj</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title
                    ? "text-white text-2xl"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transform transition-transform duration-300 hover:scale-110`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // Toggle between close and menu icon
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} // Toggle menu visibility
          />
        </div>
      </div>

      {toggle && (
        <div className="absolute top-16 right-0 w-48 bg-primary shadow-lg rounded-md z-30">
          <ul className="list-none flex flex-col gap-4 p-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(false); // Close menu when a link is clicked
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
