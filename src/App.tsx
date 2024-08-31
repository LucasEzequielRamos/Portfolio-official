import AboutMe from "./sections/about-me";
import CallToAction from "./sections/call-to-action";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <CallToAction />
      <Projects />
      <AboutMe />
    </>
  );
}

export default App;
