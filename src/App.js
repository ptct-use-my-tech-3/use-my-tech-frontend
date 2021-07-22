import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { axiosWithAuth } from "./helpers/axiosWithAuth"

// TODO: uncomment when user auth is available
// import { PrivateRoute } from "./Components/Util/PrivateRoute";

function App() {
	const Logout = () => {
		axiosWithAuth().post("")
		.then(localStorage.clear());
		window.location.href="/login"
	} 
	return (
		// TODO: remove <Route /> for UserHome and uncomment <PrivateRoute /> when user auth is done. Only there now to be able to view UserHome and build it without having to be logged in
		<Router>
			<div className="App">
				<header>
					Use My Tech
					<a data-testid="logoutButton" href='#' onClick={Logout} >
						Logout
					</a>
				</header>
				<Navbar />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="home" component={UserHome} />
				{/* <PrivateRoute exact path="/home">
			<UserHome/>
		</PrivateRoute> */}
			</div>
		</Router>
	);
}

export default App;
