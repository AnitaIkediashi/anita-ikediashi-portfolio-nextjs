'use client'

import { projects } from "@/data";
import React from "react";
import Project from "./project";
import { motion } from "framer-motion";

const Projects = () => {
  
  return (
    <section className="w-full xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 py-24">
      {/* h1 tag - title */}
      <h1 className="capitalize mt-[4.5rem] md:mt-0 md:text-right text-left font-extrabold lg:text-9xl md:text-7xl text-5xl  tracking-wider text-color-blue-100/30 overflow-y-hidden">
        &#60;projects/&#62;
      </h1>
      {/* image-links-tools-desc-title */}
      <div className="flex flex-col md:gap-5  lg:w-2/3 md:w-5/6 w-full mx-auto relative">
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
            <motion.aside
              className="mb-7 mt-2 text-color-white/50 font-medium md:hidden"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition:{
                    delay: 2
                  }
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              {project.desc}
            </motion.aside>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
