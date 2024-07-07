import React from 'react'
import "../Cube/Css/Cube.css";
const Cube = () => {
    

    return (
        <div className="container-fluid scene">
            <div className='container-fluid cubes-container'>
                <div className="cube top">Top</div>
                <div className="cube bottom">Bottom</div>
                <div className="cube right">Right</div>
                <div className="cube left">Left</div>
                <div className="cube front">Front</div>
                <div className="cube back">Back</div>
            </div>
            
        </div>
    )
}

export default Cube
