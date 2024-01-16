import React from 'react'

function ButtonFixed({title, handleShow={handleShow}}) {
  return (
    <button type="button" className="btn text-light" data-bs-toggle="modal" style={{backgroundColor:'#3E0070', position: 'fixed', bottom: 20, right: 10}} onClick={handleShow}>{title}</button>
  )
}

export default ButtonFixed
