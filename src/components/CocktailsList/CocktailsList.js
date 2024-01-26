import React from "react";
import "./cocktailsList.css";
import { useNavigate } from "react-router-dom";
const CocktailsList = ({ data = [] }) => {
  const navigate = useNavigate();

  const goToCocktail = (_id) => {
    navigate(`/cocktail/${_id}`);
  };

  return (
    <div className="cocktails-list">
      {data.map((el) => {
        return (
          <>
            <div className="d-flex flex-inline align-items-center cocktailList">
              <div
                className="imageList"
                style={{
                  backgroundImage: `url(${el.strDrinkThumb})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="px-4">

                <h3>{el.strDrink}</h3>
                <button className="btn btn-outline-primary mt-2" onClick={() => goToCocktail(el.idDrink)}>Scopri di più</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CocktailsList;
