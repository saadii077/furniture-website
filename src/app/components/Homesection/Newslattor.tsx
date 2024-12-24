
'use client';
import Link from 'next/link';
import Image from 'next/image';

function Newslater() {
  return (
    <div className="w-full bg-white mt-10">
      {/* Newslater */}
      <div
        className="w-full bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/subscribe.png')" }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Get Latest Update By Subscribe
            </h2>

            <h2 className="text-4xl font-bold text-blue-900 mb-6">
             Our Newsletter
          </h2>

          <button className="px-6 py-3 bg-[#FB2E86] text-white font-medium rounded-md shadow-md hover:bg-red-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* tagpic Section */}
      <div className="w-full py-12">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Image
            src="/tagpic.png"
            alt="tagpic"
            width={900}
            height={100} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Newslater;
