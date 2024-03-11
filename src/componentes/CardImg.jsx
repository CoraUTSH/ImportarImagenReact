import React from 'react'
import './../assets/css/CardImg.css'


const CardImg = (props) => {
  return (
    <div className="card">
        <div className="card-container">
            <div className="card-container-img">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="card-container-name">
                <h5>{props.name}</h5>
            </div>
            <div className="card-contiainer-descripcion">
                <p>
                    {props.descripcion}
                </p>
            </div>
        </div>
    </div>
  )
}

export default CardImg