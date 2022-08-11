import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

let Card = (props) => {
  return (
    <div className="card">
      <div className="img">
        <img src={props.image} alt="" />
      </div>
      <div className="info">
        <div className="country">
          <i>
            <FaMapMarkerAlt />
          </i>
          <span className="span">{props.location.toUpperCase()}</span>
        </div>

        <h3>{props.title}</h3>
        <p className="date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
