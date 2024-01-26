import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./Pages/Login";
import AdminUsers from "./Pages/AdminUsers";
import Dashboard from "./Pages/Dashboard";
import AdminProducts from "./Pages/AdminProducts";
import { useAuthContext } from "./Hooks/useAuthContext";

function App() {

  const {user}= useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Login/> : <Dashboard/>} />
        <Route path="/admin" element={user ? <AdminUsers/> : <Login/> }/>
        <Route path="/adminProd" element={user ? <AdminProducts/> : <Login/>}/>
        <Route path="/dashboard" element={user? <Dashboard/> : <Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
