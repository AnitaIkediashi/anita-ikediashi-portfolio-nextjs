import About from "@/components/about";
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
    </main>
  );
};

export default Home;
