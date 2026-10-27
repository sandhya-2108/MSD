function Activities() {

  const activities = [
    "Technical Workshops",
    "Expert Lectures",
    "Industrial Visits",
    "Coding Competitions",
    "Project Exhibitions",
    "Seminars",
    "Hackathons",
    "Student Development Programs"
  ];

  return (
    <section className="section" id="activities">

      <div className="section-title">
        <p>WHAT WE DO</p>
        <h2>Department Activities</h2>
      </div>

      <div className="activity-grid">

        {activities.map((activity, index) => (

          <div className="activity-card" key={index}>
            <span>01</span>
            <h3>{activity}</h3>
            <p>
              Learning beyond classrooms through practical
              and industry-oriented activities.
            </p>
          </div>

        ))}

      </div>

    </section>
  );
}

export default Activities;