"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

type ScrollToSectionProp = {
  sectionId: string;
};

const ScrollToSection = ({ sectionId }: ScrollToSectionProp) => {
  return (
    <Link
      className="overflow-hidden"
      to={sectionId}
      smooth="smooth"
      spy={true}
      offset={20}
    >
      <motion.button
        className=" w-9 h-9 border border-color-white/10 rounded-full cursor-pointer overflow-y-hidden hover:bg-color-white/20 transition duration-300 absolute top-[38rem] md:top-[53rem] lg: left-1/2  z-10 xl:-mt-3 "
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{
          delay: 3,
          duration: 1.5,
        }}
      >
      
        <FontAwesomeIcon icon={faArrowDown} />
      </motion.button>
    </Link>
  );
};

export default ScrollToSection;
