import React from 'react'
import Dropdown from './Dropdown'

function ModalProds({handleShow}) {
  return (
    <div id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:210, left:250, maxWidth: "90%", maxHeheight:"80%", backgroundColor: '#97afff', padding: 30, borderRadius: '12px'}}>
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
              options={['g', 'ml']}
              defaultSlected='g'
              />
            </div>
          </form>
          <button type="submit" className="btn text-light" style={{backgroundColor:'#2e2bff'}}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProds
