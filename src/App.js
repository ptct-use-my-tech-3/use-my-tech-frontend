import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
	return (
		// TODO: remove <Route /> for UserHome and uncomment <PrivateRoute /> when user auth is done. Only there now to be able to view UserHome and build it without having to be logged in
		<Router>
			<div className="App">
				<Navbar />
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
