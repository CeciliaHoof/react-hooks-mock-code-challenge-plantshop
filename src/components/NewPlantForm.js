import React,{ useState } from "react";

function NewPlantForm({plants, addPlant}) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0,
    id: plants.length + 1
  })

  function handleChange(e){
    if(e.target.name === "name"){
      setNewPlant({...newPlant, name: e.target.value})
    } else if (e.target.name === "image"){
      setNewPlant({...newPlant, image: e.target.value})
    } else if (e.target.name === "price"){
      setNewPlant({...newPlant, price: parseFloat(e.target.value)})
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    addPlant([...plants, newPlant])
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
