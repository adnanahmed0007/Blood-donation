 import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wide">
              <span className="text-white">Blood</span>
              <span className="text-yellow-300">Connect</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Search Donors", "Donate", "Signup", "Login"].map((item) => {
              const path =
                item === "Home"
                  ? "/"
                  : item === "Search Donors"
                  ? "/search"
                  : `/${item.toLowerCase()}`

              return (
                <NavLink
                  key={item}
                  to={path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-yellow-100 text-red-600"
                        : "text-white hover:text-yellow-200 hover:bg-red-500"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            })}
          </div>

          {/* Mobile Menu Button (Optional) */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-200 focus:outline-none">
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
    </nav>
  )
}

export default Header

