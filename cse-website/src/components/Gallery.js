function Gallery() {

  const images = [
    "activity1.jpg",
    "activity2.jpg",
    "activity3.jpg",
    "activity4.jpg",
    "activity5.jpg",
    "activity6.jpg"
  ];

  return (
    <section className="section" id="gallery">

      <div className="section-title">
        <p>MEMORIES</p>
        <h2>Department Gallery</h2>
      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <div className="gallery-item" key={index}>

            <img
              src={`/images/${image}`}
              alt={`Department activity ${index + 1}`}
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;