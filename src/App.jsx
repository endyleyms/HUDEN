import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Singup from "./Pages/Singup";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Singup/>} />
    {/* <Route path="/login" element={<Login/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
