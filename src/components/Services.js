import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    company: "Interac Corp",
    role: "Backend Developer Intern",
    description:
      "Creating Anti-Money Laundering feature for Etransfer which is going to be used by 80+ Financial Institutions.",
    time: "May 2023 - Present",
    link: "Learn more",
  },
  {
    company: "Triangle Bank ",
    role: "Software Developer Intern",
    description:
      "Incididunt incididunt do nulla laborum sint. Aute nisi sint ex aliqua cupidatat elit in. Consectetur ad officia non aute cupidatat eiusmod pariatur officia veniam officia eiusmod.",
    time: "May 2022 - Sept 2022",
    link: "Learn more",
  },
  {
    company: "YATARA Designs",
    role: "Web Developer",
    description:
      "Incididunt incididunt do nulla laborum sint. Aute nisi sint ex aliqua cupidatat elit in. Consectetur ad officia non aute cupidatat eiusmod pariatur officia veniam officia eiusmod.",
    time: "Aug-2020 - Feb 2021",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text and image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center mb-12 lg:mb-0"
            // lg:bg-services lg:bg-bottom
            // bg-no-repeat mix-blend-lighten mb-12 lg:mb-0
          >
            <div>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                My Work <br /> Experience
              </h2>
              <button className="btn btn-sm">See my Resume</button>
            </div>
            {/* <h2 className="h2 text-accent mb-6">What I Do.</h2>

            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelancer front-end Developer with over 6 Years of
              Experience.
            </h3>

            <button className="btn btn-sm">See my work</button> */}
          </motion.div>

          {/* services */}

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Service List */}
            <div>
              {services.map((service, index) => {
                //Destructure service
                const { company, role, description, time, link } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[176px]
                    mb-[48px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-[20px] tracking-wider 
                      font-primary font-semibold"
                      >
                        {company}
                      </h4>

                      <h3 className="mb-7">{role}</h3>

                      <p className=" mb-100 font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="">
                      <h1 className="pt-2 text-[18px] whitespace-nowrap">
                        {time}
                      </h1>
                      {/* <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
