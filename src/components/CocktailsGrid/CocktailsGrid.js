import React from "react";
import Coktail from "../Cocktail/Cocktail";
import "./cocktailsGrid.css";
import clsx from "clsx";

/* con data = [] utilizzo un default props */

const CocktailsGrid = ({isFullWidth, data = []}) => {

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

export default CocktailsGrid;
