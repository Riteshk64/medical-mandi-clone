import "./components.css";
import Image1 from "../Assets/img-4.png";
import Image2 from "../Assets/img-2.png";
import Image3 from "../Assets/img-3.png";
import { NavLink } from "react-router-dom";

function Blogs() {
  return (
    <div className="container-fluid mb-5">
      <div className=" d-flex align-items-center justify-content-start d-sm-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <div className="fs-3 fw-bold my-4 ms-2">Blogs</div>
      </div>
      <div className="fs-3 fw-bold my-4 d-none d-sm-block">Blogs</div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-9 col-sm-12 col-offset-2">
          <div className="d-flex justify-content-between scroll-y">
            <button className="btn btn-outline-primary btn-category">
              <span className="dropdown-text px-4">Category #1</span>
            </button>
            <button className="btn btn-outline-primary btn-category">
              <span className="dropdown-text px-4">Category #2</span>
            </button>
            <button className="btn btn-outline-primary btn-category">
              <span className=" dropdown-text px-4">Category #3</span>
            </button>
            <button className="btn btn-outline-primary btn-category">
              <span className=" dropdown-text px-4">Category #4</span>
            </button>
            <button className="btn btn-outline-primary btn-category">
              <span className="dropdown-text px-4">Category #5</span>
            </button>
            <button className="btn btn-outline-primary btn-category">
              <span className="dropdown-text px-4">Category #6</span>
            </button>
          </div>

          <div className="d-flex mt-4 d-none d-sm-block text-start">
            <p className="fs-5 fw-bold p-0 m-0">Top Stories</p>
          </div>

          <div className="d-flex justify-content-start mt-2 d-sm-none">
            <p className="fs-5 fw-bold p-0 m-0">Top Stories</p>
          </div>

          <div className="d-flex justify-content-start mt-2 row">
            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image1}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Revolutionizing Medical Procurement: The Rise of Medical
                    Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Discover how Medical Mandi is revolutionizing the
                    traditional methods of purchasing medical supplies, bringing
                    efficiency, transparency, and accessibility to healthcare
                    professionals.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image2}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Ankur S.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Navigating the Future of Healthcare: Trends and Insights
                    from Medical Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    From the adoption of telemedicine to the growing demand for
                    personalized healthcare solutions, discover the key trends
                    driving innovation in the healthcare sector
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image3}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        12 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Empowering Medical Representatives: Tips for Success in the
                    Digital Age
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Learn how to effectively utilize digital tools and resources
                    to enhance customer engagement, streamline sales processes,
                    and drive business growth.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image1}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Revolutionizing Medical Procurement: The Rise of Medical
                    Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Discover how Medical Mandi is revolutionizing the
                    traditional methods of purchasing medical supplies, bringing
                    efficiency, transparency, and accessibility to healthcare
                    professionals.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image2}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Ankur S.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Navigating the Future of Healthcare: Trends and Insights
                    from Medical Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    From the adoption of telemedicine to the growing demand for
                    personalized healthcare solutions, discover the key trends
                    driving innovation in the healthcare sector
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image3}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        12 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Empowering Medical Representatives: Tips for Success in the
                    Digital Age
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Learn how to effectively utilize digital tools and resources
                    to enhance customer engagement, streamline sales processes,
                    and drive business growth.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image1}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Revolutionizing Medical Procurement: The Rise of Medical
                    Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Discover how Medical Mandi is revolutionizing the
                    traditional methods of purchasing medical supplies, bringing
                    efficiency, transparency, and accessibility to healthcare
                    professionals.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image2}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Ankur S.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Navigating the Future of Healthcare: Trends and Insights
                    from Medical Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    From the adoption of telemedicine to the growing demand for
                    personalized healthcare solutions, discover the key trends
                    driving innovation in the healthcare sector
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image3}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        12 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Empowering Medical Representatives: Tips for Success in the
                    Digital Age
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Learn how to effectively utilize digital tools and resources
                    to enhance customer engagement, streamline sales processes,
                    and drive business growth.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image1}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Revolutionizing Medical Procurement: The Rise of Medical
                    Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Discover how Medical Mandi is revolutionizing the
                    traditional methods of purchasing medical supplies, bringing
                    efficiency, transparency, and accessibility to healthcare
                    professionals.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image2}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Ankur S.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Navigating the Future of Healthcare: Trends and Insights
                    from Medical Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    From the adoption of telemedicine to the growing demand for
                    personalized healthcare solutions, discover the key trends
                    driving innovation in the healthcare sector
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image3}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        12 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Empowering Medical Representatives: Tips for Success in the
                    Digital Age
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Learn how to effectively utilize digital tools and resources
                    to enhance customer engagement, streamline sales processes,
                    and drive business growth.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image1}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Revolutionizing Medical Procurement: The Rise of Medical
                    Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Discover how Medical Mandi is revolutionizing the
                    traditional methods of purchasing medical supplies, bringing
                    efficiency, transparency, and accessibility to healthcare
                    professionals.
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image2}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Ankur S.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        10 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Navigating the Future of Healthcare: Trends and Insights
                    from Medical Mandi
                  </h5>
                  <p className="card-text text-start text-card-info">
                    From the adoption of telemedicine to the growing demand for
                    personalized healthcare solutions, discover the key trends
                    driving innovation in the healthcare sector
                  </p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to={"/Blogs"}
              className="col-md-4 col-xs-12 text-left mt-4 link-underline link-underline-opacity-0"
            >
              <div className="card border-0">
                <img
                  src={Image3}
                  className="card-img-top img-fluid rounded-3"
                  alt="img-1"
                />
                <ul className="list-group list-group-flush my-1">
                  <li className="list-group-item p-0 d-flex justify-content-between align-items-center">
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-person-circle me-1 ms-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <span>Piyush T.</span>
                    </div>
                    <div className="text-card-info d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                      <span className="dropdown-text ms-1 me-1">
                        12 min. read
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="card-body pt-1 p-0">
                  <h5 className="card-title text-start dropdown-text fw-bold">
                    Empowering Medical Representatives: Tips for Success in the
                    Digital Age
                  </h5>
                  <p className="card-text text-start text-card-info">
                    Learn how to effectively utilize digital tools and resources
                    to enhance customer engagement, streamline sales processes,
                    and drive business growth.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
