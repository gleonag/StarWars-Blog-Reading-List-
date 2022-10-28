
import React from "react";
import  {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "../views/Home.jsx";
import View from "../views/View.jsx";
import Card from "./Card.jsx";

//create your first component
const App = () => {


	return (
		<div className="text-center">
			<Navbar/>
			<Card/>
			<BrowserRouter>
				<Route path="/" component={Home} />
				<Route path="/detail/:id" component={View}/>			
			</BrowserRouter>
			<Footer/>
		
		</div>
	);
};

export default App;
