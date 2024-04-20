import slide1 from "../../public/assets/img/slide1.jpg";
import slide2 from "../../public/assets/img/slide2.jpg";
import slide3 from "../../public/assets/img/slide3.jpg";
export default function Menu() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        className="carousel-inner overflow-hidden"
        style={{ height: "90vh", zIndex: "-1" }}
      >
        <div className="carousel-item active">
          <img src={slide1} className="img-fluid d-block" alt="slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Pan Cakes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              inventore!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="img-fluid d-block w-100 " alt="slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Tasty Food</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              inventore!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="img-fluid d-block w-100" alt="slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Blueberry Dessert</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              inventore!
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
