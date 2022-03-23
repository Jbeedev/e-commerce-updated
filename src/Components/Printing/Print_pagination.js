import { Link } from "react-router-dom";
import { useState } from "react";
import "./Product_Category";

import Printservice1 from "../assets/Images/Printing-Services.png";
import Printservice2 from "../assets/Images/Calendar.png";
import Printservice3 from "../assets/Images/banner-image.jpg";
import Printservice4 from "../assets/Images/business-card.png";
import Printservice5 from "../assets/Images/vehicle-branding-images.png";
import Printservice6 from "../assets/Images/carrier-bags.jpg";
import Printservice8 from "../assets/Images/banner-image.jpg";
import Printservice10 from "../assets/Images/vehicle-branding-images.png";
import Printservice11 from "../assets/Images/Bottle.png";
import Printservice12 from "../assets/Images/hard-cover-notepad.jpg";
import Printservice13 from "../assets/Images/Printing-Services.png";
import Tool1 from "../assets/Images/Tenplus Partners 01.png";
import Tool2 from "../assets/Images/aws.png";
import Tool3 from "../assets/Images/Asana-logo.png";
import Tool4 from "../assets/Images/FB.png";
import Tool5 from "../assets/Images/Tenplus Partners 03.png";
import Product1 from "../assets/Images/banner-image.jpg";
import Product2 from "../assets/Images/t-shirt-design.jpg";
import Product3 from "../assets/Images/Bill-board.png";
import Product4 from "../assets/Images/vehicle-branding-images.png";
import Product5 from "../assets/Images/hard-cover-notepad.jpg";
import Product6 from "../assets/Images/id-card.jpg";
import Product7 from "../assets/Images/Bottle.png";
import Product8 from "../assets/Images/business-card.png";
import Product9 from "../assets/Images/carrier-bags.jpg";
import ReactPaginate from "react-paginate";

const PrintPagination = () => {
    
  const [productLists, setProductLists] = useState([
    { title: "Product", image: Printservice10, id: 1 },
    { title: "Banner", image: Printservice8, id: 2 },
    { title: "Product", image: Printservice5, id: 3 },
    { title: "Product", image: Printservice6, id: 4 },
    { title: "Product", image: Printservice5, id: 5 },
    { title: "Product", image: Printservice4, id: 6 },
    { title: "Product", image: Printservice3, id: 7 },
    { title: "Product", image: Printservice2, id: 8 },
    { title: "Product", image: Printservice1, id: 9 },
    { title: "Product", image: Printservice8, id: 10 },
    { title: "Product", image: Printservice11, id: 11 },
    { title: "Product", image: Printservice12, id: 12 },
    { title: "Product", image: Printservice13, id: 13 },
  ]);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 3;
  const pagesVisited = pageNumber * productPerPage;

  const displayUsers = productLists
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((product) => (
      <div class="col-md-3 offset-md-1 popular-back" key={product.id}>
        <Link to="/products">
          <div class="item">
            <img
              src={product.image}
              class="popular-pro-img img-responsive hvr-grow "
              height="200px"
              id="myImg"
              alt="Banner"
            />
          </div>
          <p class="hvr-forward">
            {" "}
            <Link to="/products">{product.title}</Link>{" "}
            <i class="fa fa-arrow-circle-right  px-2"></i>{" "}
          </p>
        </Link>
      </div>
    ));

  const pagecount = Math.ceil(productLists.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div>
        <div class="aj-slide ">
          <div class="caro-print homepage-slide">
            <img src={Printservice1} alt="web development company in nigeria" />
            <div class="print-banner-section">
              <div class="col-md-12 col-sm-12">
                <h6 class="print-p1">
                  discover the fastest, <br /> most effective way <br /> to get
                  experts for your needs{" "}
                </h6>
                <div class="print-banner-buttons">
                  <a
                    href="order"
                    class="print-request hvr-bounce-to-right  mr-3"
                  >
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
      </div>

      {/* <!-- Landing Slides --> */}

      {/* <!--Carousel Wrapper--> */}
      <div class="printing-carousel mb-5">
        <div
          id="multi-item-example"
          class=" container carousel slide carousel-multi-item "
          data-ride="carousel"
        >
          {/* <!--Slides--> */}
          <div class="carousel-inner text-center" role="listbox">
            {/* <!--First slide--> */}

          
            {/* <!--Second slide--> */}
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-2 ">
                  <div class="mb-2">
                    <img
                      class="popular-product-img"
                      src={Printservice6}
                      alt=""
                    />
                    <p class="hvr-forward pr-pop-product ">
                      <a href="#">Product</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/.Second slide--> */}

            {/* <!--Third slide--> */}
            <div class="carousel-item">
              <div class="row text-center"></div>
            </div>
            {/* <!--/.Third slide--> */}
          </div>
          {/* <!--/.Slides--> */}

          {/* <!--Controls--> */}

          {/* <!--/.Controls--> */}
        </div>
      </div>
      {/* <!--/.Carousel Wrapper--> */}

      {/* <!-- partners --> */}

      {/* <!-- popular product --> */}

      {/* <!-- popup modal --> */}

      {/* <!-- The Modal --> */}

      <div class="container">
        <div class="row">
          <div class="text-center col-md-12 mb-5">
            <h4 class="why-you-choose hvr-underline-from-center mb-1">
              Product Category
            </h4>
          </div>

          {displayUsers}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pagecount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>

      {/* <!-- testimonial --> */}

      {/* <!-- testimonial --> */}

      {/* <!-- partners --> */}

      {/* <!-- partners --> */}
    </div>
  );
};

export default PrintPagination;
