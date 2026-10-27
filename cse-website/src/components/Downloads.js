function Downloads() {

  const downloads = [
    "CSE Syllabus",
    "Academic Calendar",
    "Time Table",
    "Project Report Format",
    "Seminar Report Format",
    "Question Papers",
    "Undertaking Letter",
    "Leave Letter Form"
  ];

  return (
    <section className="section" id="downloads">

      <div className="section-title">
        <p>RESOURCES</p>
        <h2>Downloads</h2>
      </div>

      <div className="download-list">

        {downloads.map((item, index) => (

          <div className="download-item" key={index}>

            <span>📄</span>

            <p>{item}</p>

            <button>
              Download
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Downloads;