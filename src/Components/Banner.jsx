import "./components.css";

function Banner() {
  return (
    <>
      <div className="container-fluid m-0 p-0 d-none d-lg-block">
        <div className="bg-banner text-white py-2 justify-content-center align-items-center">
          <p className="m-0 text-banner">
            Get <span className="text-warning fw-bold">5% off</span> your first
            order using code <span className="fw-bold">'Mandi1'</span> | Get{" "}
            <span className="text-warning fw-bold">30% OFF</span> your ABC order
            using code <span className="fw-bold">'ABC30'</span>
          </p>
        </div>
      </div>

      <div className="container-fluid m-0 p-0 d-sm-none bg-navbar text-white">
        <p className="m-0 py-2 fs-5">
          medical<span className="text-warning">mandi</span>
        </p>
      </div>
    </>
  );
}

export default Banner;
