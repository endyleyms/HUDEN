import React from 'react'
import { SectionProd } from './SectionProd'
import { FormItem } from './FormItem'

function PrincipiosItem({principios, handleSelectData, value, setValue}) {
  return (
    <div className="row">
      <div className="col-4">
        <SectionProd data={principios} handleSelectData={handleSelectData} title={'Principios activos'}/>
      </div>
      <div className="col-4">
        <FormItem title={'Concentración'} placeholder={'%'} data={principios?.concentration} value={value} setValue={setValue}/>
      </div>
    </div>
  )
}

export default PrincipiosItem
