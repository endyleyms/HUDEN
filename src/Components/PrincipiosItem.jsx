import React, { useState } from 'react'
import { FormItem } from './FormItem'
import { useResumeContext } from '../Hooks/useResumeContext';
import DropdownActives from './DropDownActives';


function PrincipiosItem({principios, selecActivos, handleseleActivos}) {
  // const {activo}= useResumeContext();
  const [concentration, setConcentration]=useState();
  console.log('selecActivos= item', selecActivos)


  return (
    <div className="row">
      <div className="col-4">
        <div>
          <div className="accordion-button collapsed">
            <span className="text-center" style={{color:'#3E0070'}}>Principios Activos</span>
          </div>
          <DropdownActives options={principios} handleseleActivos={handleseleActivos}/>
        </div>
      </div>
      <div className="col-4">
        <FormItem title={'Concentración'} placeholder={'%'} value={concentration} setValue={setConcentration}/>
      </div>
    </div>
  )
}

export default PrincipiosItem
