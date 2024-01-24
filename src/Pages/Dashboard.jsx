import React, { useEffect, useState } from 'react'
import { listAll } from '../services/data'
import Header from '../Components/Header'
import ModalAddProducts from '../Components/ModalAddProducts'


function Dashboard() {
  const [data, setData]=useState()
  const [selecData, setSelectData]= useState()
  const [addComponent, setAddComponent]= useState(1)
  const [formData, setFormData]=useState()
  const [show, setShow]=useState(false)
  const [showModal, setShowModal]=useState(false)

  //funcion para abrir-cerrar modal
  const handleShowModal = ()=>{
    setShowModal(!showModal);
  }

  //funcion para abrir-cerrar modal
  const handleShow = ()=>{
    setShow(!show);
  }
  const handledatachild = (data)=>{
    setFormData(data)
  }

  //funcion que maneja la seleccion de los productos a cotizar
  const handleSelectData=(data)=>{
    setSelectData((prevData)=>({
      ...prevData,
      [formData?.Doctor]: formData,
      [data.id]: data,
    }))
  }
  //funcion que maneja agregar mas de un principio activo
  const handleAddPrincipiosItem = () => {
    setAddComponent((prevCount) => prevCount + 1);
  };

  //función para traer la data
  const fetchData = async (query = {})=>{
    const data= await listAll(query)
    setData(data);
  }
  const principios = data?.filter((item)=>item.category === 'Activo')
  const base = data?.filter((item)=>item.category === 'Base')
  const fFarmaceutica = data?.filter((item)=>item.category === 'F. Farmaceutica')
  useEffect(()=>{
    fetchData();
  },[])

  //constante para pasar los estilos de la pagina
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

  return (
    <div style={appStyles}>
      <Header/>
      <section className="container mt-5">
        <div style={{backgroundColor: '#bed0ff', padding: '15px', borderRadius:'12px', minHeight: 500}}>
        <h2 className="text-center" style={{color:'#092f62', marginTop: '20px'}}>Productos</h2>
          <hr />
          {showModal ?
            <ModalAddProducts
            addComponent={addComponent}
            handleSelectData={handleSelectData}
            selecData={selecData}
            show={show}
            handleShow={handleShow}
            handleAddPrincipiosItem={handleAddPrincipiosItem}
            base={base}
            fFarmaceutica={fFarmaceutica}
            principios={principios}
            handledatachild={handledatachild}
            handleShowModal={handleShowModal}
            />
            :
            <button type='button' className="btn btn-primary" style={{position: 'absolute', right: 100, bottom: 200}} onClick={handleShowModal}>
              Agregar producto
              </button>
          }
        </div>
      </section>
    </div>
  )
}

export default Dashboard
