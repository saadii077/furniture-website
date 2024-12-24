'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full bg-[#F3F3F3] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 lg:p-20">
      {/* Left Section (Flask Image) */}
      <div className="w-full md:w-1/4 flex items-center justify-center relative">
        <Image
          src="/flask.png"
          alt="Flask"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Middle Section (Text Content) */}
      <div className="w-full md:w-2/4 text-center md:text-left flex flex-col items-center md:items-start justify-center space-y-6">
        {/* Pink Text */}
        <p className="text-[#FB2E86] text-lg md:text-xl font-medium">
          Best Furniture For Your Castle...
        </p>

        {/* Bold Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
          New Furniture Collection Trends in 2020
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
          phasellus non in justo.
        </p>

        {/* Shop Now Button */}
          <button className="px-6 py-3 bg-[#FB2E86] text-white font-medium rounded-md shadow-md hover:bg-red-600 transition duration-300">
            Shop Now
          </button>
      </div>

      {/* Right Section (Sofa Image) */}
      <div className="w-full md:w-3/4 relative flex items-center justify-center">
        {/* Pink Background Image */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center z-0 rounded-full"
          style={{ backgroundImage: 'url(/pink.png)' }}
        ></div>

        {/* Sofa Image */}
        <div className="relative z-10">
          <Image
            src="/shellshaped.png"
            alt="Sofa"
            width={350}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Blue Discount Badge */}
        <div
          className="absolute top-[20px] right-[20px] md:top-[10%] md:right-[50px] bg-cover bg-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex flex-col justify-center items-center z-20 rounded-full"
          style={{ backgroundImage: 'url(/discount.png)' }}
        >
          <span className="text-lg md:text-xl font-bold text-white">50%</span>
          <span className="text-xs md:text-sm font-semibold text-white">OFF</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
