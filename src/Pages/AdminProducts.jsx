import React, { useEffect, useState } from 'react'
import { listAll } from '../services/data'
import Header from '../Components/Header'
import ItemProd from '../Components/itemProd'
import ButtonFixed from '../Components/ButtonFixed';
import ModalProds from '../Components/ModalProds';

function AdminProducts() {
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
  const [data, setData]=useState()

   const handleShow = ()=>{
    setShow(!show);
  }

  const fetchData = async (query = {})=>{
    const data= await listAll(query)
    setData(data);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div style={appStyles}>
      <Header/>
      <section className="container mt-5" >
        <div style={{backgroundColor: '#bed0ff', padding: '15px', borderRadius:'12px'}}>
          <h2 className="text-center" style={{color:'#092f62', marginTop: '20px'}}>Administrador de Productos</h2>
          <hr />
          <section id="admin-tools" className="row justify-content-md-center">
          <div className="table-responsive"  style={{margin: '20px', paddingLeft: '20px', paddingRight: '20px'}}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Código</th>
                <th scope="col">Categoría</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Unidad</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index)=>{
                return(
                  <ItemProd key={index} data={item} index={index}/>
                )
              })}
            </tbody>
          </table>
          </div>
          </section>
        </div>
        <ButtonFixed title="Nuevo Producto" handleShow={handleShow} />
        {show && <ModalProds handleShow={handleShow}/>}
      </section>
    </div>
  )
}

export default AdminProducts
