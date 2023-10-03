import React, { useEffect, useState } from "react";

import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=18e1b55ae2cc492bb98d0484e09f647b`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputfield"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <span id="icon" className="material-symbols-outlined">
                  location_on
                </span>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min {city.temp_min}°C | Max {city.temp_max}°C
              </h3>
              <h3 className="pressure">
                Pressure {city.pressure} | Humidity {city.humidity}
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
