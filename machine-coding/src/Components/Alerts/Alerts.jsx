import React from 'react'
import "./Css/Alerts.css"
import Button from './Button'
import Success from './Success'
const Alerts = () => {
  return (
    <>
    <div className='btn-container'>
      <div className="btn-1">
        <Button type={"btn btn-success"} icon={"success"} text={"Success"}/>
      </div>
      <div className="btn-1">
        <Button type={"btn btn-danger"} icon={"danger"} text={"Danger"}/>
      </div>
      <div className="btn-1">
        <Button type={"btn btn-warning"} icon={"warning"} text={"Warning"}/>
      </div>
      <div className="btn-1">
        <Button type={"btn btn-primary"} icon={"info"} text={"Information"}/>
      </div>
    </div>
    <Success/>
    </>
  )
}

export default Alerts
