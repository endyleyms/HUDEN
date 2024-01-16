import React, {useState} from 'react'

function Dropdown({options, defaultSlected}) {
  const [show, setShow]= useState(false);
  const [selected, setSecelted]= useState(defaultSlected);
  const handleSelect = (status) => {
    setSecelted(status);
    setShow(!show);
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className={`btn dropdown-toggle btn-light`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={()=>setShow(!show)}
        style={{width:'100%'}}
      >
        {selected}
      </button>
      <div style={{position: 'absolute', zIndex: 1,}}>
      {show &&
          <ul className="list-group">
            {options.map((option, index) => (
            <li key={index} className={`list-group-item`}>
              <button type="button" className="btn" onClick={() => handleSelect(option)}>
                {option}
              </button>
            </li>
          ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default Dropdown
