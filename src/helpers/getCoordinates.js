import axios from 'axios';

export const getCityCoordinates = async (cityName, url) => {
  try {
    const encodedCityName = encodeURIComponent(cityName);
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${encodedCityName}&format=json`,
    );
    const data = response.data;

    if (Array.isArray(data) && data.length > 0) {
      const { lat, lon } = data[0];
      return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
    }
  } catch (error) {
    console.error('Error occurred while fetching coordinates:', error);
  }

  return null;
};

export const fetchData = async (apiKey, start, end) => {
  const url = `https://api.openrouteservice.org/v2/directions/driving-car`;

  const params = {
    api_key: apiKey,
    start: start,
    end: end,
  };

  try {
    const response = await axios.get(url, { params });
    const data = response.data;
    console.log('Received data:', data);

    // Extract the coordinates from the response
    const routeCoordinates = data.features[0].geometry.coordinates;

    return routeCoordinates;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
