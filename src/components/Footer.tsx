
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="  bg-gray-900 text-white py-8">
      <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        {/* Logo */}
        <div className="flex justify-start w-full md:w-1/3">
          <Link to="/" className="text-xl font-bold">
            {/* Logo can be an image or text */}
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
        </div>

        {/* Page Links */}
        <div className="flex justify-center space-x-8 text-sm md:w-1/3">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link to="/gallery" className="hover:text-blue-500 transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-end space-x-4 md:w-1/3">
          <a href="https://facebook.com" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-600">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Photography Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
