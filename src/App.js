import React, { useState } from "react";
import axios from "axios";

import DailyTemp from "./Dailytemp";
import TempCard from "./TempCard";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=38141a54e93a44cd89c141016210608&q=${location}&days=8&aqi=no&alerts=no`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {!!data.location && (
        <DailyTemp
          location={data.location}
          locationName={data.location.name}
          current={data.current}
          temp_f={data.current.temp_f}
          description={data.current.condition.text}
          icon={data.current.condition.icon}
          feelslike={data.current.feelslike_f}
          humidity={data.current.humidity}
          wind={data.current.wind_mph}
        />
      )}

      {!!data.location && (
        <div className="weeklyForecast">
          <h2 className="wkTitle">3 day Forecast</h2>
          {data.forecast.forecastday.map((w, index) => (
            <div key={index}>
              <TempCard
                date={w.date}
                avgTemp={w.day.avgtemp_f}
                text={w.day.condition.text}
                icon={w.day.condition.icon}
                min={w.day.mintemp_f}
                max={w.day.maxtemp_f}
                i
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
