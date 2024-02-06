import React, {useState} from 'react'
import { FormItem } from './FormItem'
import { SectionProd } from './SectionProd'
import PrincipiosItem from './PrincipiosItem'
import ButtonFixed from './ButtonFixed'
import { useResumeContext } from '../Hooks/useResumeContext'

function ModalAddProducts({addComponent, handleSelectData, handleShow, handleAddPrincipiosItem,  base, principios, handledatachild, handleShowModal, selecData}) {
  const {dispatch, resume}= useResumeContext();
  const [namePatient, setNamePatien]=useState('')
  const [nameDoctor, setNameDoctor]=useState('')
  const [number, setNumber]=useState('')
  const [showDataResume, setShowDataResume]=useState(false)
  const [selecActivos, setSelectactivos]=useState({});

  const formData={
    'Paciente':namePatient.toLowerCase(),
    'Doctor':nameDoctor.toLowerCase(),
    'Presentacion':number.toUpperCase().replace(/[^0-9]/g,""),
  }
  const handleseleActivos = (data)=>{
    setSelectactivos((prevData)=>({
      [data._id]: data,
    }))
  }

  //funcion que maneja el envio de datos al componente padre, context y seleccion de datos
  const handleSubmit = async()=>{
    handledatachild(formData)
    handleSelectData(formData)
    setShowDataResume(true)
    await dispatch({type: "RESUME", payload: {...formData}});
    localStorage.setItem("resume", JSON.stringify({...formData}));
  }

  return (
    <section aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:'7%', right:'20%', width: "60%", minHeight: "70%", height:"75%", backgroundColor: '#97afff', padding: 30, borderRadius: '12px'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Producto</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShowModal}></button>
        </div>
        <div className="modal-body" style={{marginLeft: '10%'}}>
          <div className="row">
            <div className="col-5">
              <FormItem title={'Nombre Paciente'} placeholder={'Paciente'} value={namePatient} setValue={setNamePatien}/>
            </div>
            <div className="col-5">
              <FormItem title={'Nombre Doctor'} placeholder={'Doctor'} value={nameDoctor} setValue={setNameDoctor}/>
            </div>
            <div className="col-5">
              <SectionProd data={base} handleSelectData={handleSelectData} title={'Base'}/>
            </div>
            <div className="col-5">
              <FormItem title={'Presentación (g)'} placeholder={'Número'} value={number} setValue={setNumber}/>
            </div>
          </div>
          {[...Array(addComponent)].map((_, index) => (
            <PrincipiosItem
            key={index}
            principios={principios}
            handleseleActivos={handleseleActivos}
            selecActivos={selecActivos}
            addComponent={addComponent}
            />
          ))}
          <div>
            <button className="btn btn-primary" onClick={handleAddPrincipiosItem} style={{marginTop: 20, backgroundColor: '#4c58ff'}}>
              Añadir Activos
            </button>
          </div>
          {
            selecData &&
          <button className="btn btn-primary" onClick={handleSubmit} style={{marginTop: 20}}>
          Submit
          </button>
          }
          {showDataResume && <ButtonFixed title={'Calcular'} handleShow={handleShow}/>}
        </div>
      </div>
    </section>
  )
}

export default ModalAddProducts
