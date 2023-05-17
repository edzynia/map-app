import { useEffect, useState } from 'react';
import { fetchCityData, fetchRouteCoordinates } from '../helpers/fetchData';

const useFetchRouteCoordinates = (start, destination, apiKey) => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the coordinates for start and destination cities
      const startCoordinates = await fetchCityData(start);
      const destinationCoordinates = await fetchCityData(destination);

      // Extract the latitude and longitude from the coordinates
      const startCityName = startCoordinates
        ? `${startCoordinates.longitude},${startCoordinates.latitude}`
        : null;
      const destinationCityName = destinationCoordinates
        ? `${destinationCoordinates.longitude},${destinationCoordinates.latitude}`
        : null;

      // Fetch the route coordinates using the start and destination coordinates
      const coordinates = await fetchRouteCoordinates(
        apiKey,
        startCityName,
        destinationCityName,
      );

      // Store the routeCoordinates in state
      setRouteCoordinates(coordinates);
    };

    fetchData();
  }, [start, destination, apiKey]);

  return routeCoordinates;
};

export default useFetchRouteCoordinates;
