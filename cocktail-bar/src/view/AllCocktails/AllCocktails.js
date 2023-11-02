import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import style from './allcocktails.css';
import clsx from 'clsx';
import Cocktails from "../../components/Cocktails/Cocktails";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from 'react-bootstrap/Form';
import useSearchAllDrinks from "../../useSearchAllDrinks";

const AllCocktails = () => {
    const {
        data,
        isLoading,
        isError,
        // searchCocktail,
      } = useSearchAllDrinks();
      // console.log(data)
    
      const [displayGrid, setDisplayGrid] = useState("true");
      // const [selectedLetter, setSelectedLetter] = useState('A');
      // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
      // const handleSelectChange = (e) => {
      //   setSelectedLetter(e.target.value);
      //   searchCocktail('f=' + e.target.value);
      // };
    
      // useEffect(() => {
      //   if (selectedLetter) {
      //     searchCocktail(`f=${selectedLetter}`);
      //   } else {
      //     searchCocktail("f=a");
      //   }
      // }, [selectedLetter, searchCocktail]);
    
  return (
    <div className="d-flex">
      <div className="col-3 p-3 mb-2 filters">lista di filtri
      
 
      </div>

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
                // <Cocktails data={data} />
                isLoading ? (
                    <Loading />
                  ) : isError ? (
                    <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
                  ) : data && data && data.length > 0 ?(
                    <Cocktails data={data} />
                  ) : null
              ) : (
                <p> altra lista di cocktail in lista</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCocktails;
