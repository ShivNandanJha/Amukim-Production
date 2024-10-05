import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className= " sticky top-0 z-10 bg-gray-900 text-white px-4 py-2 flex items-center justify-between shadow-lg ">
      {/* Logo at the left corner */}
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 p-2" />
        </Link>
      </div>

      {/* Navigation links to the right of the logo */}
      <div className="hidden md:flex space-x-8 ml-10 items-center">
        <Link to="/" className="nav-link hover:text-gray-400 text-lg font-bold">
          Home
        </Link>
        <Link
          to="/services"
          className="nav-link hover:text-gray-400 text-lg font-bold"
        >
          Services
        </Link>
        <Link
          to="/gallery"
          className="nav-link hover:text-gray-400 text-lg font-bold"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="nav-link hover:text-gray-400 text-lg font-bold"
        >
          Contact Us
        </Link>
      </div>

      {/* Social media icons in the far-right corner */}
      <div className="hidden md:flex space-x-4 ml-auto">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaTwitter size={30} />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" z-10 absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            to="/"
            className="nav-link hover:text-gray-400 text-lg font-bold font-Fredoka"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link hover:text-gray-400 text-lg font-bold  font-Fredoka"
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="nav-link hover:text-gray-400 text-lg font-bold font-Fredoka"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="nav-link hover:text-gray-400 text-lg font-bold font-Fredoka"
          >
            Contact Us
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
