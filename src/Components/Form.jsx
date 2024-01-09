import React, { useState } from 'react'
import { z, ZodError } from "zod";
import { useNavigate } from 'react-router-dom';

function Form() {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState();
  const navigate = useNavigate();
  //validaciones con zod
  const signInSchema = z.object({
    // name: z.string({
    //   required_error: "El nombre es requerido",
    //   invalid_type_error: "El nombre debe contener solo letras",
    // }),
    email: z.string().email('El email no es válido'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(16, 'La contraseña debe tener menos de 16 caracteres'),
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      email,
      password
    };
    try {
      signInSchema.parse(formData);
      // La validación fue exitosa, realiza las acciones correspondientes
      console.log('Formulario válido:', formData);
      navigate('/admin');

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
      <h2 style={{color:'#3E0070'}}>Autenticación</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-secondary">Correo electrónico</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
          {error?.email && <div className="text-danger">{error?.email}</div>}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-secondary">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {error?.password && <div className="text-danger">{error?.password}</div>}
        </div>
        <button type="submit" className="btn text-light" style={{backgroundColor:'#3E0070'}}>Ingresar</button>
    </form>
  )
}

export default Form
