import React, {useState} from 'react'
import Card from './Card'
import Dropdown from './Dropdown'

export const SectionProd = ({data, title, handleSelectData}) => {
  console.log('data',)
  const [show, setShow]= useState(true)
  const handleShow =()=>{
    setShow(!show)
  }
  return (
    <div>
      <button className="accordion-button collapsed" type="button"  onClick={handleShow} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span className="text-center" style={{color:'#3E0070'}}>{title}</span>
        <hr />
      </button>
      <Dropdown data={data}  defaultSlected={'Selecciona una opción'}/>
    </div>
  )
}
