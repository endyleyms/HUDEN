import { createContext, useReducer, useEffect } from "react";

const ResumeContext = createContext();

const resumeReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVOS":
      return { ...state, activo: action.payload };
    case "RESUME":
      return { ...state, resume: action.payload };
      case "EDITAR_CONCENTRACION_ACTIVO":
      const { nuevaConcentracion } = action.payload;
      // Verifica si state.activo es un objeto
      if (typeof state.activo === 'object' && state.activo !== null) {
        // Crea una copia del activo actualizado con la nueva concentración
        const activoEditado = {
          ...state.activo,
          concentration: nuevaConcentracion
        };
        // Retorna el nuevo estado con el activo actualizado
        return { ...state, activo: activoEditado };
      } else {
        // Si state.activo no es un objeto, retorna el estado sin cambios
        return state;
      }
    default:
      return state;
  }
};

const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, {
    resume: null,
  });

  useEffect(()=>{
    const resume = JSON.parse(localStorage.getItem('resume'))
    if(resume){
      dispatch({type: 'RESUME', payload: resume })
    }
    const activo = JSON.parse(localStorage.getItem('activo'))
    if(activo){
      dispatch({type: 'ACTIVO', payload: activo })
    }
  },[])

  console.log("resume context state", state);

  return (
    <ResumeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export {ResumeProvider, resumeReducer}
export default ResumeContext
