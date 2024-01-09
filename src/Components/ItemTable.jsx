import React, { useState } from 'react'
import Dropdown from './Dropdown';

function ItemTable({user, index}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [role, setRole]= useState('');
  const sendIndexEdit = () => {
    setIsEditing(!isEditing);
    if(isEditing){
      //logica de cambiar los datos del usuario
      const formData = {
        name,
        email,
        role
      };
    }
  };
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {isEditing ?
      <>
        <td><input type="text" className="form-control" placeholder={`${user.name}`} value={name} onChange={(e)=>setName(e.target.value)}/></td>
        <td><input type="text" className="form-control" placeholder={`${user.email}`} value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
        <td><input type="text" className="form-control" placeholder={`${user.role}`} value={role} onChange={(e)=>setRole(e.target.value)}/></td>
      </>
      :
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
      </>
      }
      <td>
        <Dropdown user={user}/>
      </td>
      <td>
        <button type="button" className="btn btn-outline-secondary" onClick={sendIndexEdit}>{isEditing ? 'Modificar' : 'Editar'}</button>
      </td>
  </tr>
  )
}

export default ItemTable
