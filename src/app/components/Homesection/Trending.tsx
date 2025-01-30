
'use client';

import Image from 'next/image';
import Link from 'next/link';

function TrendingProducts() {
  const products = [
    { id: 1, img: "/trending1.png" },
    { id: 2, img: "/trending2.png" },
    { id: 3, img: "/trending3.png" },
    { id: 4, img: "/trending4.png" },
  ];

  const exclusiveProducts = [
    { id: 1, img: "/Trendingfourside.png" },
    { id: 2, img: "/Trendingfiveside.png" },
    { id: 3, img: "/Trendindsixside.png" },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Section Heading */}
      <h2 className="text-[#3F509E] text-3xl font-bold text-center mb-16">Trending Products</h2>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20 ">
        {products.map((product) => (
          <div key={product.id} className="group relative shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
            {/* Image with Gray Background */}
            <div className="bg-gray-200 flex justify-center items-center p-6 h-[280px] relative ">
              <Image
                src={product.img}
                alt="Trending Product"
                width={200}
                height={200}
                className="object-contain transition-all duration-300 group-hover:opacity-90"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
              <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
              <span className="text-gray-500 line-through ml-2">$42.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* clock/desk List Section */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Clock section */}
        <div className="bg-pink-100 p-8 flex flex-col justify-between relative h-[250px] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-pink-100">
          <h3 className="text-[#3F509E] text-2xl font-bold mb-2">23% Off in all products</h3>
          <div className="flex justify-start mb-40">
 
 <Link href="/Pages/ShoppingCart">
  <button className="text-pink-600 underline text-lg font-medium hover:text-red-600">
    Shop Now
  </button>
  </Link>
</div>
          <Image
            src="/clock.png"
            alt="clock"
            width={200}
            height={200}
            className="absolute bottom-2 right-0 object-contain"
          />
        </div>

        {/* Desk section */}
        <div className="bg-pink-100 p-8 flex flex-col justify-between relative h-[250px] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-pink-100">
          <h3 className="text-[#3F509E] text-2xl font-bold mb-4">23% Off in all products</h3>
   {/* Button */}
   <div className="flex justify-start mb-40">

    <Link href="/Pages/ShopList">
  <button className="text-pink-600 underline text-lg font-medium hover:text-red-600">
    View Collection
  </button>
  </Link>
</div>

          <Image
            src="/desk.png"
            alt="desk"
            width={200}
            height={200}
             className="absolute bottom-2 right-2 object-contain"
          />
        </div>

        {/* Exclusive Product List */}
        <div className="flex flex-col space-y-4 ">
          {exclusiveProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-200 flex items-center p-4 h-[100px] rounded shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
            >
              <Image
                src={product.img}
                alt="Exclusive Product"
                width={80}
                height={80}
                className="object-contain mr-4"
              />
              <div>
                <h3 className="text-[#3F509E] font-semibold text-lg mb-1">Exclusive Seat Chair</h3>
                <p className="text-[#3F509E] font-bold inline-block">$32.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
