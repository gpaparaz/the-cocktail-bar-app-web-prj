import { useEffect, useState } from "react";
import axios from "axios";
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
const searchByName =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


/* type serve a stabilire il tipo di ricerca che sto facendo;
  se è false allora sto cercando tutti i drink, ovvero alcolici + non alcolici;
  se è true allora sto cercando tramite filtro di ricerca;
  se è nullo allora sto cercando per nome.

  query può essere qualunque tipo di testo. Nel caso della ricerca tramite filtro 
  query corrisponde al filtro utilizzato (in accordo con quando inicato su TheCocktailDB), 
  altrimenti può essere il nome inserito nel box di ricerca
*/


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
        if (type === false) {
          const alcoholicDrinks = await axios.get(searchUrl + "a=Alcoholic");
          const nonAlcoholicDrinks = await axios.get(
            searchUrl + "a=Non_Alcoholic"
          );

          if (alcoholicDrinks && nonAlcoholicDrinks) {
            const allDrinks = alcoholicDrinks.data.drinks.concat(
              nonAlcoholicDrinks.data.drinks
            );
            setData(allDrinks);
            setCount(allDrinks.length);
            setIsLoading(false);
            setIsError(false);
          }
        } else if (type === true) {
          const response = await axios.get(`${searchUrl}${query}`);
          setData(response.data.drinks);
          setCount(response.data.drinks.length);
        }
        //cerca per testo
        else if (type === null) {
          const response = await axios.get(`${searchByName}${query}`);
          setData(response.data.drinks);
          setCount(response.data.drinks.length);
        }
      } catch (err) {
        setIsError(true);
        setCount(0);
      }
      setIsLoading(false);
    })(query);
  }, [query, type]);

  return { isLoading, data, isError, count };
};

export default useFetch;
