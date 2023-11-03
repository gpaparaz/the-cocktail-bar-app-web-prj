import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import style from './allcocktails.css';
import clsx from 'clsx';
import Cocktails from "../../components/Cocktails/Cocktails";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from 'react-bootstrap/Form';
import useSearchAllDrinks from "../../useSearchAllDrinks";
import useFetch from "../../useFetch";
import useGetListOfFilters from "../../useGetListOfFilters";

const AllCocktails = () => {
    const {
        data,
        isLoading,
        isError,
        count,
        searchCocktail
      } = useGlobalContext();
    
      const [displayGrid, setDisplayGrid] = useState("true");

      const { data:glass, isLoading: isLoadingGlass } = useGetListOfFilters('g=list');
      const { data:category, isLoading: isLoadingCategory } = useGetListOfFilters('c=list');
      
      const [selectedGlass, setSelectedGlass] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('');
    
      const handleSelectedGlass = (e) => {
        setSelectedGlass(e.target.value);
        searchCocktail('g=' + e.target.value, true);
      };

      const handleSelectedCategory = (e) => {
        setSelectedCategory(e.target.value);
        searchCocktail('c=' + e.target.value, true);
      };

      useEffect(() => {
        if (selectedGlass) {
          searchCocktail(`g=${selectedGlass}`, true);
        }
        else if(selectedCategory){
          searchCocktail(`c=${selectedCategory}`, true)
        } else {
          //di default non sto cercando tramite nessn filtro
          searchCocktail("", false);
        }
      }, [selectedGlass, searchCocktail]);


    
  return (
    <div className="d-flex">
      <div className="col-3 p-3 mb-2 filters">
      {
        (isLoadingGlass || isLoadingCategory) ? (
          <Loading />):(
        <>
        <label>Tipo di bicchiere</label>
        <Form>
          <Form.Select aria-label="Select glass" onChange={handleSelectedGlass}>
            <option value="">All</option>
            {glass.map((glass, index) => (
              <option key={index} value={glass.strGlass}>
                {glass.strGlass}
              </option>
            ))}
          </Form.Select>
        </Form>
        <label>Categoria</label>
        <Form>
          <Form.Select aria-label="Select category" onChange={handleSelectedCategory}>
            <option value="">All</option>
            {category.map((category, index) => (
              <option key={index} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </Form.Select>
        </Form>
        </>)
      }
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
                    <Cocktails data={data} count={count} />
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
