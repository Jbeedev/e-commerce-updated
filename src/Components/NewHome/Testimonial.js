import React from "react";

import Testimonial1 from "../assets/Images/Testimonial001.png";
import Testimonial2 from "../assets/Images/Testimonial.png";
import Testimonial3 from "../assets/Images/Testimonial01.png";

const Testimonial = () => {
  return (
    <div>
      <div className="container_testimonial ">
        <div className="text-center mt-5">
          <h2 className="why-you-choose hvr-underline-from-center">
            Testimonial
          </h2>
        </div>
        <div className="row pt-3 ml-3">
          <div className="col-sm-6 col-md-4">
            <div className="card mr-3 pb-3">
              <div className="mt-2">
                {" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>
                <span className="fa fa-star active-star"></span>{" "}
              </div>
              <div className="main head-review pb-2 pt-1">Great Service</div>
              <div className="testimonial">
                {" "}
                “TenPlus Digital Labs has been of such a tremendous help in
                getting us focused more on our marketing and advertising plans.
                I highly recommend TenPlus and their outstanding team on any
                work related to business promotion."{" "}
              </div>
              <div className="d-flex flex-row profile pt-4 mt-auto">
                <img src={Testimonial1} alt="" className="rounded-circle" />
                <div className="d-flex flex-column pl-2">
                  <div className="name">Adekunle </div>
                  <p className="text-muted designation">
                    CEO of Brand O Textiles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6  col-md-4">
            <div className="card mr-3 pb-3">
              <div className="mt-2">
                {" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
              </div>
              <div className="main head-review pb-2 pt-1">Great Service</div>
              <div className="testimonial">
                {" "}
                “At first, I was skeptical about the need to create a website. I
                later figured out of many different ways to monetize my website,
                and add to my revenue, all thanks to TenPlus Digital Labs. They
                are good at what they do."{" "}
              </div>
              <div className="d-flex flex-row profile pt-4 mt-auto">
                {" "}
                <img src={{ Testimonial2 }} alt="" className="rounded-circle" />
                <div className="d-flex flex-column pl-2">
                  <div className="name">Abdulkareem Age</div>
                  <p className="text-muted designation">
                    CEO of Great Olms Apartment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6  col-md-4">
            <div className="card mr-3 pb-3">
              <div className="mt-2">
                {" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>{" "}
                <span className="fa fa-star active-star"></span>
                <span className="fa fa-star active-star"></span>{" "}
              </div>
              <div className="main head-review pb-2 pt-1">Great Service</div>
              <div className="testimonial">
                {" "}
                “I have learnt a lot from the founder of the company for some
                years now, and I can tell his company was built for success even
                before taking my latest project to him. And as usual, he and his
                team did excellently well in designing and printing all the
                materials for my wedding."{" "}
              </div>
              <div className="d-flex flex-row profile pt-4 mt-auto">
                {" "}
                <img src={Testimonial3} alt="" className="rounded-circle" />
                <div className="d-flex flex-column pl-2">
                  <div className="name">Toria Ubani</div>
                  <p className="text-muted designation">CEO of Tee Fashion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial
