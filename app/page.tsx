
import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ScrollToSection from "@/components/scroll_to_section";
import ScrollToTop from "@/components/scroll_to_top";
import React from "react";

const Home = () => {
   
  
  return (
    <main className="overflow-y-hidden">
      {/* scroll to top button */}
      <ScrollToTop />
      {/* home wrapper */}
      <Hero />
      {/* scroll to about section button */}
      <ScrollToSection sectionId="about" />
      {/* about section */}
      <div id="about" className="overflow-y-hidden">
        <About />
      </div>
      {/* education section */}
      <Experience />
      {/* project section */}
      <Projects />
      {/* contact section */}
      <Footer />
    </main>
  );
};

export default Home;
