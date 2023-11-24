import { useState, useEffect } from "react";
import axios from "axios";

const searchAlcoholicDrinks =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const searchNonAlcoholicDrinks =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const useSearchAllDrinks = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setIsError(false);

      try {
        const alcoholicDrinks = await axios.get(searchAlcoholicDrinks);
        const nonAlcoholicDrinks = await axios.get(searchNonAlcoholicDrinks);

        if (alcoholicDrinks && nonAlcoholicDrinks) {
          const allDrinks = alcoholicDrinks.data.drinks.concat(
            nonAlcoholicDrinks.data.drinks
          );
          setData(allDrinks);
          setLoading(false);
          setIsError(false);
        } else {
          setIsError(true);
          setLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, isError };
};

export default useSearchAllDrinks;
