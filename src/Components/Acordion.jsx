import React, { useState } from 'react'

function Acordion() {
  const [show, setShow]= useState(false)
  const handleShow =()=>{
    setShow(!show)
  }
  return (
    <div className="accordion" id="accordionExample" style={{width: '100%'}}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button"  onClick={handleShow} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Detalle
          </button>
        </h2>
        {show &&
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <div>
              <p>código: 113313</p>
              <p>Precio: 50 cop</p>
              <p>Cantidad: 1mg</p>
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label" for="exampleCheck1">Agregar</label>
              <input type="radio" className="form-check-input" id="Administrador" value="Administrador" />
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Acordion
