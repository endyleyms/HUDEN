import React from 'react'
import { SectionProd } from './SectionProd'
import { FormItem } from './FormItem'

function PrincipiosItem({principios, handleSelectData}) {
  return (
    <div className="row">
      <div className="col-4">
        <SectionProd data={principios} handleSelectData={handleSelectData} title={'Principios activos'}/>
      </div>
      <div className="col-4">
        <FormItem title={'Porcentaje'} placeholder={'%'}/>
      </div>
    </div>
  )
}

export default PrincipiosItem
