import React from 'react'
import TableResume from './TableResume'

function ResumePedido({handleShow, selecData}) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="modal-content">
          {/* <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Resumen del pedido</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>
          </div> */}
          <div style={{width: '90%'}}>
            <TableResume data={selecData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePedido
