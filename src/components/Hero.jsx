import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Precision Welding & Sheet Metal Fabrication</h1>

        <p>
          LiftArc Industries delivers reliable welding and fabrication solutions
          with 10 years of industry experience, serving industrial and commercial
          clients in Coimbatore.
        </p>

        <button onClick={() => navigate("/contact")}>
          Get in Touch
        </button>
      </div>
    </section>
  );
}
