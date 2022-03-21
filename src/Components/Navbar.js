import { Link } from "react-router-dom";
import BrandImg from "./assets/Images/Website-Logo.png";
import BrandImg2 from "./assets/Images/52-52-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div class="container-fluid top-nav" id="banner_container">
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top "
          role="navigation"
          id="nav"
        >
          <a class="navbar-brand nav-brand" href="index.html">
            <img
              src={BrandImg}
              class="d-none d-sm-block tenplus-logo-mobile"
              width="143px"
              height="52px"
              alt="TenPlus Digital Solutions Ilorin"
            />
            <img
              src={BrandImg2}
              width="52px"
              height="52px"
              class="mobile-hide-request"
              alt="Digital Solutions Ilorin"
            />
            <p class="">
              <a class="nav-link nav-btn-qoute" href="order.html">
                Request A Quote
              </a>
            </p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon toggle-icon01">
              {" "}
              <i
                class="fa fa-navicon"
                style={{ color: "#fff!important", fontSize: "28px" }}
              ></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-">
              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center  "
                  href="index.html"
                >
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link hvr-underline-from-center  dropdown-toggle"
                  href="service.html"
                  id="navbarDropdownMenuLink"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <i
                  data-toggle="dropdown"
                  class="fas fa-angle-down solution-angle d-block d-lg-none"
                ></i>
                <div
                  class="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=web"
                  >
                    Web Development
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=app"
                  >
                    App Development
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=graphics"
                  >
                    Graphics Design
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=digital"
                  >
                    Digital Marketting
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=ai"
                  >
                    Artificial Intelligence
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=project#service"
                  >
                    Project Management
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=print#service"
                  >
                    Printing Services
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="order.html"
                  >
                    {" "}
                    Video Editing
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=cyber#service"
                  >
                    Cybersecurity
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=blockchain#service"
                  >
                    Blockchain
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=consult#service"
                  >
                    IT Consulting{" "}
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="service.html?to=training#service"
                  >
                    IT Training
                  </a>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center  "
                  href="portfolio.html"
                >
                  Portfolio
                </a>
              </li>

              <li class="nav-item">
                <Link class="nav-link hvr-underline-from-center " to="/blog">
                  Blog
                </Link>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center "
                  href="about.html"
                >
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center "
                  href="contact.html"
                >
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center "
                  href="https://portal.tenpluslabs.com"
                >
                  Portal
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center "
                  href="printing.html"
                >
                  Printing
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link hvr-underline-from-center  nav-btn-portal sign-in-mr "
                  id="navbarDropdownMenuLinks"
                  aria-expanded="false"
                  style={{ color: "#29abe2;" }}
                  href="cart.html"
                >
                  {" "}
                  Cart (<span class="total-count"></span>)
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link hvr-underline-from-center  nav-btn-portal mr-2 sign-in-mr  "
                  style={{ color: "#29abe2;" }}
                  href="login.html"
                >
                  Account
                </a>
                <i
                  data-toggle="dropdown"
                  class="fas fa-angle-down solution-angle d-block d-lg-none"
                ></i>
                <div
                  class="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLinks"
                >
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="Signin.html"
                  >
                    Signin
                  </a>
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="signup.html"
                  >
                    Signup
                  </a>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link nav-btn hvr-bounce-to-right"
                  href="order.html"
                >
                  Request A Quote
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
