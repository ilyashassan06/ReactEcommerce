import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">HCommerce</h2>
          <p className="text-gray-400">
            Your one-stop shop for premium quality products. We deliver trust,
            value, and style right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
    <div>
  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <Link to="/" className="hover:text-indigo-400 transition">
        Home
      </Link>
    </li>
    <li>
      <Link to="/products" className="hover:text-indigo-400 transition">
        Products
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-indigo-400 transition">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-indigo-400 transition">
        Contact
      </Link>
    </li>
  </ul>
</div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-indigo-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-indigo-400 transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-indigo-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-indigo-400 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} HCommerce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
