'use client';

import Image from 'next/image';
import Link from 'next/link';

function Ordercomplete() {
  return (
    <>
      <section className="bg-[#F6F5FF] h-[200px] md:h-[186px] relative">
        <div className="container h-full items-center flex justify-center flex-col">
          <h1 className="text-[#101750] text-4xl font-bold">Product Details</h1>
          <div className="flex items-center gap-1 font-medium text-sm">
            <Link href="/">OrderCompleted</Link>
            <p>.</p>
            <p>Pages</p>
            <p>.</p>
            <p className="text-[#FB2E86]">OrderCompleted</p>
          </div>
        </div>
      </section>

      {/* Clock Icon and Order Completion Section */}
      <div className="flex flex-col items-center px-4 py-6">
        {/* Clock Icon */}
        <div className="relative">
          <Image
            src="/pages-images/orderclock.png"
            alt="Clock Icon"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Order Completion Content */}
        <div className="w-full max-w-md text-center space-y-4 mt-4">
          {/* Tick Image */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-[#EDEFFB] rounded-full flex justify-center items-center">
              <Image
                src="/pages-images/ordertick.png"
                alt="Order Completed Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Order Complete */}
          <h2 className="text-xl font-bold text-[#1D3178]">Your order is completed!</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm font-bold">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            You will receive an email confirmation when your order is completed.
          </p>

          {/* Button */}
          <Link href="/Pages/ShopList">
            <button className="bg-[#FB2E86] text-white px-4 py-2 hover:bg-red-600 rounded-md text-sm font-medium">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      {/* Tag Image */}
      <div className="flex justify-center items-center mt-8">
        <Image
          src="/tagpic.png"
          alt="tagpic"
          width={850}
          height={80}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default Ordercomplete;
