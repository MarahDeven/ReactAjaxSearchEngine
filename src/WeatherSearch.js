import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");

  function handlSubmit(event) {
    event.preventDefault();
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
