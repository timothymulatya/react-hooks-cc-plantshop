import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: form.name,
      image: form.image,
      price: parseFloat(form.price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((savedPlant) => {
        onAddPlant(savedPlant);
        setForm({ name: "", image: "", price: "" });
      })
      .catch((err) => console.error("Error adding plant:", err));
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        step="0.01"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
