import React, { useState, useEffect } from 'react'
import Card from './Card.jsx'
import getPeople from '../services/getPeople.js'


const Characterscontainer = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        getPeople().then(response => setPersonajes(response) )
    },[])
  return (
    
    <div> Personajes {personajes.map((element) => <Card key={element.uid} nombre={element.name} url={element.url}/>)}</div>
    // <div> Planetas </div>
  )
}

export default Characterscontainer


