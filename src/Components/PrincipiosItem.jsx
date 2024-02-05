import React, { useState } from 'react'
import { useResumeContext } from '../Hooks/useResumeContext';
import DropdownActives from './DropDownActives';
import FormItemActive from './FormItemActive';


function PrincipiosItem({principios, selecActivos, handleseleActivos, addComponent}) {
  const [concentration, setConcentration] = useState();
  const dataArray = Object.values(selecActivos);
  return (
    <div className="row d-flex">
      <div className="col-5">
        <div>
          <div className="accordion-button collapsed">
            <span className="text-center" style={{color:'#3E0070'}}>Principios Activos</span>
          </div>
          <DropdownActives options={principios} handleseleActivos={handleseleActivos}/>
        </div>
      </div>
      <div className="col-5">
        { addComponent <=1 ?
          <FormItemActive value={concentration} setValue={setConcentration} title={'concentracion1'} id={dataArray[0]} selecActivos={selecActivos}/>
          :  addComponent <=2 ?
          <FormItemActive value={concentration} setValue={setConcentration} title={'concentracion2'} id={dataArray[0]} selecActivos={selecActivos} />
          : addComponent <=3 &&
          <FormItemActive value={concentration} setValue={setConcentration} title={'concentracion3'} id={dataArray[0]} selecActivos={selecActivos} />
        }
      </div>
    </div>
  );
}

export default PrincipiosItem
