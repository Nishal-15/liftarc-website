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
      {/* HOME */}
      <section id="home" className="hero">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <About />
        <WhyChoose />
        <Team />
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <Services />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <Projects />
        <Careers />
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <Contact />
      </section>
    </>
  );
}
