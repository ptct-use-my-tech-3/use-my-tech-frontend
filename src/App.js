import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
		</Router>
	);
}

export default App;
