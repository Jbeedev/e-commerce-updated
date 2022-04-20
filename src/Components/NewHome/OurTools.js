import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './OurTools.css'
import ToolsImg1 from "../assets/Images/Tenplus Partners 01.png";
import ToolsImg3 from "../assets/Images/aws.png";
import ToolsImg4 from "../assets/Images/FB.png";
import ToolsImg5 from "../assets/Images/Tenplus Partners 03.png";
import ToolsImg6 from "../assets/Images/TEF.png";
import ToolsImg7 from "../assets/Images/PICK BOOK LOGO.png";
import ToolsImg8 from "../assets/Images/Link.png";
import ToolsImg9 from "../assets/Images/Tenplus Partners 02.png";
import ToolsImg13 from "../assets/Images/twitter.png";
import ToolsImg14 from "../assets/Images/IG.png";
import ToolsImg15 from "../assets/Images/Titok.png";

function OurTools() {
    const toolsSettings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "1%",
          slidesToShow: 6,
          speed: 500,
          autoplay: true,
          pauseOnHover: false,
      }

  return (
    <div>
      <div className="container-fluid">
        <div className="text-center mt-3">
          <h2 className="why-you-choose hvr-underline-from-center">
            Our Tools
          </h2>
        </div>
        <div class="container-fluid">
          <section className="customer-logos imgr">
            {/* <Marquee style={{ backgroundColor: "white", speed: "0.9s" }}> */}
            <Slider
              {...toolsSettings}
              
            >
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="web development company near me"
                  src={ToolsImg1}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="web development company near me"
                  src={ToolsImg7}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="web development company near me"
                  src={ToolsImg3}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="web development company near me"
                  src={ToolsImg4}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing agency in nigeria"
                  src={ToolsImg5}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing agency in nigeria"
                  src={ToolsImg6}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="software engineer in nigeria"
                  src={ToolsImg7}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="software engineer in nigeria"
                  src={ToolsImg8}
                  
                />
              </div>

              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing agency in nigeria"
                  src={ToolsImg9}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing software companies"
                  src={ToolsImg1}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing software companies"
                  src={ToolsImg4}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing software companies"
                  src={ToolsImg8}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing software companies"
                  src={ToolsImg13}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing agency in nigeria"
                  src={ToolsImg14}
                  
                />
              </div>
              <div className="logo_imgr" style={{ width: "128px",}}>
                <img
                  className="img1"
                  alt="digital marketing agency in nigeria"
                  src={ToolsImg15}
                  
                />
              </div>
            </Slider>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OurTools;
