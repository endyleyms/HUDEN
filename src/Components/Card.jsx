import React from 'react'
import Acordion from './Acordion'

function Card({data, handleSelectData}) {
  return (
    <div className='col-md-4'>
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <Acordion data={data} handleSelectData={handleSelectData}/>
        </div>
      </div>
    </div>
  )
}

export default Card
