import { useState, useEffect } from "react";
import axios from "axios";

const searchById = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const searchByIngredient =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

const useFetchByIdAndIngredient = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    (async (id) => {
      setLoading(true);
      setIsError(false);

      try {
        const cocktailResult = await axios.get(searchById + id);

        if (
          cocktailResult &&
          cocktailResult.data &&
          cocktailResult.data.drinks &&
          cocktailResult.data.drinks[0]
        ) {
          setData(cocktailResult.data.drinks[0]);

          const ingredient = cocktailResult.data.drinks[0].strIngredient1;

          const ingredientsResult = await axios.get(
            `${searchByIngredient}${ingredient}`
          );
          // console.log(ingredientsResult.data.drinks)
          if (ingredientsResult) {
            //seleziono 8 drink a caso
            const firstFiveIngredients = ingredientsResult.data.drinks
              .sort(() => 0.5 - Math.random())
              .slice(0, 8);
            setIngredientsList(firstFiveIngredients);
          }
          setLoading(false);
          setIsError(false);
        } else {
          setLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    })(id);
  }, [id, searchById]);

  return { data, isLoading, ingredientsList, isError };
};

export default useFetchByIdAndIngredient;
