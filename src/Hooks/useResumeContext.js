import { useContext } from "react";
import ResumeContext from "../Context/ResumeContext";

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResumeContext must be used within the ResumeProvider");
  }
  return context;
};
