import React from "react";
import BannerImg from "../../assets/Topper.jpeg";

const Topper = () => {
  return (
    <>
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold">Bhumika Pawar</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="font-bold text-blue-800 text-2xl leading-8 tracking-wide">
              AIR -214 (JEE MAINS)
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-orange-400">
              "At VA Quantum Institute, I found the perfect platform for my IIT JEE journey. 
              With their expert guidance and rigorous preparation, 
              I mastered concepts and sharpened my exam skills. 
              Regular assessments and personalized attention ensured my readiness, 
              leading to a top rank achievement. 
              I owe my success to the invaluable support and resources provided 
              by VA Quantum Institute."
              </p>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Topper;
