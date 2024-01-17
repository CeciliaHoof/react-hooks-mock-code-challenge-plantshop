import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlants }) {
  const displayPlants = plants.map(plant => <PlantCard plant={plant} updatePlants={updatePlants} plants={plants} key={plant.id}/>)
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
