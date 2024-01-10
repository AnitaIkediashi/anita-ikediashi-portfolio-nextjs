'use client'

import { projects } from "@/data";
import React, { useEffect } from "react";
import Project from "./project";
import AOS from "aos";

const Projects = () => {

   useEffect(() => {
     AOS.init();
   }, []);
  
  return (
    <section className="w-full xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 py-24">
      {/* h1 tag - title */}
      <h1 className="capitalize mt-[4.5rem] md:mt-0 md:text-right text-left font-extrabold lg:text-9xl md:text-7xl text-4xl  tracking-wider text-color-blue-100/30 overflow-y-hidden">
        &#60;projects/&#62;
      </h1>
      {/* image-links-tools-desc-title */}
      <div className="flex flex-col md:gap-5  lg:w-2/3 md:w-5/6 w-full mx-auto relative overflow-y-hidden">
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
            <aside
              className="mb-7 mt-2 text-color-white/50 font-medium md:hidden"
              data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i % 2 == 0 ? "400" : "650"}
              data-aos-once="true"
            >
              {project.desc}
            </aside>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
