import React from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";

const WhyChooseUs = () => {
  return (
    <div>
        <div className="cont-choose-w mr-3 ml-3">
        <div className="text-center">
          <AnimationOnScroll
            animateIn="animate__fadeInRigh"
            animateOut="animate__fadeInRight"
          >
            <h2
              className="why-you-choose hvr-underline-from-center wow animate__fadeInDown"
              data-wow-duration="4s"
              data-wow-delay="0.1s"
            >
              WHY CHOOSE US
            </h2>
          </AnimationOnScroll>
        </div>

        <div className="container_choose">
          <div className="row">
            <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeInLeft"
              >
                <p
                  className="wow animate__fadeInLeft"
                  data-wow-duration=".2s"
                  data-wow-delay="0s"
                >
                  {" "}
                  <i className="fa fa-long-arrow-right h-arrow-rt  fa-lg"></i>
                  Attention to Project Details
                </p>
              </AnimationOnScroll>
            </div>
            <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeInLeft"
              >
                <p
                  className="wow animate__fadeInRight"
                  data-wow-duration=".2s"
                  data-wow-delay="0s"
                >
                  {" "}
                  <i className="fa fa-long-arrow-right h-arrow-rt fa-lg"></i>
                  Innovation and Creativity
                </p>
              </AnimationOnScroll>
            </div>
            <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeInLeft"
              >
                <p
                  className="wow animate__fadeInLeft"
                  data-wow-duration=".2s"
                  data-wow-delay="0s"
                >
                  {" "}
                  <i className="fa fa-long-arrow-right h-arrow-rt  fa-lg"></i>
                  Affordable Pricing
                </p>
              </AnimationOnScroll>
            </div>
            <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
              <AnimationOnScroll
                animateIn="animate__fadeInRigh"
                animateOut="animate__fadeInRight"
              >
                <p
                  className="wow animate__fadeInRight"
                  data-wow-duration=".2s"
                  data-wow-delay="0s"
                >
                  {" "}
                  <i className="fa fa-long-arrow-right h-arrow-rt fa-lg"></i>
                  Plan For success
                </p>
              </AnimationOnScroll>
            </div>
            <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
              <AnimationOnScroll
                animateIn="animate__fadeInRigh"
                animateOut="animate__fadeInRight"
              >
                <p
                  className="wow animate__fadeInLeft"
                  data-wow-duration=".2s"
                  data-wow-delay="0s"
                >
                  {" "}
                  <i className="fa fa-long-arrow-right h-arrow-rt  fa-lg"></i>
                  Expert Delivery
                </p>
              </AnimationOnScroll>
            </div>
            <div className="col-sm-12 col-md-5 offset-md-1 container-box-w">
              <AnimationOnScroll
                animateIn="animate__fadeInRigh"
                animateOut="animate__fadeInRight"
              >
                <p
                  className="wow animate__fadeInRight"
                  data-wow-duration=".2s"
                  data-wow-delay="0s"
                >
                  {" "}
                  <i className="fa fa-long-arrow-right h-arrow-rt fa-lg"></i>
                  Deliver on Schedule
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default WhyChooseUs