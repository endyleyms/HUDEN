import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'rgba(242, 219, 213, 0.9)', position: 'fixed', top: 0, left:0, width: '100%', height: '50px', zIndex: '1'}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src="./src/assets/huden-arribaderecha.png" alt="" className="img-fluid" style={{height: 50}}/>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Cotizador</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/adminProd">Productos</a>
            </li>
          </ul>
        </div>
        <div className='d-flex flex-row align-items-center gap-3'>
          <span >JuanPabloGomez@gmail.com</span>
          <button className='d-flex justify-content-center align-items-center bg-danger text-light' style={{height: 30, width:50}}>Salir</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
