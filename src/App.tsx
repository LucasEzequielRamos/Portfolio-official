import "./App.css";
import CallToAction from "./components/call-to-action";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <CallToAction />
    </>
  );
}

export default App;
