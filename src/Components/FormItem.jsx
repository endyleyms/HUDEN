import React from 'react'
import { useResumeContext } from '../Hooks/useResumeContext';

export const FormItem = ({title, value, setValue, selecActivos }) => {
  console.log('selected activos', selecActivos)
  return (
    <div>
      <span className="text-center">{title}</span>
      <form class="form">
        {/* {selecActivos &&
        selecActivos?.map((activoId) => (
          <input
            key={activoId}
            type="text"
            className="form-control"
            value={selecActivos[0][activoId].name} // Mostrar el nombre del activo en el input
            onChange={(e) => setValue(activoId, e.target.value)} // Proporcionar una manera para editar el activo
            placeholder={selecActivos[activoId].name}
          />
        ))
        } */}
        <input type="text" class="form-control" id="floatingInputInvalid" value={value} onChange={e=>setValue(e.target.value)} placeholder={value}/>
      </form>
    </div>
  )
}
