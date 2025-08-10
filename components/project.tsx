"use client";

import React, { useEffect } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";

type ProjectProp = (typeof projects)[number];

const Project = ({ image, desc, title, icons, tools, idx }: ProjectProp) => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div
      className="overflow-y-hidden"
      data-aos={idx % 2 == 0 ? "fade-up-right" : "fade-up-left"}
      data-aos-delay={idx % 2 == 0 ? "400" : "650"}
      data-aos-once="true"
    >
      <article
        className="w-full h-52 rounded-md md:bg-color-blue-100/30 md:grid lg:grid-cols-[308px,1fr] md:grid-cols-[250px,1fr] gap-2 relative"
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
            {icons.map(({ id, linkIcon, url }) => (
              <span key={id}>
                <a href={url} target="_blank">
                  <span className="text-color-white opacity-75 font-medium underline decoration-color-white text-xs hover:font-semibold hover:opacity-100">Click here</span>
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
            quality={70}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in"
          />
          {/* hover title */}
          <div className="absolute inset-0 z-10 w-full h-full bg-black/70 backdrop-blur-sm flex flex-col gap-2 items-center justify-center  opacity-0 group-hover:opacity-100 origin-top scale-y-0 group-hover:scale-y-100 transition duration-300 ease-linear ">
            <h3 className="text-color-white text-bold text-lg">{title}</h3>

            <button className="md:hidden">
              {icons.map(({ id, linkIcon, url }) => (
                <span key={id}>
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
      </article>
    </div>
  );
};

export default Project;
