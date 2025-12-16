import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% of section visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <img src="/logo.png" alt="LiftArc Industries" />

      <nav>
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#services" className={activeSection === "services" ? "active" : ""}>
          Services
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>
    </header>
  );
}
