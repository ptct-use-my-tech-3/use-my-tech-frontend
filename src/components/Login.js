import { React, useState } from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";
import axios from "axios";

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

	// TODO: add API link to login in .post
	const login = (e) => {
		axios
			.post("", { username: signIn.username, password: signIn.password })
			.then((res) => {
				console.log(res);
				// sets local storage to login
				localStorage.setItem("user", JSON.stringify(res.data));
				// "/home" will be used as a home page when user is logged in instead of just "/"
				props.history.push("/home");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<h2>Log In</h2>
				</Grid>
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
					onClick={login}
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
			</Paper>
		</Grid>
	);
};

export default Login;
