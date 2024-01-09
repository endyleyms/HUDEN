import React, { useState } from 'react'

function Dropdown({user}) {
  const [selected, setSecelted]= useState(user?.status);
  const [show, setShow]= useState(false);
  console.log("show", show)
  const handleSelect = (status) => {
    setSecelted(status);
    setShow(!show);
  };
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
    <div class="dropdown">
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
        <ul class="list-group">
          <li className={`list-group-item ${selected === 'Confirmado'}`}>
            <a onClick={() => handleSelect('Confirmado')}>
              Confirmado
            </a>
          </li>
          <li className={`list-group-item ${selected === 'No Confirmado'}`}>
            <a onClick={() => handleSelect('No Confirmado')}>
              No Confirmado
            </a>
          </li>
          <li className={`list-group-item ${selected === 'Bloqueado'}`}>
            <a onClick={() => handleSelect('Bloqueado')} >
              Bloqueado
            </a>
          </li>
        </ul>
      }
    </div>
  )
}

export default Dropdown
