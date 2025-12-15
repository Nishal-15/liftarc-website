export default function Products() {
  return (
    <section className="products">
      <h1>Our Products</h1>

      <p className="products-desc">
        LiftArc Industries manufactures and fabricates high-quality sheet metal
        and welded components as per customer specifications, ensuring strength,
        precision, and durability.
      </p>

      <div className="products-grid">
        <div className="product-card">Sheet Metal Components</div>
        <div className="product-card">Fabricated Metal Frames</div>
        <div className="product-card">Welded Structural Parts</div>
        <div className="product-card">Custom Fabrication Jobs</div>
        <div className="product-card">Industrial Support Brackets</div>
        <div className="product-card">Repair & Replacement Parts</div>
      </div>

      <p className="products-note">
        All products are custom-built based on drawings, dimensions, and
        application requirements provided by the client.
      </p>
    </section>
  );
}
