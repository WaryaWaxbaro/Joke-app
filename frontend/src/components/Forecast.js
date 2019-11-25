import React, { useState, useEffect } from "react";
import { Title } from "./Title";
import ForecastSearch from "./ForecastSearch";
import ForecastResult from "./ForecastResult";
import { key, locationBase, cityBase } from "../keys";
import Loader from './Loader';
import axios from "axios";

function Forecast() {
  const [cityName, setCityName] = useState("oulu");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const getCityName = name => {
    setCityName(name);
    setLoading(true);
  };

  useEffect(() => {
    const getWeather = async name => {
      //Api Key
      const api = `?apikey=${key}`;
      //Api key and the name of the city to be searched for
      const cityQuery = `${api}&q=${name}`;
      const cityUrl = locationBase + cityQuery;

      //Sending request and saving the respons
      const cityResponse = await axios(cityUrl);
      const cityKey = await cityResponse.data[0].Key;
      //Log the city key
      console.log(cityKey);

      //After getting the city key, another request is made for
      //the current weather details of that city
      const weatherUrl = cityBase + cityKey + `${api}`;
      const weatherResponse = await axios(weatherUrl);
      const currentForecast = await weatherResponse.data[0];
      //Saving the current forecast response
      setWeather(() => {
        return currentForecast;
      });
      setLoading(false);
      console.log("Weather from Forecast", currentForecast);
    };

    getWeather(cityName);
  }, [cityName]);

  return (
    <section className="Weather">
      <Title title="Today's Weather Forecast" />
      <ForecastSearch getName={getCityName} />
      {loading ? (
        <Loader />
      ) : (
        <ForecastResult weather={weather} cityName={cityName} />
      )}
    </section>
  );
}

export default Forecast;
