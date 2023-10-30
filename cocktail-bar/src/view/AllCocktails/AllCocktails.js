import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import style from './allcocktails.css';
import clsx from 'clsx';

const AllCocktails = () => {
  const { data, isLoading, isError, searchCocktail, query, count } =
    useGlobalContext();
  const [input, setInput] = useState(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };
  const [displayGrid, setDisplayGrid] = useState("true");

  return (
    <div className="d-flex">
      <div className="col-3 p-3 mb-2 filters">lista di filtri</div>

      <div className="col-sm-9 p-3 content-products">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className={style.switch}>
                <div
                  className={clsx(style.option, {
                    [style.active]: displayGrid,
                  })}
                  onClick={() => setDisplayGrid(true)}
                >
                  Grid
                </div>

                <div
                  className={clsx(style.option, {
                    [style.active]: !displayGrid,
                  })}
                  onClick={() => setDisplayGrid(false)}
                >
                  Table
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col">
              {displayGrid ? (
                <p> lista di pokemon</p>
              ) : (
                <p> altra lista di pokemon</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCocktails;
