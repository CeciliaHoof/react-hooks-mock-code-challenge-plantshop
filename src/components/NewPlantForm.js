import React, { useState } from "react";

const initialState = {
  name: "",
  image: "",
  price: ""
}

function NewPlantForm({ addPlant }) {
  const [formData, setFormData] = useState(initialState)

  function handleChange(e){
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }).then(resp => resp.json())
    .then(data => addPlant(data))

    setFormData(initialState)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={(e) => handleChange(e)}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={(e) => handleChange(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={(e) => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;