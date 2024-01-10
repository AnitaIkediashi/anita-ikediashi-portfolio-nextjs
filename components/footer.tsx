"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [animate, setAnimate] = useState(false)
  const {ref, inView} = useInView({threshold: 0.5})

  useEffect(()=> {
    if(inView) {
        setAnimate(true)
    }
  }, [inView])


  return (
    <footer className="xl:px-[15rem] lg:px-[5rem] md:px-20 px-8 w-screen h-[27rem] bg-color-blue-300/20 mt-28 flex items-center justify-center pb-6">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-3"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-once="true"
      >
        {/* ask a question */}
        <p className="lg:text-2xl text-xl font-medium overflow-y-hidden ">
          Have a project in mind?
        </p>
        {/* push more */}
        <p className="lg:text-6xl md:text-5xl text-3xl text-color-blue-100 font-semibold tracking-wide overflow-y-hidden">
          Let&apos;s connect
        </p>
        {/* send mail -anchor tag with circle  animation and text in the center */}
        <a
          href="mailto:anitaikediashi23@gmail.com"
          className="relative overflow-y-hidden"
        >
          <svg
            width="128"
            height="128"
            viewBox="-16 -16 160 160"
            className="-rotate-90 overflow-y-hidden"
          >
            {/* <path
              d="M10,64a54,54 0 1,0 108,0a54,54 0 1,0 -108,0"
              fill="none"
              stroke="#fefcfb"
              strokeWidth="1.5"
              className={animate ? 'animate-dash' : ''}
            //   initial={{ pathLength: 0 }}
            //   animate={{ pathLength: 1 }}
            //   transition={{
            //     delay: 4,
            //     duration: 1.5,
            //   }}
            ></path> */}

            {/* d="M10,64a54,54 0 1,0 108,0a54,54 0 1,0 -108,0" is the same as the circle cx, cy,and r */}
            <circle
              r="54"
              cx="64"
              cy="64"
              fill="transparent"
              stroke="#0a1128"
              strokeWidth="2"
              strokeDasharray="339.12px"
              strokeDashoffset="0"
            ></circle>
            <circle
              r="54"
              cx="64"
              cy="64"
              stroke="#fefcfb"
              strokeWidth="2"
              strokeLinecap="round"
              // strokeDashoffset="34px"
              fill="transparent"
              strokeDasharray="339.12px"
              className={animate ? "animate-dash" : ""}
            ></circle>
          </svg>
          <small className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center">
            Write a message
          </small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
