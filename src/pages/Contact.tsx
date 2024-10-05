import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for map

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, message, phone } = formData;
    const whatsappMessage = `Hello, I am ${name}. ${message}. You can contact me at ${phone}`;
    const whatsappURL = `https://wa.me/+918116141929?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 font-Babes">Contact Us</h2>

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
              <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-DMSans">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 rounded-md focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-DMSans">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 rounded-md focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-DMSans">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 rounded-md focus:outline-none"
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

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-4">Find Us Here</h3>
          <MapContainer center={[51.505, -0.09]} zoom={13} className="h-96 w-full rounded-lg">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                123 Photographer St, City, Country
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
