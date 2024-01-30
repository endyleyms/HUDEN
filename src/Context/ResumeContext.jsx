import { createContext, useReducer, useEffect } from "react";

const ResumeContext = createContext();

const resumeReducer = (state, action) => {
  switch (action.type) {
    case "RESUME":
      return { resume: action.payload };
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
