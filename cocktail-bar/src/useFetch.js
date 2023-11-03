import { useEffect, useState } from "react";
import axios from "axios";
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";

const useFetch = (query, type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    (async (query) => {
      setIsError(false);
      setIsLoading(true);
      try {
        if(type === false) {
          const alcoholicDrinks = await axios.get(searchUrl + 'a=Alcoholic');
          const nonAlcoholicDrinks = await axios.get(searchUrl + 'a=Non_Alcoholic');

            if (alcoholicDrinks && nonAlcoholicDrinks ) {
              const allDrinks = alcoholicDrinks.data.drinks.concat(nonAlcoholicDrinks.data.drinks);
              setData(allDrinks);
              setCount(allDrinks.length)
              setIsLoading(false)
              setIsError(false)
            }
        }
        else {
        const response = await axios.get(`${searchUrl}${query}`);
        setData(response.data.drinks);
        setCount(response.data.drinks.length);
        }
      } catch (err) {
        setIsError(true);
        setCount(0);
      }
      setIsLoading(false);
    })(query);
  }, [query, searchUrl]);

  return { isLoading, data, isError, count };
};

export default useFetch;