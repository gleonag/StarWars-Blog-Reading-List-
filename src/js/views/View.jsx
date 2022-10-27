
import React from "react";
import { useParams } from "react-router-dom"

const View = () => {
    
    const respuestaDeParams = useParams()


  return (
    <div>
        vista detallada de {respuestaDeParams.id}
    </div>
  )
}

export default View;