"use client";

import React, { useRef } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";

type ProjectProp = (typeof projects)[number];

const Project = ({ image, desc, title, icons, tools }: ProjectProp) => {

  const cardVariant: Variants = {
    offscreen: {
      y: 0,
      opacity: 0,
    },
    onscreen: {
      y: [100, 0],
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        delay: 1.8
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className="overflow-y-hidden"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.article
        variants={cardVariant}
        className="w-full h-52 rounded-md md:bg-color-blue-100/30 md:grid lg:grid-cols-[308px,1fr] md:grid-cols-[250px,1fr] gap-2 relative "
        key={title}
      >
        <div className="md:flex flex-col pl-3 md:self-center lg:gap-2 hidden">
          {/* desc */}
          <small className="md:text-base text-sm">{desc}</small>
          {/* tools */}
          <div className="flex items-center gap-1">
            {tools.map((tool, idx) => (
              <React.Fragment key={idx}>
                <Image src={tool} alt="tech stack" width={30} height={30} />
              </React.Fragment>
            ))}
          </div>
          {/* icons */}
          <button className="flex items-center gap-1 -mt-1 lg:text-lg text-base">
            {icons.map(({ id, githubIcon, linkIcon, url, repoLink }) => (
              <span key={id}>
                <a href={repoLink} target="_blank">
                  <FontAwesomeIcon
                    icon={githubIcon}
                    className="inline-block w-5 h-5 lg:h-6 p-1 lg:w-6 mr-2 border border-color-white/30 rounded-md hover:text-color-white/50 hover:rotate-6 transition active:scale-105"
                  />
                </a>
                <a href={url} target="_blank">
                  <FontAwesomeIcon
                    icon={linkIcon}
                    className="inline-block w-5 h-5 lg:h-6 p-1 lg:w-6 border border-color-white/30 rounded-md hover:text-color-white/50 hover:rotate-6 transition active:scale-105"
                  />
                </a>
              </span>
            ))}
          </button>
        </div>
        <div className="w-full h-full relative overflow-y-hidden group">
          {/* image */}
          <Image
            src={image}
            alt="projects"
            width={150}
            height={150}
            quality={80}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in"
          />
          {/* hover title */}
          <div className="absolute inset-0 z-10 w-full h-full bg-black/70 flex flex-col gap-2 items-center justify-center  opacity-0 group-hover:opacity-100 origin-top scale-y-0 group-hover:scale-y-100 transition duration-300 ease-linear ">
            <h3 className="text-color-white text-bold text-lg">{title}</h3>

            <button className="md:hidden">
              {icons.map(({ id, githubIcon, linkIcon, url, repoLink }) => (
                <span key={id}>
                  <a href={repoLink} target="_blank" className="">
                    <FontAwesomeIcon
                      icon={githubIcon}
                      className="hover:bg-color-white/20 hover:rotate-6 transition duration-300 ease-linear border border-color-white/50 rounded-md w-6 h-6 p-1 mr-3"
                    />
                  </a>
                  <a href={url} target="_blank">
                    <FontAwesomeIcon
                      icon={linkIcon}
                      className="hover:bg-color-white/20 hover:rotate-6 transition duration-300 ease-linear border border-color-white/50 rounded-md w-6 h-6 p-1"
                    />
                  </a>
                </span>
              ))}
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default Project;
