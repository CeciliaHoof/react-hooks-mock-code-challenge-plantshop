import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePrice, onDelete }) {
  const displayPlants = plants.map(plant => <PlantCard plant={plant} updatePrice={updatePrice} onDelete={onDelete} key={plant.id}/>)
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
