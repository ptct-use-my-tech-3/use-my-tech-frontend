import { React, useState } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = (props) => {
	// sets paper like style
	const paperStyle = {
		padding: 20,
		height: "70vh",
		width: 380,
		margin: "60px auto",
	};
	// sets button style
	const btnstyle = { margin: "20px 0" };

	// sets state to hold login info
	const [signIn, setSignIn] = useState({
		username: "",
		password: "",
	});

	// hands form change
	const handleChange = (e) => {
		const { id, value } = e.target;
		setSignIn((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	// submit token for authentication 
	const handleSubmit = (e) => {
		e.preventDefault()
		axiosWithAuth()
			.post('/login', signIn)
			.then((res) => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/home')
			})
			.catch(err => console.log({err}));
	}

	// error state
	const error = "Username or Password incorrect.";

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Log In</h2>
				</Grid>

				{/* <h2>form for handleSubmit for token<h2> */}
				<form onSubmit={handleSubmit}>

				<TextField
					id="username"
					value={signIn.username}
					onChange={handleChange}
					label="Username"
					placeholder="Enter username"
					fullWidth
					required
					mt={9}
				/>
				<TextField
					id="password"
					value={signIn.password}
					onChange={handleChange}
					label="Password"
					placeholder="Enter password"
					type="password"
					fullWidth
					required
				/>

				<Button
					type="submit"
					color="primary"
					variant="contained"
					style={btnstyle}
					fullWidth
				>
					Log In
				</Button>

				<Typography>
					{" "}
					Need an account?
					<Link style={{ marginLeft: "10px" }} href="/signup">
						Sign Up
					</Link>
				</Typography>
				
				</form>

				{/* <h2>p tag for login error</h2> */}
				<p id="error" className="error">{error}</p>
			</Paper>
		</Grid>
	);
};

export default Login;