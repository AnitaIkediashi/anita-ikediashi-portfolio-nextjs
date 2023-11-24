"use client"

import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative backdrop-blur-sm w-full h-20">
      {/* container */}
      <motion.div
        className="fixed md:top-4 left-1/2 md:w-[34rem] md:h-11 md:rounded-3xl top-0 h-10 w-full  bg-color-gray-200"
        initial={{ y: -100, x:"-50%", opacity: 0, scale: 1.5 }}
        animate={{ y: 0, x: "-50%",  opacity: 1, scale: 1 }}
        transition={{duration: 0.5}}
      ></motion.div>
      <nav></nav>
    </header>
  );
};

export default Header;
