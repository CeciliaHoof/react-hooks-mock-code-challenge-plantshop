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
      .then(data => setPlantsList(data.filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))))
  }, [searchQuery])
  return (
    <main>
      <NewPlantForm plants={plantList} addPlant={setPlantsList}/>
      <Search onSearch={setSearchQuery}/>
      <PlantList plants={plantList} updatePlants={setPlantsList}/>
    </main>
  );
}

export default PlantPage;
