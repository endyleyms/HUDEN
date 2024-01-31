import React, { useState } from 'react'
import { SectionProd } from './SectionProd'
import { FormItem } from './FormItem'

function PrincipiosItem({principios, handleSelectData, selecData, principio, setPrincipio, concentration, setConcentration, handleSelectedPrincipio}) {
  return (
    <div className="row">
      <div className="col-4">
        <SectionProd data={principios} handleSelectData={handleSelectData} title={'Principios activos'} handleSelectedPrincipio={handleSelectedPrincipio}/>
      </div>
      {principio &&
      <div className="col-4">
        <FormItem title={'Concentración'} placeholder={'%'} value={concentration} setValue={setConcentration}/>
      </div>
      }
    </div>
  )
}

export default PrincipiosItem
