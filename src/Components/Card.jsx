import React from 'react'
import Acordion from './Acordion'

function Card({data}) {
  return (
    <div className='col-md-4'>
      <div className="card" style={{width: '100%'}}>
        {/* <img src="" alt="" className="img-fluid" style={{height: 50}}/> */}
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <Acordion/>
        </div>
      </div>
    </div>
  )
}

export default Card
