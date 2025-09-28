 import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Search Donors", "Donate", "Signup", "Login"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
              Blood<span className="text-white">Connect</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const path =
                item === "Home"
                  ? "/"
                  : item === "Search Donors"
                  ? "/search"
                  : `/${item.toLowerCase()}`;

              return (
                <NavLink
                  key={item}
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-yellow-400 text-red-700 shadow-lg"
                        : "hover:bg-yellow-200 hover:text-red-600"
                    }`
                  }
                >
                  {item}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-white/20 transition-all"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-red-600/90 backdrop-blur-sm absolute w-full top-16 left-0 px-4 py-6 flex flex-col space-y-4 z-40">
          {navItems.map((item) => {
            const path =
              item === "Home"
                ? "/"
                : item === "Search Donors"
                ? "/search"
                : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-semibold text-center transition-all ${
                    isActive
                      ? "bg-yellow-400 text-red-700 shadow-lg"
                      : "hover:bg-yellow-200 hover:text-red-600"
                  }`
                }
              >
                {item}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;


