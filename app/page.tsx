import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import React from "react";
// import {Element} from 'react-scroll'

const Home = () => {
  return (
    <main className="overflow-y-hidden">
      {/* home wrapper */}
      <Hero />
      {/* about section */}
      <About />
      {/* education section */}
      <Experience />
      {/* project section */}
    </main>
  );
};

export default Home;
