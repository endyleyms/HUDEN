import React from 'react'
import Header from '../Components/Header'
import Form from '../Components/Form'

function Login() {
  const appStyles = {
    backgroundImage: 'url(./src/assets/hero-img.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    minWidth: '100vw'
  };
  return (
    <div style={appStyles}>
      <Header/>
      <section className="container rounded d-flex align-items-center" style={{backgroundColor: 'rgba(242, 198, 194, 0.6)', width:'100%', height:'80vh'}}>
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
