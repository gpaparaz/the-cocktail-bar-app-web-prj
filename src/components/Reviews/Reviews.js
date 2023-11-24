import React from "react";
import style from "./reviews.css";
import user from "../../assets/image/user.png";
import { BsFillStarFill } from "react-icons/bs";

const Reviews = ({ review, showUserAvatar, isFullWidth }) => {
  const starsArray = new Array(review.stars).fill(null);

  return (
    <div className={ isFullWidth ? "d-flex flex-column review card my-5" : "d-flex flex-column review card mx-3 cardWidth mx-3" }>
      <div className="d-flex align-items-center">
        {showUserAvatar ? <img src={user} className="userReview" /> : null}
        <div className="flex-column mx-3">
          <div className="d-inline">
            {starsArray.map((_, index) => (
              <BsFillStarFill key={index} color="goldenrod"/>
            ))}
          </div>
          <p className="mt-2">{review.date}</p>
          <p className="mt-2">{review.name}</p>
          <h5>{review.title}</h5>
          <h6>{review.content}</h6>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
