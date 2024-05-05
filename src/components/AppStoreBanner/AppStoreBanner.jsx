import React from "react";
import pattern from "../../assets/white.jpg";
import { BiPhoneCall } from "react-icons/bi";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStoreBanner = () => {
  return (
    <>
    <span id="appbanner"></span>
    <div className="container">
      <div
        className=" text-black py-10 sm:min-h-[400px] sm:flex sm:justify-center sm:items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Contact Details
            </h1>
            <div className="mx-[23%]">
            <p data-aos="fade-up" className="flex text-center sm:px-20">
              <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
              <p className="font-semibold">+91 9637696091</p>
            </p>
            <p data-aos="fade-up" className="flex text-center sm:px-20">
              <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
              <p className="font-semibold">+91 6201309393</p>
            </p>
            <p data-aos="fade-up" className="flex text-center sm:px-20">
              <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
              <p className="font-semibold">+91 8287750390</p>
            </p>        
            </div>
            <p data-aos="fade-up" className="font-bold text-center sm:px-20">
              Street Addrress
            </p>
            <p data-aos="fade-up" className="font-semibold text-center sm:px-20">
            Pratap College, Near Railway Station, Marwad Road, Amalner, Jalgaon(425401),MH
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AppStoreBanner;
