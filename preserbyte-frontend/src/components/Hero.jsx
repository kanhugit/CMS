export default function Hero() {
  return (
    <section>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500" // speed (2.5s)
        data-bs-pause="false" // continuous
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {[
            {
              img: "/images/it.jpeg",
              title: "Information Technology & Software ",
              desc: "Comprehensive IT IP solutions",
            },
            {
              img: "/images/biotech.jpeg",
              title: "Biotechnology & Pharmaceuticals",
              desc: "Life science IP security",
            },
            {
              img: "/images/electronics.jpeg",
              title: "Electronics & Hardware",
              desc: "End-to-end IP solutions",
            },
            {
              img: "/images/manufacturing.jpeg",
              title: "Engineering & Manufacturing ",
              desc: "Next-gen technology safety",
            },
            {
              img: "/images/chemicals.jpeg",
              title: "Chemicals & Materials",
              desc: "Global patent enforcement",
            },
            {
              img: "/images/ip-protection.png",
              title: "Legal Strategy",
              desc: "IP filing & litigation",
            },
          ].map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.img}
                className="d-block w-100"
                alt={slide.title}
                style={{ height: "80vh", objectFit: "cover" }}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}
