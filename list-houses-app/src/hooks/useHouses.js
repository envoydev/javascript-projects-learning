import { useState, useEffect } from 'react';

import fetchHousesData from '../api/houses';
import loadingStatus from '../helpers/loadingStatus';

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  useEffect(() => { 
    const fetchHouses = async () => {
      setLoadingState(loadingStatus.isLoading);
      try {
        const response = await fetchHousesData();
        const data = await response.json();
        console.log(data.houses);
        setHouses(data.houses);
        setLoadingState(loadingStatus.loaded);
      } catch (error) {
        console.error("There was an error fetching the data", error);
        setLoadingState(loadingStatus.hasErrored);
      }
    };
    fetchHouses();
  }, []);

  return { houses, setHouses, loadingState };
};

export default useHouses;