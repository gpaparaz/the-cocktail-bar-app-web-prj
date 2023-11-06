import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiClipboardList } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import style from "./cocktail.css";

const Cocktail = ({ strDrinkThumb: img, idDrink: _id, strDrink: name }) => {
  const navigate = useNavigate();

  const goToCocktail = (_id) => {
    navigate(`/cocktail/${_id}`);
  };

  return (
    <div className="single-cocktail">
      <div
        className='img'
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="card-text container" onClick={() => goToCocktail(_id)}
      >
        <h5 className="fw-bold">{name}</h5>
        
      </div>
      
      </div>
  );
};

export default Cocktail;