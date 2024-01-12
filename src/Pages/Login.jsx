import React from 'react'
import Header from '../Components/Header'
import Form from '../Components/Form'

function Login() {
  return (
    <div>
      <Header/>
      <section className="container rounded d-flex align-items-center" style={{backgroundColor: 'rgba(242, 198, 194, 0.3)', width:'100%', height:'80vh'}}>
        <div className="row">
          <div className='col-md-6 d-flex justify-content-center align-items-center' style={{height:'50%'}}>
            <Form/>
          </div>
          <div className="col-md-6 rounded" style={{height:'50%'}}>
            <img src="./src/assets/portada-todos-proyectos-huden.webp" alt=""  className="img-fluid rounded"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
