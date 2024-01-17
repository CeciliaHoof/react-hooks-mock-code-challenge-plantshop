import React, { useState } from "react";
import EditPriceForm from "./EditPriceForm"

function PlantCard({plant, updatePrice, onDelete}) {
  const { image, name, price, id} = plant;
  
  const [inStock, setInStock] = useState(true)
  const [editPrice, setEditPrice] = useState(false)
  


  // function displayForm(){
  //   setEditPrice(!editPrice)
  // }

  // function handleNewPrice(e){
  //   setNewPrice(e.target.value)
  // }

  function deletePlant(){
    fetch(`http://localhost:6001/plants/${id}`,{
      method: 'DELETE'
    })
    onDelete(plant)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price} </p>
      {editPrice ? 
        <button onClick={() => setEditPrice(!editPrice)}>Close</button> :
        <button onClick={() => setEditPrice(!editPrice)}>Edit Price</button>}
      {editPrice && <EditPriceForm plant={plant} updatePrice={updatePrice}/>}
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
