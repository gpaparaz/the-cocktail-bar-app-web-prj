import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./cocktail.css";
import clsx from "clsx";
const Cocktail = ({ strDrinkThumb: img, idDrink: _id, strDrink: name, isFullWidth }) => {
  const navigate = useNavigate();

  const goToCocktail = (_id) => {
    navigate(`/cocktail/${_id}`);
  };

  return (
    <div 
    className={clsx({"single-cocktail": !isFullWidth, "single-cocktail-fullWidth" : isFullWidth})}
    >
      <div 
      className={clsx({"img rounded": !isFullWidth, "img" : isFullWidth})}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div 
      className={clsx({"card-text container rounded": !isFullWidth, "card-text container" : isFullWidth})}
      onClick={() => goToCocktail(_id)}
      >
        <h5 className="fw-bold">{name}</h5>
        
      </div>
      
      </div>
  );
};

export default Cocktail;