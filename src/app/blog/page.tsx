'use client'

import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Images from "../components/Logo";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Blog from "@/types/blog";
import { urlFor } from "@/sanity/lib/image";
import { blog } from "@/sanity/lib/quires";

export default function BlogPage() {

  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlog() {
      const fetchedBlog : Blog[] = await client.fetch(blog)
      setPosts(fetchedBlog)
    }
    fetchBlog()
  },[])


  return (
    <section className="py-8">
      <div className="container sm:mx-auto px-4 mt-10 w-full">
        <div className="bg-[#F6F5FF] rounded-lg">
          <div className="relative top-24 h-[250px] mb-6 px-4 lg:px-16">
            <h2 className="text-xl lg:text-2xl font-bold text-[#101750] font-josefin">Blog Page</h2>
            <p className="flex flex-col sm:flex-row items-center text-sm text-gray-500 font-lato gap-2">
              Home <FaCircle className="text-pink-700 w-[5px] h-[5px] mx-1 hidden sm:inline" /> <span>Pages</span>
              <FaCircle className="text-pink-700 w-[5px] h-[5px] mx-1 hidden sm:inline" /> <span className="text-pink-700">Blog page</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="container lg:p-6">
            <div className="grid gap-6">
              {posts.map((blog) => (
                <div key={blog._id} className="bg-white p-4 rounded-lg shadow-lg">
                  {blog.image && (
                    <Image src={urlFor(blog.image).url()} alt="image" width={400} height={400} className="sm:w-[600px] md:w-[700px] lg:w-full" />
                  )}
                  <div className="flex">
                  <h2 className="text-3xl font-lato font-semibold mt-6 text-[#151875]">{blog.heading}</h2>
                 
                  </div>
                  
                  <p className="text-gray-600 w-[350px] sm:w-[550px] md:w-[700px] lg:w-[800px] mt-2">{blog.description}</p>
                  <p className="text-blue-600 hover:text-blue-800 hover:underline mt-2">
                  <Link href={`/blog/${blog.slug.current}`} >
                    Read More
                  </Link>
                  </p>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search for posts"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#151875]">Categories</h3>
              <ul className="grid gap-2">
                {['Hobbies (14)', 'Women (21)', 'Men (18)', 'Kids (10)', 'Tech (5)'].map((category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 ${index === 0 ? 'w-[150px] bg-pink-500 text-white' : 'text-gray-700'} rounded-lg`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#151875]">Recent Post</h3>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((post) => (
                  <li key={post} className="flex space-x-4 items-center">
                    <Image
                      src="/post1.png"
                      alt="Thumbnail"
                      width={80}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-[#151875]">It is a long established fact</p>
                      <span className="text-sm text-gray-500">Aug 09 2020</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sale Products */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#151875]">Sale Product</h3>
              {[1, 2, 3].map((product) => (
                <div key={product} className="flex space-x-4 items-center mb-4">
                  <Image
                    src="/post2.jpg"
                    alt="Product"
                    width={80}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-[#151875]">Elle omore in enim mauris.</p>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer Products */}
            <div>
              <h3 className="text-xl font-semibold mt-10 text-[#151875]">Offer Product</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {["us.png", "light2.png", "clush.png", "handBag.png", "grid5.png", "grid6.png", "grid10.png", "grid11.png"].map((img, index) => (
                  <div key={index} className="text-center">
                    <Image src={`/${img}`} alt="Offer" width={130} height={100} />
                    <p className="text-sm text-gray-700 mt-2">Elle omore in enim mauris.</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20">
          <Images />
        </div>
      </div>
    </section>
  );
}
