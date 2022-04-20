import React from "react";
import "./Web.css";
import { useState } from "react";

import WorldMap from "../assets/Images/word-map-globe-tenplus.png";
import ImgImg6 from "../assets/Images/app-logo-type.png";

export default function AllServices() {
  
  const [serviceToggle, setServiceToggle] = useState(1);

  const handleClick = (index) => {
    setServiceToggle(index);
  };

  return (
    <div>
      {/*////// World Map //////*/}
      <div className="row mt-5">
        <div className="map_container col-md-8">
          <div
            className="service-circle-bg"
            style={{ backgroundImage: `url(${WorldMap})` }}
          >
            <div className="row">
              <div className="col-md-12">
                <div
                  className={
                    serviceToggle === 1
                      ? "click active-click cont-service-a click cont-service-a service-btn-active"
                      : "click active-click cont-service-a click cont-service-a"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(1)}>
                    <i className="fa fa-globe  pr-1"></i> Web Development{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className={
                    serviceToggle === 2
                      ? "click cont-service-b service-btn-active"
                      : "click cont-service-b"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(2)}>
                    <i className="fab fa-app-store  pr-1"></i> Mobile Apps
                    Development
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5 offset-md-1 ">
                <div
                  className={
                    serviceToggle === 3
                      ? "click cont-service-c  graphics service-btn-active"
                      : "click cont-service-c  graphics"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(3)}>
                    {" "}
                    <i className="fa fa-crop  pr-1"></i> Graphics Design{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div
                  className={
                    serviceToggle === 4
                      ? "click cont-service-d service-btn-active"
                      : "click cont-service-d "
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(4)}>
                    {" "}
                    <i className="fa fa-print  pr-1"></i> Prints Services{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5 offset-md-2">
                <div
                  className={
                    serviceToggle === 5
                      ? "click cont-service-e service-btn-active"
                      : "click cont-service-e"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(5)}>
                    {" "}
                    <i className="fa fa-bullhorn  pr-1"></i> Digital Marketing{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className={
                    serviceToggle === 6
                      ? "click cont-service-f service-btn-active"
                      : "click cont-service-f"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(6)}>
                    {" "}
                    <i className="fa fa-book  pr-1"></i> Project Management{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cont-service-img ">
                  <img src={ImgImg6} className="  cont-service-img2" alt="" />
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className={
                    serviceToggle === 7
                      ? "active-click cont-service-g service-btn-active"
                      : "active-click cont-service-g"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(7)}>
                    <i className="fa fa-globe pr-1"></i> Data Science{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div
                  className={
                    serviceToggle === 8
                      ? "active-click cont-service-h service-btn-active"
                      : "active-click cont-service-h"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(8)}>
                    {" "}
                    <i className="fa fa-file-video-o  pr-1"></i> Video Editing{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5 offset-md-2">
                <div
                  className={
                    serviceToggle === 9
                      ? "active-click cont-service-i service-btn-active"
                      : "active-click cont-service-i"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(9)}>
                    {" "}
                    <i className="fa fa-lock  pr-1"></i> Cyber Security{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div
                  className={
                    serviceToggle === 10
                      ? "active-click cont-service-j service-btn-active"
                      : "active-click cont-service-j"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(10)}>
                    {" "}
                    <i className="fa fa-bitcoin  pr-1"></i> Blockchain{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5 offset-md-2">
                <div
                  className={
                    serviceToggle === 11
                      ? "active-click cont-service-k service-btn-active"
                      : "active-click cont-service-k"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(11)}>
                    {" "}
                    <i className="fa fa-calendar  pr-1"></i> IT Consulting{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div
                  className={
                    serviceToggle === 12
                      ? "active-click cont-service-l service-btn-active"
                      : "active-click cont-service-l"
                  }
                >
                  <p className="hvr-forward" onClick={() => handleClick(12)}>
                    {" "}
                    <i className="fa fa-desktop  pr-1"></i> IT Training{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-tab col-md-4">
          <div className="Tenplus col-md-12">
            
            {/* <div
                  className={serviceToggle === 1 ? "webDevelopment cont-right-service-div" : "service-display" } 
                  id="serve-div-a"
                >
                  <h2 className="service-h2">
                    Tenplus Digital Labs Competency Platform
                  </h2>
                  <p className="service-par">
                    Our competencies focus exclusively on in‑demand digital
                    technologies and ensure workplace relevance.
                  </p>
                  <p className="serv-learn-m-btn">
                    {" "}
                    <a className="hvr-bounce-to-right" href="/portfolio">
                      Learn more{" "}
                      <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                    </a>
                  </p>
                </div> */}
            <div className="cont-right-service-div1">
              {/* { services.map(service => ( */}


              <div
                className={
                  serviceToggle === 1
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Web Development</h2>
                <p className="service-par">
                  The benefit of owning a website today cannot be
                  overemphasized. Website have grown to be one of the trusted
                  tools to drive businesses and brands. Competition is on the
                  high side and one of the ways to stand out is through a
                  strategically optimized website for your target audience.
                  <br /> <br />
                  We build highly responsive websites that meet all our clients
                  target audience and their needs
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 2
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Mobile App Development</h2>
                <p className="service-par">
                  Users interact more with the web through mobile devices.
                  Statistics of mobile users have grown significantly.
                  Therefore, businesses have evolved and have been optimized to
                  reach more of these users.
                  <br />
                  Need a mobile app for your project?
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 3
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Graphics Design</h2>
                <p className="service-par">
                  Create beautiful and interactive designs to communicate your
                  brand, messages or ideas to your target audience. Graphics are
                  used in almost all aspects of our personal or business lives.{" "}
                  <br /> Strategic designs grow audience engagement by over 70%
                  over text as they are over easily processed by the users’
                  brain. This is one of the benefits of visual communication{" "}
                  <br />
                  Tell us your idea, and we give you the best design to
                  represent your idea. Also need them printed? We offer the best
                  quality print service to our customers.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 4
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Prints Services</h2>
                <p className="service-par">
                  Use our Printing Services to complete your printing needs on
                  time, with fast delivery. We produce and deliver quality
                  results. We offer Delivery Services on Prints Nationwide.
                  <br />
                  Services: Brochure Printing, Corporate Printing, Full
                  Corporate Branding, Signage, All forms of Customizing, and
                  lots more.
                  <br />
                  Talk to us today, and tell us your demands. We will serve you
                  the best.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 5
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Digital Marketing</h2>
                <p className="service-par">
                  Digital Marketing has greatly evolved in 2021. Most businesses
                  are now conducted online and this has significantly increased
                  the number of competition for sales growth. Properly planned
                  marketing techniques are required to ensure profitability. We
                  ensure this through our contents (copywriting), SEO, social
                  media marketing techniques, display ads, graphics, video and
                  other.
                  <br />
                  Have a Project? Tell us! We will ensure to deliver the result
                  you desire.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 6
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Project Management</h2>
                <p className="service-par">
                  Lack of project management usually leads to failure. But your
                  project should not fail.
                  <br />
                  We can help streamline your project management activities from
                  pre-project planning to post-project review to get efficient
                  results.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 7
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">
                  Data Science and Machine Learning
                </h2>
                <p className="service-par">
                  Discover how data science, data analytics, machine learning
                  and artificial intelligence are shaping the future. We conduct
                  thorough research into through computer technology, simulation
                  and market management to predict successful outcomes.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 8
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Video Editing</h2>
                <p className="service-par">
                  Videos top the trend as the best marketing tool to deliver to
                  your target audience. <br />
                  We capture, manipulate, arrange our videos to present
                  efficiently to the needs of the target audience.
                  <br />
                  Let’s talk about your project. Order below to get a quote.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 9
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Cyber Security</h2>
                <p className="service-par">
                  We align Cyber Security with Digital Transformation:
                  Protecting Global Networks, Digital Platforms, and your Most
                  Valuable Enterprise Data across the World.{" "}
                </p>
                <p className="more-info mb-3 ">
                  <strong>We provide expert services on:</strong>
                  <br />
                  Secure Monitoring; <br />
                  Compliance and Audit; <br /> Incidents Response; and <br />{" "}
                  Penetration Testing.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 10
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">Blockchain</h2>
                <p className="service-par">
                  Right now, visionary companies are coming together to
                  transform the way their industries work with the help of
                  Blockchain. Enable trusted data exchange and workflow beyond
                  the boundaries with distributed ledger technology and
                  Blockchain.
                  <br />
                  We develop and provide blockchain technology services that
                  help you materialize your ideas into sustainable business
                  models.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 11
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">IT Consulting</h2>
                <p className="service-par">
                  We give expert Information Technology related advices to
                  businesses and organizations on how best to use Information
                  Technology in achieving or promoting their objectives.
                  <br /> <br />
                  Start a project and we shall schedule a session for you.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>

              <div
                className={
                  serviceToggle === 12
                    ? "webDevelopment cont-right-service-div"
                    : "service-display"
                }
                id="serve-div-a"
              >
                <h2 className="service-h2">IT Training</h2>
                <p className="service-par">
                  We build the next generation of expert in various skills in
                  order to drive economies. <br />
                  We don't just conduct trainings on the particular skill alone,
                  we also expose our graduates to various ways to either start
                  their own businesses, apply properly for jobs, learn to
                  freelance properly, and we also outsource our best students to
                  companies with high paying salaries for their skills.
                </p>
                <p className="serv-learn-m-btn">
                  {" "}
                  <a className="hvr-bounce-to-right" href="/portfolio">
                    Learn more{" "}
                    <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                  </a>
                </p>
              </div>
            </div>
            
          </div>


        </div>
      </div>
    </div>
  );
}
