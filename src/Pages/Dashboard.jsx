import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'

function Dashboard() {
  return (
    <div>
      <Header/>
      <h2 className="text-center" style={{color:'#3E0070'}}>Dashboard</h2>
      <hr />
      <div className="container">
        <Card/>
      </div>
    </div>
  )
}

export default Dashboard
