import React from 'react'

const Header = () => {
  return (
    <header className='d-flex flex-row justify-content-between' style={{backgroundColor: 'rgba(242, 198, 194, 0.9)', position: 'fixed', top: 0, left:0, width: '100%', height: '50px'}}>
      <div className='d-flex flex-row align-items-center justify-content-between gap-3'>
        <img src="./src/assets/huden-arribaderecha.png" alt="" className="img-fluid" style={{height: '60%'}}/>
        <nav>Inicio</nav>
        <nav>Reporte de horas</nav>
        <nav>Laboratorio</nav>
      </div>
      <div className='d-flex flex-row align-items-center gap-3'>
        <span>JuanPabloGomez@gmail.com</span>
        <button className='d-flex align-items-center bg-danger text-light' style={{height: '60%', width:'50%'}}>Log out</button>
      </div>

    </header>
  )
}

export default Header
