import React from 'react'
import TableResume from './TableResume'

function ModalResume({handleShow, selecData}) {
  return (
    <div id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:20, left:66, width: "90%", height:"60%", backgroundColor: '#97afff', padding: 30}}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Resumen del pedido</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>
          </div>
          <div className="modal-body d-flex justify-content-center align-items-center">
            <TableResume data={selecData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalResume
