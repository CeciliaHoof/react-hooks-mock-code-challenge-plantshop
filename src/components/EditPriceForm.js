import { useState } from 'react'

function EditPriceForm({ plant, updatePrice }){
    
    const { id, price } = plant
    const [newPrice, setNewPrice] = useState(price)

    function patchPriceChange(e){
        e.preventDefault();
        fetch(`http://localhost:6001/plants/${id}`, {
          method: 'PATCH',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify({price: parseFloat(newPrice)})
        })
          .then(resp => resp.json())
          .then(data => updatePrice(data))
    }

    return(
        <form onSubmit={patchPriceChange}>
            <input
                value={newPrice}
                onChange={e => setNewPrice(e.target.value)}
                type="number"
                step="0.01"
            />
            <button type="submit">Update Price</button>
        </form>
    )
}

export default EditPriceForm