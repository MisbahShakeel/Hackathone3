'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import Product from "@/types/product";
import { urlFor } from "@/sanity/lib/image";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[] | null>(null); // Use null initially

  // Load wishlist from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      console.log("Wishlist on mount:", savedWishlist);
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      } else {
        setWishlist([]); // Set an empty array only if no data exists
      }
    }
  }, []); // Run only once on mount

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    if (wishlist !== null) {
      console.log("Updated Wishlist:", wishlist);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]); // Runs only when wishlist changes

  // Remove item from wishlist
  const removeFromWishlist = (productId: string) => {
    if (wishlist) {
      const updatedWishlist = wishlist.filter((item) => item._id !== productId);
      setWishlist(updatedWishlist);
      console.log("Wishlist after removal:", updatedWishlist);
    }
  };

  if (wishlist === null) {
    return <p>Loading...</p>; // Prevent rendering before state is set
  }

  return (
    <section className="bg-white py-8 relative top-28 mb-28">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {wishlist.map((product) => (
              <div key={product._id} className="border p-4 rounded-lg shadow bg-white">
                <Link href={`/components/product/${product.slug.current}`}>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt="product image"
                      width={200}
                      height={200}
                      className="md:w-full h-48 object-cover"
                    />
                  )}
                  <h2 className="text-blue-800 font-bold mt-2">{product.productName}</h2>
                  <p className="text-gray-500">{product.price ? `$${product.price}` : "Price not available"}</p>
                </Link>
                <button
                  className="flex mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition"
                  onClick={() => removeFromWishlist(product._id)}
                >
                  <FaTrash className="mr-2 mt-1"/> Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
