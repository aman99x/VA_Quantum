import React from "react";

const skillsData = [
  {
    name: "IIT-JEE",
    description: [
      "IIT-JEE, now known as JEE(Advanced), is a highly competitive engineering entrance exam for admission to top Indian engineering institutions(IITs).",
    ],
  },
  {
    name: "NEET",
  
    description: [
      "The National Eligibility-cum-Entrance Test is a competitive medical entrance exam, required for admission to undergraduate medical and dental courses.",
    ],
  },
  {
    name: "MHT-CET",
    description: [
      "MHT-CET is the entrance exam for undergraduate courses in Maharashtra, covering fields like engineering, pharmacy, and agriculture.",
    ],
  },
  {
    name: "BOARD EXAMINATION",
    description: [
      "Board exams are important standardized assessments taken at the end of specific school grades, influencing educational and career paths.",
    ],
  },
  {
    name: "PRE FOUNDATION",
    description: [
      "Pre-foundation programs aid early-stage preparation for competitive exams and advanced studies, particularly in math and science.",
    ],
  },
  {
    name: "KVPY",
    description: [
      "scholarship program in India that supports young science enthusiasts and encourages them to pursue careers in research and science.",
    ],
  },
  {
    name: "OLYMPIAD",
    description: [
      "Olympiads are competitive exams and competitions that recognize and reward talented students in various subjects at national and international levels.",
    ],
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              OUR <span className="text-primary">COURSES</span> FOR YOU
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                {skill.description.map((desc) => (
                  <p>{desc}</p>
                ))}
                {/* <a
                  href={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105  duration-200"
                >
                  Join Now
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
