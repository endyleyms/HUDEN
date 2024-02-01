import React, {useState} from 'react'
import { FormItem } from './FormItem'
import { SectionProd } from './SectionProd'
import PrincipiosItem from './PrincipiosItem'
import ButtonFixed from './ButtonFixed'
import { useResumeContext } from '../Hooks/useResumeContext'

function ModalAddProducts({addComponent, handleSelectData, handleShow, handleAddPrincipiosItem,  base, principios, handledatachild, handleShowModal, selecData}) {
  const {dispatch, activo}= useResumeContext();
  console.log('activo', activo?._id)
  const [namePatient, setNamePatien]=useState('')
  const [nameDoctor, setNameDoctor]=useState('')
  const [number, setNumber]=useState('')
  const [showDataResume, setShowDataResume]=useState(false)
  const [concentration, setConcentration]=useState(activo?.concentration)
  console.log('concentration', concentration)
  const handleEditarConcentracion = (idActivo, nuevaConcentracion) => {
    dispatch({ type: "EDITAR_CONCENTRACION_ACTIVO", payload: { idActivo, nuevaConcentracion } });
  }

  const handleSubmit = async () => {
    const formData = {
      'Paciente': namePatient.toLowerCase(),
      'Doctor': nameDoctor.toLowerCase(),
      'Presentacion': number.toUpperCase().replace(/[^0-9]/g, ""),
    };
    // Si hay un activo, editar su concentración
    if (activo) {
      handleEditarConcentracion(activo._id, concentration);
    }
    // Enviar la data seleccionada y activo editado al contexto de resume
    const payload = {
      ...formData,
      selecData,
      activoEditado: activo ? { _id: activo._id, concentration } : null
    };
  
    handledatachild(formData); // Enviar data al componente padre
    handleSelectData(formData); // Enviar data seleccionada al contexto de selección
    setShowDataResume(true); // Mostrar data seleccionada en el componente
  
    // Enviar payload al contexto de resume
    await dispatch({ type: "RESUME", payload });
  
  };

  return (
    <section aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:60, right:300, width: "60%", minHeight: "70%", height:"85%", backgroundColor: '#97afff', padding: 30, borderRadius: '12px'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Producto</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShowModal}></button>
        </div>
        <div className="modal-body">
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
            handleSelectData={handleSelectData}
            concentration={concentration}
            setConcentration={setConcentration}
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
