export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact LiftArc Industries</h1>

      <p className="contact-desc">
        For welding and sheet metal fabrication enquiries, please fill out the
        form below. Our team will contact you shortly.
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>
            33C, Kunnathur Kavunder Complex,<br />
            Thottipalyam Road,<br />
            Coimbatore – 641014
          </p>

          <h3>Contact</h3>
          <p>Phone: +91 7708084027</p>
          <p>Email: liftarc@gmail.com</p>
        </div>

        {/* WORKING FORM */}
        <form
          className="contact-form"
          action="https://formspree.io/f/meoywevv"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}
