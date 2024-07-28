import React, { useState } from 'react'
import "./Css/Button.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Button = (props) => {
    const [x,setX] = useState(-500);

    const changeX=()=>{
        if(x===-500){
            setX(500)
        }else{
            setX(-500)
        }
    }
    
useGSAP(()=>{
    gsap.to(".success",{
        x:x,
        duration:.6
    })
},[x])

  const icon={
    "success":<i class="fa-solid fa-check"></i>,
    "danger":<i class="fa-solid fa-triangle-exclamation"></i>,
    "warning":<i class="fa-solid fa-exclamation"></i>,
    "info":<i class="fa-solid fa-info"></i>
  }

  return (
    <div className={props.type} onClick={changeX}>
      {icon[props.icon]} {props.text}
    </div>
  )
}

export default Button
