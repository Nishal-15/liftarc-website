import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="/logo.png"
            alt="LiftARC Industries Logo"
            className="logo-img"
          />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
