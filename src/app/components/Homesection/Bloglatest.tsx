'use client';
import Image from 'next/image';
import Link from 'next/link';

function BlogSection() {
  const blogs = [
    {
      id: 1,
      img: "/blogone.png",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", 
    },
    {
      id: 2,
      img: "/blogtwo.png",
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#FB2E86",
    },
    {
      id: 3,
      img: "/blogthree.png",
      author: "Saber Ali",
      date: "21 August, 2020",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", 
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-center text-blue-900 text-3xl font-bold mb-12">Latest Blog</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-start shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3] rounded-lg overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="w-full h-64 relative bg-slate-200">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Author / Date */}
            <div className="flex items-center space-x-2 mt-4 px-4">
              <Image src="/Vector.png" alt="vector" width={20} height={20} />
              <span className="text-[#151875] font-medium">{blog.author}</span>
              <Image src="/uil_calendar-alt.png" alt="Calendar" width={20} height={20} />
              <span className="text-[#151875] font-medium">{blog.date}</span>
            </div>

            {/* Title */}
            <h3
              className="font-bold text-lg mt-4 px-4 text-left"
              style={{ color: blog.titleColor }}
            >
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-gray-700 mt-2 px-4 text-left">{blog.description}</p>

            {/* Read More */}
            <Link href="/Pages/Blog">
            <button
              className="underline text-base font-bold mt-4 px-4 mb-4 self-start hover:bg-purple-400"
              style={{ color: blog.titleColor }}
            >
              Read More
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
