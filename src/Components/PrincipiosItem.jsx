import React, { useState } from 'react'
import { SectionProd } from './SectionProd'
import { FormItem } from './FormItem'
import Dropdown from './Dropdown'
import { useResumeContext } from '../Hooks/useResumeContext';


function PrincipiosItem({principios,  concentration, setConcentration}) {
  const {activo}= useResumeContext();
  return (
    <div className="row">
      <div className="col-4">
        <div>
          <div className="accordion-button collapsed">
            <span className="text-center" style={{color:'#3E0070'}}>Principios Activos</span>
          </div>
          {/* <Dropdown data={principios}  defaultSlected={'Selecciona una opción'} handleSelectData={handleSelectData}/> */}
        </div>
      </div>
      {activo &&
      <div className="col-4">
        <FormItem title={'Concentración'} placeholder={'%'} value={concentration} setValue={setConcentration}/>
      </div>
      }
    </div>
  )
}

export default PrincipiosItem
