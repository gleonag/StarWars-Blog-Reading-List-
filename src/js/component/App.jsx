
import React from "react";
import  {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "../views/Home.jsx";

//create your first component
const App = () => {


	return (
		<div className="text-center">
			<Navbar/>
			<BrowserRouter>
				<Route path="/" component={Home} />
				{/* <Route path="/detail/:id" component={View}/>			 */}
			</BrowserRouter>
			<Footer/>
		
		</div>
	);
};

export default App;
