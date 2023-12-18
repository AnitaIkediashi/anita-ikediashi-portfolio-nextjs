"use client";

import Image from "next/image";
import React from "react";
import profilePic from "@/public/profic_pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const Hero = () => {

  const scrollTo = () => {
    scroll.scrollTo(180); // Scrolling to 180px from the top of the page.
  };

  return (
    <>
      <section className="relative h-[80vh] w-full xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 flex flex-col justify-center items-center pt-10 overflow-hidden ">
        {/* a circle */}
        <motion.div
          className="md:w-[26rem] md:h-[26rem] w-[20rem] h-[20rem] border border-color-white/20 rounded-full absolute top-1/2  left-1/2  -z-10 "
          initial={{ scale: 1, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{
            scale: [0.75, 0.85, 1, 1.1, 1],
            x: "-50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="md:w-40 md:h-40 h-20 w-20 rounded-full bg-color-blue-200/40 flex items-center justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [10, 0] }}
          transition={{
            delay: 2,
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Image
            src={profilePic}
            alt="my personal picture"
            width={150}
            height={150}
            className="rounded-full"
          />
        </motion.div>
        <div className="mt-5">
          <motion.h1
            className="text-center mb-3 xl:text-5xl md:text-4xl text-3xl capitalize text-color-blue-100 md:font-bold font-extrabold overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [-100, 0] }}
            transition={{
              delay: 2.1,
              duration: 1.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            frontend developer
          </motion.h1>
          <motion.p
            className="w-full max-w-sm text-center mx-auto text-color-white/75 md:text-base text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [100, 0] }}
            transition={{
              delay: 2.1,
              duration: 1.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            Bringing much vibes and dedication to crafting user friendly digital
            experiences.
          </motion.p>
        </div>
      </section>
      <motion.div
        className="w-full flex justify-center items-center xl:-mt-3 md:-mt-16 -mt-28 lg:-mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 2,
        }}
      >
        <motion.button
          className=" w-9 h-9 border border-color-white/10 rounded-full cursor-pointer overflow-y-hidden"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 0.8 }}
          transition={{
            duration: 1,
          }}
          onClick={scrollTo}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </motion.button>
      </motion.div>
    </>
  );
};

export default Hero;
