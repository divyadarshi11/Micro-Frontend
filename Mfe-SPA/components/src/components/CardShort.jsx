import React from "react";
import "./CardShort.css";

const CardShort = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}> {/* onClick is a function passed from parent component */}
      <img src={data.image} alt={data.name} />
      <div className="title">{data.name}</div>
    </div>
  );
};

export default CardShort;
