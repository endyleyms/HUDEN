import React, {useState} from 'react'
import { FormItem } from './FormItem'
import { SectionProd } from './SectionProd'
import PrincipiosItem from './PrincipiosItem'
import ButtonFixed from './ButtonFixed'
import ModalResume from './ModalResume'

function ModalAddProducts({addComponent, handleSelectData, selecData, handleShow, show, handleAddPrincipiosItem,  base, fFarmaceutica, principios, handledatachild}) {
  const [namePatient, setNamePatien]=useState('')
  const [nameDoctor, setNameDoctor]=useState('')
  const [number, setNumber]=useState('')
  const [concentration, setConcentration]=useState('')

  const formData={
    'Paciente':namePatient.toLowerCase(),
    'Doctor':nameDoctor.toLowerCase(),
    'Presentacion':number.toUpperCase().replace(/[^0-9]/g,""),
  }
  const submit = ()=>{
    handledatachild(formData)
    handleSelectData(formData)
  }

  return (
    <section>
      <div className="row">
        <div className="col-5">
          <FormItem title={'Nombre Paciente'} placeholder={'Paciente'} value={namePatient} setValue={setNamePatien}/>
        </div>
        <div className="col-5">
          <FormItem title={'Nombre Doctor'} placeholder={'Doctor'} value={nameDoctor} setValue={setNameDoctor}/>
        </div>
        <div className="col-5">
          <SectionProd data={fFarmaceutica} handleSelectData={handleSelectData} title={'Forma Farmacéutica'}/>
        </div>
        <div className="col-5">
          <SectionProd data={base} handleSelectData={handleSelectData} title={'Base'}/>
        </div>
        <div className="col-5">
          <FormItem title={'Presentación'} placeholder={'Número'} value={number} setValue={setNumber}/>
        </div>
      </div>
      {[...Array(addComponent)].map((_, index) => (
        <PrincipiosItem key={index} principios={principios} handleSelectData={handleSelectData} value={concentration} setValue={setConcentration} />
      ))}
      <div>
        <button className="btn btn-primary" onClick={handleAddPrincipiosItem} style={{marginTop: 20}}>
          Agregar Más Principios
        </button>
      </div>
      <button className="btn btn-primary" onClick={submit} style={{marginTop: 20}}>
       Agregar este producto
      </button>
      {selecData && <ButtonFixed title={'Calcular'} handleShow={handleShow}/>}
      {show && <ModalResume handleShow={handleShow} selecData={selecData}/>}
    </section>
  )
}

export default ModalAddProducts
