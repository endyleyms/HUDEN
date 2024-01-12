import React from 'react'

function Card({data}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {/* <img src="" alt="" className="img-fluid" style={{height: 50}}/> */}
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <div className="mb-3 form-check">
          <input type="radio" className="form-check-input" id="Administrador" value="Administrador" />
          <label className="form-check-label" for="exampleCheck1">Seleccionar</label>
        </div>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
}

export default Card
