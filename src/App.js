import React, { useState, useEffect } from 'react';
import fetchWeather from './utilities/fetch';

function App() {
  const [ weather, setWeather ]= useState({});

  useEffect(() => {
    const res = fetchWeather;
    res.then(res => setWeather(res));
  }, []);

  console.log(weather.data);
  return (
    <div className="App">
      {
        !!weather.data &&
          <p>Weather is {weather.data[0].temp} degrees </p>
      }
    </div>
  );
}

export default App;
