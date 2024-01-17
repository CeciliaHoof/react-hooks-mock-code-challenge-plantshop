import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantsList] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlantsList(data))
  }, [])
  return (
    <main>
      <NewPlantForm plants={plantList} addPlant={setPlantsList}/>
      <Search />
      <PlantList plants={plantList}/>
    </main>
  );
}

export default PlantPage;
