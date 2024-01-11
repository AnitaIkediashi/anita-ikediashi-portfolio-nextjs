'use client'

import { projects } from "@/data";
import React, { useEffect } from "react";
import Project from "./project";
import AOS from "aos";
import Image from "next/image";

const Projects = () => {

   useEffect(() => {
     AOS.init();
   }, []);
  
  return (
    <section className="w-full xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 pb-24">
      {/* h1 tag - title */}
      <h1 className="capitalize mt-2 md:mt-0 md:text-right text-left font-extrabold lg:text-[7.5rem] md:text-7xl text-[2.5rem]  tracking-wide text-color-blue-100/30 overflow-y-hidden mb-4">
        &#60;projects/&#62;
      </h1>
      {/* image-links-tools-desc-title */}
      <div className="flex flex-col md:gap-5  lg:w-2/3 md:w-5/6 w-full mx-auto relative overflow-y-hidden">
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
            <aside
              className="mb-7 p-2 rounded-md  md:hidden bg-color-blue-100/20"
              data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i % 2 == 0 ? "400" : "650"}
              data-aos-once="true"
            >
              <small className="text-[0.9rem] font-medium ">
                {project.desc}
              </small>
              <div className="flex items-center gap-1 pt-[0.6rem]">
                {project.tools.map((tool, idx) => (
                  <React.Fragment key={idx}>
                    <Image src={tool} alt="tech stack" width={30} height={30} />
                  </React.Fragment>
                ))}
              </div>
            </aside>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
