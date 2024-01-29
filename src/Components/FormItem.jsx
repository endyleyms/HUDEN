import React, { useState } from 'react'

export const FormItem = ({title, value, setValue}) => {
  // const [value, setValue]=useState(data);
  // const handleChange = (e) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);// Llama a handleInput con el nuevo valor
  // };

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
