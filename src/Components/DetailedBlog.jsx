import Injection from "../Assets/injection.png";
import Image1 from "../Assets/img-4.png";
import Image2 from "../Assets/img-2.png";
import Image3 from "../Assets/img-3.png";
import { NavLink } from "react-router-dom";
import "./components.css";

function DetailedBlog() {
  return (
    <div className="container-fluid m-0 p-0 position-relative">
      <div className="d-none d-lg-flex justify-content-center align-items-center position-absolute w-100 h-100 d-none">
        <img
          src={Injection}
          alt="background-img"
          className="img-fluid position-absolute bg-blog-img"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "top",
            zIndex: "-1",
          }}
        />
      </div>

      <div className="d-lg-none border border-none">
        <NavLink to={"/"}>
          <button className="btn rounded-pill bg-white btn-back d-flex justify-content-center align-items-center position-absolute p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left text-black"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </NavLink>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={Injection}
            alt="front-img"
            className="img-fluid w-100"
            style={{ maxHeight: "450px", zIndex: "1" }}
          />
        </div>
      </div>
      <div className="d-lg-flex flex-column justify-content-center align-items-center position-relative d-none">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={Injection}
            alt="front-img"
            className="img-fluid w-100"
            style={{ maxHeight: "450px", zIndex: "1" }}
          />
        </div>
      </div>
      <div className="text-center m-0 position-absolute w-100 ">
        <div className="fs-3 fw-bold d-none d-lg-block">
          <p className="p-0 m-0 mt-3">Empowering Medical Representatives:</p>
          <p className="p-0 m-0">Tips for Success in the Digital Age</p>
        </div>

        <div className="fs-5 ms-2 fw-bold text-start d-lg-none">
          <p className="p-0 m-0 mt-3">Empowering Medical Representatives:</p>
          <p className="p-0 m-0">Tips for Success in the Digital Age</p>
        </div>

        {/* Smaller */}
        <div className="text-start m-0 d-flex w-100 row ps-2 d-block d-lg-none">
          <div className="col-lg-1 col-4 px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-person-circle me-1 text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <span className="text-card-info">Piyush T.</span>
          </div>
          <div className="col-lg-1 col-4 px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grid text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>
            <span className="dropdown-text ms-1 me-1 text-card-info">
              Category #1
            </span>
          </div>
        </div>
        <div className="text-start m-0 d-flex w-100 row ps-2 d-block d-lg-none">
          <div className="col-lg-1 col-4 px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clock text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <span className="dropdown-text ms-1 me-1 text-card-info">
              12 min. read
            </span>
          </div>
          <div className="col-lg-1 col-4 px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <span className="dropdown-text ms-1 me-1 text-card-info">
              Mar 19, 2024
            </span>
          </div>
        </div>

        {/* Larger */}
        <div className="text-center m-0 w-100 row justify-content-center d-none d-lg-flex">
          <div className="col-lg-2 px-0 col-xl-1 col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-person-circle me-1 text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <span className="text-card-info">Piyush T.</span>
          </div>
          <div className="col-lg-2 px-0 col-xl-1 col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grid text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>
            <span className="dropdown-text ms-1 me-1 text-card-info">
              Category #1
            </span>
          </div>
          <div className="col-lg-2 px-0 col-xl-1 col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clock text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <span className="dropdown-text ms-1 me-1 text-card-info">
              12 min. read
            </span>
          </div>
          <div className="col-lg-2 px-0 col-xl-1 col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar text-card-info"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <span className="dropdown-text ms-1 me-1 text-card-info">
              Mar 19, 2024
            </span>
          </div>
        </div>

        <div className="text-center w-100 row justify-content-center m-0 mt-3">
          <div className="col-lg-8 col-12 text-start dropdown-text m-0">
            In today's rapidly evolving healthcare landscape, medical
            representatives play a crucial role in connecting healthcare
            providers with innovative solutions and cutting-edge products. As
            the industry continues to embrace digital transformation, medical
            representatives must adapt and leverage digital tools to enhance
            their effectiveness and drive success.
          </div>
          <div className="col-lg-8 col-12 text-start dropdown-text m-0 mt-2">
            Here are some key tips for empowering medical representatives in the
            digital age:
          </div>
          <div className="col-lg-8 col-12 text-start dropdown-text m-0 mt-2">
            <ol>
              <li>
                <span className="fw-bold">Embrace Digital Tools:</span>Equip
                yourself with the latest digital tools and technologies to
                streamline your workflow, manage customer relationships, and
                stay organized. Platforms like Medical Mandi offer a wealth of
                resources and features tailored for medical representatives,
                enabling efficient communication, order management, and customer
                engagement.
              </li>
              <li>
                <span className="fw-bold">
                  Personalize Customer Interactions:
                </span>
                Leverage data insights and digital platforms to personalize your
                interactions with healthcare professionals. Tailor your
                messaging and product recommendations to meet the specific needs
                and preferences of each customer, fostering stronger
                relationships and driving loyalty.
              </li>
              <li>
                <span className="fw-bold">Stay Informed and Educated:</span>
                Keep abreast of the latest industry trends, product
                developments, and regulatory changes through continuous learning
                and professional development. Attend webinars, workshops, and
                industry conferences to expand your knowledge and stay ahead of
                the curve in the rapidly evolving healthcare landscape.
              </li>
              <li>
                <span className="fw-bold">Adaptability and Agility:</span>Be
                adaptable and flexible in your approach, especially in the face
                of unforeseen challenges or changes in the market. Embrace new
                technologies, strategies, and best practices to meet the
                evolving needs of your customers and drive business growth.
              </li>
              <li>
                <span className="fw-bold">Harness the Power of Data:</span>
                Utilize data analytics to gain valuable insights into customer
                behavior, market trends, and sales performance. Leverage this
                data to make informed decisions, identify opportunities for
                growth, and optimize your sales strategies for maximum impact.
              </li>
            </ol>
          </div>
          <div className="col-lg-8 col-12 text-start dropdown-text m-0 mt-2">
            By embracing these tips and leveraging the opportunities presented
            by digital technologies, medical representatives can empower
            themselves to thrive in the digital age and drive success in the
            dynamic healthcare industry.
          </div>
          <div className="col-lg-8 col-12 text-start dropdown-text m-0">
            Remember, success in the digital age requires a proactive mindset, a
            willingness to adapt, and a commitment to continuous learning and
            improvement. With the right tools, strategies, and mindset, medical
            representatives can seize the opportunities of the digital age and
            excel in their roles as trusted healthcare partners.
          </div>
        </div>

        <div className="w-100 row justify-content-center m-0 mt-3">
          <div className="col-lg-8 col-12 text-start">
            <p className="fs-4 fw-bold m-0 p-0">More Related</p>
          </div>
        </div>

        <div className="w-100 row justify-content-center m-0 mt-3 mb-5">
          <div className="col-lg-8 col-12 row">
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

export default DetailedBlog;
