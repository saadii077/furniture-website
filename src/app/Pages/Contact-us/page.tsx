'use client';

import Image from "next/image";

function ContactUs() {
  return (
    <>
    
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Contact Us</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-wrap gap-12">
        {/* Left Section */}
        <div className="flex-1">
          {/* Information */}
          <h2 className="text-3xl font-bold text-[#151875] mb-4">Information About Us</h2>
          <p className="text-blue-900 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
            aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
            lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <div className="flex gap-2 mb-8">
            <span className="w-4 h-4 rounded-full bg-[#5625DF]"></span>
            <span className="w-4 h-4 rounded-full bg-[#FF27B7]"></span>
            <span className="w-4 h-4 rounded-full bg-[#37DAF3]"></span>
          </div>

          {/* Get in Touch */}
          <h2 className="text-3xl font-bold text-[#151875] mt-20">Get in Touch</h2>
          <p className="text-blue-900 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
            amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>
          <form className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Your E-mail*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            />
            <textarea
              placeholder="Type your message*"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
            ></textarea>
            <button className="bg-pink-500 text-white py-3 px-8 rounded-md hover:bg-red-600 transition-colors">
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {/* Contact */}
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Way</h2>

          <div className="flex flex-wrap items-start justify-between gap-6">
  {/* First Div */}
  <div className="flex items-center gap-4">
    <span className="w-5 h-5 rounded-full bg-[#5726DF]"></span>
    <div className="text-blue-900">
      <p>Tel: 877-67-88-99</p>
      <p>E-Mail: shop@store.com</p>
    </div>
  

  {/* Second Div */}
  <div className="flex items-center gap-4">
    <span className="w-5 h-5 rounded-full bg-[#FB2E86]"></span>
    <div className="text-blue-900">
      <p>Support Forum</p>
      <p>For over 24hr</p>
    </div>
  </div>
</div>


<div className="flex items-start justify-between gap-8">
  {/* First Div */}
  <div className="flex items-center gap-4">
    <span className="w-5 h-5 rounded-full bg-[#FFB265]"></span>
    <div className="text-blue-900">
      <p>20 Margaret st, London</p>
      <p>Great Britain, 3NM98-LK</p>
    </div>
  </div>

  {/* Second Div */}
  <div className="flex items-center gap-4">
    <span className="w-5 h-5 rounded-full bg-[#1BE982]"></span>
    <div className="text-blue-900">
      <p>Free standard shipping</p>
      <p>on all orders</p>
    </div>
  </div>
</div>

          </div>

          <div className='mt-20'>
      <Image
        src="/pages-images/Contact.png"
        alt="Contact"
        width={500} 
        height={500} 
      />
    </div>    
     </div>
      </div>
    </div>

    </>
  
  );
}

export default ContactUs;