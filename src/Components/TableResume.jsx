import React from 'react'

function TableResume({data}) {
  return (
    <ul className='list-group' style={{width:'100%'}}>
      {Object.keys(data).map((clave) => (
        <li key={clave} className='list-group-item'>
          <ul className='d-flex justify-content-evenly align-items-center'>
            {Object.entries(data[clave]).map(([campo, valor]) => (
              <li key={campo} className='list-group'>
                <strong>{campo}</strong> {valor}
              </li>
            ))}
          </ul>
        </li>
      ))}
      <span className='list-group-item'> <strong>Total:</strong>  </span>
      <button type="button" className="btn text-light" data-bs-toggle="modal" style={{backgroundColor:'#3E0070', position: 'fixed', bottom: 20, right: 10}} >Enviar Cotización</button>
    </ul>
  )
}

export default TableResume
