import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import React from "react";

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
      <Projects />
    </main>
  );
};

export default Home;
