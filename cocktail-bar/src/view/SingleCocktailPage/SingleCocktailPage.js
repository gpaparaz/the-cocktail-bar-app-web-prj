import React from "react";
import style from "./singleCocktailPage.css";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Cocktails from "../../components/Cocktails/Cocktails";
import useFetchByIdAndIngredient from "../../useFetchByIdAndIngredient";

const SingleCocktailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, ingredientsList } =
    useFetchByIdAndIngredient(id);

  if (isLoading) {
    return <Loading />;
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
  } = data;

  const strInstructionsList = [
    { istruzione: strIngredient1, qty: strMeasure1 },
    { istruzione: strIngredient2, qty: strMeasure2 },
    { istruzione: strIngredient3, qty: strMeasure3 },
    { istruzione: strIngredient4, qty: strMeasure4 },
    { istruzione: strIngredient5, qty: strMeasure5 },
  ];

  const style = {
    backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <>
      <div style={style}>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="cocktail-datails">
              <div className="spacer">
                <h2>{name}</h2>
                <div className="cocktail-type">
                  <p className="label">{type}</p>
                  <p className="label">{category}</p>
                  <p className="label">{strGlass}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
            <h4>Istruzioni :</h4>
            <p className="info">
              {strInstructionsIT ? strInstructionsIT : strInstructions}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-5 container-sm">
        <h3>Altri drink simili</h3>
        <div className="container-sm px-5">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
          ) : ingredientsList && ingredientsList.length > 0 ? (
            <Cocktails data={ingredientsList} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SingleCocktailPage;
