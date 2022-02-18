import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4af869c2b16527dd3b375c7f352dada0";
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return temperature;
  } else {
    return <div>{form}</div>;
  }
}
