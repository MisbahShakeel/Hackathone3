'use client'

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [products, setProducts] = useState([]);
    const [isMobileMenuOpen, setMobileMenueOpen] = useState(false);

    const toggleMobileMenue = () => {
        setMobileMenueOpen(!isMobileMenuOpen)
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const query = `*[_type == "product"] {
                _id,
                productName,
                description
            }`;
            const data = await client.fetch(query);
            setProducts(data);
        };

        fetchProducts();
    }, []);
console.log(products);

    return (
        <>
            <nav className="bg-white mt-[40px] md:mt-8 fixed w-full z-40 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-wrap items-center justify-between h-[60px]">
                    {/* Logo */}
                    <div className="flex items-center md:mt-6">
                        <h1 className="font-josefin font-bold text-2xl text-black">Hekto</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden sm:flex flex-1 justify-center md:mt-6">
                        <ul className="flex flex-wrap gap-2 md:gap-6 lg:gap-10 font-lato text-black font-medium">
                            <li className="text-pink-500 flex items-center">
                                <Link href="/" className="hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link href="/shop-list" className="hover:underline">Pages</Link>
                            </li>
                            <li>
                                <Link href="/product" className="hover:underline">Product</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:underline">Blog</Link>
                            </li>
                            <li>
                                <Link href="/shop-grid" className="hover:underline">Shop</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center md:mt-6">
                        <button className="w-8 h-8 flex items-center justify-center bg-pink-500 rounded-l-md hover:bg-pink-600">
                            <FaSearch className="text-white" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search products"
                            className="w-40 md:w-60 lg:w-80 h-8 border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                    </div>
               

                {/* Mobile Menu toggle*/}

                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMobileMenue}
                    className="focus:outline-none">
                        {isMobileMenuOpen ? <FiX size={24}/> : <FiMenu size={24} />}
                    </button>
                </div>
                </div>

                {/* Mobile Menu */}

                {isMobileMenuOpen && (
                   <div className="sm:hidden px-4 pt-2 pb-4">
                   <ul className="space-y-2 text-black text-sm font-medium flex gap-4">
                       <li className="flex items-center mt-2">
                           <Link href="/" className="hover:underline">Home</Link>
                           
                       </li>
                       <li>
                           <Link href="/shop-list" className="hover:underline">Pages</Link>
                       </li>
                       <li>
                           <Link href="/product" className="hover:underline">Product</Link>
                       </li>
                       <li>
                           <Link href="/blog" className="hover:underline">Blog</Link>
                       </li>
                       <li>
                           <Link href="/shop-grid" className="hover:underline">Shop</Link>
                       </li>
                       <li>
                           <Link href="/contact" className="hover:underline">Contact</Link>
                       </li>
                   </ul>
               </div>
                )};
                
            </nav>
        </>
    );
}
