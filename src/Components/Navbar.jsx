import { NavLink } from "react-router-dom";
import "./components.css";

function Navbar() {
  return (
    <div className="container-fluid m-0 p-0 overflow-hidden d-none d-lg-block">
      <div className="bg-navbar text-white py-2 row justify-content-center align-items-center">
        <div className="col-2">
          <NavLink to={"/"} className="link-underline link-underline-opacity-0">
            <p className="m-0 fs-5">
              medical <span className="text-warning">mandi</span>
            </p>
          </NavLink>
        </div>
        <div className="col-6">
          <div className="input-group col-sm-7 input-group-md">
            <div className="input-group-prepend">
              <button
                className="btn btn-light dropdown-toggle dropdown-product"
                type="button"
              >
                <span className="dropdown-text fw-light">Products</span>
              </button>
            </div>
            <input
              type="text"
              className="form-control border-white"
              placeholder="Tell us what you're looking for"
            />

            <div className="input-group-append2">
              <button className="input-group-text h-100 bg-white border-white">
                <div className="d-flex align-items-center pe-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-camera text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                  </svg>
                </div>
              </button>
            </div>

            <div className="input-group-append">
              <button className="input-group-text magnify bg-warning border-warning h-100">
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="white"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex-column justify-content-center align-items-center">
          <div className="row justify-content-around">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </div>
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bullseye"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </div>
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-headphones"
                viewBox="0 0 16 16"
              >
                <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
              </svg>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-2">
              <p className="m-0 text-navbar-icon">Sign in</p>
            </div>
            <div className="col-2">
              <p className="m-0 text-navbar-icon">Post RFQ</p>
            </div>
            <div className="col-2">
              <p className="m-0 text-navbar-icon">My Cart</p>
            </div>
            <div className="col-2">
              <p className="m-0 text-navbar-icon">Connect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
