import React from 'react'

export const FormItem = ({title, data, value, setValue}) => {

  return (
    <div>
      <span className="text-center">{title}</span>
      <form class="form">
        <input type="text" class="form-control" id="floatingInputInvalid" value={data ? value || data : value} onChange={e=>setValue(e.target.value)}/>
        {/* <label for="floatingInputInvalid">{placeholder}</label> */}
      </form>
    </div>
  )
}
