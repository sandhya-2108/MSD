function Achievements() {

  return (
    <section className="section achievements" id="achievements">

      <div className="section-title">
        <p>EXCELLENCE</p>
        <h2>Achievements</h2>
      </div>

      <div className="achievement-grid">

        <div className="achievement-card">
          <h3>🏆</h3>
          <h4>Faculty Achievements</h4>
          <p>
            Research papers, patents, certifications and
            professional achievements.
          </p>
        </div>

        <div
          className="achievement-card"
          id="student-achievements"
        >
          <h3>🎓</h3>
          <h4>Student Achievements</h4>
          <p>
            Academic achievements, competitions, hackathons
            and technical accomplishments.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Achievements;