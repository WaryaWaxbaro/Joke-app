import React from "react";
import { images } from "../helper/Icons";

function ForecastResult({ weather, cityName }) {
  const { WeatherIcon, Temperature } = weather;
  const { Imperial, Metric } = Temperature;

  let iconId = WeatherIcon - 1;

  return (
    <div className="Weather__search-result">
      <p className="Weather__search-result--city">{cityName}</p>
      <div className="Weather__search-result--img">
        <img src={images[iconId]} alt="placeholder" />
      </div>
      <p className="Weather__search-result--val">
        <span>
          {Math.round(Metric.Value)}
          <sup>&deg;</sup>
          {Metric.Unit}
        </span>
        /
        <span>
          {Imperial.Value}
          <sup>&deg;</sup>
          {Imperial.Unit}
        </span>
      </p>
    </div>
  );
}

export default ForecastResult;
