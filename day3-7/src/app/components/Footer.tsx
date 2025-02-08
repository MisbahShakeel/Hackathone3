
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
    return (
      <footer className="bg-[#EEEFFB] py-10 border-t border-grey-500 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Hekto */}
            <div>
              <h2 className="text-xl font-bold text-black">Hekto</h2>
              
              <p className="text-lg text-gray-500 mt-4">Contact Info</p>
              <p className="text-sm text-gray-500">
                17 Princess Road, London, <br/> Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Column 2: Categories */}
            <div>
              <h3 className="text-lg font-bold text-black">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">Laptops & Computers</li>
                <li className="text-sm text-gray-500">Cameras & Photography</li>
                <li className="text-sm text-gray-500">Smart Phones & Tablets</li>
                <li className="text-sm text-gray-500">Video Games & Consoles</li>
                <li className="text-sm text-gray-500">Waterproof Headphones</li>
              </ul>
            </div>

            {/* Column 3: Customer Care */}
            <div>
              <h3 className="text-lg font-bold text-black">Customer Care</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">My Account</li>
                <li className="text-sm text-gray-500">Discount</li>
                <li className="text-sm text-gray-500">Returns</li>
                <li className="text-sm text-gray-500">Orders History</li>
                <li className="text-sm text-gray-500">Order Tracking</li>
              </ul>
            </div>

            {/* Column 4: Pages */}
            <div>
              <h3 className="text-lg font-bold text-black">Pages</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">Blog</li>
                <li className="text-sm text-gray-500">Browse the Shop</li>
                <li className="text-sm text-gray-500">Category</li>
                <li className="text-sm text-gray-500">Pre-Built Pages</li>
                <li className="text-sm text-gray-500">Visual Composer</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="bg-[#E7E4F8] mt-12 py-4 border-t border-grey-500 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">©Webecy - All Rights Reserved</p>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white flex items-center justify-center">
                <FaFacebookF />
              </span>
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white flex items-center justify-center">
                <FaInstagram />
              </span>
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white flex items-center justify-center">
                <IoLogoTwitter />
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
}
