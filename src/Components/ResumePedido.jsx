import React from 'react'
import TableResume from './TableResume'

function ResumePedido({selecData}) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="modal-content">
          <div style={{width: '90%'}}>
            <TableResume data={selecData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePedido
