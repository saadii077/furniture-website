
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

// blog data
const blogs: Blog[] = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    author: "Author 1",
    date: "December 9, 2024",
    category: "Design",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/pages-images/Blog1.png",
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    author: "Author 2",
    date: "December 8, 2024",
    category: "Technology",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/pages-images/Blog2.png",
  },
  {
    id: 3,
    title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
    author: "Author 3",
    date: "December 7, 2024",
    category: "Travel",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/pages-images/Blog3.png",
  },
];

const Blog = () => {
  return (
    <>
    <section className="bg-[#F6F5FF] py-8 mt-8">
          <div className="container mx-auto flex flex-col items-center md:items-start justify-center gap-4 py-10 px-4 md:px-8">
            <h1 className="text-[#101750] text-4xl md:text-4xl font-bold text-center md:text-left">
              Blog Page
            </h1>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center md:text-left">
              <Link href="/" className="hover:text-[#FB2E86]">
                Home
              </Link>
              <span className="text-gray-400">.</span>
              <p>Pages</p>
              <span className="text-gray-400">.</span>
              <p className="text-[#FB2E86]">Blog Page</p>
            </div>
          </div>
        </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-10">
        {/* Blog Posts Section */}
        <div className="lg:w-1/2">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                width={870}
                height={453}
                className="w-[40rem] h-80 object-cover rounded-md"/>
                
              {/* Author / Date */}
                          <div className="flex items-center space-x-2 mt-4 px-4">
                            <Image src="/Vector.png" alt="vector" width={20} height={20} />
                            <span className="text-[#151875] bg-pink-100 font-semibold px-8">Surf Auxion</span>
                            <Image src="/uil_calendar-alt.png" alt="Calendar" width={20} height={20} />
                            <span className="text-[#151875] bg-pink-100 font-semibold px-8">Aug 09 2020</span>
                          </div>
                <h2 className="text-xl font-bold mt-2 text-[#001F54]">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mt-2 mr-12">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-[#001F54] font-semibold underline mt-6 inline-block">
                  Read More
                </a>
              </div>
    
          ))}
        </div>

        {/* Sidebar */}
<div className="lg:w-1/4 lg:pl-10 mt-10 lg:mt-0">
  {/* Search */}
  <div className="mb-6">
    <h3 className="text-lg font-bold text-[#001F54] mb-2">Search</h3>
    <div className="relative">
      <input
        type="text"
        placeholder="Search here"
        className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#001F54] pr-10"
      />
      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  </div>



         {/* Categories */}
<div className="mb-6">
  <h3 className="text-lg font-bold text-[#001F54] mb-2">Categories</h3>
  <ul className="grid grid-cols-2 gap-y-1 gap-x-4 text-blue-800">
    <li className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
      Hobbies (14)
    </li>
    <li className="text-[#001F54] px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
      Women (21)
    </li>
    <li className="text-[#001F54] px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
      Women (21)
    </li>
    <li className="text-[#001F54] px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
      Women (21)
    </li>
    <li className="text-[#001F54] px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
      Women (21)
    </li>
    <li className="text-[#001F54] px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white">
      Women (21)
    </li>
  </ul>
</div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-900 mb-6 text-[#001F54]">Recent Posts</h3>
            <ul className="space-y-2">
              {[
                { id: 4, image: "/pages-images/postblog1.png", excerpts: "It is a long established fact", date: "Aug 09 2020",},
                { id: 5, image: "/pages-images/postblog2.png", excerpts: "It is a long established fact", date: "Aug 09 2020",},
                { id: 6, image: "/pages-images/postblog3.png", excerpts: "It is a long established fact", date: "Aug 09 2020",},
                { id: 7, image: "/pages-images/postblog4.png", excerpts: "It is a long established fact", date: "Aug 09 2020",},
              ].map((blog) => (
                <li key={blog.id} className="flex items-center space-x-4">
                  <Image
                    src={blog.image}
                    alt=""
                    width={500}
                    height={500}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-sm text-blue-900">{blog.excerpts}</p>
                    <p className="text-sm text-blue-900">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sale Product */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-[#001F54]">Sale Product</h3>
            <ul className="space-y-2">
              {[
                { id: 7, image: "/pages-images/saleblog1.png", excerpts: "Elit ornare in enim mauris.", date: "Aug 09 2020",},
                { id: 8, image: "/pages-images/saleblog2.png", excerpts: "Viverra pulvinar et enim.", date: "Aug 09 2020",},
                { id: 9, image: "/pages-images/saleblog3.png", excerpts: "Mattis varius donec fdsfd", date: "Aug 09 2020",},

              ].map((blog) => (
                <li key={blog.id} className="flex items-center space-x-4">
                  <Image
                    src={blog.image}
                    alt=""
                    width={500}
                    height={500}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-sm text-blue-900">{blog.excerpts}</p>
                    <p className="text-sm text-blue-900">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Offer Product */}
<div className="mb-6">
  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-[#001F54]">Offer Product</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {[
      { id: 8, image: "/pages-images/offerblog1.png", excerpts: "Duis lectus est.", price: "$12.00 - $15.00" },
      { id: 9, image: "/pages-images/offerblog2.png", excerpts: "Sed placerat.", price: "$12.00 - $15.00" },
      { id: 10, image: "/pages-images/offerblog3.png", excerpts: "Netus proin.", price: "$12.00 - $15.00" },
      { id: 11, image: "/pages-images/offerblog4.png", excerpts: "Platea in.", price: "$12.00 - $15.00" },
    ].map((blog) => (
      <div key={blog.id} className="text-center">
        <Image
          src={blog.image}
          alt=""
          width={500}
          height={500}
          className="w-22 h-22 object-cover rounded-md mx-auto"
        />
        <div className="mt-2">
          <p className="text-l text-blue-900">{blog.excerpts}</p>
          <p className="text-sm text-slate-500">{blog.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>



           {/* Follow */} 
           <div className="mt-8">
           <h3 className="text-2xl font-bold text-[#001F54] mb-2">Follow</h3>
           <div className="flex space-x-4 bg-white mt-6">
                       <a href="" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-purple-800">
                         <FaFacebookF />
                       </a>
                       <a href="" className="w-8 h-8 rounded-full bg-pink-700 flex items-center justify-center text-white hover:bg-blue-700">
                         <FaTwitter />
                       </a>
                       <a href="" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-purple-500">
                         <FaInstagram />
                       </a>
                     </div>
           </div>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#001F54]">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["General", "Atsanil", "Insas.", "Bibsaas", "Nulla."].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-l text-gray-600 underline hover:text-pink-600 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        </div>

        {/* Tagpic */}
                        <div className="flex justify-center items-center mt-14">
                          <Image
                            src="/tagpic.png"
                            alt="Tag Pic"
                            width={904}
                            height={93}
                            className="cursor-pointer"
                          />
                        </div>


    </>
  );
};

export default Blog;
