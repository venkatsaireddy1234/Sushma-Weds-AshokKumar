import React from "react";

const Hero = () => {
  const loveSymbols = "❤️";

  return (
    <section
      className="bg-cover bg-center h-screen relative kaushan-script-regular"
      style={{
        backgroundImage: `url('/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGRmbG93ZXJzZXQxNmJhdGNoMi1hZGotMTMtbGVhdmVzXzIuanBn.webp')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center kaushan-script-regular">
        <div className="text-center text-indigo-900">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-900	 mb-4 font-serif">
           Sushma
          </h1>

          <h1 className="text-3xl md:text-4xl font-bold text-green -500 mb-4 font-serif">
            <span className="text-indigo-900">{loveSymbols}</span>Weds
            <span className="text-indigo-900">{loveSymbols}</span>
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold text-green -500 mb-4 font-serif">
            Ashok Kumar
          </h1>
          <p className="text-lg md:text-xl mb-6">ARE GETTING MARRIED</p>
          <p className="text-lg md:text-xl mb-6">
            ON 14th Feb  @ A.M.S Function Hall, Near M.G.M School,Hindupur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
