import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  function onAddPlant(plant){
    setPlants([...plants, plant])
  }

  function onSearch(query){
    setSearchQuery(query)
  }

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={onAddPlant}/>
      <Search search={onSearch} query={searchQuery}/>
      <PlantList plants={filteredPlants }/>
    </main>
  );
}

export default PlantPage;