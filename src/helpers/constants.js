export const URL_CONVERT = (encodedCityName) =>
  `https://nominatim.openstreetmap.org/search?q=${encodedCityName}&format=json`;
export const URL_CORDS = (apiKey, start, end) =>
  `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`;
