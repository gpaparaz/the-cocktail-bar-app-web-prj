import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import style from "./allcocktails.css";
import clsx from "clsx";
import Cocktails from "../../components/Cocktails/Cocktails";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from "react-bootstrap/Form";
import useGetListOfFilters from "../../useGetListOfFilters";
import { FaSearch } from "react-icons/fa";
import { BsFillGrid3X3GapFill, BsViewStacked } from "react-icons/bs";
import CocktailsList from "../../components/CocktailsList/CocktailsList";

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
    <section className="cocktailsContent">
      <div className=" container-sm">
        
        <button className="btn btn-outline-secondary" onClick={resetFilters}>
          Reset filtri{" "}
        </button>
      <div className="filters d-flex align-items-center">
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
                value={selectedGlass}
              >
                <option value="">Tutti</option>
                {glass.map((glass, index) => (
                  <option key={index} value={glass.strGlass}>
                    {glass.strGlass}
                  </option>
                ))}
              </Form.Select>
            </Form>
            <Form className="mx-3">
              <label>Categoria drink </label>
              <Form.Select
                className="form-control"
                aria-label="Select category"
                onChange={(e) => {
                  handleToggle(e.target.value !== "");
                  handleSelectedCategory(e);
                }}
                value={selectedCategory}
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
              <label htmlFor="drink">
                Cerca il tuo drink
              </label>
              <div className="input-search">
                <div class="input-group">
                  <input
                    id="drink"
                    className="input form-control"
                    placeholder="Cerca per nome"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <span class="input-group-text icon-search">
                    <FaSearch className="icon" />
                  </span>
                </div>
              </div>
            </form>
          </>
        )}
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
                    <Cocktails data={data} />
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
