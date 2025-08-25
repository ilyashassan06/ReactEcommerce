import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="h-auto px-2 py-2 bg-black text-white flex justify-center items-center w-full text-center md:text-left">
        <h5 className="text-[11px] md:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h5>
        <Link
          className="mt-1 md:mt-0 md:ml-4 underline ml-5 hover:text-gray-300 text-[11px] md:text-sm"
          to="/Products"
        >
          Shop Now
        </Link>
      </div>

      {/* Menu Section */}
      <div className="flex items-center justify-between h-[70px] border-b border-gray-300 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/Home">
          <img
            src="/src/images/Logo.svg"
            alt="H-Commerce logo"
            className="h-12"
          />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-lg gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Products"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Search + Icons (Desktop only) */}
        <div className="hidden md:flex items-center gap-4 mr-[80px]">
          <div className="flex items-center border border-gray-300 rounded-md px-2 bg-gray-50 w-[220px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-2 py-1 bg-transparent outline-none text-sm"
            />
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-700" />
        </div>

        {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex justify-between">
          <ShoppingCart className="  w-6 h-6 mr-5 cursor-pointer hover:text-gray-700" />
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
          
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        {/* Mobile Search */}
        <div className="flex justify-center mt-6 px-4">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full max-w-md bg-gray-50 shadow-sm transition duration-300 ease-in-out focus-within:shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-2 bg-transparent outline-none text-sm"
            />
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        <div className="flex flex-col p-4 space-y-4 text-lg">
        <NavLink
        onClick={() => setMenuOpen(false)}
            to="/"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
          onClick={() => setMenuOpen(false)}
            to="/Products"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
          onClick={() => setMenuOpen(false)}
            to="/About"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
          onClick={() => setMenuOpen(false)}
            to="/Contact"
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
