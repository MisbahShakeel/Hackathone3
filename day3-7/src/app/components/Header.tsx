import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FaRegEnvelope, FaAngleDown, FaHeart } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import Login from "./Login";

export default function Header() {
    return (
        <>
        <header className="bg-[#7E33E0] text-white w-full fixed top-0 z-50 shadow-md">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4 md:px-8 lg:px-20">
                {/* Left Section */}
                <div className="hidden sm:flex flex-wrap gap-6 font-josefin text-sm">
                    <div className="flex items-center gap-2">
                        <FaRegEnvelope />
                        <span>mhhasanul@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneVolume />
                        <span>(12345) 67890</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap items-center gap-6 font-josefin">
                    <div className="flex items-center cursor-pointer">
                        <span>English</span>
                        <FaAngleDown className="hidden sm:ml-0"/>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <Login/>
                        <IoPerson className="hidden sm:ml-2"/>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <Link href="/wishlist">
                        <FaHeart className="ml-2"/>
                        </Link>
                    </div>
                    <div className="cursor-pointer">
                        <Link href="/cart"><BsCart3 />
                        
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
