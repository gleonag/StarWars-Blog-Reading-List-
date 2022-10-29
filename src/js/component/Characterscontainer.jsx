import React, { useState, useEffect } from 'react'
import Card from './Card.jsx'
import getPeople from '../services/getPeople.js'


const Characterscontainer = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        getPeople().then(response => setPersonajes(response) )
    },[])
  return (
    <div>~{personajes.map((element) => <Card  nombre={element.name} gender={element.gender} uid={element.uid} url={element.url}/>)}</div>
  )
}

export default Characterscontainer


