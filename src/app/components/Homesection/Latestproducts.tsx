'use client';

import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";
import { GoHeartFill } from "react-icons/go";

function LatestProducts() {
  const products = [
    { id: 1, img: "/latest one.png" },
    { id: 2, img: "/latest two.png", sale: true },
    { id: 3, img: "/latest three.png" },
    { id: 4, img: "/latest four.png" },
    { id: 5, img: "/latest five.png" },
    { id: 6, img: "/latest six.png" },
  ];

  return (
    <div className="w-full bg-white py-10 sm:py-16 md:py-20">
      {/* Heading */}
      <h2 className="text-[#3F509E] text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6 sm:mb-8 md:mb-10">
        Latest Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 sm:space-x-8 mb-10 sm:mb-12 md:mb-16">
        {["New Arrival", "Best Seller", "Featured", "Special Offers"].map((tab) => (
          <button
            key={tab}
            className="text-[#3F509E] text-sm sm:text-base md:text-lg font-medium relative group hover:text-[#FB2E86]"
          >
            {tab}
            {/* Underline */}
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FB2E86] transition-all duration-300 group-hover:w-full"
            ></span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image */}
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
              {/* Sale Tag */}
              {product.sale && (
                <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-xs sm:text-sm px-1 py-0 rounded">
                  <img src="Group 27.png" alt="Sale" />
                </span>
              )}
              <Image
                src={product.img}
                width={200}
                height={200}
                alt="Comfy Handy Craft"
                className="object-contain"
              />

              {/* Icons */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow">
                  <GoHeartFill className="w-5 sm:w-6 h-5 sm:h-6 text-[#3F509E]" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <HiMiniMagnifyingGlassCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#3F509E]" />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <FaShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-[#3F509E]" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#3F509E]">
                Comfy Handy Craft
              </h3>
              <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
                <span className="text-red-600 font-medium line-through text-xs sm:text-sm">
                  $65.00
                </span>
                <span className="text-gray-800 text-sm sm:text-base">
                  $42.00
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
