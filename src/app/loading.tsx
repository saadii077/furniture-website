import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed inset-0 bg-gray-100">
      {/* Spinner */}
      <div className="w-16 h-16 border-[7px] border-t-blue-500 border-gray-300 rounded-full animate-spin mb-6"></div>
      
      {/* Moving Image */}
      <div className="animate-move">
        <Image
          src="/latest five.png" // Replace with your image path
          alt="Loading"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Loading;
