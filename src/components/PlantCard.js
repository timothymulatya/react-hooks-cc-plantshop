import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stockStatus, setStockStatus] = useState(true);

  const toggleStock = () => {
    setStockStatus(!stockStatus);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button className={stockStatus ? "primary" : ""} onClick={toggleStock}>
        {stockStatus ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
