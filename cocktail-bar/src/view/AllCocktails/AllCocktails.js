import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import style from "./allcocktails.css";
import clsx from "clsx";
import Cocktails from "../../components/Cocktails/Cocktails";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from "react-bootstrap/Form";
import useGetListOfFilters from "../../useGetListOfFilters";
import { FaSearch } from "react-icons/fa";

const AllCocktails = () => {
  const { data, isLoading, isError, count, searchCocktail } =
    useGlobalContext();

  const [displayGrid, setDisplayGrid] = useState("true");

  const { data: glass, isLoading: isLoadingGlass } =
    useGetListOfFilters("g=list");
  const { data: category, isLoading: isLoadingCategory } =
    useGetListOfFilters("c=list");

  const [selectedGlass, setSelectedGlass] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [input, setInput] = useState("");

  const handleSelectedGlass = (e) => {
    const selectedGlass = e.target.value;
    setSelectedGlass(selectedGlass);
    if (selectedGlass === "") searchCocktail("", false);
    else {
      if (selectedCategory !== "") {
        setSelectedCategory("");
        searchCocktail(`g=${selectedGlass}`, true);
      } else {
        searchCocktail(`g=${selectedGlass}`, true);
      }
    }
  };

  const handleSelectedCategory = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory === "") {
      searchCocktail("", false);
    } else {
      if (selectedGlass !== "") {
        setSelectedGlass("");
        searchCocktail(`c=${selectedCategory}`, true);
      } else {
        searchCocktail(`c=${selectedCategory}`, true);
      }
    }
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedGlass("");
    setInput("");
    searchCocktail("", false);
  };

  const handleToggle = (selected) => {
    if (!selected) {
      setSelectedGlass("");
      setSelectedCategory("");
      searchCocktail("", false);
    }
  };

  const handleSubmit = (e) => {
    setSelectedGlass("");
    setSelectedCategory("");
    e.preventDefault();
    searchCocktail(input, null);
  };

  return (
    <div className="d-flex">
      <div className="col-3 p-3 mb-2 filters">
        <button className="btn btn-secondary" onClick={resetFilters}>
          Reset filtri{" "}
        </button>
        <br />
        {isLoadingGlass || isLoadingCategory ? (
          <Loading />
        ) : (
          <>
            <Form className="my-3">
              <label>Tipo di bicchiere</label>
              <Form.Select
                aria-label="Select glass"
                onChange={(e) => {
                  handleToggle(e.target.value !== "");
                  handleSelectedGlass(e);
                }}
                value={selectedGlass}
              >
                <option value="">All</option>
                {glass.map((glass, index) => (
                  <option key={index} value={glass.strGlass}>
                    {glass.strGlass}
                  </option>
                ))}
              </Form.Select>
            </Form>
            <Form className="my-3">
              <label>Categoria drink </label>
              <Form.Select
                aria-label="Select category"
                onChange={(e) => {
                  handleToggle(e.target.value !== "");
                  handleSelectedCategory(e);
                }}
                value={selectedCategory}
              >
                <option value="">All</option>
                {category.map((category, index) => (
                  <option key={index} value={category.strCategory}>
                    {category.strCategory}
                  </option>
                ))}
              </Form.Select>
            </Form>

            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Cerca il tuo drink</h4>
              </label>
              <div className="input-search">
                <input
                  id="drink"
                  className="input"
                  placeholder="Cerca per nome"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </>
        )}
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
                ) : data && data && data.length > 0 ? (
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
