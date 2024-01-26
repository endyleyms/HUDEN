import React from 'react';
import FormAuth from '../Components/FormAuth'


function ModalUser({handleShow}) {
  const registerUser = true
  return (
    <div id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:120, left:250, width:'60%', maxWidth: "90%", maxHeight:"80%", backgroundColor: '#97afff', padding: 30, borderRadius: '12px'}}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Registro Nuevo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>
          </div>
          <div className="modal-body d-flex justify-content-center align-items-center">
          <FormAuth singUp={registerUser} handleShow={handleShow}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalUser
