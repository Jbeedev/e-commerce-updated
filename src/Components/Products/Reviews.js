import { useState } from "react";
import ReactPaginate from 'react-paginate';



const Reviews = ({ reviews }) => {
  const [pagenumber, setPagenumber] = useState(0);
 
  const reviewPerPage = 3;
  const reviewPageVisited = pagenumber * reviewPerPage;

  const displayReviews = reviews
    .slice(reviewPageVisited, reviewPageVisited + reviewPerPage)
    .map((review) => (
      <div key={review.id}>
        <div>
          <i class="las la-star"></i>
          <i class="las la-star"></i>
          <i class="las la-star"></i>
          <i class="las la-star"></i>
          <i class="las la-star"></i>
        </div>
        <div>
          <p>{review.product}</p>
          <p>{review.message}</p>
          <p>22-3-2022 by {review.user}</p>
        </div>
        <hr />
      </div>
    ));

    const pagelist = Math.ceil(reviews.length / reviewPerPage);
    const flipPage = ({ selected }) => {
      setPagenumber(selected);
    }

    
    
  return (
    <div>
      {displayReviews}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pagelist}
            onPageChange={flipPage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
    </div>
  );
};

export default Reviews;
