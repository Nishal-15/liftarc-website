export default function Team() {
  return (
    <section className="team" id="team">
      <h2>Leadership</h2>

      <div className="leader-wrapper">
        {/* CEO IMAGE */}
        <div className="leader-image">
          <img
            src="/ceo.png"
            alt="Mr. Ramar P – Proprietor, LiftArc Industries"
          />
        </div>

        {/* CEO CONTENT */}
        <div className="leader-content">
          <h3>Mr. Ramar P</h3>
          <p className="leader-title">
            Proprietor – LiftArc Industries
          </p>

          <p>
            With over <strong>10+ years of industry experience</strong>, the
            leadership at LiftArc Industries brings a balanced background in
            technical execution and operational management. The focus remains on
            delivering consistent quality, maintaining high safety standards,
            and ensuring reliable project execution across all assignments.
          </p>

          <p>
            Under this leadership, the organization emphasizes client
            satisfaction, disciplined workflows, and continuous improvement to
            support long-term partnerships and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
