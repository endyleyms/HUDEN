import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    // <nav className='d-flex flex-row justify-content-between' style={{backgroundColor: 'rgba(242, 219, 213, 0.9)', position: 'fixed', top: 0, left:0, width: '100%', height: '50px'}}>
    //   <div className='d-flex flex-row align-items-center justify-content-between gap-3'>
    //     <img src="./src/assets/huden-arribaderecha.png" alt="" className="img-fluid" style={{height: '60%'}}/>
    //     <NavLink className='text-secondary'>Inicio</NavLink>
    //     <NavLink className='text-secondary'>Reporte de horas</NavLink>
    //     <NavLink className='text-secondary'>Laboratorio</NavLink>
    //   </div>
    //   <div className='d-flex flex-row align-items-center gap-3'>
    //     <span >JuanPabloGomez@gmail.com</span>
    //     <button className='d-flex align-items-center bg-danger text-light' style={{height: '60%', width:'50%'}}>Salir</button>
    //   </div>

    // </nav>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: 'rgba(242, 219, 213, 0.9)', position: 'fixed', top: 0, left:0, width: '100%', height: '50px'}}>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src="./src/assets/huden-arribaderecha.png" alt="" className="img-fluid" style={{height: 50}}/>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reporte de horas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Laboratorio</a>
            </li>
          </ul>
        </div>
        <div className='d-flex flex-row align-items-center gap-3'>
          <span >JuanPabloGomez@gmail.com</span>
          <button className='d-flex align-items-center bg-danger text-light' style={{height: '40%', width:'40%'}}>Salir</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
