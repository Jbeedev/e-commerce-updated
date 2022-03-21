// import { Link } from 'react-router-dom'
import "./Test.css";
import { useState } from "react";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideImg1 from "../assets/Images/TenPlus_Banner02.png";
import SlideImg2 from "../assets/Images/TenPlusBanner002.png";
import SlideImg3 from "../assets/Images/TenPlus_Banner02.png";
import SlideImg4 from "../assets/Images/TenPlus-Banner-003.png";

const Test = () => {
  const [count, setCount] = useState(30000);
  const [designTxt, setDesignTxt] = useState('');
  const [quantityTxt, setQuantityTxt] = useState(0);
  const [select, setSelect] = useState(30000);
  const [total, setTotal] = useState(0);

  const setDesign = (val) => {
    setDesignTxt(val);
  };
  const increasecountHandle = () => {
    let count = 30000;
    setCount(count + 10000);
  };
  const decreasecountHandle = () => {
    //
    let count = 30000;
    setCount(count + 20000);
  };

  // Add to cart logic with select
const [thichnessPrice, setThicknessPrice] = useState(0);

  const addCartHandle = (e) => {
    const defPrice = 30000;
    setSelect(parseInt(e.target.value) + defPrice);
    // setTotal(parseInt(select) + parseInt(designTxt));

    // const a = parseInt(e.target.value);
    // setThicknessPrice(parseInt(e.target.value));
    setThicknessPrice(parseInt(e.target.value));
    
  };
  const [quantityValue, setQuantityValue] = useState(0)

  const [change, setChange] = useState(100);

  const quantityHandle = (selected) => {
    let selectedTxt = selected.options[selected.selectedIndex].text;
    setQuantityTxt(selectedTxt.split(" - ")[1]);

    setQuantityValue(parseInt(selected.options[selected.selectedIndex].value));

  };

console.log(quantityValue);


  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div class=" col-md-4 text-center ms-auto">
        <p>{count}</p>
        <button class="btn-info btn-block" onClick={increasecountHandle}>
          100 - 200{" "}
        </button>
        <button class="btn-info btn-block" onClick={decreasecountHandle}>
          201 - 300{" "}
        </button>
      </div>
      <br />
      <h1>{change}</h1>
      <div class="text-center">
        <select class="form-control readers" id="readers" onChange>
          <option data-price="0" value="" selected>
            100mm
          </option>
          <option data-price="2000" value="">
            200mm
          </option>
          <option data-price="3000" value="">
            300mm
          </option>
          <option data-price="4000" value="">
            400mm
          </option>
        </select>
        {/* <select value={change} onChange={changeHandle}>
      <option value="0"></option>
      <option value="10">1 - 2</option>
      <option value="30">Man</option>
      <option value="40">Ban</option> */}
        {/* <option data-price="0" value="" selected >100mm</option>
      <option data-price="2000" value="" >200mm</option>
      <option data-price="3000" value="" >300mm</option>
      <option data-price="4000" value="" >400mm</option> */}
        {/* </select> */}
      </div>
      +
      <br />
      <select class="col-md-6 custom-select m-5" onChange={addCartHandle}>
        <option value="0">Select</option>
        <option value="10000">100mm</option>
        <option value="20000">200mm</option>
        <option value="30000">300mm</option>
      </select>
      <label htmlFor="">Choose Quantity</label>
      <select
        class="custom-select custom-select-sm mb-3"
        onChange={(e) => quantityHandle(e.target)}
      >
        <option value="0">Select</option>
        <option value="1000">1 - 20</option>
        <option value="2000">21 - 40</option>
        <option value="3000">41 - 50</option>
        <option value="4000">51 - 60</option>
      </select>
      <h3 class="text-center">
        <h1>{select}</h1>
        <br /> {quantityTxt} / {quantityValue} /{thichnessPrice}
        <p>{select + quantityValue + thichnessPrice}</p>
      </h3>
      <br />
      <br />
      <br />
      <br />
      <div class="row col-md-6 offset-md-3">
        <form action="" method="post">
          <div class="form-group mt-3">
            <label for="design">
              <h5> Do you have a design?</h5>
            </label>
            <select
              class="form-control custom-select"
              id="design101"
              onChange={(e) => setDesign(e.target.value)}
            >
              <option>Select</option>
              <option value="yes-design">Yes</option>
              <option value="design-for-me">No (Design for me)</option>
              {/* <option value="design-for-me">Check out</option> */}
            </select>

            <div class="row">
              <div class="col-md-8">
                {designTxt === "yes-design" && (
                  <>
                    <input
                      type="file"
                      class="form-control mt-3 "
                      id="upload-file-p"
                    />
                    <div id="upload-file-p" class="ml-1 mt-3">
                      <p>
                        <i class="far fa-check-circle mr-2"></i>Upload your
                        design
                      </p>
                      <p>
                        <i class="far fa-check-circle mr-2"></i>Your file should
                        not be more than (200mb)
                      </p>
                    </div>
                  </>
                )}

                {designTxt === "design-for-me" && (
                  <>
                    <div class="col-md-12">
                      <textarea
                        name=""
                        class=" form-control mt-3"
                        id="design-for-me"
                        cols="30"
                        rows="10"
                        placeholder="(1) Tell us about your Business. (2) Describe design
                          specification."
                      ></textarea>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div class=" mt-4 d-none">
            <button
              class="add-to-cart-box add-to-cart hvr-bounce-to-right mr-2"
              data-name="Shirt"
              data-price="1.22"
              type="submit"
            >
              Add to cart
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container slide-home">
        <div>
          <h2>Fade</h2>
          <Slider {...settings}>
            <div>
              <img src={SlideImg1} />
            </div>
            <div>
              <img src={SlideImg2} />
            </div>
            <div>
              <img src={SlideImg3} />
            </div>
            <div>
              <img src={SlideImg4} />
            </div>
          </Slider>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Test;
