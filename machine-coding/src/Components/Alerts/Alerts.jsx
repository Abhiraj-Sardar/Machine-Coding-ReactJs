import React from 'react'
import "./Css/Alerts.css"
import Button from './Button'
import Success from './Success'
const Alerts = () => {
  return (
    <>
    <div className='btn-container'>
      <div className="btn-1">
        <Button/>
      </div>
      <div className="btn-1"></div>
      <div className="btn-1"></div>
      <div className="btn-1"></div>
    </div>
    <Success/>
    </>
  )
}

export default Alerts
