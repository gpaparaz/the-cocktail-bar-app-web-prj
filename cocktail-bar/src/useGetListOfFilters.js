import { useEffect, useState } from "react";
import axios from "axios";
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?";

const useGetListOfFilters = (query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const response = await axios.get(`${searchUrl}${query}`);
          setData(response.data.drinks || []);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
  
      fetchData();
    }, [query]);
  
    return { data, isLoading, isError };
  };

export default useGetListOfFilters;