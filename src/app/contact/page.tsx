import { FaCircle } from "react-icons/fa";
import Images from "../components/Logo";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="bg-[#F6F5FF] lg:w-[1340px]">
          <div className="relative top-24 h-[250px] mb-6 mx-4 sm:mx-10 lg:mx-44 px-4">
            <h2 className="text-xl lg:text-2xl font-bold text-[#101750] font-josefin">
              Contact Us
            </h2>
            <p className="flex flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center gap-2">
              Home
              <FaCircle className="text-pink-700 w-[5px] h-[5px] mt-2 ml-1 mr-1 hidden md:inline-block" />
              <span>Pages</span>
              <FaCircle className="text-pink-700 w-[5px] h-[5px] mt-2 ml-1 mr-1 hidden md:inline-block" />
              <span className="text-pink-700">Contact us</span>
            </p>
          </div>
        </div>

        {/* Information section */}
        <div className="flex flex-col md:flex-row lg:flex-row mx-4 sm:mx-10 lg:mx-44 w-full lg:w-[1191px] h-auto">
          {/* Left side */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-2xl font-bold mt-20 font-josefin text-[#151875] w-full">
              Information About us
            </h1>
            <p className="font-lato font-[600] text-[#8A8FB9] text-sm w-full lg:w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet
              erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis
              bibendum quam.
            </p>
            <div className="flex flex-row gap-4 mt-10">
              <FaCircle className="w-[20px] h-[20px] text-[#1c21a1]" />
              <FaCircle className="w-[20px] h-[20px] text-[#dd3a9f]" />
              <FaCircle className="w-[20px] h-[20px] text-[#3ac1d3]" />
            </div>
            <div className="mt-4 lg:mt-28">
              <h1 className="text-2xl font-bold font-josefin text-[#151875] w-full">
                Get In Touch
              </h1>
              <p className="font-lato font-[600] text-[#8A8FB9] text-sm w-full lg:w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
                bibendum quam.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-2xl font-bold lg:ml-16 lg:mt-20 font-josefin text-[#151875] w-full">
              Contact Way
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div>
                <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#1c21a1]" />
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  Tel: 877-67-88-99
                </p>
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  E-Mail: shop@store.com
                </p>
              </div>
              <div>
                <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#e9409d]" />
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">Support Forum</p>
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  For over 24hr
                </p>
              </div>
              <div>
                <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#f8a647]" />
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  20 Margaret st, London
                </p>
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  Great Britain, 3NM98-LK
                </p>
              </div>
              <div>
                <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#3ee63e]" />
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  Free standard shipping
                </p>
                <p className="font-sans text-sm lg:text-lg text-[#8A8FB9]">
                  on all orders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row lg:flex-row mx-4 sm:mx-10 lg:mx-44 mt-10">
          <div className="w-full md:w-1/2">
            <form className="w-full max-w-[500px] mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border-2 border-gray-100 px-4 py-2 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border-2 border-gray-100 px-4 py-2 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full border-2 border-gray-100 px-4 py-2 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Type Your Message"
                  required
                  className="w-full border-2 border-gray-100 px-4 py-2 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-pink-700 px-6 py-2 mt-4 w-full sm:w-auto"
              >
                Send Mail
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/bgImg.png"
              alt="Contact Image"
              width={450}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-20 lg:mt-10 lg:mb-14">
          <Images />
        </div>
      </div>
    </section>
  );
}
