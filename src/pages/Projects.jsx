export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Project Experience</h2>

      <p className="projects-desc">
        Our completed works include industrial frameworks, support structures,
        customized metal assemblies, and on-site project assistance for diverse
        engineering and manufacturing requirements.
      </p>

      <p className="projects-desc">
        Each project is executed with a focus on material quality, joint
        reliability, and long-term performance, ensuring consistent results
        across demanding operating conditions.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project" />
          <h3>Industrial Structural Assembly</h3>
          <p>
            Fabrication and welding support for industrial framework
            installations.
          </p>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project" />
          <h3>Custom Metal Integration</h3>
          <p>
            Engineered metal assemblies developed to meet specific site
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
