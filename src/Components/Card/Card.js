import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.img} alt="card" />
      </div>
      <div className="card-content">
        <div className="card-title d-flex align-items-center">
          <h3 className="my-0">{props.title}</h3>
          <p className="my-0">{props.price}</p>
        </div>
        <div className="card-rate d-flex align-items-center">
          <p className="my-0"> {props.rate} </p>
          <span>Today</span>
        </div>
        <div className="card-text">
          <p>{props.content}</p>
        </div>
        <div className="card-date">
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}
