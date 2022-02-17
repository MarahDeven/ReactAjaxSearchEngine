import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data.main.temp);
  }

  function handlSubmit(event) {
    event.preventDefault();
    let apiKey = "4af869c2b16527dd3b375c7f352dada0";
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return "Loaded";
  } else {
    return (
      <form onSubmit={handlSubmit}>
        <input type="search" placeholder="enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
