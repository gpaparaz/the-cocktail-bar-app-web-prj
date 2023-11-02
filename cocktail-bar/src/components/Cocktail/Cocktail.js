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
      <div onClick={() => goToCocktail(_id)}
        className='img'
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="card-text container"
      >
        <h5>{name}</h5>
        <div
          className='see-more-btn brand-color'          
        >
          <h5>Ricetta</h5>
          <HiClipboardList className='icon ' />
        </div>
      </div>
      <div className='card-text-sm container'>
        <h5>{name}</h5>
        <div
          className='see-more-btn brand-color'
          onClick={() => goToCocktail(_id)}
        >
          <h5>Ricetta</h5>
          <HiClipboardList className='icon ' />
        </div>
      </div>
      </div>
  );
};

export default Cocktail;