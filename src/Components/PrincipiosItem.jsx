import React, { useState } from 'react'
import { useResumeContext } from '../Hooks/useResumeContext';
import DropdownActives from './DropDownActives';
import FormItemActive from './FormItemActive';


function PrincipiosItem({principios, selecActivos, handleseleActivos, addComponent}) {
  const [concentration, setConcentration] = useState();
  const [concentration2, setConcentration2] = useState();
  const [concentration3, setConcentration3] = useState();
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
          <FormItemActive value={concentration} setValue={setConcentration} title={'concentracion1'} id={dataArray[0]}/>
          :  addComponent <=2 ?
          <FormItemActive value={concentration2} setValue={setConcentration2} title={'concentracion2'} id={dataArray[0]}/>
          : addComponent <=3 &&
          <FormItemActive value={concentration3} setValue={setConcentration3} title={'concentracion3'} id={dataArray[0]}/>
        }
      </div>
    </div>
  );
}

export default PrincipiosItem
