import { FaCircle } from "react-icons/fa"
import Image from "next/image"
import Images from "../components/Logo"
export default function ShopPages () {
    return (
      <section className="bg-white py-8">
      <div className="container mx-auto">
        <div className="bg-[#F6F5FF] w-full">
          <div className="h-[250px] mb-6 relative top-24 px-4 sm:px-8 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold text-black font-josefin">Shop</h2>
            <p className="flex mt-4 text-sm text-gray-500 font-lato text-center">
              Home <FaCircle className="text-pink-700 w-[5px] h-[5px] mt-2 ml-1 mr-1"/> Pages <FaCircle className="text-pink-700 w-[5px] h-[5px] mt-2 ml-1 mr-1"/> <span className="text-pink-700">Shop</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-between border-b pb-4 mb-6 px-4 sm:px-8">
          <div className="mt-10">
            <h3 className="text-lg font-[700] text-black font-josefin">
              ECommerce Accessories & Fashion Items
            </h3>
            <p className="mt-2 font-lato font-[400] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex space-x-4 space-y-9 mt-4 sm:mt-0">
            <div className="mt-9">
              <label className="font-lato font-[400] text-sm text-[#3F509E]">Per Page:</label>
              <select className="ml-2 border rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-[#8A8FB9]">Sort By:</label>
              <select className="ml-2 border rounded px-2 py-1 text-sm">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="flex">
              <label className="text-sm text-[#8A8FB9] mt-1">View:</label>
              <div className="ml-2 border rounded px-5 py-4 sm:py-1 text-sm"></div>
            </div>
          </div>
        </div>

          {/* Shop List */}
          <div>
            <div>
            <div className="grid gap-6 lg:gap-14 ml-[50px] md:ml-[180px]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-[200px] border bg-gray-50 mt-9 overflow-hidden">
                     <Image src="/list1.jpg" alt="" width={250} height={250} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-20 lg:ml-20">
                        <h3 className="w-[185px] h-[20px] font-josefin text-[#111C85]">Accumsan tincidunt</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA] w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="w-[200px] border bg-gray-50 overflow-hidden">
                     <Image src="/list2.png" alt="" width={200} height={200} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-10 lg:ml-20">
                        <h3 className="w-[72px] h-[20px] font-josefin text-[#111C85]">In nulla</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA]  w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="w-[200px] [130px] border bg-gray-50 overflow-hidden">
                     <Image src="/list3.jpg" alt="" width={200} height={250} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-10 lg:ml-20">
                        <h3 className="w-[73px] h-[20px] font-josefin text-[#111C85]">Vel sem</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA] w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="w-[200px] h-[160px] border bg-gray-50 overflow-hidden">
                     <Image src="/list4.jpg" alt="" width={200} height={250} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-10 lg:ml-20">
                        <h3 className="w-[126px] h-[20px] font-josefin text-[#111C85]">Porttitor cum</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA] w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="w-[200px] h-[130px]  border bg-gray-50 overflow-hidden">
                     <Image src="/list5.jpg" alt="" width={200} height={200} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-10 lg:ml-20">
                        <h3 className="w-[74px] h-[20px] font-josefin text-[#111C85]">Nunc in</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA] w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="w-[200px] h-[160px]  border bg-gray-50 overflow-hidden">
                     <Image src="/list6.jpg" alt="" width={200} height={250} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-10 lg:ml-20">
                        <h3 className="w-[128px] h-[20px] font-josefin text-[#111C85]">Vitae facilisis</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA] w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                <div className="w-[200px] h-[130px]  border bg-gray-50 overflow-hidden">
                     <Image src="/list7.jpg" alt="" width={200} height={250} className="object-cover"/>
                    </div>
                    <div className="mt-4 md:mt-10 lg:ml-20">
                        <h3 className="w-[153px] h-[20px] font-josefin text-[#111C85]">Curabitur lectus</h3>
                        <div className="flex gap-4">
                        <p className="text-gray-500 ">$26.00</p>
                        <p className="text-pink-500 font-bold line-through">$42.00</p>
                    </div>
                    <p className="text-sm text-[#9295AA] w-[250px] md:w-[391px] h-[46.38px] font-lato font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    </div>
                </div>
            </div>
            </div>
          </div>
          </div>
          <div className="mt-20 mb-10 px-4 sm:px-8">
            <Images />
          </div>
          </section>
    )
}