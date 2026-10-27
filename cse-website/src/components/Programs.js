function Programs() {

  const programs = [
    {
      title: "B.Tech Computer Science & Engineering",
      duration: "4 Years",
      intake: "180"
    },
    {
      title: "M.Tech Computer Science & Engineering",
      duration: "2 Years",
      intake: "18"
    }
  ];

  return (
    <section className="section" id="programs">

      <div className="section-title">
        <p>ACADEMICS</p>
        <h2>Programs Offered</h2>
      </div>

      <div className="program-grid">

        {programs.map((program, index) => (

          <div className="program-card" key={index}>

            <div className="program-icon">
              💻
            </div>

            <h3>{program.title}</h3>

            <p>
              Duration: {program.duration}
            </p>

            <p>
              Intake: {program.intake}
            </p>

            <button>
              View Details
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Programs;