import axios from 'axios';

const API_KEY = 'c6438b7ecc3c14497925eed3b5ffb191';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // axios returns a promise
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
