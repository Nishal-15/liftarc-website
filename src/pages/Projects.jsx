export default function Projects() {
  return (
    <section className="projects">
      <h1>Our Projects</h1>

      <p className="projects-desc">
        Over the past 10 years, LiftArc Industries has successfully completed
        multiple welding and fabrication projects for industrial and commercial
        clients across Coimbatore and nearby regions.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Sheet Metal Fabrication Project"
          />
          <h3>Sheet Metal Fabrication</h3>
          <p>
            Custom sheet metal fabrication work executed with precision and
            quality finishing for industrial applications.
          </p>
        </div>

        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Structural Welding Project"
          />
          <h3>Structural Welding Works</h3>
          <p>
            Structural welding solutions delivered for industrial and commercial
            frameworks, ensuring strength and durability.
          </p>
        </div>

        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Fabrication Assembly Project"
          />
          <h3>Fabrication & Assembly</h3>
          <p>
            Fabrication and assembly of metal components as per client
            specifications and engineering standards.
          </p>
        </div>

        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Repair Welding Project"
          />
          <h3>Repair & Maintenance Welding</h3>
          <p>
            Welding repair and maintenance services to restore and strengthen
            existing metal structures and equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
