import { API_KEY, API_PATH } from '../constants/api';

const fetchWeather = fetch(`${API_PATH}?city=Melbourne&country=Australia&key=${API_KEY}`)
  .then(res => res.json())
  .then(res => res);

export default fetchWeather;
