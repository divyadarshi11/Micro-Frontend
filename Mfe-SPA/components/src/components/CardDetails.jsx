import React from "react";
import "./CardDetails.css";

const CardDetails = (props) => {
    const {image, name, cuisine, rating } = props.data;

    return (
      <div className="card-details">
        <img src={image} alt={name} />
        <div className="item-title">{name}</div>
        <div>Cuisine: {cuisine}</div>
        <div>Rating: {rating}</div>
      </div>
    );
  }

export default CardDetails;
 
  