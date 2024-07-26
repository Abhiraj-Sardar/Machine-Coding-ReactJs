import React, { useState } from 'react'
import "./Css/Button.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Button = () => {
    const [x,setX] = useState(-500);

    const changeX=()=>{
        if(x==-500){
            setX(500)
        }else{
            setX(-500)
        }
    }
    
useGSAP(()=>{
    gsap.to(".success",{
        x:x,
        duration:1.5
    })
},[x])
  return (
    <div className='btn btn-success' onClick={changeX}>
      <i class="fa-solid fa-check"></i> Information
    </div>
  )
}

export default Button
