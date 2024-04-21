import slide1 from "../../public/assets/img/slide1.jpg";
import slide2 from "../../public/assets/img/slide2.jpg";
import slide3 from "../../public/assets/img/slide3.jpg";
export default function History() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={slide2}
            className="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Little Lemon <br />
            Chicago
          </h1>
          <p className="lead fs-6" style={{ textAlign: "justify" }}>
            Immerse yourself in a culinary experience like no other at Little
            Lemon, a vibrant bar and small plates restaurant nestled in the
            heart of Dublin, Ireland. With a captivating blend of Mediterranean
            cuisine, dramatic presentations, an extensive wine selection, and
            show-stopping cocktails, we invite you to indulge in a symphony of
            flavors that will leave you craving more. At Little Lemon, we
            believe that great things come in small packages.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
