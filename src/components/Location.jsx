const LocationInfo = () => {
  const weddingVenueLat = "13.8270352";
  const weddingVenueLng = "77.4994224";
  const weddingVenueName = "AMS Function Hall";
  const weddingVenueLink = `https://www.google.com/maps/place/AMS+Function+Hall/@${weddingVenueLat},${weddingVenueLng},15z/data=!4m2!3m1!1s0x0:0x10248365e85dab5f?sa=X&ved=2ahUKEwjM59nU1JiEAxUbTWwGHfAcCF8Q_BJ6BAgQEAA`;

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
      <p className=" kaushan-script-regular mt-5">
          {" "}
          With love Sushma & Ashok Kumar
        </p>
    </section>
  );
};

export default LocationInfo;