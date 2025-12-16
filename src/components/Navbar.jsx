import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "services", "projects", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // center of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="LiftArc Industries" />
      </div>

      {/* Hamburger */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
