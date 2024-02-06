import React from "react";

const Hero = () => {
  const loveSymbols = "❤️";

  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url('/af4fb49a0a2572bc2cb2aa4f43518618.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold text-white	 mb-4 font-serif">
            Divya
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
            <span className="text-white">{loveSymbols}</span>Weds
            <span className="text-white">{loveSymbols}</span>
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
            Birde Groom
          </h1>
          <p className="text-lg md:text-xl mb-6">ARE GETTING MARRIED</p>
          <p className="text-lg md:text-xl mb-6">
            ON 19TH NOVEMBER, AT SRI VASAVI KALAYANA MANDAPAM, NATARAJ BAZAR,
            GIDDALUR, PRAKASAM DISTRICT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
