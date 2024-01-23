import React from 'react'

export const FormItem = ({title, placeholder}) => {
  return (
    <div>
      <span className="text-center">{title}</span>
      <form class="form-floating">
        <input type="text" class="form-control" id="floatingInputInvalid" placeholder="Nombre Paciente" value=""/>
        <label for="floatingInputInvalid">{placeholder}</label>
      </form>
    </div>
  )
}
