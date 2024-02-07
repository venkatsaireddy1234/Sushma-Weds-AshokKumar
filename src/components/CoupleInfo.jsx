import React from "react";

const CoupleInfo = () => {
  return (
    <section className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Story
        </h2>

        <div className="w-full max-w-md mx-auto">
          <img
            alt=""
            className="w-full h-auto object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
            src="ggg.gif"
          />
        </div>

        <div className="mt-8 md:mt-12 flex flex-col gap-6 items-center">
          {/* Add content about the couple and their story here */}
          <div className="text-base md:text-lg text-center">
            <h2 className="font-extrabold mb-2 md:mb-4  ">
              Dear Family and Friends,
            </h2>
            <p className=" kaushan-script-regular">
              We are thrilled to invite you to a joyous celebration of love as
              we unite in marriage. Our journey together has been a beautiful
              tale of friendship, love, and laughter, and we can't wait to share
              this special moment with all of you.
            </p>
          </div>

          <h2 className="font-bold mb-2 md:mb-4">Wedding Festivities</h2>
          <div>
            <strong > 💑13th Tuesday - Reception 7:30PM Onwards</strong>{" "}
            <p className=" kaushan-script-regular">
             The most special moment, where we become
              partners forever. Your blessings will light up our path as we step
              into this new adventure.
            </p>
          </div>
          <div>
            <strong>🎉14th Wednesday - Muhurtham 10:30AM - 11AM</strong>{" "}
            <p className=" kaushan-script-regular">
           Let's start the festivities with an afternoon of
              delightful conversations, scrumptious food, and the joy
              of togetherness.
            </p>
          </div>
          <div>
            <strong>🏰 Venue Place:</strong>{" "}
            <p className=" kaushan-script-regular">
            A.M.S Function Hall, Near M.G.M School,Hindupur.
            </p>
          </div>
          <div>
            <p className=" kaushan-script-regular">
              {" "}
              Join us as we begin this beautiful journey of love, companionship,
              and shared dreams. Your presence will light up our hearts.
            </p>
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleInfo;
