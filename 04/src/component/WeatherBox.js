import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);
  return (
    <div className="weatherBox">
      <h1>{weather?.name}</h1>
      <h2>{weather?.main.temp}</h2>
      <h5>{weather?.weather[0].description}</h5>
    </div>
  );
};

export default WeatherBox;
