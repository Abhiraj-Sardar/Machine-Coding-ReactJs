import React from 'react'
import "./Css/Success.css"
const Success = () => {
  return (
    <div className='success'>
        <div className="info-container">
            <i id='check' class="fa-solid fa-check"></i>
            <i id="cross" class="fa-regular fa-circle-xmark"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit reprehenderit iusto?</p>
        </div>
        
        <div className="animation"></div>
    </div>
  )
}

export default Success
