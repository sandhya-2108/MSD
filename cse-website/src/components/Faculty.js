function Faculty() {

  const faculty = [
    {
      name: "Dr. Faculty Member",
      designation: "Professor",
      qualification: "Ph.D. in CSE"
    },
    {
      name: "Prof. Faculty Member",
      designation: "Associate Professor",
      qualification: "M.Tech. in CSE"
    },
    {
      name: "Prof. Faculty Member",
      designation: "Assistant Professor",
      qualification: "M.Tech. in CSE"
    }
  ];

  return (
    <section className="section" id="faculty">

      <div className="section-title">
        <p>OUR TEAM</p>
        <h2>Faculty & Staff</h2>
      </div>

      <div className="faculty-grid">

        {faculty.map((member, index) => (

          <div className="faculty-card" key={index}>

            <div className="faculty-photo">
              <img
                src="/images/faculty.jpg"
                alt={member.name}
              />
            </div>

            <h3>{member.name}</h3>

            <p>{member.designation}</p>

            <small>{member.qualification}</small>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Faculty;