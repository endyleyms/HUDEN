import React from 'react'
import Header from '../Components/Header'
import Form from '../Components/Form'

function Login() {
  const appStyles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'absolute',
    top: '51px',
    right: '0px',
  };
  return (
    <div style={appStyles}>
      <Header/>
      <section className="container d-flex align-items-center" style={{backgroundColor: 'rgba(242, 219, 213, 0.9)', width:'100%', height:'80vh', marginTop: '60px', borderRadius:'12px'}}>
        <div className="row">
          <div className='col-md-6 d-flex justify-content-center align-items-center' style={{height:'50%'}}>
            <Form/>
          </div>
          <div className="col-md-6 rounded" style={{height:'50%', paddingRight:'50px'}}>
            <img src="./src/assets/portada-todos-proyectos-huden.webp" alt=""  className="img-fluid" style={{borderRadius:'15px'}}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
