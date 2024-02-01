import React, { useState } from "react";

function DropdownActives({ options, handleseleActivos }) {
  const [show, setShow] = useState(false);
  const [selected, setSecelted] = useState('Selecciona una opción');
  const handleSelected = (data) => {
    setSecelted(data.name);
    setShow(!show);
    handleseleActivos(data)
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className={`btn dropdown-toggle btn-light`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setShow(!show)}
        style={{ width: "100%" }}
      >
        {options ? selected : selected}
      </button>
      <div style={{ position: "absolute", zIndex: 1 }}>
        {show && (
          <ul className="list-group">
            <>
              {options.map((option, index) => (
                <li key={index} className={`list-group-item`}>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleSelected(option)}
                  >
                    {option.name}
                  </button>
                </li>
              ))}
            </>
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownActives;
