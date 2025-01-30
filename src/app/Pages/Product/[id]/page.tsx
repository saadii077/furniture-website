"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { MdFacebook } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import RelatedProducts from "@/app/components/RelatedProducts";
import AddShopping from "@/app/components/AddShopping";
import ProductsDescriptions from "@/app/components/ProductDetails";
import { groq } from "next-sanity";

type Product = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  stockLevel: number;
  category: string;
  discountPercentage: number;
};

function ProductDetails({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<Product | null>(null);
  const [error, setError] = useState<boolean>(false);

  const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    description,
    "image": image.asset->url,
    price,
    stockLevel,
    category,
    discountPercentage
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(query, { slug: params.slug });
        if (product) {
          setData(product);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
        console.error("Error fetching product data:", err);
      }
    };

    fetchData();

    // Real-time stock updates
    const subscription = client
      .listen(query, { slug: params.slug })
      .subscribe((update) => {
        setData((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            stockLevel: update.result?.stockLevel ?? prev.stockLevel,
          };
        });
      });

    return () => subscription.unsubscribe();
  }, [params.slug, query]);

  if (error) {
    return (
      <h1 className="flex justify-center text-red-700 font-bold text-4xl pt-4">
        An Error Occurred!
      </h1>
    );
  }

  return (
    <main>
      {data ? (
        <section className="my-20">
           <div className="container mx-auto flex flex-col items-center md:items-start justify-center gap-4 py-10 px-4 md:px-8">
            <h1 className="text-[#101750] text-4xl md:text-4xl font-bold text-center md:text-left">
              Product Detail
            </h1>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center md:text-left">
              <a href="/" className="hover:text-[#FB2E86]">
                Home
              </a>
              <span className="text-gray-400">.</span>
              <p>Pages</p>
              <span className="text-gray-400">.</span>
              <p className="text-[#FB2E86]">Product Details</p>
            </div>
          </div>
          <div className="max-w-[84%] mx-auto">
            <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
              {/* Image Section */}
              <div className="flex flex-row gap-4 md:gap-9 items-center md:w-[50%]">
                <div className="flex flex-col gap-3">
                  {[data.image, data.image, data.image].map((src, index) => (
                    <Image
                      key={index}
                      className="p-3 shadow-lg"
                      src={src}
                      width={100}
                      height={100}
                      alt={`Product Image ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="relative items-center shadow-xl">
                  <div className="absolute top-0 left-0">
                    {data.stockLevel > 0 ? (
                      <span className="bg-green-600 text-white px-3 py-2 rounded-[9px] text-xs font-bold">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white px-3 py-2 rounded-[9px] text-xs font-bold">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <Image
                    src={data.image}
                    width={300}
                    height={300}
                    alt={data.name}
                    className="w-[300px] p-3 object-cover"
                  />
                </div>
              </div>

              {/* Product Info Section */}
              <div className="md:w-[45%] flex items-start gap-4 flex-col">
                <h3 className="text-3xl font-bold">{data.name}</h3>
                <div className="inline-flex gap-x-5">
                  {data.discountPercentage > 0 ? (
                    <>
                      <span className="text-[17px] text-[#151875] font-bold">
                        $
                        {(
                          data.price -
                          (data.price * data.discountPercentage) / 100
                        ).toFixed(2)}
                      </span>
                      <span
                        style={{ textDecoration: "line-through" }}
                        className="text-[16px] text-[#f83434]"
                      >
                        ${data.price.toFixed(2)}
                      </span>
                      <p>{data.discountPercentage}% off</p>
                    </>
                  ) : (
                    <span className="text-sm text-[#151875] font-bold">
                      ${data.price.toFixed(2)}
                    </span>
                  )}
                </div>

                <AddShopping
                  key={data._id}
                  name={data.name}
                  image={data.image}
                  discountPercentage={data.discountPercentage}
                  currency={"USD"}
                  _id={data._id}
                  stockLevel={data.stockLevel}
                />

                <span className="text-[20px] font-[500]">
                  Stock: {data.stockLevel}
                </span>
                <p className="text-md text-[#868ab4] leading-[20px]">
                  {data.description}
                </p>
                <span className="text-md text-[#151875] font-bold">
                  Categories:{" "}
                  <span className="text-orange-700">{data.category}</span>
                </span>
                <div className="inline-flex text-[20px] gap-x-4">
                  <span className="text-[17px] text-[#151875] font-bold">
                    Share
                  </span>
                  <MdFacebook />
                  <FaInstagram />
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1 className="flex justify-center text-red-700 font-bold text-5xl pt-4">
          No Products Found!
        </h1>
      )}

      {/* Product Descriptions & Related Products */}
      <RelatedProducts  />
      <ProductsDescriptions />
    </main>
  );
}

export default ProductDetails;
