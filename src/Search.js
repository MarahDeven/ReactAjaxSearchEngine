import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let weather [
    let [temperature, setTemperature] = useState(null);
    let [description, setDescription] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    let [city, setCity] = useState(null);
  ]

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4af869c2b16527dd3b375c7f352dada0";
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);
    axios.get(url).then(showDescription);
    axios.get(url).then(showHumidity);
    axios.get(url).then(showWind);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(event) {
    setTemperature(response.data.main.temp);
  }

  function showDescription(event) {
    setDescription(response.data.weather[0].description);
  }

  function showHumidity(event) {
    setHumidity(response.data.main.humidity);
  }

  function showWind(event) {
    setWind(response.data.wind.speed);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Type a city" onChange={showCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
