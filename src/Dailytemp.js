import React from "react";

const DailyTemp = (props) => {
  return (
    <>
      <div className="container">
        <div className="top">
          <div className="location">{<p>{props.locationName}</p>}</div>
          <h3>Current Hour</h3>
          <div className="temp">{<h1>{props.temp_f}°f</h1>}</div>
          <div className="description">{<p>{props.description}</p>}</div>
          <div className="icon">
            {<img src={props.icon} alt="weatherIcon"></img>}
          </div>
        </div>

        {props.location !== undefined && (
          <div className="bottom">
            <div className="feels">
              {<p className="bold">{props.feelslike}°f</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {<p>{props.humidity}%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {<p>{props.wind} mph</p>}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DailyTemp;
