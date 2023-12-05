"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="relative backdrop-blur-sm w-screen h-20 bg-white/5 xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 flex items-center justify-center">
      {/* social links */}
      <nav className=" w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.h2
            className=" bg-color-white w-10 h-10 rounded-full text-color-blue-400 flex items-center justify-center font-bold text-lg"
            initial={{ opacity: 0 }}
            animate={{ rotate: [0, 360], opacity: 1, x: [-30, 0] }}
            transition={{ duration: 0.7 }}
          >
            AI
          </motion.h2>
          <motion.span className="font-medium hidden text-lg md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [-100, 0] }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Anita Ikediashi
          </motion.span>
        </div>
        <ul className="flex items-center gap-3">
          <li>
            <motion.a
              href="https://github.com/AnitaIkediashi"
              target="_blank"
              className="md:text-[2rem] text-lg bg-color-blue-100/20 rounded-full flex items-center justify-center hover:bg-color-blue-100/60 transition duration-200 md:w-12 md:h-12 h-9 w-9 "
              initial={{ opacity: 0 }}
              animate={{ rotate: [0, -360], opacity: 1, x: [-30, 0] }}
              transition={{ duration: 0.7 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
          </li>
          <li>
            <motion.a
              href="https://www.linkedin.com/in/anita-ikediashi-a61668188/"
              target="_blank"
              className="md:text-[2rem] text-lg bg-color-blue-100/20 rounded-full flex items-center justify-center hover:bg-color-blue-100/60 transition duration-200 md:w-12 md:h-12 h-9 w-9 "
              initial={{ opacity: 0 }}
              animate={{ rotate: [0, -360], opacity: 1, x: [-30, 0] }}
              transition={{ duration: 0.7 }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="" />
            </motion.a>
          </li>
          <li>
            <motion.a
              href="https://twitter.com/Anita_ikediashi"
              target="_blank"
              className="md:text-[2rem] text-lg bg-color-blue-100/20 rounded-full flex items-center justify-center hover:bg-color-blue-100/60 transition duration-200 md:w-12 md:h-12 h-9 w-9 "
              initial={{ opacity: 0 }}
              animate={{ rotate: [0, -360], opacity: 1, x: [-30, 0] }}
              transition={{ duration: 0.7 }}
            >
              <FontAwesomeIcon icon={faXTwitter} className="" />
            </motion.a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
