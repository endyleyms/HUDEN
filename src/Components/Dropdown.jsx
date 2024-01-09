import React, { useState } from 'react'

function Dropdown({user}) {
  const [selected, setSecelted]= useState(user?.status);
  const [show, setShow]= useState(false);

  //funcion para seleccionar status y se oculte el drop
  const handleSelect = (status) => {
    setSecelted(status);
    setShow(!show);
  };

  //funcion manejadora de adición de clase de estilos
  const getButtonClass = (status) => {
    if (status === 'Confirmado') {
      return 'btn-outline-success';
    } else if (status === 'No Confirmado') {
      return 'btn-outline-warning';
    } else {
      return 'btn-outline-danger';
    }
  };
  return (
    <div>
      <button
        type="button"
        className={`btn dropdown-toggle ${getButtonClass(selected)}`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={()=>setShow(!show)}
      >
        {selected}
      </button>
      {show &&
        <ul className="list-group">
          <li className={`list-group-item`}>
            <button type="button" className='btn' onClick={() => handleSelect('Confirmado')}>
              Confirmado
            </button>
          </li>
          <li className={`list-group-item`}>
            <button type="button" className='btn' onClick={() => handleSelect('No Confirmado')}>
              No Confirmado
            </button>
          </li>
          <li className={`list-group-item`}>
            <button type="button" className='btn' onClick={() => handleSelect('Bloqueado')} >
              Bloqueado
            </button>
          </li>
        </ul>
      }
    </div>
  )
}

export default Dropdown
