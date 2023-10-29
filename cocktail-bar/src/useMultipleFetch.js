import { useState, useEffect } from 'react';
import axios from 'axios';

const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const useMultipleFetch = (numberOfRequests) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      const requests = [];

      for (let i = 0; i < numberOfRequests; i++) {
        try {
          const response = await axios.get(endpoint);
          requests.push(response.data.drinks[0]);
        } catch (err) {
          setIsError(true);
        }
      }

      setData(requests);
      setIsLoading(false);
    };

    if (data.length === 0) {
        fetchData();
      }
  }, [numberOfRequests, data]);

  return { isLoading, data, isError };
};

export default useMultipleFetch;
