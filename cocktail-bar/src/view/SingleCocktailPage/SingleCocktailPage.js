import React from 'react'
import style from './singleCocktailPage.css'
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { BsArrowLeftShort } from "react-icons/bs";
import {IoArrowBackCircleSharp} from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import useFetch from '../../useFetch';

const SingleCocktailPage = () => {

  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(`i=${id}`, true);
  if (isLoading) {
    return (
        <Loading />
    );
  }
  if (isError) {
    return (
        <div className="cocktail-content container">
          <header>
            <Link to="/">
              <BsArrowLeftShort className="icon" />
            </Link>
            <h4 className="back-arrow">Torna in Home</h4>
          </header>
          <ErrorMessage>Cocktail Non Disponibile</ErrorMessage>
        </div>
    );
  }

  const {
    strAlcoholic: type,
    strCategory: category,
    strDrink: name,
    strGlass,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strInstructions,
    strInstructionsIT,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  } = data.drinks[0];

  const strInstructionsList = [
    { istruzione: strIngredient1, qty: strMeasure1 },
    { istruzione: strIngredient2, qty: strMeasure2 },
    { istruzione: strIngredient3, qty: strMeasure3 },
    { istruzione: strIngredient4, qty: strMeasure4 },
    { istruzione: strIngredient5, qty: strMeasure5 },
  ];

  return (
      <div className="cocktail-content container">
        <header>
          <Link to="/">
            <IoArrowBackCircleSharp className="icon" />
          </Link>
          <h4 className="back-arrow">Torna in Home</h4>
        </header>
        <hr />
        <div className="cocktail-container">
          <img src={image} alt={name} className="img" />
          <div className="cocktail-datails">
            <div className="spacer">
              <h2>{name}</h2>
              <div className="cocktail-type">
                <p className="label">{type}</p>
                <p className="label">{category}</p>
                <p className="label">{strGlass}</p>
              </div>
            </div>
            <hr />

            <div className="spacer">
              <h4>Ingredienti :</h4>
              <ul className="instruction-list">
                {strInstructionsList.map((el, index) => {
                  if (el.istruzione) {
                    return (
                      <li key={index}>
                        <p className="info">
                          {el.qty} {el.istruzione}
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <hr />

            <div className="spacer">
              <h4>Istruzioni :</h4>
              <p className="info">
                {strInstructionsIT ? strInstructionsIT : strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
  );

}

export default SingleCocktailPage
