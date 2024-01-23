import React, {useState} from 'react'
import Card from './Card'
import Dropdown from './Dropdown'

export const SectionProd = ({data, title, handleSelectData}) => {
  console.log('data',)
  return (
    <div>
      <div className="accordion-button collapsed">
        <span className="text-center" style={{color:'#3E0070'}}>{title}</span>
      </div>
      <Dropdown data={data}  defaultSlected={'Selecciona una opción'} handleSelectData={handleSelectData}/>
    </div>
  )
}
