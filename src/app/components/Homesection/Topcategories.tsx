
import Image from "next/image";

const topProducts = [
  {
    url: "/topcategoriesOne.png",
  },
  {
    url: "/topcategoriesTwo.png",
  },
  {
    url: "/topcategoriesThree.png",
  },
  {
    url: "/topcategoriesFour.png",
  },
];

const TopCategories = () => {
  return (
    <section className="mt-20 container">
      <h1 className="text-4xl text-center jon font-bold text-blue-900">
        Top Categories
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 ">
        {topProducts.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt="top-categories-img"
            width={269}
            height={345}
            className="cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]"
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src={"/dots.png"}
          alt="dots"
          width={50}
          height={12}
        />
      </div>
    </section>
  );
};

export default TopCategories;
