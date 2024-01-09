import React from 'react'
import Header from '../Components/Header'
import ItemTable from '../Components/ItemTable';

function Admin() {
  const users =[
    {
      name: "John Doe",
      email: "JuanPabloGomez@gmail.com",
      role: "cliente",
      status: "Confirmado"
    },
    {
      name:"Maria Rodriguez",
      email:"maria123@hotmail.com",
      role:"administrador",
      status: "Bloqueado"
    },
    {
      name:"Juan Carlos Lopez",
      email:"juanlopez_97@outlook.com",
      role:"vendedor",
      status: "Confirmado"
    },
    {
      name:"Carlos Moreno",
      email:"carlomoreno@yahoo.com.mx",
      role:"cliente",
      status: "No Confirmado"
    },
    {
      name:"Ana Jimenez",
      email:"anajimenez04@hotmail.com",
      role:"cliente",
      status: "Confirmado"
    },
    {
      name: "Mark",
      email: "JuanPabloGomez@gmail.com",
      role: "cliente",
      status: "Confirmado"
    },
    {
      name: "",
      email: "",
      role: "",
      status: "No Confirmado"
    }
  ]
  return (
    <div>
      <Header/>
      <div>
        <h2 className="text-center" style={{color:'#3E0070'}}>Página de Administrador</h2>
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
              <th scope="col">Estado</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index)=>{
              return(
                <ItemTable key={index} user={user} index={index}/>
              )
            })}
          </tbody>
        </table>
        </div>
        </section>
      </div>
    </div>
  )
}

export default Admin
