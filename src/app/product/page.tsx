'use client'

import { FaCircle, FaInstagram, FaFacebookF, FaArrowRight, FaHeart} from "react-icons/fa";
import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io5";
import Images from "../components/Logo";
import React, { useEffect, useState } from "react";
import Product from "@/types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quires";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart} from "../actions/actions";
import Swal from "sweetalert2";


export default function Shop() {

const [product, setProduct] = useState<Product[]>([]);
const [cartCount, setCartCount] = useState<number>(0);
const [wishlist, setWishlist] = useState<Product[]>([]);

useEffect(() => {
  async function fetchProduct() {
    const fetchedProduct : Product[] = await client.fetch(allProducts)
    setProduct(fetchedProduct)
  }
  fetchProduct()
},[])


  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(savedWishlist);
    }
  }, []);

const handleAddToCart = (e:React.MouseEvent, product : Product) => {
  e.preventDefault()
  Swal.fire({
    position: 'top-right',
    icon: 'success',
    title: `${product.productName} added to cart`,
    showConfirmButton: false,
    timer: 1000
  })
  addToCart(product);
  setCartCount(prevCount => prevCount + 1);
};

const handleWishlist = (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
  
      let updatedWishlist: Product[];
  
      if (wishlist.some((item) => item._id === product._id)) {
        
        updatedWishlist = wishlist.filter((item) => item._id !== product._id);
        Swal.fire({
          position: "top-right",
          icon: "error",
          title: `${product.productName} removed from wishlist`,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        
        updatedWishlist = [...wishlist, product];
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: `${product.productName} added to wishlist`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
  
      setWishlist(updatedWishlist); // Update State
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to LocalStorage
    };


  return (
    <section className="bg-white py-8">
    <div className="container mx-auto">
      <div className="bg-[#F6F5FF] w-full">
        <div className="h-[250px] mb-6 relative top-24 mx-4 lg:mx-44 px-4">
          <h2 className="text-lg lg:text-2xl font-bold text-black font-josefin">Product Details</h2>
          <p className="flex flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center">
            Home <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 ml-1 mr-1" /> Pages
            <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 lg:ml-1 mr-1" /> <span className="text-pink-700">Product Details</span>
          </p>
        </div>
      </div>
  
      {/* Product Images and Details */}
      <div className="mx-4 lg:mx-44">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left side */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <div>
              <Image src="/us.png" alt="" width={140} height={155} />
            </div>
            <div>
              <Image src="/light2.png" alt="" width={140} height={155} />
            </div>
            <div>
              <Image src="/clush.png" alt="" width={140} height={155} />
            </div>
          </div>
  
          {/* Middle side (Main Image) */}
          <div className="relative flex justify-center lg:justify-end">
            <Image src="/handBag.png" alt="" width={350} height={300} className="w-[300px] sm:w-[400px] h-[150px] sm:h-[470px] lg:mt-5 mb-5" />
          </div>
  
          {/* Right side */}
          <div className="relative lg:right-[10px] lg:top-20">
            <h1 className="text-2xl lg:text-3xl font-josefin text-[#0D134E]">Playwood arm chair</h1>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-1">
                <Image src="/star.png" alt="" width={10} height={14} />
                <Image src="/star.png" alt="" width={10} height={14} />
                <Image src="/star.png" alt="" width={10} height={14} />
                <Image src="/star.png" alt="" width={10} height={14} />
                <h4 className="text-[#151875] font-josefin text-sm">(22)</h4>
              </div>
            </div>
  
            <div className="mt-6">
              <p className="text-[#151875] font-bold text-xl">$32.00
                <span className="text-pink-500 line-through">$39.00</span>
              </p>
              <h5 className="text-[#0D134E] mt-4">Color</h5>
              <p className="w-full h-[45px] mt-2 text-[#A9ACC6] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus.</p>
  
              <div className="mt-6">
                <h5 className="text-[#151875]">Categories: Furniture</h5>
                <h5 className="text-[#151875] mt-2">Tag: Wooden</h5>
              </div>
  
              <div className="mt-4 flex items-center gap-4">
                <h5 className="text-[#151875]">Share</h5>
                <div className="flex space-x-2">
                  <span className="w-8 h-8 bg-blue-900 rounded-full text-white flex justify-center items-center"><FaFacebookF /></span>
                  <span className="w-8 h-8 bg-pink-600 rounded-full text-white flex justify-center items-center"><FaInstagram /></span>
                  <span className="w-8 h-8 bg-blue-900 rounded-full text-white flex justify-center items-center"><IoLogoTwitter /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Description Section */}
      <div className="bg-[#F9F8FE] mt-10 sm:h-[380px]">
        <div className="mx-4 lg:mx-44">
          <ul className="flex text-blue-900 font-josefin font-bold text-lg">
            <li className="mt-10">Description</li>
            <li className="mt-10 ml-24">Additional Info</li>
            <li className="hidden sm:mt-10 ml-24">Reviews</li>
            <li className="hidden sm:mt-10 ml-24">Video</li>
          </ul>
  
          <h3 className="text-[#151875] font-josefin pt-10 font-bold">Varius Tempor</h3>
          <p className="text-[#A9ACC6] font-josefin pt-4 text-sm leading-[29px]">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.
            Montes, mauris varius ac est bibendum.
          </p>
          <h3 className="text-[#151875] font-josefin pt-5 font-bold">More Details</h3>
          <FaArrowRight className="mt-10" />
          <p className="text-[#A9ACC6] font-josefin text-sm ml-10 relative bottom-[22px]">Aliquam dis vulputate vulputate integer sagittis.</p>
          <FaArrowRight/>
          <p className="text-[#A9ACC6] font-josefin text-sm ml-10 relative bottom-[22px]">Aliquam dis vulputate vulputate integer sagittis.</p>
        </div>
      </div>
  
      {/* Related Products Section */}
      <div className="mt-20 mb-6">
        <h1 className="w-[293px] font-josefin text-2xl lg:text-3xl text-[#101750] font-bold">Related Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8">
          {product.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Link href={`/components/product/${product.slug.current}`}>
                {product.image && (
                  <Image src={urlFor(product.image).url()} alt="image" width={200} height={200} className="md:w-full h-48 object-cover" />
                )}
                <h2 className="text-blue-800 font-lato font-bold">{product.productName}</h2>
                <p className="text-gray-500 mt-2">{product.price ? `$${product.price}` : "Price not available"}</p>
                </Link>

                <button 
                className={`text-xl ${wishlist.some((item) => item._id === product._id) ? 'text-red-500' : 'text-gray-500'}`}
                onClick={(e) => handleWishlist(e, product)}>
                  <FaHeart/>
                </button>

                <button className="mt-4 ml-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e) => handleAddToCart(e, product)}>
                  Add To Cart
                </button>
                
             
            </div>
          ))}
        </div>
      </div>
  
      
      <div className="mt-4 mb-10">
        <Images />
      </div>
    </div>
  </section>
  
  );
}

