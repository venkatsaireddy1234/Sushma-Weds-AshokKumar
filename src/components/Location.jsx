import React from "react";

const LocationInfo = () => {
  const weddingVenueLat = "13.8275268";
  const weddingVenueLng = "77.4966735";
  const weddingVenueName = "R.M.S. Functional Hall";
  const weddingVenueLink = `https://www.google.com/maps/place/R.M.S.Functional+Hall,+Balaji+Talkies+Rd,+Near+Balaji+theater,+Mukkidipeta,+Hindupuram,+Andhra+Pradesh+515201/@${weddingVenueLat},${weddingVenueLng},17z/data=!4m6!3m5!1s0x3bb1a3a1052513af:0x492b33ede5040f46!8m2!3d${weddingVenueLat}!4d${weddingVenueLng}!16s%2Fg%2F1tf3mc52?source=lnms`;

  return (
    <section className="bg-white py-8 md:py-12 kaushan-script-regular">
      <div className="container mx-auto px-4 md:px-6 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          Location
        </h2>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <p className="text-lg font-bold">{weddingVenueName}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => {
                e.preventDefault();
                window.open(weddingVenueLink, "_blank");
              }}
            >
              View Map
            </button>
          </div>
          <div className="w-full">
            <iframe
              title="Wedding Venue Map"
              src={`https://maps.google.com/maps?q=${weddingVenueLat},${weddingVenueLng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-64 md:h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
