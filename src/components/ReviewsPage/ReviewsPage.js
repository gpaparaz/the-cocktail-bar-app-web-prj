import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import info from "../../utils/info.json";
import style from "./reviewsPage.css";

const ReviewsPage = ({ reviewsPerPage }) => {
  // Lista di recensioni (questo potrebbe essere recuperato da una fonte dati)
  const allReviews = info.reviews;

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
    <div>
      <div className="contentReviewsPage">
        {currentReviews.map((review) => (
          <Reviews
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
                        ? "btn btn-primary currentPage"
                        : "btn btn-primary"
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
