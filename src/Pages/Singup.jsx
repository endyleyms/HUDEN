import React from 'react'
import Header from '../Components/Header'

function Singup() {
  return (
    <div>
      <Header/>
      <section className="container text-center" style={{backgroundColor: 'rgba(242, 198, 194, 0.3)', width:'100%', height:'100%'}}>
        <div className="row">
          <form className="col-md-6 d-flex flex-column">
            <div className="mb-3 text-left">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className="col-md-6 bg-primary rounded">
            <img src="./src/assets/portada-todos-proyectos-huden.webp" alt=""  className="img-fluid"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Singup
