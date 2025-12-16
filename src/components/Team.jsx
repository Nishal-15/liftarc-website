export default function Team() {
  return (
    <section className="team" id="team">
      <h2>Leadership</h2>

      <div
        className="team-grid"
        style={{
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        <div>
          {/* CEO Image */}
          <img
            src="/ceo.png"
            alt="Proprietor – LiftArc Industries"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "18px",
              marginLeft:"-525px"
              
            }}
          />
          </div></div>
        <div style ={{ textAlign: "left" }}>
          {/* CEO Title */}
          <h4>Mr. Ramar P</h4>

          {/* CEO Profile */}
          <p>
            With over <strong>10+ years of industry experience</strong>, the
            leadership at LiftArc Industries brings a balanced background in
            technical execution and operational management. The focus remains
            on delivering consistent quality, maintaining high safety
            standards, and ensuring reliable project execution across all
            assignments.
          </p>

          <p>
            Under this leadership, the organization emphasizes client
            satisfaction, disciplined workflows, and continuous improvement to
            support long-term partnerships and sustainable growth.
          </p>
          </div>
       
    </section>
  );
}
