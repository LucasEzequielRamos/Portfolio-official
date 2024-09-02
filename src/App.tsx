import AboutMe from "./sections/about-me";
import CallToAction from "./sections/call-to-action";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";
import Technologies from "./sections/technologies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <CallToAction />
      <Projects />
      <AboutMe />
      <Technologies />
      <Contact />
    </>
  );
}

export default App;
