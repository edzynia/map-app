import axios from 'axios';

export const getCityCoordinates = async (cityName) => {
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
