import React, { useState } from 'react'
import { SectionProd } from './SectionProd'
import { FormItem } from './FormItem'

function PrincipiosItem({principios, handleSelectData, value, setValue}) {
  return (
    <div className="row">
      <div className="col-4">
        <SectionProd data={principios} handleSelectData={handleSelectData} title={'Principios activos'}/>
      </div>
      <div className="col-4">
        <FormItem title={'Porcentaje'} placeholder={'%'} value={value} setValue={setValue}/>
      </div>
    </div>
  )
}

export default PrincipiosItem
