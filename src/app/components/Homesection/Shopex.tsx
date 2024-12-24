'use client';

import Image from 'next/image';

function Offer() {
  const offers = [
    { id: 1, icon: '/shopex one.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { id: 2, icon: '/shopex two.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { id: 3, icon: '/shopex three.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { id: 4, icon: '/shopex four.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
  ];

  return (
    <div className="w-full bg-white py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#3F509E] text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        What Shopex Offer!
      </h2>

      {/* Offer Boxes */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center text-center border border-gray-200 p-4 md:p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
            <div className="w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4">
              <Image src={offer.icon} alt={offer.title} width={64} height={64} className="object-contain" />
            </div>
            <h3 className="text-[#3F509E] font-bold text-base md:text-lg mb-1 md:mb-2">{offer.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
