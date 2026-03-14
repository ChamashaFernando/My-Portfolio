
// src/components/navbar/NavBar.jsx
import React from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Skills", url: "skills" },
  { id: 4, name: "Projects", url: "projects" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const getMenu = () =>
  navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.url}
        smooth={true}
        duration={800}
        spy={true}
        offset={-120} // navbar height offset
        activeClass="text-pink-500"
        className="hover:text-pink-500 px-5 py-3 mx-1 cursor-pointer transition-colors duration-300 text-white"
      >
        {item.name}
      </Link>
    </li>
  ));

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#1E1E1E] shadow-lg transition-all duration-500">
      <div className="navbar flex justify-between mx-auto content py-3 md:py-4 px-4 max-w-7xl">

        {/* Logo & Mobile Menu */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>

            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content rounded-box mt-3 w-64 p-4 shadow-lg font-semibold bg-[#1E1E1E] text-white"
            >
              {getMenu()}
              <li className="mt-2">
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  onClick={handleMenuClick}
                  className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="introduction"
            smooth={true}
            duration={800}
            className="flex items-center cursor-pointer"
          >
            <p className="text-2xl sm:text-3xl font-semibold text-white">
              Chamasha Fernando
            </p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex menu menu-horizontal font-medium text-[16px] gap-2 text-white">
            {getMenu()}
          </ul>

          {/* Contact Button */}
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="btn btn-sm xs:btn-md sm:btn-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NavBar;