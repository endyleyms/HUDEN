import React, { useContext, useState } from 'react'
import { z, ZodError } from "zod";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

function FormAuth({singUp}) {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState();
  const navigate = useNavigate();
  //validaciones con zod
  const signInSchema = z.object({
    email: z.string().email('El email no es válido'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(16, 'La contraseña debe tener menos de 16 caracteres'),
  });
  const singUpSchema = z.object({
    name: z
    .string()
    .min(3, "Debe tener al menos 3 letras"),
    email: z.string().email('El email no es válido'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(16, 'La contraseña debe tener menos de 16 caracteres'),
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formDataLogin = {
      email,
      password,
    };
    const formDataSingUp = {
      name,
      email,
      password,
    };
    try {
      if(!singUp){
        signInSchema.parse(formDataLogin);
        console.log('Formulario válido:', formDataLogin);
        //falta el handleauth de context
        navigate('/admin');
      }else{
        singUpSchema.parse(formDataSingUp);
        console.log('Formulario válido:', formDataSingUp);
        alert("Usuario creado correctamente");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        // La validación falló, actualiza el estado de los errores
        setError(error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {}));
      }
      console.log('error', error)
    }
  }

  return (
    <form className="d-flex flex-column " style={{width:'70%'}} onSubmit={handleSubmit}>
      <h2 style={{color:'#092f62', marginTop:'15px', marginBottom:'40px'}}>Inicio de Sesión</h2>
      {
        singUp &&
        <div className="mb-3">
          <label for="exampleInputName" className="form-label text-secondary">Nombre</label>
          <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e)=>setName(e.target.value)} />
          {error?.name && <div className="text-danger">{error?.name}</div>}
        </div>
      }
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-secondary">Correo electrónico</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
        {error?.email && <div className="text-danger">{error?.email}</div>}
      </div>
      <div className="mb-5">
        <label for="exampleInputPassword1" className="form-label text-secondary">Contraseña</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {error?.password && <div className="text-danger">{error?.password}</div>}
      </div>
      <button type="submit" className="btn text-light" style={{backgroundColor:'#2e2bff'}}>{singUp ? "Registrar" : "Ingresar"}</button>
    </form>
  )
}

export default FormAuth
