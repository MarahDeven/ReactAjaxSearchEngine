import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");

  function handlSubmit(event) {
    event.preventDefault();
    let apiKey = "4af869c2b16527dd3b375c7f352dada0";
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handlSubmit}>
      <input type="search" placeholder="enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
