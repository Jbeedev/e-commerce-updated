import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BrandImg from "../assets/Images/Website-Logo.png";
import BrandImg2 from "../assets/Images/52-52-logo.png";
import "./NewNavBar.css";

export default function Navbar() {
  //navbar scroll when in active state
  const [colorChange, setNavbar] = useState(true);

  //logo scroll when in active state

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //for logo

  return (
    <div className="flowerContain">
      <ul class="nav header-nav nav-fill navbar-light">
        <li class="nav-item  pt-3">
          <Link class="nav-link text-white" to="/store">
            Store
          </Link>
        </li>
        <li class="nav-item  pt-3">
          <Link class="nav-link text-white" to="#">
            Training
          </Link>
        </li>
        <li class="nav-item  pt-3">
          <Link class="nav-link text-white" to="/comingsoon">
            MarketPlace
          </Link>
        </li>
        <li class="nav-item  pt-3">
          <Link class="nav-link  text-white " to="/mktcomingsoon">
            Portal
          </Link>
        </li>
      </ul>

      <nav
        class={
          colorChange
            ? "navbar navbar-expand-lg navbar-light sticky-top navbar colorChange"
            : " navbar navbar navbar-expand-lg navbar-light sticky-top"
        }
      >
        <div class="navbar-brand nav-brand" href="index.html">
          <img
            src={BrandImg}
            class="d-none d-sm-block tenplus-logo-mobile"
            width="143px"
            height="52px"
            top="100vh"
            position="absolute"
            alt="TenPlus Digital Solutions Ilorin"
          />
          <img
            src={BrandImg2}
            width="52px"
            height="52px"
            class="mobile-hide-request"
            alt="Digital Solutions Ilorin"
          />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item mr-3">
              <Link
                class="nav-link active  hvr-underline-from-center  "
                to="/"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li class="nav-item dropdown mr-3">
              <a
                class="nav-link dropdown-toggle hvr-underline-from-center "
                href="/portfolio"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>

              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=webDev"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=mobDev"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=GrapDev"
                  >
                    Graphics Design
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=DigDev"
                  >
                    Digital Marketting
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=AiDev"
                  >
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=ProDev"
                  >
                    Project Management
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=priDev"
                  >
                    Printing Services
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=VidDev"
                  >
                    {" "}
                    Video Editing
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=CybDev"
                  >
                    Cybersecurity
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=AiDev"
                  >
                    Blockchain
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=ItDev"
                  >
                    IT Consulting{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    href="/Link?param=IttDev"
                  >
                    IT Training
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item mr-2">
              <Link class="nav-link hvr-underline-from-center" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li class="nav-item mr-2">
              <Link class="nav-link hvr-underline-from-center " to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item dropdown mr-3">
              <Link
                class="nav-link dropdown-toggle hvr-underline-from-center "
                href="/about"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/"
              >
                About Us
              </Link>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  {" "}
                  <Link
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    to="/aboutus"
                  >
                    Who we Serve
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item mr-2">
              <Link class="nav-link hvr-underline-from-center " to="/contact">
                Contact Us
              </Link>
            </li>

            <div
              class="btn-toolbar mb-3"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="input-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  aria-label="search"
                  aria-describedby="btnGroupAddon"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon">
                    <i class="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <div className="collapse navbar-collapse mb-2" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item ">
                <Link
                  class="nav-link nav-btn hvr-bounce-to-right  "
                  to="/order"
                >
                  Request A Quote
                </Link>
              </li>

              <li class="nav-item cart">
                <Link
                  class="nav-link hvr-underline-from-center  nav-btn-portal sign-in  "
                  to="/cart"
                  id="navbarDropdownMenuLinks"
                  style={{ color: "#29abe2;" }}
                >
                  {" "}
                  Cart (<span class="total-count"></span>)
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link hvr-underline-from-center  nav-btn-portal  sign-in  "
                  style={{ color: "#29abe2;" }}
                  to="/login"
                >
                  Account
                </Link>
                <i
                  data-toggle="dropdown"
                  class="fas fa-angle-down solution-angle d-block d-lg-none"
                ></i>
                <div
                  class="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLinks"
                >
                  <Link
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    to="/signin"
                  >
                    Log in
                  </Link>
                  <Link
                    class="dropdown-item drop-hover hvr-grow-shadow-edit "
                    to="signup"
                  >
                    Register
                  </Link>
                </div>
              </li>
            </ul>
          </div>


        </div>
      </nav>

      {/*        
            <div class="container-fluid top-nav" id="banner_container">
                <nav class="navbar navbar-expand-lg navbar-light fixed-top " role="navigation" id="nav">
                    <a class="navbar-brand nav-brand" href="index.html">
                        <img src={ BrandImg }  class="d-none d-sm-block tenplus-logo-mobile" width="143px" height="52px" alt="TenPlus Digital Solutions Ilorin" />
                        <img src={ BrandImg2 } width="52px" height="52px" class="mobile-hide-request" alt="Digital Solutions Ilorin" />
                        <p class="">
                            <a class="nav-link nav-btn-qoute" href="order.html">Request A Quote</a>
                        </p>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon toggle-icon01"> <i class="fa fa-navicon" style={{color:"#fff!important",  fontSize:"28px"}}></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-">
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center  " href="index.html">Home <span class="sr-only">(current)</span></a>
                            </li>
        
                            <li class="nav-item dropdown ">
                                <a class="nav-link hvr-underline-from-center  dropdown-toggle"   href="service.html" id="navbarDropdownMenuLink" aria-expanded="false">
                                    Solutions
                                </a>
                                <i data-toggle="dropdown" class="fas fa-angle-down solution-angle d-block d-lg-none"></i>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=web">Web Development</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=app">App Development</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=graphics">Graphics Design</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=digital">Digital Marketting</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=ai">Artificial Intelligence</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=project#service">Project Management</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=print#service">Printing Services</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="order.html">                   Video Editing</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=cyber#service">Cybersecurity</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=blockchain#service">Blockchain</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=consult#service">IT Consulting </a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="service.html?to=training#service">IT Training</a>
                                </div>
                            </li>
        
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center  " href="portfolio.html">Portfolio</a>
                            </li>
        
                            <li class="nav-item">
                                <Link class="nav-link hvr-underline-from-center " to="/blog">Blog</Link>
                            </li>
        
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="about.html">About Us</a>
                            </li>
        
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="contact.html">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="https://portal.tenpluslabs.com">Portal</a>
                            </li> 
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center " href="printing.html">Printing</a>
                            </li> 
        
        
                        </ul>
        
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link hvr-underline-from-center  nav-btn-portal sign-in-mr " id="navbarDropdownMenuLinks"  aria-expanded="false" style={{color:"#29abe2;"}} href="cart.html"> Cart (<span class="total-count"></span>)</a>
                            </li>
        
                             <li class="nav-item dropdown">
                                <a class="nav-link hvr-underline-from-center  nav-btn-portal mr-2 sign-in-mr  " style={{color:"#29abe2;"}} href="login.html">Account</a>
                                <i data-toggle="dropdown" class="fas fa-angle-down solution-angle d-block d-lg-none"></i>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLinks">
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="Signin.html">Signin</a>
                                    <a class="dropdown-item drop-hover hvr-grow-shadow-edit " href="signup.html">Signup</a>
                                </div>
                            </li> 
        
                            <li class="nav-item">
                                <a class="nav-link nav-btn hvr-bounce-to-right" href="order.html">Request A Quote</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> 
            */}
    </div>
  );
}
