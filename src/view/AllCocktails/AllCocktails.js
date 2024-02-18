import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import style from "./allcocktails.css";
import clsx from "clsx";
import CocktailsGrid from "../../components/CocktailsGrid/CocktailsGrid";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from "react-bootstrap/Form";
import useGetListOfFilters from "../../useGetListOfFilters";
import { FaSearch } from "react-icons/fa";
import { BsFillGrid3X3GapFill, BsViewStacked } from "react-icons/bs";
import CocktailsList from "../../components/CocktailsList/CocktailsList";
import ScrollToTopOnMount from "../../utils/ScrollToTop";

const AllCocktails = () => {
  const { 
    data, 
    isLoading, 
    isError, count, 
    searchCocktail, 
    glassFilter, 
    setGlassFilter, 
    categoryDrinkFilter, 
    setCategoryDrinkFilter,
    drikNameInput,
    setDrinkNameInput } =
    useGlobalContext();

  const [displayGrid, setDisplayGrid] = useState("true");

  const { data: glass, isLoading: isLoadingGlass } =
    useGetListOfFilters("g=list");
  const { data: category, isLoading: isLoadingCategory } =
    useGetListOfFilters("c=list");

  // const [selectedGlass, setSelectedGlass] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [input, setInput] = useState("");

  const handleSelectedGlass = (e) => {
    const selectedGlass = e.target.value;
    setGlassFilter(selectedGlass);
    if (selectedGlass === "") searchCocktail("", false);
    else {
      if (categoryDrinkFilter !== "") {
        setCategoryDrinkFilter("");
        searchCocktail(`g=${selectedGlass}`, true);
      } else {
        searchCocktail(`g=${selectedGlass}`, true);
      }
    }
  };

  const handleSelectedCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategoryDrinkFilter(selectedCategory);

    if (selectedCategory === "") {
      searchCocktail("", false);
    } else {
      if (glassFilter !== "") {
        setGlassFilter("");
        searchCocktail(`c=${selectedCategory}`, true);
      } else {
        searchCocktail(`c=${selectedCategory}`, true);
      }
    }
  };

  const resetFilters = () => {
    setCategoryDrinkFilter("");
    setGlassFilter("");
    setInput("");
    searchCocktail("", false);
  };

  const handleToggle = (selected) => {
    if (!selected) {
      setCategoryDrinkFilter("");
      setGlassFilter("");
      searchCocktail("", false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryDrinkFilter("");
    setGlassFilter("");
    searchCocktail(input, null);
  };

  return (
    <section className="cocktailsContent mb-5">
      <ScrollToTopOnMount />
      <div className=" container-sm">
        <div className="d-lg-flex d-block filtersContainer">
          {isLoadingGlass || isLoadingCategory ? (
            <Loading />
          ) : (
            <>
              <Form>
                <label>Tipo di bicchiere</label>
                <Form.Select
                  className="form-control"
                  aria-label="Select glass"
                  onChange={(e) => {
                    handleToggle(e.target.value !== "");
                    handleSelectedGlass(e);
                  }}
                  value={glassFilter}
                >
                  <option value="">Tutti</option>
                  {glass.map((glass, index) => (
                    <option key={index} value={glass.strGlass}>
                      {glass.strGlass}
                    </option>
                  ))}
                </Form.Select>
              </Form>
              <Form>
                <label>Categoria drink </label>
                <Form.Select
                  className="form-control"
                  aria-label="Select category"
                  onChange={(e) => {
                    handleToggle(e.target.value !== "");
                    handleSelectedCategory(e);
                  }}
                  value={categoryDrinkFilter}
                >
                  <option value="">Tutti</option>
                  {category.map((category, index) => (
                    <option key={index} value={category.strCategory}>
                      {category.strCategory}
                    </option>
                  ))}
                </Form.Select>
              </Form>

              <form onSubmit={handleSubmit}>
                <label htmlFor="drink">Cerca il tuo drink</label>
                <div className="input-search">
                  <div class="input-group">
                    <input
                      id="drink"
                      className="input form-control"
                      placeholder="Cerca per nome"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button class="input-group-text icon-search" type="submit">
                      <FaSearch className="icon" />
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
          <button
            className="btn btn-outline-secondary resetFilters"
            onClick={resetFilters}
          >
            Reset filtri{" "}
          </button>
        </div>
      </div>

      <div className="p-3 content-products">
        <div className="container">
          <div className="row">
            <div className="col">
              {displayGrid ? (
                isLoading ? (
                  <Loading />
                ) : isError ? (
                  <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
                ) : data && data && data.length > 0 ? (
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mt-5">Prodotti disponibili: {count}</p>

                      <div className="d-flex flex-inline">
                        <div className={style.switch}>
                          <BsFillGrid3X3GapFill
                            className={clsx("option", {
                              active: displayGrid,
                            })}
                            onClick={() => setDisplayGrid(true)}
                          />

                          <BsViewStacked
                            className={clsx("option", {
                              active: !displayGrid,
                            })}
                            onClick={() => setDisplayGrid(false)}
                          />
                        </div>
                      </div>
                    </div>{" "}
                    <CocktailsGrid data={data} />
                  </div>
                ) : null
              ) : (
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mt-5">Prodotti disponibili: {count}</p>

                    <div className="d-flex flex-inline">
                      <div className={style.switch}>
                        <BsFillGrid3X3GapFill
                          className={clsx("option", {
                            active: displayGrid,
                          })}
                          onClick={() => setDisplayGrid(true)}
                        />

                        <BsViewStacked
                          className={clsx("option", {
                            active: !displayGrid,
                          })}
                          onClick={() => setDisplayGrid(false)}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <CocktailsList data={data} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCocktails;
