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
      className="w-full lg:flex hidden justify-center items-center xl:-mt-3 -mt-8 lg:-mt-4 overflow-hidden"
      to={sectionId}
      smooth="smooth"
    >
      <motion.button
        className=" w-9 h-9 border border-color-white/10 rounded-full cursor-pointer overflow-y-hidden hover:bg-color-white/20 transition duration-300 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
