import React, { useState, Fragment } from "react";
import Review from "../Review/Review";
import info from "../../utils/info.json";
import "./reviewsPage.css";

const ReviewsPage = () => {
  const allReviews = info.reviews;
  const reviewsPerPage = 4;

  // Stato per tenere traccia della pagina corrente
  const [currentPage, setCurrentPage] = useState(1);

  // Calcola l'indice di inizio e fine per le recensioni nella pagina corrente
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = allReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  // Funzione per cambiare pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="contentReviewsPage">
        {currentReviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            showUserAvatar={true}
            isFullWidth={true}
          />
        ))}
      </div>

      <div className="d-flex justify-content-center">
        {allReviews.length > reviewsPerPage && (
          <ul className="pagination">
            {Array(Math.ceil(allReviews.length / reviewsPerPage))
              .fill(null)
              .map((_, index) => (
                <li key={index} onClick={() => paginate(index + 1)}>
                  <button
                    className={
                      currentPage === index + 1
                        ? "btn btn-primary mx-1 currentPage"
                        : "btn btn-primary mx-1"
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default ReviewsPage;
