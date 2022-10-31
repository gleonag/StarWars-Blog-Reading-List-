import React from 'react'
import getPeople from '../services/getPeople.js'


const Card =(props) => {
  return (
  
    <div className="card" style={{width:"250px"}}>
        <div className="card-body" >
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{props.gender}</p>
            <a href={props.url} className="btn btn-primary">Learm more!</a>
        </div>
    </div>
    
  )
}

export default Card