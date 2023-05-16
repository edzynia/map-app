import axios from 'axios';

import { URL_CONVERT, URL_CORDS } from './constants';

const getCityCoordinates = async (cityName) => {
  try {
    const encodedCityName = encodeURIComponent(cityName);
    const response = await axios.get(URL_CONVERT(encodedCityName));
    const data = response.data;

    if (Array.isArray(data) && data.length > 0) {
      const { lat, lon } = data[0];
      return {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error occurred while fetching coordinates:', error);
    return null;
  }
};

export const fetchCityData = async (cityName) => {
  try {
    const coordinates = await getCityCoordinates(cityName);
    return coordinates;
  } catch (error) {
    console.error('Error occurred while fetching coordinates:', error);
    return null;
  }
};

const getRouteCoordinates = async (apiKey, start, end) => {
  try {
    if (!start || !end) {
      return [];
    }

    const response = await axios.get(URL_CORDS(apiKey, start, end));

    const routeCoordinates = response.data.features[0].geometry.coordinates;
    return routeCoordinates;
  } catch (error) {
    console.error('Error fetching route coordinates:', error);
    return [];
  }
};

export const fetchRouteCoordinates = async (apiKey, start, end) => {
  try {
    const routeCoordinates = await getRouteCoordinates(apiKey, start, end);
    return routeCoordinates;
  } catch (error) {
    console.error('Error occurred while fetching route coordinates:', error);
  }
};
