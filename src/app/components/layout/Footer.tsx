'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
    } else {
      setMessage("✅ You have successfully subscribed!");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="font-sans bg-gray-100 py-16 text-gray-600">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* First Section */}
        <div>
          <h1 className="text-black text-3xl font-bold mb-4">Hekto</h1>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSendEmail}
              className="bg-[#FB2E86] text-white px-6 py-2 text-sm font-medium hover:bg-red-600 transition-colors"
            >
              SignUp
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-sm ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
          <Link href="/Pages/Contact-us">
          <p className="mt-4 font-bold text-slate-700 underline hover:text-pink-500">Contact Info</p></Link>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        {/* Second Section */}
        <div>
          <h2 className="text-black font-josefin-sans text-xl font-semibold mb-4">Catagories</h2>
          <ul className="space-y-2 hover:underline">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <h2 className="text-black text-xl font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2 hover:underline">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <h2 className="text-black text-xl font-semibold mb-4">Pages</h2>
          <ul className="space-y-2 hover:underline">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <p className="text-gray-500">&copy; Webecy - All Rights Reserved. </p>
          <div className="flex space-x-4">
            <a href="" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-purple-800">
              <FaFacebookF />
            </a>
            <a href="" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
              <FaTwitter />
            </a>
            <a href="" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-purple-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;