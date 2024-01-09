import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Singup from "./Pages/Singup";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singup/>} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
