import Image from "next/image";
import Images from "./components/Logo";

export default function Home() {
  return (
    <div className="w-full  relative top-20">
      {/* Hero Section */}
      <section>
  <div className="w-full h-auto lg:h-[700px] bg-[#F2F0FF] flex flex-col lg:flex-row lg:px-0 overflow-hidden">
    {/* Left Side */}
    <div className="relative mt-10 sm:mr-0 lg:mr-0 flex-shrink-0 flex justify-center lg:justify-start">
      <div>
        <Image
          alt=""
          src="/light.png"
          width={200}
          height={200}
          className="w-[200px] sm:w-[300px] h-auto"
        />
      </div>
      <div className="hidden md:block absolute top-12 md:top-[100%] left-[50%] md:left-[50%] lg:top-[60%] lg:left-[50%]">
        <Image src="/Ellipse 62.png" alt="" width={15} height={15} />
      </div>
    </div>

    {/* Middle Side */}
    <div className="relative text-center lg:text-left mx-auto mt-6 sm:mt-16 lg:mt-40 lg:mx-4">
      <div className="font-lato font-light text-base lg:leading-7">
        <h4 className="text-[#FB2E86] text-sm sm:text-base">
          Best Furniture For Your Castle....
        </h4>
        <h1 className="lg:w-[500px] text-xl sm:text-2xl lg:text-4xl font-josefin font-bold text-black mt-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="lg:w-[400px] text-sm sm:text-base text-[#8A8FB9] mt-6 lg:mt-10 px-4 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
      </div>
      <a href="/shop-grid">
      <div className="mt-6 sm:mt-16 flex justify-center lg:justify-start">
        <button className="bg-[#FB2E86] text-white py-3 px-8 rounded-md">
          Shop Now
        </button>
      </div>
      </a>
    </div>

    {/* Right Side */}
    <div className="hidden lg:block ml-40">
      <div className="relative mt-[500px] lg:mt-20">
        <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] lg:-right-64 lg:top-10">
          <Image src="/sofa.png" alt="" width={450} height={450} />
        </div>
        <div className="absolute top-3 lg:top-16 -right-[300px]">
          <h3 className="absolute font-josefin font-bold text-lg lg:text-2xl -top-10 mx-auto text-white ml-6">
            50% <br />
            off
          </h3>
          <Image
            src="/Vector 14.png"
            alt=""
            width={100}
            height={100}
            className="mt-4 lg:-mt-16 lg:mr-32"
          />
        </div>
        <div className="lg:w-[766px] h-[569px] absolute top-4 -right-[580px]">
          <Image src="/Ellipse 61.png" alt="" width={450} height={450} />
        </div>
        <div className="w-[684px] h-[684px] absolute top-10 -right-[450px]">
          <Image src="/Ellipse 61.png" alt="" width={450} height={450} />
        </div>
      </div>
    </div>
  </div>
</section>

      
        {/* Featured Product Section */}
        <section className="text-center my-8 mx-16 lg:mx-24">
          <h2 className="text-2xl font-bold text-black mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Products Cards */}
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 1.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
        
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 2.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
        
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 3.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
        
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 4.png" alt="" width={300} height={300} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-8">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
            </div>
          </div>
          <div className="w-[100px] flex mt-[24px] md:mt-[20px] lg:mt-[50px] ml-[100px] sm:ml-[200px] md:ml-[250px] lg:ml-[525px] gap-2 bg-yellow-200 border border-yellow-500">
            <div><Image src="/Rectangle 1.png" alt="" width={24} height={4} /></div>
            <div><Image src="/Rectangle 2.png" alt="" width={16} height={4} /> </div>
            <div><Image src="/Rectangle 3.png" alt="" width={16} height={4} /> </div>
            <div><Image src="/Rectangle 4.png" alt="" width={16} height={4} /></div>
          </div>
        </section>
      
      
      {/*Latest Products Section  */}
      <section className="text-center my-8 mx-12 lg:mx-24">
        <h2 className="text-2xl font-bold text-black mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Products Card */}
          <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
            <Image src="/sofa1.png" alt="" width={200} height={200} className="mx-auto" />

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row mt-4">
              <p className="text-lg font-semibold mt-5 text-blue-800">Comfort Handy Craft</p>
              <div className="flex flex-col sm:flex-row relative sm:left-10">
                <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
            <Image src="/chair1.png" alt="" width={200} height={200} className="mx-auto" />

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row  mt-4">
              <p className="text-lg font-semibold mt-5 text-blue-800">Comfort Handy Craft</p>
              <div className="flex flex-col sm:flex-row relative sm:left-10">
                <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
            <Image src="/chair 1.png" alt="" width={200} height={200} className="mx-auto" />
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row  mt-4">
              <p className="text-lg font-semibold mt-5 text-blue-800">Comfort Handy Craft</p>
              <div className="flex flex-col sm:flex-row relative sm:left-10">
                <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
            <Image src="/chair2.png" alt="" width={200} height={200} className="mx-auto" />

            <div className="flex  flex-col sm:flex-row md:flex-col lg:flex-row mt-4">
              <p className="text-lg font-semibold mt-5 text-blue-800">Comfort Handy Craft</p>
              <div className="flex flex-col sm:flex-row relative sm:left-10">
                <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
            <Image src="/chair3.png" alt="" width={280} height={200} className="mx-auto" />

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row mt-4">
              <p className="text-lg font-semibold mt-5 text-blue-800">Comfort Handy Craft</p>
              <div className="flex flex-col sm:flex-row relative sm:left-10">
                <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
            <Image src="/chair 4.png" alt="" width={310} height={200} className="mx-auto" />
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row mt-4">
              <p className="text-lg font-semibold mt-5 text-blue-800">Comfort Handy Craft</p>
              <div className="flex flex-col sm:flex-row relative sm:left-10">
                <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Shopex Offer Section*/}
      <section className="text-center my-8 mx-12 lg:mx-24">
        <h2 className="text-2xl font-bold text-black mb-6">What Shopex Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/free-delivery.png" alt="" width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-5">24/7 Support</h3>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/cashback.png" alt="" width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-5">24/7 Support</h3>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/quality.png" alt="" width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/24hours.png" alt="" width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-5">24/7 Support</h3>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </section>
      {/* Unique Features Section */}
      <section className="text-center my-20 bg-[#F1F0FF] px-4">
  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:ml-40">
    <Image
      src="/sofa2.png"
      alt=""
      width={400}
      height={400}
      className="mb-6 lg:mb-0 lg:mr-6"
    />
    <div className="lg:ml-24 sm:text-left text-center mb-4 lg:mt-20">
      <h2 className="text-xl sm:text-2xl font-josefin font-bold text-[#151875] leading-[1.5] mb-6">
        Unique Features Of Latest & Trending Products
      </h2>
      <div className="flex gap-3 items-start justify-center lg:justify-start">
        <Image
          src="/Ellipse 62.png"
          alt=""
          width={11}
          height={11}
          className="mt-2"
        />
        <p className="text-sm sm:text-base font-lato font-medium text-[#ACABC3]">
          All frames constructed with hardwood solids and laminates
        </p>
      </div>
      <div className="flex gap-3 items-start justify-center lg:justify-start mt-4">
        <Image
          src="/Ellipse 66.png"
          alt=""
          width={11}
          height={11}
          className="mt-2"
        />
        <p className="text-sm sm:text-base font-lato font-medium text-[#ACABC3]">
          Reinforced with double wood dowels, glue, screw - nails corner blocks
          and machine nails
        </p>
      </div>
      <div className="flex gap-3 items-start justify-center lg:justify-start mt-4">
        <Image
          src="/Ellipse 67.png"
          alt=""
          width={11}
          height={11}
          className="mt-2"
        />
        <p className="text-sm sm:text-base font-lato font-medium text-[#ACABC3]">
          Arms, backs and seats are structurally reinforced
        </p>
      </div>
      <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row items-center lg:items-start">
       
        <div className="lg:ml-6 text-center lg:text-left">
          <h3 className="text-base font-josefin text-[#151875]">
            B&B Italian Sofa
          </h3>
          <h3 className="text-sm font-lato text-[#151875] mt-2">$32.00</h3>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Trending Products */}
      <section className="text-center my-8 mx-12 lg:mx-24">
        <h2 className="text-2xl font-bold text-[#151875] mb-6 ">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/chair5.png" alt="" width={200} height={200} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
            <div className="flex flex-col sm:flex-row items-center ml-14 sm:ml-36 mt-4 md:ml-16 lg:ml-4 gap-2 sm:gap-0">
              <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center  text-[#151875] -ml-10 sm:ml-5">$26.00</p>
              <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] -ml-10 sm:ml-4 line-through">$42.00</p>
            </div>

          </div>
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/chair6.png" alt="" width={200} height={200} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
            <div className="flex flex-col sm:flex-row items-center  ml-14 sm:ml-36 mt-4 md:ml-16 lg:ml-4 gap-2 sm:gap-0">
              <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center  text-[#151875] -ml-10 sm:ml-5">$26.00</p>
              <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] -ml-10 sm:ml-4 line-through">$42.00</p>
            </div>

          </div>
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/chair7.png" alt="" width={250} height={250} className="mx-auto  w-[300px] h-[200px]" />
            <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
            <div className="flex flex-col sm:flex-row items-center  ml-14 sm:ml-36 mt-4 md:ml-16 lg:ml-4 gap-2 sm:gap-0">
              <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center text-[#151875] -ml-10 sm:ml-5">$26.00</p>
              <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] -ml-10 sm:ml-4 line-through">$42.00</p>
            </div>

          </div>
          <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
            <Image src="/chair3.png" alt="" width={200} height={200} className="mx-auto  w-[300px] h-[200px]" />
            <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
            <div className="flex flex-col sm:flex-row items-center  ml-14 sm:ml-36 mt-4 md:ml-16 lg:ml-4 gap-2 sm:gap-0">
              <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center  text-[#151875] -ml-10 sm:ml-5">$26.00</p>
              <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] -ml-10 sm:ml-4 line-through">$42.00</p>
            </div>

          </div>
        </div>
      </section>

      {/* Discount Section */}
      <div className="px-2 md:px-4 lg:px-8 ">

        <section className="my-8 px-4 mx-6 sm:mx-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Side */}
            <div className="w-[310px] sm:w-[430px] p-6 bg-pink-100 rounded-lg shadow  flex flex-col -ml-4 sm:-ml-0 lg:-ml-10">
              <h3 className="w-[269px] h-[26px] text-2xl  mt-6 text-[#151875] font-josefin font-[600] leading-[26px] text-center">23% off on all products</h3>
              <p className="w-[74px] h-[19px] text-pink-500  mt-2 font-lato font-[600] leading-[19.2px] text-center">Shop Now</p>
              <div className="mt-4">
                <Image src="/clock.png" alt="Discount Product" width={300} height={200} className="sm:" />
              </div>
            </div>

            {/* Right Side */}
            <div className="w-[310px] sm:w-[430px] lg:w-[670px] grid grid-cols-1 lg:grid-cols-2 gap-9 -ml-4 sm:-ml-0  lg:-ml-24">
              <div className="p-6 bg-purple-100 rounded-lg shadow flex flex-col">
                <h3 className="w-[269px] h-[26px] mt-10 text-2xl text-[#151875] font-josefin font-[600] size-[26px] leading-[26px] text-center">23% off in all products</h3>
                <p className="w-[150px] h-[19px] text-pink-500  mt-2 font-lato font-[600] leading-[19.2px] text-center">View Collection</p>
                <div>
                  <Image src="/table.png" alt="Discount Product" width={300} height={200} />
                </div>
              </div>
              <div className="rounded-lg shadow flex">
                <div className="w-[700px] grid grid-cols-1 gap-6">
                  <div className="bg-[#F5F6F8] p-4 rounded-md flex items-center justify-center">
                    <Image src="/chair10.png" alt="" width={100} height={71} />
                  </div>
                  <div className="bg-[#F5F6F8] p-4 rounded-md flex items-center justify-center">
                    <Image src="/chair9.png" alt="" width={100} height={71} />
                  </div>
                  <div className="bg-[#F5F6F8] p-4 rounded-md flex items-center justify-center">
                    <Image src="/chair8.png" alt="" width={100} height={71} />
                  </div>
                </div>
                <div className="w-[700px] ml-3 grid grid-row-1 md:grid-rows-2 gap-6">
                  <div className="mt-8">
                    <p className="w-[200px] h-[16px] font-josefin size-4 leading-[18.75px] items-center text-[#151875] text-xl ">Executive Seat chair</p>
                    <p className="w-[37px] h-[12px] font-josefin font-[400] size-3 leading-3 items-center text-[#151875] mt-4 line-through">$32.00</p>

                  </div>
                  <div className="mt-4">
                    <p className="w-[200px] h-[16px] font-josefin size-4 leading-[18.75px] items-center text-[#151875] text-xl ">Executive Seat chair</p>
                    <p className="w-[37px] h-[12px] font-josefin font-[400] size-3 leading-3 items-center text-[#151875] mt-4 line-through">$32.00</p>

                  </div>
                  <div className="mb-4">
                    <p className="w-[200px] h-[16px] font-josefin size-4 leading-[18.75px] items-center text-[#151875] text-xl ">Executive Seat chair</p>
                    <p className="w-[37px] h-[12px] font-josefin font-[400] size-3 leading-3 items-center text-[#151875] mt-4 line-through">$32.00</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Discount Item Section */}
      <section className="my-8 text-center mx-12 lg:mx-24" >
        <h2 className="w-[277px] h-[42px] font-josefin size-[42px] leading-[49.22px] text-3xl font-bold text-[#151875] mb-4 mx-auto">Discount Item</h2>
        <div className="flex justify-center space-x-4 mb-6 ">
          <button className="text-pink-500 underline underline-offset-2">Wood Chair</button>
          <Image src="/Ellipse 62.png" alt="" width={10} height={10} className="w-[10px] h-[10px] mt-[6px]" />
          <button className="text-gray-500">Plastic Chair</button>
          <button className="text-gray-500">Sofa Collection</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold text-blue-950 w-[300px] sm:w-[400px] md:ml-36">
              20% Discount Of All Products
            </h3>
            <p className="text-sm text-pink-500 mt-4 mr-8 sm:mr-[320px] md:-mr-32 lg:mr-[70px]">
              Eames Sofa Compact.
            </p>
            <p className="w-[300px] sm:w-[350px] text-center text-sm text-gray-500 mt-4 sm:ml-7 md:ml-[170px] lg:ml-44">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Eu eget feugiat habitasse nec, bibendum
              condimentum.</p>
            <div className="text-gray-500 text-sm mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="sm:ml-8 md:ml-44 w-[200px]">✓ Material expose like metals</div>
              <div className="-ml-4 sm:ml-4 md:ml-52 lg:ml-40 w-[200px]">✓ Simple neutral colours.</div>
              <div className="sm:ml-8 md:ml-44 w-[230px]">✓ Clear lines and geomatric figures</div>
              <div className="sm:ml-8 md:ml-56 lg:ml-44 w-[200px]">✓ Material expose like metals</div>
            </div>
            <a href="/shop-grid">
            <button className="mt-10 px-10 py-3 bg-pink-600 text-white rounded font-josefin sm:mr-[250px] md:-mr-28 lg:mr-10">
              Shop Now
            </button>
            </a>
          </div>
          {/* Right Side */}
          <div className="flex justify-center relative top-28 md:top-[450px] lg:top-0 md:right-36 lg:-right-10 lg:mr-0">
            <Image src="/Ellipse 61.png" alt="" width={350} height={350} className="absolute bottom-[60px]" />
            <Image src="/turtuga.png" alt="Discount Chair" width={550} height={300} className="relative bottom-12" />
          </div>
        </div>
      </section>
      {/* Top Categories */}
      <section className="text-center my-8 mx-10 sm:mx-24 md:mt-[440px] lg:mt-0">
        <h2 className="text-2xl font-bold text-[#151875] mb-10 lg:mb-6 mt-20 lg:mt-0">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
          <div className="w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] p-4 rounded-full shadow hover:shadow-lg transition-all bg-gray-100">
            <Image src="/chair11.png" alt="" width={180} height={150} className="mx-auto mt-3" />
           <a href="/shop-grid"> <button className="bg-[#08D15F] text-white px-3 py-1">Veiw Shop</button></a>
            <h3 className="text-lg mt-8 text-[#151875]">Mini LCW chair</h3>
              <p className="w-[43px] h-[14px] font-josefin size-[14px] mt-4 leading-[14px] items-center  text-[#151875] ml-16">$56.00</p>
            </div>
          </div>
          <div className="mt-36 sm:mt-0">
          <div className="w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] p-4 rounded-full shadow hover:shadow-lg transition-all bg-gray-100">
            <Image src="/chair 1.png" alt="" width={180} height={150} className="mx-auto mt-3" />
            <h3 className="text-lg mt-6 lg:mt-14 text-[#151875]">Mini LCW chair</h3>
              <p className="w-[43px] h-[14px] font-josefin size-[14px] mt-4 leading-[14px] items-center  text-[#151875] ml-16">$56.00</p>
            </div>
          </div>
          <div className="mt-32 lg:mt-0">
          <div className="w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] p-4 rounded-full shadow hover:shadow-lg transition-all bg-gray-100">
            <Image src="/chair5.png" alt="" width={180} height={150} className="mx-auto mt-5" />
            <h3 className="text-lg mt-6 lg:mt-14 text-[#151875]">Mini LCW chair</h3>
              <p className="w-[43px] h-[14px] font-josefin size-[14px] mt-4 leading-[14px] items-center text-[#151875] ml-16">$56.00</p>
            </div>
          </div>
          <div className="mt-32 lg:mt-0">
          <div className="w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] p-4 rounded-full shadow hover:shadow-lg transition-all bg-gray-100">
            <Image src="/chair11.png" alt="" width={180} height={200} className="mx-auto mt-4" />
            <h3 className="text-lg mt-6 lg:mt-14 text-[#151875]">Mini LCW chair</h3>
              <p className="w-[43px] h-[14px] font-josefin size-[14px] mt-4 leading-[14px] items-center  text-[#151875] ml-16">$56.00</p>
            </div>
          </div>
          <div className="relative mt-28 lg:mt-36 left-20 lg:left-[550px]">
            <div className="flex gap-2">
          <Image src="/Ellipse 62.png" alt="" width={15} height={15} />
          <Image src="/Ellipse 63.png" alt="" width={15} height={15} />
          <Image src="/Ellipse 63.png" alt="" width={15} height={15} />
          </div>
          </div>
        </div>
      </section>
      <div className="mt-10 mb-10 px-4 sm:px-8 py-10">
        <Images />
      </div>
    </div>
    
  );
}
