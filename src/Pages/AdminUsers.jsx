import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ItemTable from '../Components/ItemTable';
import { listAllUsers } from '../services/users';
import ModalUser from '../Components/ModalUser';
import ButtonFixed from '../Components/ButtonFixed';

function AdminUsers() {
  const [show, setShow]=useState(false)
  const [users, setUsers]=useState()

  const handleShow = ()=>{
    setShow(!show);
  }
  const fetchUsers = async (query = {})=>{
    const data= await listAllUsers (query);
    setUsers(data);
  }
  useEffect(()=>{
    fetchUsers();
  },[])
  return (
    <div>
      <Header/>
      <div>
        <h2 className="text-center" style={{color:'#3E0070'}}>Página de Administrador de Usuarios</h2>
        <p className='lead text-muted'>Bienvenid@ a la página de administrador. Aquí
        podrás manejar todos los aspectos de la página web, incluyendo la administración de usuarios.</p>
        <hr />
        <section id="admin-tools" className="row justify-content-md-center">
        <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Estado</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index)=>{
              return(
                <ItemTable key={index} user={user} index={index}/>
              )
            })}
          </tbody>
        </table>
        </div>
        </section>
      </div>
      <ButtonFixed title="Nuevo Usuario" handleShow={handleShow} />
      {show && <ModalUser handleShow={handleShow}/>}
    </div>
  )
}

export default AdminUsers
