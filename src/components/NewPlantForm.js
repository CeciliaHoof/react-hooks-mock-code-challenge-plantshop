import React,{ useState } from "react";

const initialState = {
  name: "",
  image: "",
  price: ""
}

function NewPlantForm({plants, onAddPlant}) {
  const [newPlant, setNewPlant] = useState(initialState)

  function handleChange(e){
    const { name, value } = e.target
    if (name === 'price') setNewPlant({...newPlant, [name]: parseFloat(value)})
    else {setNewPlant({...newPlant, [name]: value})}
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(newPlant)
    })
      .then(resp => resp.json())
      .then(data => onAddPlant(data))
    setNewPlant(initialState)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={newPlant.name} type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input value={newPlant.image} type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input value={newPlant.price} type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
