import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  return (
    <form>
      <input type="search" placeholder="enter a city" />
      <input type="submit" value="Search" />
    </form>
  );
}
