import React from 'react'
import Dropdown from './Dropdown'

function ModalProds({handleShow}) {
  return (
    <div id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:73, left:66, width: "90%", height:"80%", backgroundColor: 'rgba(242, 219, 213, 0.9)', padding: 30}}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Registro Nuevo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
          <form className="row row-cols-2">
            <div className="mb-2">
              <label className="form-label text-secondary">Código</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label text-secondary">Nombre</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-2">
              <label className="form-label text-secondary">Descripción</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label text-secondary">Precio</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label text-secondary">Categoría</label>
              <Dropdown
              options={['Base', 'Envase', 'Principio']}
              defaultSlected='Principio'
              />
            </div>
            <div className="mb-2">
              <label className="form-label text-secondary">Unidad de medida</label>
              <Dropdown
              options={['L', 'ML', 'g', 'mg']}
              defaultSlected='mg'
              />
            </div>
          </form>
          <button type="submit" className="btn text-light" style={{backgroundColor:'#3E0070'}}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProds
