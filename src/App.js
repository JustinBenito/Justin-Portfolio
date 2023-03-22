import React, {useState, useEffect}  from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about"
import Testimonials from "./components/testimonials"
import ProjectSection from "./components/project-section"
import Footer from "./components/footer"
import Skills from "./components/skills"
import HashLoader from "react-spinners/HashLoader";


function App() {
const [loading, setLoading]=useState(true);

useEffect(()=>{

  setTimeout(() => {
    setLoading(false)
  }, 3000);
})

return (
  <>
  {
    loading ? 
    (<div className="app">
    <HashLoader
  color={'#00f9da'}
  loading={loading}
  size={150}
  />
    </div> )
    :(
    <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Testimonials/>
  <ProjectSection />
  <Footer />
    </>)

  }
  </>
)


}

export default App;
