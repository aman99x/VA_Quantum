import React from "react";
import BannerImg from "../../assets/arya.jpeg";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold">Diretor</h1><br></br>
                  <p className="text-primary text-2xl">VA Quantum Institute</p>
                </div>
              </div>
              <p data-aos="fade-up" className="font-bold text-blue-800 leading-8 tracking-wide text-xl">
              ANAND PATEL (B-TECH), NIT DELHI
              </p>
              <p className= " text-black text-xl" data-aos="fade-up" data-aos-delay="300">
               ( 6 years of teaching experience.)
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
  );
};

export default Banner2;
