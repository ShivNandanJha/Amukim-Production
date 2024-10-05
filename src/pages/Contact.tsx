import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useRef, useState } from "react";
import "leaflet/dist/leaflet.css"; // Leaflet CSS for map

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, message, phone } = formData;
    const whatsappMessage = `Hello, I am ${name}. ${message}. You can contact me at ${phone}`;
    const whatsappURL = `https://wa.me/+918116141929?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <section className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 font-Babes">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-xl font-DMSans" />
              <p>+123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl font-DMSans" />
              <p>123 Photographer St, City, Country</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl font-DMSans" />
              <p>contact@photographer.com</p>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
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

          {/* Contact Form */}
          <div className="lg:w-1/2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-DMSans">Your Name</label>
                <input
                  onMouseMove={handleMouseMove}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  type="text"
                  name="email"
                  className="h-10 w-full cursor-default rounded-md border border-neutral-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors  duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-DMSans">
                  Phone Number
                </label>
                <input
                  onMouseMove={handleMouseMove}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  autoComplete="off"
                    placeholder="Enter Your Contact Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-10 w-full cursor-default rounded-md border border-neutral-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors  duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-DMSans">Message</label>
                <textarea
                     onMouseMove={handleMouseMove}
                     onFocus={handleFocus}
                     onBlur={handleBlur}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     autoComplete="off"
                  className="h-40 w-full cursor-default rounded-md border border-neutral-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors  duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
                  name="message"
                  placeholder="Type Your Message Here"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-DMSans"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ContactUsSection;
