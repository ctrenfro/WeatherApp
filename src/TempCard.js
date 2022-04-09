import React from "react";

const TempCard = (props) => {
  return (
    <>
      <div className="tempCard">
        <div>{<h3>{props.date}</h3>}</div>
        <div className="weeklyTemp">
          {<h3>{Math.round(props.avgTemp)}°f</h3>}
        </div>
        <div className="description">{<p>{props.text}</p>}</div>
        <div className="icon">
          {<img src={props.icon} alt="weatherIcon"></img>}
        </div>
        <div>{Math.round(props.min)}°f min</div>
        <div>{Math.round(props.max)}°f max</div>
      </div>
    </>
  );
};

export default TempCard;
