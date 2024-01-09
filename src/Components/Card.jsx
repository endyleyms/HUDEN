import React from 'react'

function Card() {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="./src/assets/huden-arribaderecha.png" alt="" className="img-fluid" style={{height: 50}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card
