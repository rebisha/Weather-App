import React, { useState, useEffect } from 'react';
import fetchWeather from './utilities/fetch';

import { Button, Container, FormControl } from 'react-bootstrap';

function App() {
  const [ weather, setWeather ]= useState({});

  useEffect(() => {
    const res = fetchWeather;
    res.then(res => setWeather(res));
  }, []);

  const onSubmit = e => {
    console.log('clicked');
  };

  return (
    <Container>
      <div className="App">
        {
          !!weather.data &&
            <p>Weather is {weather.data[0].temp} degrees </p>
        }

        <FormControl
          className="mb-3"
          placeholder="Country"
          aria-label="Country"
        />

        <FormControl
          className="mb-3"
          placeholder="City"
          aria-label="City"
        />

        <Button variant="primary" type="submit" onClick={onSubmit}>Submit</Button>
      </div>
    </Container>
  );
}

export default App;
