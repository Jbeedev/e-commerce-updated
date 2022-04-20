import React from "react";
import { useState } from "react";
import WhyChooseUs from "../NewHome/WhyChooseUs";
import Testimonial from "../NewHome/Testimonial";
import WorldMap from "../assets/Images/word-map-globe-tenplus.png";
import ImgImg6 from "../assets/Images/app-logo-type.png";
import StoreImg from "../assets/Images/Printing-Services.png";
import "./Web.css";

const DigitalMkt = () => {
  const [serviceToggle, setServiceToggle] = useState(1);

  const handleClick = (index) => {
    setServiceToggle(index);
  };
  const [services, setServices] = useState([
    {
      title: "Web Development",
      details1:
        "The benefit of owning a website today cannot be overemphasized. Website have grown to be one of the trusted tools to drive businesses and brands. Competition is on the high side and one of the ways to stand out is through a strategically optimized website for your target audience.",
      details2:
        "We build highly responsive websites that meet all our client target audience and their needs",
      button: "Learn more",
      id: 1,
    },
    {
      title: "Mobile App Development",
      details1:
        "Users interact more with the web through mobile devices. Statistics of mobile users have grown significantly. Therefore, businesses have evolved and have been optimized to reach more of these users.",
      details2: "Need a mobile app for your project?",
      button: "Learn more",
      id: 2,
    },
    {
      title: "Graphics Design",
      details1:
        "Create beautiful and interactive designs to communicate your brand, messages or ideas to your target audience. Graphics are used in almost all aspects of our personal or business lives.",
      details2:
        "Strategic designs grow audience engagement by over 70% over text as they are over easily processed by the users brain. This is one of the benefits of visual communication",
      details3:
        "Tell us your idea, and we give you the best design to represent your idea. Also need them printed? We offer the best quality print service to our customers.",
      button: "Learn more",
      id: 3,
    },

    {
      title: "Print Services",
      details1:
        "Use our Printing Services to complete your printing needs on time, with fast delivery. We produce and deliver quality results. We offer Delivery Services on Prints Nationwide.",
      details2:
        "Services: Brochure Printing, Corporate Printing, Full Corporate Branding, Signage, All forms of Customizing, and lots more.",
      details3:
        "Talk to us today, and tell us your demands. We will serve you the best.",
      button: "Learn more",
      id: 4,
    },

    {
      title: "Digital Marketing",
      details1:
        "Digital Marketing has greatly evolved in 2021. Most businesses are now conducted online and this has significantly increased the number of competition for sales growth. Properly planned marketing techniques are required to ensure profitability. We ensure this through our contents (copywriting), SEO, social media marketing techniques, display ads, graphics, video and other.",
      details2:
        "Have a Project? Tell us! We will ensure to deliver the result you desire.",
      button: "Learn more",
      id: 5,
    },

    {
      title: "Project Management",
      details1:
        "Lack of project management usually leads to failure. But your project should not fail.",
      details2:
        "We can help streamline your project management activities from pre-project planning to post-project review to get efficient results.",
      button: "Learn more",
      id: 6,
    },
    {
      title: "Data Science and Machine Learning",
      details1:
        "Discover how data science, data analytics, machine learning and artificial intelligence are shaping the future. We conduct thorough research into through computer technology, simulation and market management to predict successful outcomes.",
      button: "Learn more",
      id: 7,
    },

    {
      title: "Video Editing",
      details1:
        "Videos top the trend as the best marketing tool to deliver to your target audience.",
      details2:
        "We capture, manipulate, arrange our videos to present efficiently to the needs of the target audience.",
      details3: " Let’s talk about your project. Order below to get a quote.",
      button: "Learn more",
      id: 8,
    },

    {
      title: "Cyber Security",
      details1:
        "We align Cyber Security with Digital Transformation: Protecting Global Networks, Digital Platforms, and your Most Valuable Enterprise Data across the World.",
      details2:
        "We provide expert services on: Secure Monitoring; Compliance and Audit; Incidents Response; and Penetration Testing.",
      details3:
        " Secure Monitoring; Compliance and Audit; Incidents Response; and Penetration Testing.",
      button: "Learn more",
      id: 9,
    },
    {
      title: "Block Chain",
      details1:
        "Right now, visionary companies are coming together to transform the way their industries work with the help of Blockchain. Enable trusted data exchange and workflow beyond the boundaries with distributed ledger technology and Blockchain.",
      details2:
        " We develop and provide blockchain technology services that help you materialize your ideas into sustainable business models.",
      button: "Learn more",
      id: 10,
    },
    {
      title: "IT Consulting",
      details1:
        "We give expert Information Technology related advices to businesses and organizations on how best to use Information Technology in achieving or promoting their objectives.",

      details2: "Start a project and we shall schedule a session for you.",
      button: "Learn more",
      id: 11,
    },
    {
      title: "IT Training",
      details1:
        "We build the next generation of expert in various skills in order to drive economies.",
      details2:
        " We don't just conduct trainings on the particular skill alone, we also expose our graduates to various ways to either start their own businesses, apply properly for jobs, learn to freelance properly, and we also outsource our best students to companies with high paying salaries for their skills.",
      button: "Learn more",
      id: 12,
    },
  ]);
  return (
    <div>
      <div class="aj-slide ">
        <div class="caro-print homepage-slide">
          <img src={StoreImg} alt="web development company near me" />

          <div class="print-banner-section">
            <div class="col-md-12 col-sm-12">
              <h6 class="print-p1">
                discover the fastest, <br /> most effective way <br /> to get
                experts for your needs{" "}
              </h6>
              <div class="print-banner-buttons">
                <a href="order" class="print-request hvr-bounce-to-right  mr-3">
                  REQUEST A QUOTE
                </a>
                <a href="contact" class="print-contact hvr-bounce-to-right  ">
                  LET'S TALK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <div className="cont-right-service-div1">
              {services.map((service) => (
                <div
                  className="webDevelopment cont-right-service-div"
                  className={
                    serviceToggle === 1
                      ? "webDevelopment cont-right-service-div"
                      : "service-display"
                  }
                  id="serve-div-a"
                  key={service.id}
                >
                  <h2 className="service-h2">{service.title}</h2>
                  <p className="service-par">
                    {service.details1}
                    <br /> <br />
                    {service.details2}
                    <br />
                    {service.details3}
                  </p>
                  <p className="serv-learn-m-btn">
                    {" "}
                    <a className="hvr-bounce-to-right" href="/portfolio">
                      {service.button}{" "}
                      <i className="fa fa-arrow-circle-right  pl-2"></i>{" "}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <Testimonial />
      </div>
    </div>
  );
};

export default DigitalMkt;
