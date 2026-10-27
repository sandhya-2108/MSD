function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        <a href="#home">Home</a>

        <div className="dropdown">
          <a href="#about">About ▾</a>

          <div className="dropdown-menu">
            <a href="#overview">Department at a Glance</a>
            <a href="#vision">Vision & Mission</a>
            <a href="#hod">HOD's Desk</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#academics">Academics ▾</a>

          <div className="dropdown-menu">
            <a href="#programs">Programs</a>
            <a href="#faculty">Faculty & Staff</a>
            <a href="#facilities">Facilities</a>
            <a href="#downloads">Downloads</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#activities">Activities ▾</a>

          <div className="dropdown-menu">
            <a href="#activities">Department Activities</a>
            <a href="#achievements">Faculty Achievements</a>
            <a href="#student-achievements">Student Achievements</a>
            <a href="#gallery">Gallery</a>
          </div>
        </div>

        <a href="#placement">Training & Placement</a>
        <a href="#projects">Projects</a>
        <a href="#papers">Question Papers</a>
        <a href="#contact">Contact</a>

      </div>

    </nav>
  );
}

export default Navbar;