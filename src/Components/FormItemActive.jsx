import React from 'react';
import { useResumeContext } from '../Hooks/useResumeContext';

export const FormItemActive = ({ title, value, setValue, id, selecActivos }) => {
  const {dispatch, activo}=useResumeContext();
  const idActivo = id?._id  ? id?._id :activo?._id;
  const handleEditarConcentracion1 = (idActivo, nuevaConcentracion, type) => {
    dispatch({ type: type, payload: { idActivo, nuevaConcentracion } });
  }

  const handleEditarConcentracion2 = (idActivo, nuevaConcentracion2, type) => {
    dispatch({ type: type, payload: { idActivo, nuevaConcentracion2 } });
  }

  const handleEditarConcentracion3 = (idActivo, nuevaConcentracion3, type) => {
    dispatch({ type: type, payload: { idActivo, nuevaConcentracion3 } });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activo) {
      title === 'concentracion1' ?
      handleEditarConcentracion1(idActivo, value, "ACTIVO_1")
      : title === 'concentracion2' ?
      handleEditarConcentracion2(idActivo, value, "ACTIVO_2")
      : handleEditarConcentracion3(idActivo, value, "ACTIVO_3");
    }
  }

  return (
    <div>
      <span className="text-center">{title}</span>
      <form className="form d-flex  flex-row justify-content-between">
        <input
          type="text"
          className="form-control"
          id="floatingInputInvalid"
          value={typeof value === 'object' ? JSON.stringify(value) : value}
          onChange={(e)=>setValue(e.target.value)}
          placeholder={value}
        />
        <button type="submit" className="btn text-light" style={{backgroundColor:'#2e2bff'}} onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};
export default FormItemActive
