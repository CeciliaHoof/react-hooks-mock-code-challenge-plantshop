import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantsList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => 
        setPlantsList(data.filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))))
  }, [searchQuery])

  function addPlant(newPlant){
    setPlantsList([...plantList, newPlant])
  }

  function editPrice(plantObj){
    const updatedPlants = plantList.map(plant => plant.id === plantObj.id ? plantObj : plant)
    setPlantsList(updatedPlants)
  }

  function deletePlant(plantObj){
    const updatedPlants = plantList.filter(plant => plant.id !== plantObj.id)
    setPlantsList(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant}/>
      <Search onSearch={setSearchQuery} search={searchQuery}/>
      <PlantList plants={plantList} updatePrice={editPrice} onDelete={deletePlant}/>
    </main>
  );
}

export default PlantPage;
