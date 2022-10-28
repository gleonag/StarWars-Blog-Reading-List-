import React, { useState , useEffect } from "react";

const People = () => {
    const [personajes , setPesonajes] = useState ()
    useEffect(() => {
        consumeApiPersonaje ()
    },[])

    const consumeApiPersonaje () => async {
        const data = await fetch("https://www.swapi.tech/api/people/1")
        const dataJson = await data.dataJson
        setPesonajes = dataJson
    }   
    return {
        <Containercharacters personajes(personajes)
    }
}
export default People;