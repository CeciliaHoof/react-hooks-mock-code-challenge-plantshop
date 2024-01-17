import React, { useState } from "react";

function PlantCard({plant, plants, updatePlants}) {
  const { image, name, price, id} = plant;
  
  const [inStock, setInStock] = useState(true)
  const [editPrice, setEditPrice] = useState(false)
  const [newPrice, setNewPrice] = useState("")


  function displayForm(){
    setEditPrice(!editPrice)
  }

  function handleNewPrice(e){
    setNewPrice(e.target.value)
  }

  function patchPriceChange(e){
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({price: parseFloat(newPrice)})
    })
      .then(resp => resp.json())
      .then(data => updatePlants(plants.map(plant => plant.id === data.id ? data : plant )))
  }

  function deletePlant(){
    fetch(`http://localhost:6001/plants/${id}`,{
      method: 'DELETE'
    })
    const updatedPlants = plants.filter(plant => plant.id != id)
    updatePlants(updatedPlants)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price} </p>
      {editPrice ? 
        <form onSubmit={patchPriceChange}>
          <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleNewPrice}/>
          <button>Submit New Price</button>
        </form> :
        <button onClick={displayForm}>Edit Price</button>}
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={deletePlant}>Delete Plant from Inventory</button>
    </li>
  );
}

export default PlantCard;
