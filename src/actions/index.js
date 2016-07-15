import axios from 'axios';

const API_KEY = '94badd64d670682ddf96dfc942e3575a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// You can seach weather forecast for 5 days with data every 3 hours by city name. All weather data can be obtained in JSON, XML or HTML format.
// API call:

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
// Parameters:
// q city name and country code divided by comma, use ISO 3166 country codes

// Examples of API calls:
// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml