import React, { useState } from 'react'

function DropdownUser({data, isEditing}) {
  const [selected, setSecelted]= useState(data?.status);
  const [show, setShow]= useState(false);

  //funcion para seleccionar status y se oculte el drop
  const handleSelect = (status) => {
    setSecelted(status);
    setShow(!show);
  };

  //funcion manejadora de adición de clase de estilos
  const getButtonClass = (status) => {
    if (status === 'Activo') {
      return 'btn-outline-success';
    } else if (status === 'Inactivo') {
      return 'btn-outline-danger';
    }
  };
  return (
    <div className="dropdown">
      {
        !isEditing ?
        <button
        type="button"
        className={`btn ${getButtonClass(selected)}`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={()=>setShow(!show)}
        >
          {selected}
        </button>
      :
      <>
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
          <ul className="list-group" style={{ zIndex: 1 , position: 'fixed'}}>
            <li className={`list-group-item`}>
              <button type="button" className='btn' onClick={() => handleSelect('Activo')}>
                Activo
              </button>
            </li>
            <li className={`list-group-item`}>
              <button type="button" className='btn' onClick={() => handleSelect('Inactivo')}>
                Inactivo
              </button>
            </li>
          </ul>
        }
      </>
      }
    </div>
  )
}

export default DropdownUser
