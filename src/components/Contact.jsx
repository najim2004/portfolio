import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="lg:section lg:min-h-[calc(100vh+2px)] py-16 mb-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 items-center flex"
          >
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h1 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h1>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col pb-6 p-6"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
