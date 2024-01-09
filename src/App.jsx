import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Singup from "./Pages/Singup";
import Admin from "./Pages/Admin";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singup/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
