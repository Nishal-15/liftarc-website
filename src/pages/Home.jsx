import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";

import Team from "../components/Team";
import Projects from "./Projects";
import Careers from "./Careers";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Team />
      <Projects />
      <Careers />
      <Contact />
    </>
  );
}
