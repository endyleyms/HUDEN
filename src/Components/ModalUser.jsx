import React from 'react';
import Form from '../Components/Form'


function ModalUser({handleShow}) {
  const registerUser = true
  return (
    <div id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{zIndex: "1", position: "absolute", top:73, left:66, width: "90%", height:"80%", backgroundColor: 'rgba(242, 219, 213, 0.9)', padding: 30}}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Registro Nuevo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>
          </div>
          <div className="modal-body d-flex justify-content-center align-items-center">
          <Form singUp={registerUser}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalUser
