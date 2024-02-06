import React from "react";

const CoupleImages = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-12 kaushan-script-regular">
      <div className="container mx-auto px-4 md:px-6 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12">
          Our Moments
        </h2>
        <div className="relative flex overflow-x-scroll hide-scrollbar">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
              <img
                alt=""
                className="w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGRmbG93ZXJzZXQxNmJhdGNoMi1hZGotMTMtbGVhdmVzXzIuanBn.webp"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
              <img
                alt=""
                className="w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGRmbG93ZXJzZXQxNmJhdGNoMi1hZGotMTMtbGVhdmVzXzIuanBn.webp"
              />
            </div>
            {/* Repeat similar adjustments for other images */}
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
              <img
                alt=""
                className="w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGRmbG93ZXJzZXQxNmJhdGNoMi1hZGotMTMtbGVhdmVzXzIuanBn.webp"
              />
            </div>{" "}
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
              <img
                alt=""
                className="w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGRmbG93ZXJzZXQxNmJhdGNoMi1hZGotMTMtbGVhdmVzXzIuanBn.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleImages;
