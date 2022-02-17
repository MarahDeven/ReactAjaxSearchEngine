import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  function handlSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handlSubmit}>
      <input type="search" placeholder="enter a city" />
      <input type="submit" value="Search" />
    </form>
  );
}
