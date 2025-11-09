import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  // Make sure function name matches
  function handleStockClick() {
    setIsInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <div className="card-info">
        <h4>{plant.name}</h4>
        <p>${plant.price}</p>
        <button
          className={isInStock ? "primary" : ""}
          onClick={handleStockClick} // Use the correct function name
        >
          {isInStock ? "In Stock" : "Out of Stock"}
        </button>
      </div>
    </li>
  );
}

export default PlantCard;

