import React,  {useState } from 'react'

function itemProd({data, isEditing}) {
  const [selected, setSecelted]= useState(data?.status);
  const [show, setShow]= useState(false);

  const handleSelect = (status) => {
    setSecelted(status);
    setShow(!show);
  };
  return (
    <div>
      {
        !isEditing ?
        <button
        type="button"
        className={`btn`}
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
          className={`btn dropdown-toggle`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={()=>setShow(!show)}
        >
          {selected}
        </button>
        {show &&
          <ul className="list-group">
            <li className={`list-group-item`}>
              <button type="button" className='btn' onClick={() => handleSelect('Litro')}>
                Litro
              </button>
            </li>
            <li className={`list-group-item`}>
              <button type="button" className='btn' onClick={() => handleSelect('Mililitro')}>
              Mililitro
              </button>
            </li>
            <li className={`list-group-item`}>
              <button type="button" className='btn' onClick={() => handleSelect('Gramo')}>
                Gramo
              </button>
            </li>
            <li className={`list-group-item`}>
              <button type="button" className='btn' onClick={() => handleSelect('Miligramo')}>
              Miligramo
              </button>
            </li>
          </ul>
        }
      </>
      }
    </div>
  )
}

export default itemProd
