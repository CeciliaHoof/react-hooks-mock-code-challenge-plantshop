import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePrice }) {
  const displayPlants = plants.map(plant => <PlantCard plant={plant} updatePrice={updatePrice} plants={plants} key={plant.id}/>)
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
