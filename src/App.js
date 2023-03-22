import React  from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about"
import Testimonials from "./components/testimonials"
function App() {
  return (
    <div>
  <Navbar />
  <Hero />
  <About />
  <Testimonials/>
    </div>
  );
}

export default App;
