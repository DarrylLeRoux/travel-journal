import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import data from "../data";

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
          <p>{props.location.toUpperCase()}</p>
        </div>

        <h3>{props.title}</h3>
        <p>
          {props.startDate} -{props.enDate}
        </p>
        <p>{props.description}</p>
      </div>
      <hr className="break" />
    </div>
  );
};

export default Card;
