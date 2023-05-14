import { useEffect, useState } from 'react';
import { getCityCoordinates } from '../helpers/getCoordinates';

const useCityCoordinates = (cityName) => {
  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await getCityCoordinates(cityName);
      setCoordinates(coords);
    };

    if (cityName !== null) {
      fetchCoordinates();
    }
  }, [cityName]);

  return coordinates;
};

export default useCityCoordinates;
