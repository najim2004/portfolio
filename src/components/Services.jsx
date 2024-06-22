import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";
const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad iusto sapiente inventore aliquam delectus iure dolorum et. Sunt distinctio eos, quo illo eaque commodi voluptates dolor eligendi iusto doloremque.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad iusto sapiente inventore aliquam delectus iure dolorum et. Sunt distinctio eos, quo illo eaque commodi voluptates dolor eligendi iusto doloremque.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad iusto sapiente inventore aliquam delectus iure dolorum et. Sunt distinctio eos, quo illo eaque commodi voluptates dolor eligendi iusto doloremque.",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services bg-contain lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm ">See my work</button>
          </motion.div>
          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div className="">
              {services?.map((service, i) => (
                <div
                  key={i}
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                >
                  <div className="max-w-[476px] ">
                    <h4 className="text-xl tracking-wider font-primary font-semibold mb-6">
                      {service.name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {service.description}
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {service.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
