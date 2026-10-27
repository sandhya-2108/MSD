function Contact() {

  return (
    <section className="section contact" id="contact">

      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Department</h2>
      </div>

      <div className="contact-grid">

        <div>
          <h3>Department of CSE</h3>

          <p>
            D. Y. Patil College of Engineering &
            Technology, Kolhapur
          </p>

          <p>
             +91 XXXXX XXXXX
          </p>

          <p>
             cse@college.edu.in
          </p>

        </div>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;