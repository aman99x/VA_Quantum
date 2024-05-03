import React from "react";
import Slider from "react-slick";
import Rakshita from "../../assets/Rakshita.jpeg";
import Ajay from "../../assets/Ajay.jpeg";
import Vishesh from "../../assets/Vishes.jpeg";
import Garima from "../../assets/Garima.jpeg";

const TestimonialData = [
  {
    id: 1,
    name: "Rakshita",
    rank: "NEET 512 | MHT-CET Percenttile 91.86",
    text: "VA Quantum institute structured courses, interactive doubt-solving sessions, and dedicated faculty support were crucial in my NEET success, revolutionizing my approach to studying and ensuring achievement I couldn't have managed alone.",
    img: Rakshita,
  },
  {
    id: 2,
    name: "Ajay sonawane",
    rank: "MHT-CET Percenttile 91.80",
    text: "I deeply appreciate the chance to be part of the MHT batch at such an affordable rate, enabling me to pursue my academic goals effectively. Your dedication to offering quality education coupled with a supportive faculty has been invaluable in my journey towards success.",
    img: Ajay,
  },
  {
    id: 3,
    name: "Vishesh",
    rank: "MHT-CET Percenttile 99.62 | JEE(Main) Percenttile 96.73",
    text: "Thank you for introducing the MHT batch, making quality education accessible to students like me. I'm grateful for the opportunity to study under such a supportive faculty, which has greatly contributed to my academic progress.",
    img: Vishesh,
  },
  {
    id: 5,
    name: "Garima Naviakha",
    rank: "MHT-CET Percenttile 96.66",
    text: "I extend my gratitude for launching the MHT batch at a modest fee, allowing me to engage in quality education tailored for success. Additionally, I'm thankful for the exceptional faculty members who have been instrumental in guiding my academic journey.",
    img: Garima,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Our Results Speak For Us
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                      <p className="text-sm font-bold text-blue-500 dark:text-primary">
                        {data.rank}
                      </p>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
