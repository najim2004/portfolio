import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section id="home" className="section">
      <div className="container mx-auto">
        <div className="">
          {/* text */}
          <div className="">
            <h1>
              BEN <span>AIDEN</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-1">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              qui. Maxime magnam asperiores amet sed consequatur distinctio
              voluptatibus totam nam.
            </p>
            <div className="">
              <button className="btn btn-lg">Contact me</button>
            </div>
          </div>
          {/* image */}
          <div className="">
            <img src={Image} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
