import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantCollection, setPlantCollection] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantsData) => setPlantCollection(plantsData))
      .catch((error) => console.error("Could not load plants:", error));
  }, []);

  const addNewPlant = (newPlant) => {
    setPlantCollection((previousPlants) => [...previousPlants, newPlant]);
  };

  const filteredPlants = plantCollection.filter((plant) =>
    plant.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <main>
      <div className="main-layout">
        <div className="form-section">
          <NewPlantForm onAddPlant={addNewPlant} />
        </div>
        <div className="plants-section">
          <Search searchTerm={filterText} onSearchChange={setFilterText} />
          <PlantList plants={filteredPlants} />
        </div>
      </div>
    </main>
  );
}

export default PlantPage;
