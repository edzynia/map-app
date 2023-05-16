import axios from 'axios';

const getCityCoordinates = async (cityName) => {
  try {
    const encodedCityName = encodeURIComponent(cityName);
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${encodedCityName}&format=json`,
    );
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
    console.log(coordinates); // Access the real data here
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

    const response = await axios.get(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`,
    );

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

    console.log(routeCoordinates); // Access the data here
    return routeCoordinates;
  } catch (error) {
    console.error('Error occurred while fetching route coordinates:', error);
  }
};

// const apiKey = '5b3ce3597851110001cf6248e9430bdfd2f841f285038ec9f6176644';
// const startC = '13.3888599,52.5170365';
// const endC = '18.0710935,59.3251172 ';
