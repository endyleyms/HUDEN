import React from 'react'

export const FormItem = ({title, value, setValue}) => {

  return (
    <div>
      <span className="text-center">{title}</span>
      <form class="form">
        <input type="text" class="form-control" id="floatingInputInvalid" value={value} onChange={e=>setValue(e.target.value)}/>
        {/* <label for="floatingInputInvalid">{placeholder}</label> */}
      </form>
    </div>
  )
}
