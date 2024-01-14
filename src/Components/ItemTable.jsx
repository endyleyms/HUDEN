import React, { useState } from 'react'
import Dropdown from './Dropdown';
import { updateUser } from '../services/users';

function ItemTable({user, index}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [role, setRole]= useState('');
  const [password, setPassword]=useState('');


  const sendIndexEdit = (event) => {
    setIsEditing(!isEditing);
    if(isEditing){
      //logica de cambiar los datos del usuario
      event.preventDefault()
      const formData = {
        name,
        email,
        role
      };
      //updateUser(index, formData)
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
        <td><input type="text" className="form-control" placeholder={`${user.password}`} value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
      </>
      :
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>{user.password}</td>
      </>
      }
      <td>
        <Dropdown data={user} isEditing={isEditing}/>
      </td>
      <td>
        <button type="button" className="btn btn-outline-secondary" onClick={sendIndexEdit}>{isEditing ? 'Modificar' : 'Editar'}</button>
      </td>
  </tr>
  )
}

export default ItemTable
