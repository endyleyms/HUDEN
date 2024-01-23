import React, { useEffect, useState } from 'react'
import { listAll } from '../services/data'
import Header from '../Components/Header'
import { SectionProd } from '../Components/SectionProd'
import ButtonFixed from '../Components/ButtonFixed'
import ModalResume from '../Components/ModalResume'


function Dashboard() {
  const [data, setData]=useState()
  const [selecData, setSelectData]= useState()
  const [show, setShow]=useState(false)
  
  //funcion para abrir-cerrar modal
  const handleShow = ()=>{
    setShow(!show);
  }
  
  //funcion que maneja la seleccion de los productos a cotizar
  const handleSelectData=(data)=>{
    setSelectData((prevData)=>({
      ...prevData,
      [data.id]: data
    }))
  }
  
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
      <section className="container mt-3 d-flex flex-column justify-content-evenly" style={{backgroundColor: '#bed0ff'}}>
          <div className="d-flex flex-column">
            <form class="form-floating">
              <input type="email" class="form-control" id="floatingInputInvalid" placeholder="Nombre Paciente" value=""/>
              <label for="floatingInputInvalid">Nombre Paciente</label>
            </form>
              <form class="form-floating">
              <input type="email" class="form-control" id="floatingInputInvalid" placeholder="Nombre Doctor" value=""/>
              <label for="floatingInputInvalid">Nombre Doctor</label>
            </form>
          </div>
          <SectionProd data={fFarmaceutica} handleSelectData={handleSelectData} title={'Envases'}/>
          <SectionProd data={principios} handleSelectData={handleSelectData} title={'Principios activos'}/>
          <SectionProd data={base}  handleSelectData={handleSelectData} title={'Bases'}/>
          {selecData && <ButtonFixed title={'Calcular'} handleShow={handleShow}/>}
          {show && <ModalResume handleShow={handleShow} selecData={selecData}/>}
      </section>
    </div>
  )
}

export default Dashboard
