import React from "react";
import BannerImg from "../../assets/Topper.jpeg";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-transparent duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
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
              <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
