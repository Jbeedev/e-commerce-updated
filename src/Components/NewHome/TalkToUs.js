import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const TalkToUs = () => {
  return (
    <div>
      <div className="cont-mind-project text-center mr-3 ml-3">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeInLeft"
        >
          <h4
            className="h4-project-port wow animate__fadeInLeft"
            data-wow-duration=".5s"
          >
            {" "}
            Have Any Project in Mind{" "}
          </h4>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeInRight"
        >
          <p
            className="p-project-port wow animate__fadeInRight"
            data-wow-duration=".5s"
          >
            Get in Touch with Us Today
          </p>
        </AnimationOnScroll>
        <div className="text-center mt-5">
          <Link
            to="/contact"
            className="talk-to-box hvr-bounce-to-right wow animate__fadeInUp"
            data-wow-duration="2s"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
