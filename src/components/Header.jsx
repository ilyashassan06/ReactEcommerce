// Import React core, hooks, and utilities
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // ✅ Router navigation & links
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react"; // ✅ Icons from lucide-react
import Logo from "../images/Logo.svg"; // ✅ App logo
import { CartContext } from "../assets/context/CartContext"; // ✅ Cart context for global state

function Header() {
  // ✅ Local state to toggle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Access Cart from context
  const { Cart } = useContext(CartContext);

  // ✅ Cart item count (number of products in cart)
  const cartCount = Cart.length;

  // ✅ Hook for programmatic navigation
  const navigate = useNavigate();

  // ✅ Handler for clicking on cart icon → navigates to /Cart page
  const handleClick = () => {
    navigate("/Cart"); 
  };

  return (
    <div className="flex flex-col">
      {/* ====================== TOP BANNER ====================== */}
      <div className="h-auto px-2 py-2 bg-black text-white flex justify-center items-center w-full text-center md:text-left">
        <h5 className="text-[11px] md:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h5>
        {/* ✅ Link to Products page */}
        <Link
          className="mt-1 md:mt-0 md:ml-4 underline ml-5 hover:text-gray-300 text-[11px] md:text-sm"
          to="/Products"
        >
          Shop Now
        </Link>
      </div>

      {/* ====================== NAVBAR SECTION ====================== */}
      <div className="flex items-center justify-between h-[70px] border-b border-gray-300 px-6">
        
        {/* ---------- Logo ---------- */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={Logo} alt="H-Commerce logo" className="h-12" />
          </Link>
        </div>

        {/* ---------- Desktop Navigation Links ---------- */}
        <div className="hidden md:flex text-lg gap-8 font-medium">
          {/* Home */}
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

          {/* Products */}
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

          {/* About Us */}
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

          {/* Contact */}
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

        {/* ---------- Desktop: Search + Icons ---------- */}
        <div className="hidden md:flex items-center gap-4 mr-[80px]">
          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-md px-2 bg-gray-50 w-[220px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-2 py-1 bg-transparent outline-none text-sm"
            />
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>

          {/* Wishlist Icon */}
          <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />

          {/* Cart Icon with Badge */}
          <div onClick={handleClick} className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-700" />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </div>
            )}
          </div>
        </div>

        {/* ---------- Mobile: Heart + Cart + Hamburger ---------- */}
        <div className="md:hidden flex gap-4 justify-between">
          {/* Wishlist */}
          <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />

          {/* Cart */}
          <div className="relative">
            <ShoppingCart
              onClick={handleClick}
              className="w-6 h-6 cursor-pointer hover:text-gray-700"
            />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ====================== MOBILE SLIDE MENU ====================== */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Mobile Menu Header */}
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

        {/* Mobile Navigation Links */}
        <div className="flex flex-col p-4 space-y-4 text-lg">
          {/* Home */}
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

          {/* Products */}
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

          {/* About */}
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

          {/* Contact */}
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
        </div>
      </div>
    </div>
  );
}

export default Header;
