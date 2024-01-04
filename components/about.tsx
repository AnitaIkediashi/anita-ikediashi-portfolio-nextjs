'use client'

import React, { useEffect } from "react";
import { skills } from "@/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; 
import AOS from "aos";


const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="md:h-screen w-full xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 py-24 md:py-0 relative flex flex-col justify-center overflow-y-hidden"
      data-aos="fade-up"
      data-aos-delay="650"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      {/* h1 tag - title */}
      <h1 className="capitalize mt-[4.5rem] md:mt-0 md:text-right text-left font-extrabold lg:text-9xl md:text-7xl text-5xl  tracking-wider text-color-blue-100/30 overflow-y-hidden">
        &#60;about/&#62;
      </h1>

      {/* content */}
      <div className="w-full grid lg:grid-cols-[300px,1fr] grid-cols-1 gap-14 md:gap-0">
        {/* aside tag - skills  */}

        <div className="order-2 lg:order-1 lg:mt-48">
          <h4 className="capitalize lg:text-xl text-3xl text-color-blue-100">
            frontend tools
          </h4>
          <aside className="flex items-center gap-2 flex-wrap h-fit self-end ">
            {skills.map(({ skill, alt }) => (
              <Image
                key={skill}
                src={skill}
                alt={alt}
                width={50}
                height={50}
                quality={100}
                //   className="lg:w-10 lg:h-10"
              />
            ))}
          </aside>
        </div>

        {/* p tag - summary */}
        <div className="lg:order-2 h-fit bg-color-blue-200/20 rounded-lg p-5 ">
          <p className=" lg:text-lg md:text-xl text-base">
            Hi 👋, my name is Anita, a frontend developer based in Lagos state,
            Nigeria. Proficient in HTML, CSS and JavaScript. I specialize in
            crafting visually striking and responsive user interfaces.
            <br />
            Collaboration is at the heart of my work, having contributed to
            diverse projects that demanded precision and creativity. Each
            projects reflects not just code but a narrative of innovation,
            adaptability, and a commitment to delivering exceptional digital
            experience.
          </p>
          {/* download cv */}
          <button className="my-4 px-5 py-2 font-medium bg-color-blue-400 rounded-md lg:text-lg md:text-xl text-base tracking-wide capitalize hover:bg-color-blue-300 hover:scale-110 active:scale-105 transition group">
            <a href="/anita_ikediashi_cv.pdf" download>
              <FontAwesomeIcon
                icon={faDownload}
                className="w-5 inline-block pr-2 group-hover:translate-y-1 transition"
              />
              view full resume
            </a>
          </button>
        </div>
      </div>
      {/* all these with animation  */}
    </section>
  );
};

export default About;
