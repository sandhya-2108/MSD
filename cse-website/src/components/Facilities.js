function Facilities() {

  const facilities = [
    "Programming Laboratory",
    "Database Laboratory",
    "Computer Networks Laboratory",
    "Project Laboratory",
    "AI & Machine Learning Laboratory",
    "Department Library"
  ];

  return (
    <section className="section facilities" id="facilities">

      <div className="section-title">
        <p>INFRASTRUCTURE</p>
        <h2>Our Facilities</h2>
      </div>

      <div className="facility-grid">

        {facilities.map((facility, index) => (

          <div className="facility-card" key={index}>

            <span>▣</span>

            <h3>{facility}</h3>

            <p>
              Well-equipped facility supporting teaching,
              practical learning and student projects.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Facilities;