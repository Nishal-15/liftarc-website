export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact LiftArc Industries</h2>

      <p className="contact-desc">
        For project discussions, technical inquiries, or service requirements,
        please reach out to us using the details below or submit the enquiry
        form. Our team will respond promptly with the necessary information.
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Office Address</h3>
          <p>
            33C, Kunnathur Kavunder Complex,<br />
            Thottipalayam Road,<br />
            Coimbatore – 641014
          </p>

          <h3>Get in Touch</h3>
          <p>Phone: +91 77080 84027</p>
          <p>Email: salesliftarcindustries@gmail.com</p>
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
            placeholder="Briefly describe your requirement"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}
