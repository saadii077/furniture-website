import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
<section className="bg-[#F6F5FF] h-auto md:h-[286px] py-8">
  <div className="container mx-auto h-full flex flex-col items-center md:items-start justify-center gap-4 px-4 md:px-8">
    <h1 className="text-[#101750] text-3xl md:text-4xl font-bold text-center md:text-left">
      About Us
    </h1>
    <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center md:text-left">
      <Link href="/" className="hover:text-[#FB2E86]">
        Home
      </Link>
      <span className="text-gray-400">.</span>
      <p>Pages</p>
      <span className="text-gray-400">.</span>
      <p className="text-[#FB2E86]">About Us</p>
    </div>
  </div>
</section>



    <div className="px-6 font-sans text-[#151875]">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-screen max-w-[1200px] mx-auto px-6 lg:px-20 py-10">
  {/* Left Side (Image) */}
  <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
    <Image
      src="/pages-images/About-us.png"
      alt="Ecommerce Business"
      width={400}
      height={400}
      className="rounded-md shadow-md"
    />
  </div>

  {/* Right Side (Content) */}
  <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
    <h2 className="text-4xl lg:text-5xl font-bold text-[#101750] mb-4">
      Know About Our Ecommerce Business, History
    </h2>
    <p className="text-base lg:text-lg text-blue-900 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
      mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae
      eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
    </p>
    <Link href="/Pages/Contact-us">
      <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600">
        Contact Us
      </button>
    </Link>
  </div>
</section>


      {/* Features Section */}
      <section className="pb-8 pt-4 text-center px-6 md:px-12 lg:px-20 xl:px-40">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Our Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {[
      { icon: "/shopex one.png", title: "Free Delivery" },
      { icon: "/shopex two.png", title: "100% Cash Back" },
      { icon: "/shopex three.png", title: "Quality Product" },
      { icon: "/shopex four.png", title: "24/7 Support" },
    ].map((feature, index) => (
      <div
        key={index}
        className="p-4 md:p-6 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#F3F3F3]"
      >
        <Image
          src={feature.icon}
          alt={feature.title}
          width={60}
          height={60}
          className="mb-3 md:mb-4 mx-auto"
        />
        <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
        <p className="text-blue-900 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Testimonials Section */}
      <section className="my-40 text-center bg-slate-100">
  <h2 className="text-3xl font-bold mb-2 max-w-[1200px] mx-auto px-16 py-8 text-gray-900">Our Client Say!</h2>
  <div className="flex items-center justify-center pb-2">
    {/* Image Section */}
    <div className="flex justify-center min-w-screen">
    <Image
        src="/pages-images/clients.png"
        alt="clients"
        width={200}
        height={200}
        className="rounded-md shadow-md"
      />
    </div>
  </div>

  <div className="flex items-center justify-center pb-2">
    {/* Image Section */}
    <div className="flex justify-center min-w-screen">
    <Image
        src="/pages-images/salina gomez.png"
        alt="gomez"
        width={100}
        height={100}
        className="rounded-md shadow-md"
      />
    </div>
  </div>


  <p className="mt-6 text-blue-900">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin<br />
   aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor<br />
    aliquam lacus volutpat praesent.
  </p>

  <div className="flex gap-2 items-center justify-center p-4">
          
          <button className="w-[24px] h-[4px] rounded-[10px] bg-[#F701A8]"></button>
          <button className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7]"></button>
          <button className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7]"></button>
          <button className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7]"></button>
        </div>
</section>

    </div>
    </>
  );
};

export default AboutPage;