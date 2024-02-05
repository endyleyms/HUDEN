import { createContext, useReducer, useEffect } from "react";

const ResumeContext = createContext();
const resumeReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVOS":
      return { ...state, activo: action.payload };
    case "RESUME":
      return { ...state, resume: action.payload };
      case "BASE":
      return { ...state, base: action.payload };
    case "ACTIVO_1":
      const { nuevaConcentracion } = action.payload;
      if (typeof state.activo === 'object' && state.activo !== null) {
        const resumeEditado = {
          ...state.activo,
          concentration: nuevaConcentracion
        };
        return { ...state, edited1: resumeEditado };
      } else {
        return state;
      }
    case "ACTIVO_2":
      const { nuevaConcentracion2 } = action.payload;
      if (typeof state.activo === 'object' && state.activo !== null) {
        const resumeEditado2 = {
          ...state.activo,
          concentration: nuevaConcentracion2
        };
        return { ...state, edited2: resumeEditado2 };
      } else {
        return state;
      }
    case "ACTIVO_3":
      const { nuevaConcentracion3 } = action.payload;
      if (typeof state.activo === 'object' && state.activo !== null) {
        const resumeEditado3 = {
          ...state.activo,
          concentration: nuevaConcentracion3
        };
        return { ...state, edited3: resumeEditado3 };
      } else {
        return state;
      }
    default:
      return state;
  }
};


const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, {
    resume: null,
    base: null,
    edited1: null,
    edited2: null,
    edited3: null,
  });

  useEffect(()=>{
    const resume = JSON.parse(localStorage.getItem('resume'))
    if(resume){
      dispatch({type: 'RESUME', payload: resume })
    }
    const base = JSON.parse(localStorage.getItem('base'))
    if(base){
      dispatch({type: 'BASE', payload: base })
    }
    const edited1 = JSON.parse(localStorage.getItem('edited1'))
    if(edited1){
      dispatch({type: 'ACTIVO_1', payload: edited1 })
    }
    const edited2 = JSON.parse(localStorage.getItem('edited2'))
    if(edited2){
      dispatch({type: 'ACTIVO_2', payload: edited2 })
    }
    const edited3 = JSON.parse(localStorage.getItem('edited3'))
    if(edited3){
      dispatch({type: 'ACTIVO_3', payload: edited3 })
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
