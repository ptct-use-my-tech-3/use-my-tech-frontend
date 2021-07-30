import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import Landing from "./components/Landing";
import {loadUser} from './actions/authActions'




function App() {

	

	return (

		<Router>
			<div className="App">
				<Navbar />
				<Route path="/landing" component={Landing} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="home" component={UserHome} />
				<PrivateRoute exact path="/home">
				<UserHome/>
				</PrivateRoute>
			</div>
		</Router>
	);
}

export default App;
