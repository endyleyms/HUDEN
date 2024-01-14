import React, { useState } from 'react'

function ItemProd({data, index}) {
  const [codigo, setCodigo]=useState(data.id)
  const [category, setCategory]=useState(data.category)
  const [title, setTitle]=useState(data.title)
  const [description, setDescription]=useState(data.description)
  const [price, setPrice]=useState(data.price)
  const [cantidad, setCantidad]=useState(data.cantidad)
  const [unidad, setUnidad]=useState(data.unidad)


  const [isEditing, setIsEditing] = useState(false);
  const sendIndexEdit = (event) => {
    setIsEditing(!isEditing);
    if(isEditing){
      //logica de cambiar los datos
      event.preventDefault()
    }
  }
  return (
    <tr>
    <th scope="row">{index + 1}</th>
    {isEditing ?
    <>
      <td><input type="text" className="form-control" placeholder={`${data.id}`} value={codigo} onChange={(e)=>setCodigo(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.category}`} value={category} onChange={(e)=>setCategory(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.title}`} value={title} onChange={(e)=>setTitle(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.description}`} value={description} onChange={(e)=>setDescription(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.price}`} value={price} onChange={(e)=>setPrice(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.cantidad}`} value={cantidad} onChange={(e)=>setCantidad(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.cantidad}`} value={unidad} onChange={(e)=>setUnidad(e.target.value)}/></td>
    </>
    :
    <>
    <td>{data.id}</td>
    <td>{data.category}</td>
    <td>{data.title}</td>
    <td>{data.description}</td>
    <td>{data.price}</td>
    <td>{data.cantidad}</td>
    <td>{data.unidad}</td>
    </>
    }
    <td>
      <button type="button" className="btn btn-outline-secondary" onClick={sendIndexEdit}>{isEditing ? 'Modificar' : 'Editar'}</button>
    </td>
</tr>
  )
}

export default ItemProd
