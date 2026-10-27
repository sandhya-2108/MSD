function About() {
  return (
    <section className="section" id="about">

      <div className="section-title">
        <p>ABOUT US</p>
        <h2>Department at a Glance</h2>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <p>
            The Department of Computer Science and Engineering
            provides students with a strong foundation in computer
            science, programming, software development and emerging
            technologies.
          </p>

          <p>
            The department focuses on technical excellence,
            innovation, research, entrepreneurship and industry
            readiness.
          </p>

        </div>

        <div className="stats">

          <div className="stat-card">
            <h3>180+</h3>
            <p>Students</p>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <p>Faculty</p>
          </div>

          <div className="stat-card">
            <h3>8+</h3>
            <p>Laboratories</p>
          </div>

          <div className="stat-card">
            <h3>100+</h3>
            <p>Projects</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;