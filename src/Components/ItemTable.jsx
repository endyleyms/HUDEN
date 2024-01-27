import React, { useState } from 'react'
import DropdownUser from './DropdownUser';
import { updateUser } from '../services/users';
import { useAuthContext } from '../Hooks/useAuthContext';

function ItemTable({user, index}) {
  const {user: userByContext}= useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName]= useState(user.name);
  const [email, setEmail]= useState(user.email);
  const [role, setRole]= useState(user.role);
  const [password, setPassword]=useState(user.password);
 


  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formData = {
        name,
        email,
        role,
        password
      };
      await updateUser(user?.email, userByContext?.data?.msg?.token, formData );
      toggleEditing();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {isEditing ?
        <><td><input type="text" className="form-control" placeholder={`${user.name}`} value={name} onChange={(e) => setName(e.target.value)} /></td><td><input type="text" className="form-control" placeholder={`${user.email}`} value={email} onChange={(e) => setEmail(e.target.value)} /></td><td><input type="text" className="form-control" placeholder={`${user.role}`} value={role} onChange={(e) => setRole(e.target.value)} /></td><td><input type="text" className="form-control" placeholder={`${user.password}`} value={password} onChange={(e) => setPassword(e.target.value)} /></td></>

      :
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.rol}</td>
        <td>{user.password}</td>
      </>
      }
      <td>
        <DropdownUser data={user} isEditing={isEditing}/>
      </td>
      <td>
        <button className="btn btn-outline-secondary" onClick={toggleEditing}>{isEditing ? "Cancel" : "Edit"}</button>
        {isEditing && (
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        )}
      </td>
  </tr>
  )
}

export default ItemTable
