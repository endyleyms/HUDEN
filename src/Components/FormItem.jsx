import React, { useState } from 'react'

export const FormItem = ({title, data, handleInput, handleSelectData}) => {
  const [value, setValue]=useState(data);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleInput(newValue); // Llama a handleInput con el nuevo valor
    handleSelectData(newValue)
  };

  return (
    <div>
      <span className="text-center">{title}</span>
      <form class="form">
        <input type="text" class="form-control" id="floatingInputInvalid" value={value} onChange={handleChange}/>
        {/* <label for="floatingInputInvalid">{placeholder}</label> */}
      </form>
    </div>
  )
}
