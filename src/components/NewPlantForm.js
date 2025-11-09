import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const updateFormField = (event) => {
    const { name, value } = event.target;
    setPlantData({ ...plantData, [name]: value });
  };

  const submitPlant = (event) => {
    event.preventDefault();
    const newPlant = {
      name: plantData.name,
      image: plantData.image,
      price: Number(plantData.price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        onAddPlant(addedPlant);
        setPlantData({ name: "", image: "", price: "" });
      })
      .catch((error) => console.error("Could not add plant:", error));
  };

  return (
    <div className="new-plant-form">
      <h2>Add New Plant</h2>
      <form onSubmit={submitPlant}>
        <input
          name="name"
          placeholder="Plant name"
          value={plantData.name}
          onChange={updateFormField}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={plantData.image}
          onChange={updateFormField}
        />
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price"
          value={plantData.price}
          onChange={updateFormField}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
