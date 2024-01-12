import React from "react";
import Coktail from "../Cocktail/Cocktail";
import "./cocktails.css";
import clsx from "clsx";

const Cocktails = ({data, isFullWidth}) => {

  return (
    <>
      <div className={clsx({"cocktails-card": !isFullWidth, "cocktail-card-fullWidth" : isFullWidth})}>
        {data.map((el) => {
          return <Coktail key={el.idDrink} {...el} isFullWidth={isFullWidth} />;
        })}
      </div>
    </>
  );
};

export default Cocktails;
