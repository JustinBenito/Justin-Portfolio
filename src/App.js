import React  from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about"
import Testimonials from "./components/testimonials"
import ProjectSection from "./components/project-section"

function App() {
  return (
    <div>
  <Navbar />
  <Hero />
  <About />
  <Testimonials/>
  <ProjectSection />
    </div>
  );
}

export default App;
