import React from "react";
import Coktail from "../Cocktail/Cocktail";
import style from "./cocktails.css";

const Cocktails = ({ data, count }) => {
  return (
    <>
      <p>Item disponibili: {count}</p>
      <div className="cocktails-card">
        {data.map((el) => {
          return <Coktail key={el.idDrink} {...el} />;
        })}
      </div>
    </>
  );
};

export default Cocktails;
