import React from 'react'

function Form() {
  return (
    <form className="d-flex flex-column">
      <h2 style={{color:'#3E0070'}}>Autenticación</h2>
        <div className="mb-3 text-left">
          <label for="exampleInputEmail1" className="form-label text-secondary">Correo electrónico</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-secondary">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn text-light" style={{backgroundColor:'#3E0070'}}>Acceso</button>
    </form>
  )
}

export default Form
