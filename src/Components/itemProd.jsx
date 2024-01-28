import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { useAuthContext } from '../Hooks/useAuthContext'
import { updateByCode } from '../services/data';

function ItemProd({data, index}) {
  const {user}= useAuthContext();
  const [code, setCode]=useState(data.code)
  const [category, setCategory]=useState(data.category)
  const [name, setName]=useState(data.name)
  const [price, setPrice]=useState(data.price)
  const [unit, setUnit]=useState(data.unit)


  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formData = {
        code,
        category,
        name,
        price,
        unit
      };
      await updateByCode(data.code, user?.data?.msg?.token, formData )
      toggleEditing();
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  }

  return (
    <tr>
    <th scope="row">{index + 1}</th>
    {isEditing ?
    <>
      <td><input type="text" className="form-control" placeholder={`${data.code}`} value={code} onChange={(e)=>setCode(e.target.value)}/></td>
      <td><Dropdown options={['Base', 'Activo']}  defaultSlected={category}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.name}`} value={name} onChange={(e)=>setName(e.target.value)}/></td>
      <td><input type="text" className="form-control" placeholder={`${data.price}`} value={price} onChange={(e)=>setPrice(e.target.value)}/></td>
      <td><Dropdown options={['g', 'ml']}  defaultSlected={unit}/></td>
    </>
    :
    <>
    <td>{data.code}</td>
    <td>{data.category}</td>
    <td>{data.name}</td>
    <td>{data.price}</td>
    <td>{data.unit}</td>
    </>
    }
    <td>
      <button className="btn btn-outline-secondary" onClick={toggleEditing}>{isEditing ? "Cancel" : "Edit"}</button>
      {isEditing && (
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      )}
    </td>
</tr>
  )
}

export default ItemProd
