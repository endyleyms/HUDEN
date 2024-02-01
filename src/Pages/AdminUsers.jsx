import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ItemTable from '../Components/ItemTable';
import { listAllUsers } from '../services/users';
import ModalUser from '../Components/ModalUser';
import ButtonFixed from '../Components/ButtonFixed';
import { useAuthContext } from '../Hooks/useAuthContext';

function AdminUsers() {
  const {user}= useAuthContext();
  const appStyles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'absolute',
    top: '51px',
    right: '0px',
    backgroundColor: '#f4f6f7'
  };
  const [show, setShow]=useState(false)
  const [users, setUsers]=useState()

  const handleShow = ()=>{
    setShow(!show);
  }
  const fetchUsers = async (query = {})=>{
    try {
      const data= await listAllUsers (user?.data?.msg?.token);
      setUsers(data.msg);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchUsers();
  },[])
  return (
    <div style={appStyles}>
      <Header/>
      <section className="container mt-5">
        <div style={{backgroundColor: '#bed0ff', padding: '15px', borderRadius:'12px'}}>
          <h2 className="text-center" style={{color:'#092f62', marginTop: '20px'}}>Administrador de Usuarios</h2>
          <hr />
          <section id="admin-tools" className="row justify-content-md-center">
          <div className="table-responsive" style={{margin: '20px', paddingLeft: '20px', paddingRight: '20px'}}>
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
      </section>
    </div>
  )
}

export default AdminUsers
