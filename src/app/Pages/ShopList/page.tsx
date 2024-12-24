import Image from "next/image";
import Link from "next/link";
import { FaRegHeart,  FaSearchPlus } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

const shoplist = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    image: "/pages-images/shoplist1.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 2,
    name: "In nulla",
    image: "/pages-images/shoplist2.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
  {
    id: 3,
    name: "Vel sem",
    image: "/pages-images/shoplist3.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 5,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  }, {
    id: 4,
    name: "Porttitor cum",
    image: "/pages-images/shoplist4.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  }, {
    id: 5,
    name: "Nunc in",
    image: "/pages-images/shoplist5.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  }, {
    id: 6,
    name: "Vitae facilisis",
    image: "/pages-images/shopist6.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in estadipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  }, {
    id: 7,
    name: "Curabitur lectus",
    image: "/pages-images/shoplist7.png",
    price: "$26.00",
    oldPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    rating: 4,
    colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
  },
];

const ShopList = () => {
 return (
 
  <> 
    <section className="bg-[#F6F5FF] py-8 mt-8">
        <div className="container mx-auto flex flex-col items-center md:items-start justify-center gap-4 py-10 px-4 md:px-8">
          <h1 className="text-[#101750] text-4xl md:text-4xl font-bold text-center md:text-left">
            Shop List
          </h1>
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center md:text-left">
            <Link href="/" className="hover:text-[#FB2E86]">
              Home
            </Link>
            <span className="text-gray-400">.</span>
            <p>Pages</p>
            <span className="text-gray-400">.</span>
            <p className="text-[#FB2E86]">Shop List</p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 lg:px-16">
  {/* Filter and Sorting Section */}
  <div className="py-4 flex flex-col lg:flex-row justify-between">
    <div className="px-4 lg:px-14">
      <h1 className="text-xl sm:text-2xl text-[#101750] font-semibold font-[Josefin Sans] mb-2">
        Ecommerce Accessories & Fashion Items
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        About 9,620 results (0.62 seconds)
      </p>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      {/* Per Page */}
      <div className="flex items-center gap-2">
        <label htmlFor="perPage" className="text-sm font-medium text-blue-700">
          Per Page:
        </label>
        <input
          type="text"
          id="perPage"
          className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
        />
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-2">
        <label htmlFor="sortBy" className="text-sm font-medium text-blue-700">
          Sort By:
        </label>
        <select
          id="sortBy"
          className="p-1 border rounded text-sm focus:outline-none text-gray-400 focus:ring-1 focus:ring-[#FB2E86]"
        >
          <option value="bestMatch">Best Match</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      {/* View */}
      <div className="flex items-center gap-2">
        <label
          htmlFor="view"
          className="text-sm font-medium text-blue-700 flex items-center"
        >
          <span>View:</span>
          <img
            className="ml-2 h-5 w-5"
            src="/pages-images/shoplistvector2.png"
            alt="Grid view"
          />
          <img
            className="ml-2 h-5 w-5"
            src="/pages-images/vector shoplist.png"
            alt="List view"
          />
        </label>
        <input
          type="text"
          id="view"
          className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
        />
      </div>
    </div>
  </div>

  {/* Product List */}
  <div className="p-4 sm:p-8">
    <div className="space-y-6">
      {shoplist.map((product) => (
        <div
          key={product.id}
          className="flex flex-col lg:flex-row bg-white text-[#101750] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {/* Product Image */}
          <div className="lg:w-1/3 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
            <div className="w-full flex justify-between items-center">
              {/* Product Name and Color Options */}
              <div className="flex items-center gap-8">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {product.name}
                </h3>
                {/* Color Options */}
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`w-4 h-4 ${color} rounded-full`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price, Old Price, and Rating */}
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold">{product.price}</span>
                <span className="text-pink-600 line-through">
                  {product.oldPrice}
                </span>
              </div>
              {/* Rating */}
              <div className="flex items-center space-x-0">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } text-lg`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-600">{product.description}</p>

            {/* Action Buttons */}
            <div className="mt-4 flex space-x-4">
              <Link href="/Pages/ShoppingCart">
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-pink-600">
                  <CgShoppingCart size={24} />
                </button>
              </Link>
              <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:text-red-600">
                <FaRegHeart size={24} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-blue-500">
                <FaSearchPlus size={24} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Tagpic */}
            <div className="flex justify-center items-center mt-14">
              <Image
                src="/tagpic.png"
                alt="tagpic"
                width={904}
                height={93}
                className="cursor-pointer"
              />
            </div>
    </>
  );
};

export default ShopList;