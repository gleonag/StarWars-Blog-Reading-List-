import React from 'react'
import {Link} from "react-router-dom"
import Characterscontainer from '../component/Characterscontainer.jsx';

const Home = () => {
  return (
    <div>
      Aqui iran mis tarjetas/
      <Characterscontainer/>
      <Link to="/detal/4">Link a página web</Link>
     
    </div>
  );
}

export default Home;